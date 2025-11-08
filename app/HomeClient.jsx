"use client";

import dynamic from 'next/dynamic';
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

const ServicesSection = dynamic(() => import("../components/home/Services"));
const BlogsSection = dynamic(() => import("../components/home/Blogs"));
const AboutSection = dynamic(() => import("../components/home/About"));
const HeroSection = dynamic(() => import("../components/home/hero"));
const TestimonialsSection = dynamic(() => import("../components/home/Testimonial"));
const CallToAction = dynamic(() => import("../components/home/CallToAction"));
const Contact = dynamic(() => import("../components/home/Contact"));
const Work = dynamic(() => import("../components/home/Work"));

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better performance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced to 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogsSection />
     <TestimonialsSection/>
      <Work/>
      <Contact />
     <CallToAction />

     </div>
  );
}
