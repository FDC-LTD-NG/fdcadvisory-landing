import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost" | "pillGold" | "pillOutline" | "pillDark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  external?: boolean;
  download?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-gold text-navy hover:bg-gold-light",
  gold: "bg-gold text-navy hover:bg-gold-light",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "text-navy hover:bg-navy-soft",
  pillGold: "rounded-full bg-gold text-navy hover:bg-gold-light shadow-[0_0_24px_rgba(200,169,81,0.20)] hover:shadow-[0_0_32px_rgba(200,169,81,0.35)]",
  pillOutline: "rounded-full border border-white/[0.12] bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.06]",
  pillDark: "rounded-full bg-white/[0.06] text-white hover:bg-white/[0.10] border border-white/[0.08]",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({ children, variant = "primary", size = "md", className, href, external, download, type = "button", onClick, disabled }: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 disabled:opacity-50 disabled:cursor-not-allowed",
    !variant.startsWith("pill") && "rounded-md",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className ?? "",
  ].join(" ");

  if (href && (external || download)) {
    return <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} download={download}>{children}</a>;
  }
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{children}</button>;
}
