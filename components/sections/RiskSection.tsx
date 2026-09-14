import Container from "@/components/ui/Container";
import { risks } from "@/lib/data";
import { RISK_ICONS } from "@/components/ui/Icons";

const ICON_TONES = {
  market: "bg-amber-400/[0.10] text-amber-400",
  credit: "bg-red-400/[0.10] text-red-400",
  liquidity: "bg-blue-400/[0.10] text-blue-400",
};

export default function RiskSection() {
  return (
    <section id="risks" className="bg-[#0A1628] py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Risk Disclosure</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">Principal risk factors.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            All investments carry risk. The value of units may go down as well as up, and investors may not get back the full amount invested.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {risks.map((risk, i) => {
            const Icon = RISK_ICONS[risk.icon];
            return (
              <div key={risk.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${ICON_TONES[risk.icon]}`}>
                    <Icon width={20} height={20} />
                  </div>
                  <span className="text-[11px] font-medium tabular-nums text-slate-600">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-base font-semibold tracking-tight text-white">{risk.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{risk.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
