import Container from "@/components/ui/Container";
import { allocations } from "@/lib/data";
import { CheckIcon } from "@/components/ui/Icons";

const FILL_GRADIENTS = {
  equity: "from-blue-500 to-blue-400",
  fixed: "from-gold to-gold-light",
  money: "from-emerald-500 to-emerald-400",
};

const points = [
  "Actively managed with quarterly rebalancing",
  "Strict adherence to SEC-mandated allocation limits",
  "Regular risk monitoring and stress testing",
  "Alignment with FMAN-approved benchmarks",
];

export default function StrategySection() {
  return (
    <section id="strategy" className="relative bg-[#0A1628] py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <Container>
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Investment Approach</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            Disciplined allocation across <em className="font-serif italic text-gold">three asset classes</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            The Fund targets capital appreciation and steady income over the medium to long term, mitigating volatility through structured diversification.
          </p>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-9">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Indicative allocation bands</h3>
            <ul className="mt-8 space-y-7">
              {allocations.map((item) => (
                <li key={item.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white">{item.label}</span>
                    <span className="text-sm font-semibold tabular-nums text-gold">{item.range}</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <div className={`h-full rounded-full bg-gradient-to-r ${FILL_GRADIENTS[item.tone]}`} style={{ width: `${item.percent}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-9 border-t border-white/[0.06] pt-6 text-[13px] leading-relaxed text-slate-400">
              Actual allocations may vary within the stated bands and are reviewed quarterly by the Investment Committee.
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/[0.12] text-xs font-bold text-gold">F</span>
                <div>
                  <div className="text-[13px] font-semibold text-white">Manager's note</div>
                  <div className="text-[11px] text-slate-500">FDC Advisory · Investment Committee</div>
                </div>
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-slate-400">
                We combine top-down macro analysis with bottom-up security selection. Equities are chosen for durable competitive advantages; fixed income prioritises FGN and high-grade corporate paper.
              </p>
            </div>
            <ul className="space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13px] text-slate-300">
                  <CheckIcon width={16} height={16} className="mt-0.5 flex-shrink-0 text-emerald-400" />{point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
