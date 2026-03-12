import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedWork from "@/components/FeaturedWork";
import HowIWork from "@/components/HowIWork";
import ServicesSection from "@/components/ServicesSection";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <AboutSnapshot />
      <FeaturedWork />
      <HowIWork />
      <ServicesSection />
      <Results />
      <Testimonials />
      <CTABanner />
      <Contact />
    </main>
  );
}
