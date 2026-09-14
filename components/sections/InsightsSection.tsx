import Container from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/Icons";

const insights = [
  { tag: "Market Outlook", title: "Nigerian equities in 2026: where the value sits", excerpt: "Banking and consumer staples continue to offer the most compelling risk-adjusted entry points after the recent rally.", readTime: "6 min read", date: "12 Sep 2026" },
  { tag: "Fixed Income", title: "Reading the FGN bond curve after the Q2 auction", excerpt: "Yields at the belly of the curve are pricing in a slower pace of rate cuts than the market expects.", readTime: "4 min read", date: "04 Sep 2026" },
  { tag: "Fund Update", title: "Why we rebalanced the Balanced Fund in August", excerpt: "A modest trim to equities, a pickup in 5-year paper, and what it means for the fund's duration profile.", readTime: "3 min read", date: "28 Aug 2026" },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#0A1628] py-24">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">Insights</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
            Research and commentary<br /><span className="text-slate-400">from our investment team.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <a key={item.title} href="#" className="group flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-gold/20 bg-gold/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">{item.tag}</span>
                <span className="text-[11px] text-slate-500">{item.readTime}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold leading-snug tracking-tight text-white group-hover:text-gold-light">{item.title}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-400">{item.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                <span className="text-[11px] text-slate-500">{item.date}</span>
                <ArrowRightIcon width={14} height={14} className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-gold" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
