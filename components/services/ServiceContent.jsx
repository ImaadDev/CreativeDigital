'use client';
import React from 'react';
import ScrollBasedAnimation from '../ScrollBasedAnimation';
import { Minus } from 'lucide-react';

const servicesData = [
  {
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies to maximize growth and engagement.',
    image: 'https://images.unsplash.com/photo-1558888405-0c012b4b5f46?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Creative Design',
    description: 'Captivating visuals and experiences that resonate with your audience.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Marketing Automation',
    description: 'Automate marketing processes efficiently to boost conversion.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Branding & Identity',
    description: 'Define your brand’s voice, personality, and visual identity for maximum impact.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Analytics & Insights',
    description: 'Analyze data to provide actionable insights and optimize business strategies.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Consulting & Support',
    description: 'Our experts guide your team with tailored advice to help achieve your business goals.',
    image: 'https://images.unsplash.com/photo-1601597111971-07a798b0ecf4?auto=format&fit=crop&w=800&q=80',
  },
];

const ServiceCard = ({ service, index }) => (
  <ScrollBasedAnimation direction="up" offset={50} delay={0.2 * index}>
    <div className="bg-secondary group overflow-hidden duration-500 cursor-pointer">
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden ">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col justify-between h-64">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Minus className="w-4 h-4 text-[#6EFF33]" />
          </div>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#6EFF33] transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">{service.description}</p>
        </div>
      </div>
    </div>
  </ScrollBasedAnimation>
);

const ServicesPageContent = () => {
  return (
    <section className="bg-black/50 py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

    
    </section>
  );
};

export default ServicesPageContent;
