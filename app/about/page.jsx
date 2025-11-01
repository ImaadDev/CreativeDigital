'use client';
import React from 'react';
import ScrollBasedAnimation from '../../components/ScrollBasedAnimation';
import AboutHero from '@/components/about/AboutHero';
import AboutContent from '@/components/about/AboutContent';
import AboutWhyUs from '@/components/about/AboutWhyUs';

const AboutPage = () => {

  return (
    <>  
    <AboutHero/>
    <AboutContent/>
    <AboutWhyUs/>
    </>
  );
};

export default AboutPage;
