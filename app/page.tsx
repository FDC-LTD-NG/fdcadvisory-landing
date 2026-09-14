import Hero from "@/components/sections/Hero";
import FundFactsTable from "@/components/sections/FundFactsTable";
import StrategySection from "@/components/sections/StrategySection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import InsightsSection from "@/components/sections/InsightsSection";
import RiskSection from "@/components/sections/RiskSection";
import FeesSection from "@/components/sections/FeesSection";
import ContactPreview from "@/components/sections/ContactPreview";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FundFactsTable />
      <StrategySection />
      <ServicesPreview />
      <CtaBanner
        eyebrow="Ready to Invest?"
        title="Start with as little as ₦10,000"
        description="Complete the application form, attach your KYC documents, and submit to our investor services team. The full SEC-approved prospectus is available below."
        primary={{ label: "Download Prospectus", href: siteConfig.documents.prospectus, download: true, variant: "pillGold" }}
        secondary={{ label: "Talk to Investor Services", href: "/contact" }}
      />
      <AboutPreview />
      <InsightsSection />
      <RiskSection />
      <FeesSection />
      <ContactPreview />
    </>
  );
}
