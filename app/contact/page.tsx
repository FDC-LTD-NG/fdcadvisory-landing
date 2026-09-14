import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import { MapPinIcon, PhoneIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Contact", description: "Contact FDC Advisory Limited to invest in the FDC Balanced Fund or to request more information." };

const contactItems = [
  { icon: MapPinIcon, label: "Office", value: siteConfig.contact.address },
  { icon: PhoneIcon, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: MailIcon, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1628] py-24">
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[700px] rounded-full bg-gold/[0.07] blur-[120px]" />
        <Container className="relative">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Get in Touch</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">Contact Investor Services</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            {siteConfig.contact.officeHours}. We respond to all enquiries within one business day.
          </p>
        </Container>
      </section>
      <section className="bg-[#0A1628] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">We're here to help.</h2>
              <ul className="mt-8 space-y-5">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-gold">
                      <Icon width={18} height={18} />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</div>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-white hover:text-gold">{value}</a>
                      ) : (
                        <div className="text-sm font-medium text-white">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Subscription Details</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Bank</dt>
                    <dd className="font-medium text-white">{siteConfig.bank.bankName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Account Name</dt>
                    <dd className="font-medium text-white">{siteConfig.bank.accountName}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-500">Account Number</dt>
                    <dd className="font-medium tabular-nums text-white">{siteConfig.bank.accountNumber}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={siteConfig.documents.applicationForm} download variant="pillGold" size="sm">Download Application Form</Button>
                <Button href={siteConfig.documents.prospectus} download variant="pillOutline" size="sm">Download Prospectus</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
              <h3 className="text-lg font-semibold tracking-tight text-white">Send Us a Message</h3>
              <p className="mt-2 text-[13px] text-slate-400">Fill in the form below and our team will get back to you.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner
        eyebrow="Before You Invest"
        title="Read the Prospectus"
        description="Understanding the fund's objectives, risks, and fees is essential. The full SEC-approved prospectus is available for download."
        primary={{ label: "Download Prospectus", href: siteConfig.documents.prospectus, download: true, variant: "pillGold" }}
        secondary={{ label: "View Trust Deed", href: siteConfig.documents.trustDeed, download: true }}
      />
    </>
  );
}
