export interface FundFact { label: string; value: string; }
export interface RiskItem { icon: "market" | "credit" | "liquidity"; title: string; description: string; }
export interface FeeItem { value: string; label: string; note: string; }
export interface AllocationItem { label: string; range: string; percent: number; tone: "equity" | "fixed" | "money"; }

export const fundHighlights = [
  { label: "Offer Price per Unit", value: "₦1,000" },
  { label: "Minimum Investment", value: "₦10,000" },
  { label: "Regulatory Approval", value: "SEC" },
] as const;

export const fundDashboard = {
  type: "Open-Ended Balanced",
  currency: "Nigerian Naira (₦)",
  risk: "Medium",
  benchmark: "40% NSE30 · 40% FGN Bond · 20% T-Bill",
  incomeAccrual: "Daily",
  custodian: "Stanbic IBTC",
} as const;

export const fundFacts: FundFact[] = [
  { label: "Fund Name", value: "FDC Balanced Fund" },
  { label: "Fund Type", value: "Open-Ended Balanced Mutual Fund (CIS)" },
  { label: "Fund Manager", value: "FDC Advisory Limited (RC: 1234567)" },
  { label: "Trustee", value: "Stanbic IBTC Trustees Limited" },
  { label: "Custodian", value: "Stanbic IBTC Bank" },
  { label: "Auditor", value: "Ernst & Young Nigeria" },
  { label: "Base Currency", value: "Nigerian Naira (₦)" },
  { label: "Offer Price (Initial)", value: "₦1,000.00 per unit (at par)" },
  { label: "Minimum Investment", value: "₦10,000.00" },
  { label: "Minimum Holding Period", value: "30 days" },
  { label: "Income Accrual", value: "Daily" },
  { label: "Distribution Policy", value: "Annually (with reinvestment option)" },
  { label: "Benchmark", value: "40% NSE 30 · 40% 5-Yr FGN Bond · 20% 90-Day T-Bill" },
  { label: "Risk Profile", value: "Medium" },
  { label: "SEC Registration", value: "Approved and Registered" },
];

export const allocations: AllocationItem[] = [
  { label: "Nigerian Equities", range: "20–40%", percent: 40, tone: "equity" },
  { label: "Fixed Income / Bonds", range: "30–50%", percent: 50, tone: "fixed" },
  { label: "Money Market", range: "20–40%", percent: 35, tone: "money" },
];

export const risks: RiskItem[] = [
  { icon: "market", title: "Market Risk", description: "The value of equities and fixed-income securities may fluctuate due to changes in market conditions, interest rates, and investor sentiment." },
  { icon: "credit", title: "Credit Risk", description: "The Fund may invest in corporate bonds and money market instruments. There is a risk that an issuer may default." },
  { icon: "liquidity", title: "Liquidity Risk", description: "Certain securities held by the Fund may be difficult to sell quickly at a fair price." },
];

export const fees: FeeItem[] = [
  { value: "1.50%", label: "Annual Management Fee", note: "of Net Asset Value" },
  { value: "0.25%", label: "Annual Trustee Fee", note: "of Net Asset Value" },
  { value: "1.00%", label: "Initial Offer Cost", note: "amortised over 5 years" },
  { value: "≤ 3.50%", label: "Maximum Total Expense Ratio", note: "SEC-mandated cap" },
];
