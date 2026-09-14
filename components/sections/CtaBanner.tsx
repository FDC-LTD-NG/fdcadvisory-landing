import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DownloadIcon, ArrowRightIcon } from "@/components/ui/Icons";

interface CtaAction { label: string; href: string; download?: boolean; external?: boolean; variant?: "pillGold" | "pillOutline"; }
interface CtaBannerProps { eyebrow?: string; title: string; description?: string; primary: CtaAction; secondary?: CtaAction; }

export default function CtaBanner({ eyebrow, title, description, primary, secondary }: CtaBannerProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0E1E36] via-[#0A1628] to-[#0E1E36] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -top-40 -right-20 h-[420px] w-[420px] rounded-full bg-gold/[0.12] blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
          <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {eyebrow && <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{eyebrow}</span>}
              <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl">{title}</h3>
              {description && <p className="mt-5 text-base leading-relaxed text-slate-400">{description}</p>}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href={primary.href} download={primary.download} external={primary.external} variant={primary.variant ?? "pillGold"} size="lg">
                {primary.download ? <DownloadIcon width={16} height={16} /> : <ArrowRightIcon width={16} height={16} />}
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} download={secondary.download} external={secondary.external} variant={secondary.variant ?? "pillOutline"} size="lg">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
