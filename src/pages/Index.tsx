import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { SolutionsSection } from "@/components/landing/SolutionsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
// PRICING CALCULATOR IMPORT - Currently disabled on site
// Import can be removed if this feature is no longer needed
import { PricingCalculator } from "@/components/landing/PricingCalculator";
import { ReportsSection } from "@/components/landing/ReportsSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="solutions">
          <SolutionsSection />
        </div>
        <TestimonialsSection />
        {/* 
          PRICING CALCULATOR - HIDDEN
          This component is currently disabled but can be re-enabled in the future.
          To show the pricing calculator on the site, change the condition below to 'true'
          or uncomment the <PricingCalculator /> component line.
          
          The PricingCalculator component allows users to dynamically calculate custom pricing
          based on their requirements (locations, users, monthly transactions).
          
          To enable: Remove the '&& false' condition below or uncomment:
          <PricingCalculator />
        */}
        {false && <PricingCalculator />}
        <div id="reports">
          <ReportsSection />
        </div>
        <div id="security">
          <SecuritySection />
        </div>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
