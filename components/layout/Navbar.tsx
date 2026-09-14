"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DownloadIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0A1628]/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-base font-extrabold text-navy">F</span>
            <span className="text-base font-semibold tracking-tight text-white">FDC<span className="text-gold">Advisory</span></span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link key={link.href} href={link.href} className={`relative text-sm font-medium transition-colors ${active ? "text-white" : "text-slate-400 hover:text-white"}`}>
                  {link.label}
                  {active && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded bg-gold" />}
                </Link>
              );
            })}
          </nav>
          <div className="hidden md:block">
            <Button href={siteConfig.documents.prospectus} download variant="pillGold" size="sm">
              <DownloadIcon width={14} height={14} /> Prospectus
            </Button>
          </div>
          <button className="rounded-md p-2 text-white md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="border-t border-white/[0.06] bg-[#0A1628] md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/[0.04] hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
