import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSolutionSection } from '@/components/sections/ProblemSolutionSection';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { CustomerBenefitsSection, BusinessBenefitsSection } from '@/components/sections/BenefitsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TargetCustomersSection } from '@/components/sections/TargetCustomersSection';
import { ComparisonSection, WhyShopDropzSection } from '@/components/sections/ComparisonSection';
import { CTASection, Footer } from '@/components/sections/CTASection';
import { TopNav } from '@/components/layout/TopNav';

export default function Home() {
  return (
    <div className="w-full">
      <TopNav />
      <HeroSection />
      <ProblemSolutionSection />
      <WorkflowSection />
      <CustomerBenefitsSection />
      <BusinessBenefitsSection />
      <FeaturesSection />
      <TargetCustomersSection />
      <ComparisonSection />
      <WhyShopDropzSection />
      <CTASection />
      <Footer />
    </div>
  );
}
