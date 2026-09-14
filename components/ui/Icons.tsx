import { SVGProps } from "react";
type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

export const DownloadIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" /></svg>);
export const ArrowRightIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M5 12h14m-6-6l6 6-6 6" /></svg>);
export const PhoneIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" /></svg>);
export const MailIcon = (p: IconProps) => (<svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg>);
export const MapPinIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>);
export const CheckIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>);
export const ShieldIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
export const MenuIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
export const CloseIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>);
export const BalancedIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M12 3v18M3 8l4 5 4-5M13 8l4 5 4-5" /><path d="M3 8h8M13 8h8" /></svg>);
export const FixedIncomeIcon = (p: IconProps) => (<svg {...base} {...p}><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M8 15h2M14 15h2" /></svg>);
export const EquityIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>);
export const InstitutionalIcon = (p: IconProps) => (<svg {...base} {...p}><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></svg>);
export const AdvisoryIcon = (p: IconProps) => (<svg {...base} {...p}><circle cx="9" cy="8" r="3" /><path d="M2 21a7 7 0 0114 0" /><path d="M16 3.13a4 4 0 010 7.75M22 21a6 6 0 00-3-5.2" /></svg>);
export const WealthIcon = (p: IconProps) => (<svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9 10h4a2 2 0 010 4H9" /></svg>);

export const SERVICE_ICONS = { balanced: BalancedIcon, fixed: FixedIncomeIcon, equity: EquityIcon, institutional: InstitutionalIcon, advisory: AdvisoryIcon, wealth: WealthIcon } as const;
export const RISK_ICONS = { market: EquityIcon, credit: ShieldIcon, liquidity: FixedIncomeIcon } as const;
