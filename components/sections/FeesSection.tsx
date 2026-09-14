import Container from "@/components/ui/Container";
import { fees } from "@/lib/data";

export default function FeesSection() {
  return (
    <section id="fees" className="bg-[#0A1628] py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Cost Transparency</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              Fees, disclosed<br /><span className="text-slate-400">in full.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 lg:pb-2">
            Every charge is listed in line with SEC rules on Collective Investment Schemes. The initial offer cost is amortised over a maximum of five years.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4">
          {fees.map((fee) => (
            <div key={fee.label} className="bg-[#0A1628] p-7">
              <div className="text-3xl font-semibold tracking-tight text-gold">{fee.value}</div>
              <div className="mt-3 text-[13px] font-medium text-white">{fee.label}</div>
              <div className="mt-1 text-[11px] text-slate-500">{fee.note}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-slate-500">
          A redemption fee may apply for units redeemed within 30 days of purchase. No incentive fee is charged unless the Fund outperforms its benchmark.
        </p>
      </Container>
    </section>
  );
}
