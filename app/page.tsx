import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUs from "@/components/sections/AboutUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import RecentProjects from "@/components/sections/RecentProjects";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import WhyRSA from "@/components/sections/WhyRSA";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <WhyRSA />
      <HowItWorks />
      <Services />
      <RecentProjects />
      <Testimonials />
      <Contact />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
