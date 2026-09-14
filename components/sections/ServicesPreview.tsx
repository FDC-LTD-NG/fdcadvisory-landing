import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon, SERVICE_ICONS } from "@/components/ui/Icons";
import { services } from "@/lib/data";

export default function ServicesPreview() {
  const preview = services.slice(0, 3);
  return (
    <section className="bg-[#0A1628] py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">What We Do</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              A full spectrum of<br /><span className="text-slate-400">asset management services.</span>
            </h2>
          </div>
          <Button href="/services" variant="pillOutline" size="md" className="self-start sm:self-end">
            All services <ArrowRightIcon width={16} height={16} />
          </Button>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {preview.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <article key={service.slug} className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.04]">
                <div className="absolute right-6 top-6 text-[11px] font-medium tabular-nums text-slate-600">0{i + 1}</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/[0.10] text-gold">
                  <Icon width={22} height={22} />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-400">{service.summary}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
