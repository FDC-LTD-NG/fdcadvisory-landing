import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import { ShieldIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "About Us", description: "Learn about FDC Advisory Limited — a SEC-licensed fund manager based in Lagos, Nigeria." };

const stats = [
  { value: "₦45B+", label: "Assets under management" },
  { value: "10+ yrs", label: "Operating history" },
  { value: "SEC", label: "Fully licensed" },
  { value: "FMAN", label: "Association member" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1628] py-24">
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[700px] rounded-full bg-gold/[0.07] blur-[120px]" />
        <Container className="relative">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">About Us</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">{siteConfig.managerName}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
            A Lagos-based fund and portfolio management company registered with the SEC Nigeria and a member of the Fund Managers Association of Nigeria (FMAN).
          </p>
        </Container>
      </section>
      <section className="bg-[#0A1628] py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Who We Are</span>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl">
                Built on discipline,<br /><em className="font-serif italic text-gold">research, and trust.</em>
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-400">
                <p>FDC Advisory Limited was incorporated in 2015 and has grown to become a trusted name in Nigeria's asset management industry.</p>
                <p>The investment team is led by professionals with decades of combined experience across Nigerian equities, fixed income, and money market strategies.</p>
                <p>Our mission is to deliver superior risk-adjusted returns through disciplined investment processes, rigorous research, and transparent communication.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] self-start">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#0A1628] p-7 sm:p-8">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#0A1628] py-16">
        <Container>
          <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 sm:flex-row sm:items-start">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-400/[0.10] text-emerald-400">
              <ShieldIcon width={22} height={22} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-white">Regulatory Compliance & Investor Protection</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">
                The {siteConfig.fundName} is a Collective Investment Scheme registered under the Investments and Securities Act (ISA) and regulated by the SEC Nigeria.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={siteConfig.documents.managerProfile} download variant="pillOutline" size="sm">Download Manager Profile</Button>
                <Button href={siteConfig.external.sec} external variant="pillDark" size="sm">Visit SEC Nigeria</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CtaBanner
        eyebrow="Learn More"
        title="Review Our Flagship Fund"
        description="The FDC Balanced Fund is our flagship SEC-approved collective investment scheme."
        primary={{ label: "Download Prospectus", href: siteConfig.documents.prospectus, download: true, variant: "pillGold" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
