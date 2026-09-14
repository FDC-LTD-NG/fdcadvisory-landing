import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DownloadIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { fundDashboard, fundHighlights, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628]">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[800px] w-[1400px] -translate-x-1/2 rounded-full bg-gold/[0.09] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-blue-500/[0.08] blur-[120px]" />
      <Container className="relative">
        <div className="grid items-center gap-16 py-24 lg:grid-cols-[1.05fr_1fr] lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              SEC-Approved · CIS Registered
            </div>
            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]">
              The balanced fund<br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">built for Nigeria.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              FDC Balanced Fund seeks long-term capital appreciation and steady income through a diversified portfolio of Nigerian equities and fixed-income securities.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={siteConfig.documents.prospectus} download variant="pillGold" size="lg"><DownloadIcon /> Download Prospectus</Button>
              <Button href="/services" variant="pillOutline" size="lg">Explore Services <ArrowRightIcon /></Button>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.06] pt-7 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />Regulated by SEC Nigeria</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />Member of FMAN</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-gold" />Custodied at Stanbic IBTC</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/[0.12] via-transparent to-blue-500/[0.08] opacity-60 blur-2xl" />
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/[0.12] text-xs font-bold text-gold">F</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Fund Dashboard</div>
                    <div className="text-[11px] text-slate-500">Updated {new Date().toLocaleDateString("en-NG", { month: "short", year: "numeric" })}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-300">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />SEC
                </span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <FactTile label="Fund Type" value={fundDashboard.type} />
                <FactTile label="Currency" value={fundDashboard.currency} />
                <FactTile label="Risk Profile" value={fundDashboard.risk} tone="gold" />
                <FactTile label="Income Accrual" value={fundDashboard.incomeAccrual} tone="green" />
              </div>
              <div className="mt-2.5 grid grid-cols-1 gap-2.5">
                <FactTile label="Benchmark" value={fundDashboard.benchmark} />
                <FactTile label="Custodian" value={fundDashboard.custodian} />
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Accepting subscriptions
                </div>
                <a href={siteConfig.documents.prospectus} download className="group inline-flex items-center gap-1 text-xs font-semibold text-gold hover:text-gold-light">
                  Full prospectus <ArrowRightIcon width={14} height={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] sm:grid-cols-3">
          {fundHighlights.map((item) => (
            <div key={item.label} className="bg-[#0A1628] px-6 py-6 sm:px-8 sm:py-7">
              <div className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">{item.label}</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{item.value}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FactTile({ label, value, tone }: { label: string; value: string; tone?: "gold" | "green" }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500">{label}</div>
      <div className={`mt-1.5 text-sm font-semibold leading-snug ${tone === "gold" ? "text-gold" : tone === "green" ? "text-emerald-400" : "text-white"}`}>{value}</div>
    </div>
  );
}
