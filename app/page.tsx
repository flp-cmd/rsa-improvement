import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhyRSA from "@/components/WhyRSA";

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
      <ServiceArea />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
