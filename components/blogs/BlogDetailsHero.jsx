'use client';
import React from 'react';
import Image from 'next/image';
import ScrollBasedAnimation from '../ScrollBasedAnimation';

const BlogDetailsHero = ({ blog }) => {
  const heroImage = blog.images?.[0]?.asset?.url || '/default.jpg';

  return (
    <section className="relative w-full h-[700px] overflow-hidden text-white">
      <div className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <Image
          src={heroImage}
          alt={blog.title}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative z-20 flex flex-col justify-center items-center md:items-start h-full px-6 md:px-12 text-center md:text-left max-w-5xl mx-auto">
        <ScrollBasedAnimation direction="up" offset={70}>
          <div className="mb-4">
            <span className="bg-accent text-black px-4 py-2 rounded-full text-sm font-semibold">
{blog.categoryTitle}            </span>
          </div>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" offset={70} delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            {blog.title}
          </h1>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" offset={70} delay={0.2}>
          <div className="flex items-center space-x-6 text-gray-300">
            <span>{new Date(blog.publishedAt).toDateString()}</span>
          </div>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
};

export default BlogDetailsHero;
