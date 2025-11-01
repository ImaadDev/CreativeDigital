'use client';
import React from 'react';
import { FaFlag, FaChartBar, FaBolt, FaTrophy } from 'react-icons/fa';
import ScrollBasedAnimation from '../ScrollBasedAnimation';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaFlag className="text-5xl mb-4 text-accent" />,
      title: 'Local Expertise',
      desc: 'Deep understanding of Saudi market dynamics and cultural nuances.',
    },
    {
      icon: <FaChartBar className="text-5xl mb-4 text-accent" />,
      title: 'Data-Driven',
      desc: 'Every strategy backed by comprehensive analytics and measurable KPIs.',
    },
    {
      icon: <FaBolt className="text-5xl mb-4 text-accent" />,
      title: 'Agile Delivery',
      desc: 'Rapid deployment with uncompromising quality standards.',
    },
    {
      icon: <FaTrophy className="text-5xl mb-4 text-accent" />,
      title: 'Proven Results',
      desc: 'Consistent track record of driving significant business growth.',
    },
  ];

  return (
    <section className="relative w-full z-30 bg-black/70 py-20 max-w-[1400px] mx-auto px-8 md:px-12">
      {/* Heading */}
      <ScrollBasedAnimation direction="up" offset={50}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose CreativeDigital
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted partner for digital transformation in Saudi Arabia
          </p>
        </div>
      </ScrollBasedAnimation>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {reasons.map((item, idx) => (
          <ScrollBasedAnimation key={idx} direction="up" offset={50} delay={0.1 * idx}>
            <div className="flex flex-col items-center text-center p-6">
              {item.icon}
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          </ScrollBasedAnimation>
        ))}
      </div>

      {/* CTA Button */}
      <ScrollBasedAnimation direction="up" offset={50} delay={0.5}>
        <div className="text-center">
          <button className="bg-accent hover:bg-green-500 text-black font-semibold py-4 px-10 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </ScrollBasedAnimation>
    </section>
  );
};

export default WhyChooseUs;
