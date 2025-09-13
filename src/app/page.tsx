import FeaturesSection from '@/components/shared/FeaturesSection';
import Header from '@/components/shared/Header';
import HeroSection from '@/components/shared/HeroSection';
import PricingPlansSection from '@/components/shared/PricingPlansSection';
import PricingSection from '@/components/shared/PricingSection';
import StatsSection from '@/components/shared/StatsSection';
import TaskCreationSection from '@/components/shared/TaskCreationSection';
import TestimonialSection from '@/components/shared/TestimonialSection';
import TrustedBySection from '@/components/shared/TrustedBySection';

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <TaskCreationSection />
      <StatsSection />
      <PricingSection />
      <PricingPlansSection />
      <TestimonialSection />
    </div>
  )
}

export default page;