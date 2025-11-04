'use client';
import React, { useState, useEffect } from 'react';
import ScrollBasedAnimation from '../../components/ScrollBasedAnimation';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutTeam from '@/components/about/AboutTeam';
import Loading from '../../components/Loading';

const AboutPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <AboutHero/>
    <AboutContent/>
    <AboutWhyUs/>
    <AboutTeam/>
    </>
  );
};

export default AboutPage;
