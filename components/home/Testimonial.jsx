'use client';
import React from 'react';
import { Star } from 'lucide-react';
import ScrollBasedAnimation from '../ScrollBasedAnimation';

const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    feedback: 'CreativeDigital transformed our online presence. Their strategies are innovative, data-driven, and incredibly effective.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    role: 'Marketing Director, Brandify',
    feedback: 'The team delivered beyond expectations. The design and automation solutions significantly improved our engagement metrics.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    rating: 5,
  },
  {
    name: 'Emily Clark',
    role: 'Founder, StartupX',
    feedback: 'Professional, creative, and reliable. Our project was completed smoothly and has already delivered measurable results.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <ScrollBasedAnimation direction="up" offset={50} delay={0.1 * index}>
      <div className="bg-black group overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer p-6 sm:p-8 flex flex-col h-full">
        {/* User Info */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-bold text-lg sm:text-xl">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{testimonial.role}</p>
          </div>
        </div>

        {/* Feedback */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 flex-1">
          "{testimonial.feedback}"
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#6EFF33]" />
          ))}
        </div>
      </div>
    </ScrollBasedAnimation>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Header */}
      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 mb-12">
        <ScrollBasedAnimation direction="up" offset={50} delay={0}>
          <span className="text-black text-sm sm:text-base font-bold tracking-widest uppercase mb-2 inline-block">
            Testimonials
          </span>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" offset={50} delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary tracking-tight">
            What Our Clients Say
          </h1>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" offset={50} delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Hear from our clients how we helped them achieve their goals and grow their businesses.
          </p>
        </ScrollBasedAnimation>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
