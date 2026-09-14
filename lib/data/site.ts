export const siteConfig = {
  fundName: "FDC Balanced Fund",
  managerName: "FDC Advisory Limited",
  managerShortName: "FDC Advisory",
  managerRC: "RC: 1234567",
  description: "FDC Balanced Fund is an SEC-approved balanced mutual fund managed by FDC Advisory Limited, Lagos.",
  tagline: "A SEC-approved balanced mutual fund for Nigerian investors.",
  contact: {
    address: "14B Adetokunbo Ademola Street, Victoria Island, Lagos, Nigeria",
    phone: "+234 (0) 1 271 0000",
    email: "invest@fdcadvisory.ng",
    website: "www.fdcadvisory.ng",
    officeHours: "Monday – Friday, 8:00 AM – 5:00 PM WAT",
  },
  documents: {
    prospectus: "/documents/fdc-balanced-fund-prospectus.pdf",
    trustDeed: "/documents/fdc-balanced-fund-trust-deed.pdf",
    managerProfile: "/documents/fdc-advisory-profile.pdf",
    applicationForm: "/documents/fdc-balanced-fund-application.pdf",
  },
  bank: { bankName: "Stanbic IBTC Bank", accountName: "FDC Balanced Fund", accountNumber: "0012345678" },
  external: { sec: "https://sec.gov.ng", fman: "https://fman.org.ng" },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
