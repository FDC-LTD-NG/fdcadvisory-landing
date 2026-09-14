import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import { fundFacts } from "@/lib/data";

const headlineStats = [
  { value: 1000, prefix: "₦", suffix: "", label: "Offer Price per Unit", decimals: 0 },
  { value: 10000, prefix: "₦", suffix: "", label: "Minimum Investment", decimals: 0 },
  { value: 30, prefix: "", suffix: " days", label: "Minimum Holding Period", decimals: 0 },
  { value: 3.5, prefix: "≤ ", suffix: "%", label: "Max Expense Ratio", decimals: 1 },
];

export default function FundFactsTable() {
  return (
    <section id="fund-facts" className="relative overflow-hidden bg-[#0A1628] py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[700px] rounded-full bg-gold/[0.07] blur-[120px]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Fund Snapshot</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              The numbers behind<br /><span className="text-slate-400">the FDC Balanced Fund.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 lg:pb-2">
            Registered with the Securities and Exchange Commission (SEC) Nigeria. Full details, including the trust deed and audited financials, are available in the prospectus.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] lg:grid-cols-4">
          {headlineStats.map((stat) => (
            <div key={stat.label} className="bg-[#0A1628] p-6 sm:p-7">
              <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.06]">
          <div className="grid grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-2 sm:divide-y-0">
            {fundFacts.map((fact, i) => (
              <div key={fact.label} className={`flex items-start justify-between gap-6 px-6 py-5 sm:px-7 ${i % 2 === 0 ? "sm:border-r sm:border-white/[0.06]" : ""} ${i >= 2 ? "border-t border-white/[0.06]" : ""}`}>
                <span className="text-[13px] text-slate-500">{fact.label}</span>
                <span className="max-w-[60%] text-right text-[13px] font-medium text-white">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
