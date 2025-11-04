'use client';
import React, { useState, useEffect } from 'react';
import ServicesHero from '../../components/services/Servicehero';
import ServicesPageContent from '../../components/services/ServiceContent';
import Loading from '../../components/Loading';
import { client } from '../../sanity/lib/client';

export default function ServicesClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "service"]{
          _id,
          title,
          titleAr,
          description,
          descriptionAr,
          image
        }`);
        setServicesData(data);
        setTimeout(() => setIsLoading(false), 1000); // 1 second loading
      } catch (error) {
        console.error('Error fetching services:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <ServicesHero/>
    <ServicesPageContent servicesData={servicesData} />
    </>
  );
}
