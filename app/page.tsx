import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialPosts from "@/components/SocialPosts";
import CampaignShowcase from "@/components/CampaignShowcase";
import Brands from "@/components/Brands";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import AboutSkills from "@/components/AboutSkills";
import CeoSlideshow from "@/components/CeoSlideshow";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <SocialPosts />
        <CampaignShowcase />
        <Brands />
        <Results />
        <Testimonials />
        <AboutSkills />
        <CeoSlideshow />
        <Contact />
      </main>
    </>
  );
}
