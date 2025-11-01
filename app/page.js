import ServicesSection from "../components/home/Services";
import AboutSection from "../components/home/About";
import HeroSection from "../components/home/hero";
import Image from "next/image";
import TestimonialsSection from "../components/home/Testimonial";
import CallToAction from "../components/home/CallToAction";
import Contact from "../components/home/Contact";
import Work from "../components/home/Work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
     <TestimonialsSection/>
     <Work/>
     <Contact />
    <CallToAction />

    </div>
  );
}
