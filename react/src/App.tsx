import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PASSection } from "@/components/PASSection";
import { TzikTzakSection } from "@/components/TzikTzakSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ValueProps } from "@/components/ValueProps";
import { ProcessSection } from "@/components/ProcessSection";
import { ExpertSection } from "@/components/ExpertSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CloserSection } from "@/components/CloserSection";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <main className="min-h-screen font-sans text-brand-dark bg-brand-cream selection:bg-brand-gold selection:text-white">
      <Navbar />
      <Hero />
      <PASSection />
      <TzikTzakSection />
      <ComparisonSection />
      <ValueProps />
      <ProcessSection />
      <ExpertSection />
      <TestimonialsSection />
      <FAQSection />
      <CloserSection />
      <Footer />
    </main>
  );
}
