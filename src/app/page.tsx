import { HeroSection } from "@/components/sections/HeroSection";
import { CompareSection } from "@/components/sections/CompareSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicosSection } from "@/components/sections/ServicosSection";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroSection />
      <ServicosSection />
      <CompareSection />
      <FeaturesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
