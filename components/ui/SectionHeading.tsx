interface SectionHeadingProps { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center"; className?: string; }
export default function SectionHeading({ eyebrow, title, subtitle, align = "left", className = "" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </div>
  );
}
