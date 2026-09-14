import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/data";

const stats = [
  { value: "₦45B+", label: "Assets under management" },
  { value: "10+ yrs", label: "Operating history" },
  { value: "SEC", label: "Fully licensed" },
  { value: "FMAN", label: "Association member" },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#0A1628] py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">About the Manager</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              Built on discipline,<br /><em className="font-serif italic text-gold">research, and trust.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              {siteConfig.managerName} is a Lagos-based fund and portfolio management company registered with the Securities and Exchange Commission (SEC) Nigeria and a member of the Fund Managers Association of Nigeria (FMAN).
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Since 2015 we have managed diversified collective investment schemes and segregated portfolios for institutional and high-net-worth clients across Nigeria.
            </p>
            <div className="mt-10">
              <Button href="/about" variant="pillOutline" size="lg">Learn more about us <ArrowRightIcon width={16} height={16} /></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
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
  );
}
