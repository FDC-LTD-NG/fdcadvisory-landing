import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const items = [
  { icon: MapPinIcon, label: "Office", value: siteConfig.contact.address },
  { icon: PhoneIcon, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: MailIcon, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
];

export default function ContactPreview() {
  return (
    <section className="bg-[#0A1628] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Get in Touch</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              Speak with our<br />investor services team.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              Whether you're ready to invest or simply have questions, our team is available to help.
            </p>
            <ul className="mt-10 space-y-5">
              {items.map(({ icon: Icon, label, value, href }) => (
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
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10">
            <h3 className="text-lg font-semibold tracking-tight text-white">Ready to take the next step?</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-400">
              Request the full prospectus, review the trust deed, or download the application form to begin your investment journey.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={siteConfig.documents.prospectus} download variant="pillGold">Download Prospectus</Button>
              <Button href="/contact" variant="pillOutline">Contact Us <ArrowRightIcon width={16} height={16} /></Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
