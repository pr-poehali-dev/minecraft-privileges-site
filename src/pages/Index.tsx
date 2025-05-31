import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <HeroSection />
      <CTASection />
    </div>
  );
}
