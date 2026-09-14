import Link from "next/link";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";

const documentLinks = [
  { label: "Prospectus", href: siteConfig.documents.prospectus },
  { label: "Trust Deed", href: siteConfig.documents.trustDeed },
  { label: "Manager Profile", href: siteConfig.documents.managerProfile },
  { label: "Application Form", href: siteConfig.documents.applicationForm },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A1628] text-slate-400">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-base font-extrabold text-navy">F</span>
              <span className="text-base font-semibold tracking-tight text-white">FDC<span className="text-gold">Advisory</span></span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">{siteConfig.managerName} is a SEC-licensed fund and portfolio manager based in Lagos, Nigeria.</p>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-500 hover:text-gold">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Documents</h4>
            <ul className="space-y-3">
              {documentLinks.map((link) => (
                <li key={link.label}><a href={link.href} download className="text-sm text-slate-500 hover:text-gold">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>{siteConfig.contact.address}</li>
              <li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gold">{siteConfig.contact.phone}</a></li>
              <li><a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold">{siteConfig.contact.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.managerName}. All rights reserved.</p>
          <p>{siteConfig.managerRC} · SEC Licensed Fund Manager</p>
        </div>
        <p className="mt-6 border-t border-white/[0.06] pt-6 text-[11px] leading-relaxed text-slate-600">
          <strong className="text-slate-500">Disclaimer:</strong> The {siteConfig.fundName} is a collective investment scheme registered with the Securities and Exchange Commission (SEC) Nigeria. The value of units may go down as well as up and is not guaranteed.
        </p>
      </Container>
    </footer>
  );
}
