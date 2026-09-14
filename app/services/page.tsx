import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/sections/CtaBanner";
import { CheckIcon, SERVICE_ICONS } from "@/components/ui/Icons";
import { services, siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Services", description: "Explore the full range of investment services offered by FDC Advisory Limited." };

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1628] py-24">
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[700px] rounded-full bg-gold/[0.07] blur-[120px]" />
        <Container className="relative">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Our Services</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Investment solutions for<br /><span className="text-slate-400">every objective.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            From our flagship Balanced Fund to bespoke institutional mandates, we provide institutional-grade asset management.
          </p>
        </Container>
      </section>
      <section className="bg-[#0A1628] py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <article key={service.slug} className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04]">
                  <div className="absolute right-8 top-8 text-[11px] font-medium tabular-nums text-slate-600">0{i + 1}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/[0.10] text-gold"><Icon width={22} height={22} /></div>
                  <h2 className="mt-6 text-xl font-semibold tracking-tight text-white">{service.title}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13px] text-slate-300">
                        <CheckIcon width={16} height={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />{feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <CtaBanner
        eyebrow="Start Today"
        title="Download the Prospectus & Application Form"
        description="Everything you need to evaluate and invest in the FDC Balanced Fund is available below."
        primary={{ label: "Download Prospectus", href: siteConfig.documents.prospectus, download: true, variant: "pillGold" }}
        secondary={{ label: "Contact Investor Services", href: "/contact" }}
      />
    </>
  );
}
