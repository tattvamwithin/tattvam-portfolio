import Navbar from "@/components/Navbar";
import SpotlightEffect from "@/components/SpotlightEffect";
import HeroSection from "@/components/HeroSection";
import MetricsBanner from "@/components/MetricsBanner";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import MarqueeSection from "@/components/MarqueeSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <SpotlightEffect />
      {/* Animated Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <Navbar />
      <HeroSection />

      {/* Newly added sections to lengthen the page */}
      <ServicesSection />
      <ExperienceSection />

      <AboutSection />
      <ProjectsSection />

      {/* <MarqueeSection /> */}
      <ContactSection />

      <Footer />

      <BackToTop />
    </main>
  );
}
