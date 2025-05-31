import HeroSection from "@/components/HeroSection";
import PrivilegesSection from "@/components/PrivilegesSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <HeroSection />
      <PrivilegesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
