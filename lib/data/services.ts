export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: "balanced" | "fixed" | "equity" | "institutional" | "advisory" | "wealth";
  features: string[];
}

export const services: Service[] = [
  { slug: "balanced-fund", title: "Balanced Fund Management", summary: "Diversified exposure across Nigerian equities and fixed-income securities.", description: "Our flagship balanced strategy blends growth-oriented equities with income-generating fixed-income instruments.", icon: "balanced", features: ["Actively managed with quarterly rebalancing", "Disciplined asset allocation across SEC-approved limits", "Regular risk monitoring and stress testing"] },
  { slug: "fixed-income", title: "Fixed Income & Money Market", summary: "Capital preservation and steady income through high-quality debt instruments.", description: "We construct portfolios of FGN bonds, corporate bonds, treasury bills, and commercial paper.", icon: "fixed", features: ["High-quality credit selection", "Laddered maturity profiles", "Daily income accrual"] },
  { slug: "equity", title: "Equity Portfolio Management", summary: "Concentrated, research-driven portfolios of Nigerian listed equities.", description: "Our equity team combines top-down macro analysis with bottom-up fundamental research.", icon: "equity", features: ["In-depth company and sector research", "Strong governance and dividend focus", "Benchmarked against the NSE 30 Index"] },
  { slug: "institutional", title: "Institutional Portfolio Management", summary: "Bespoke segregated mandates for pension funds, insurers, and corporates.", description: "We manage segregated portfolios for institutional clients with customised investment policy statements.", icon: "institutional", features: ["Custom investment policy alignment", "Monthly performance and compliance reporting", "Dedicated relationship management"] },
  { slug: "advisory", title: "Investment Advisory", summary: "Strategic asset allocation and portfolio advisory services.", description: "We help individuals, family offices, and institutions design and execute investment strategies.", icon: "advisory", features: ["Portfolio construction and review", "Risk profiling and scenario analysis", "Tax and regulatory considerations"] },
  { slug: "wealth", title: "Wealth Management", summary: "Holistic wealth solutions for high-net-worth individuals and families.", description: "We provide integrated wealth management encompassing portfolio management and estate planning.", icon: "wealth", features: ["Personalised investment mandates", "Multi-asset diversification", "Family wealth governance support"] },
];
