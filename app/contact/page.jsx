'use client';
import React, { useState, useEffect } from 'react';

export const dynamic = "force-static";
import ScrollBasedAnimation from '../../components/ScrollBasedAnimation';
import ContactHero from '../../components/contact/ContactHero';
import Contact from '../../components/home/Contact';
import CTAWork from '../../components/contact/CTAWork';
import Loading from '../../components/Loading';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate email API or backend here
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400); // 1.4 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="bg-black text-white w-full min-h-screen">
      <ContactHero />
      <Contact/>
      <CTAWork/>
    </main>
  );
};

export default ContactPage;
