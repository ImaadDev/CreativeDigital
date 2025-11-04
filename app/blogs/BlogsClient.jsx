'use client';
import React, { useState, useEffect } from 'react';
import ScrollBasedAnimation from '../../components/ScrollBasedAnimation';
import BlogHero from '@/components/blogs/BlogHero';
import BlogContent from '@/components/blogs/BlogContent';
import Loading from '../../components/Loading';

export default function BlogsClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300); // 1.3 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <BlogHero/>
    <BlogContent/>
    </>
  );
}
