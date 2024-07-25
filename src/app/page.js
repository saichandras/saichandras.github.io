'use client';

import Dynamic3DLoader from '@/components/Dynamic3DLoader';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SplashLoader from '../components/SplashLoader/SplashLoader'; // Correct import path

const About = dynamic(() => import('../components/About'), {
  ssr: false,
});
const Contact = dynamic(() => import('../components/Contact'), {
  ssr: false,
});
const Experience = dynamic(() => import('../components/Experience'), {
  ssr: false,
});
const Feedbacks = dynamic(() => import('../components/Feedbacks'), {
  ssr: false,
});
const Tech = dynamic(() => import('../components/Tech'), {
  ssr: false,
});
const Works = dynamic(() => import('../components/Works'), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadComponents = async () => {
      const components = [
        import('../components/About'),
        import('../components/Experience'),
        import('../components/Tech'),
        import('../components/Works'),
        import('../components/Feedbacks'),
        import('../components/Contact'),
      ];

      const loadTimePromise = new Promise((resolve) => setTimeout(resolve, 1000));

      await Promise.all([...components, loadTimePromise]);

      setIsLoading(false);
    };

    loadComponents();
  }, []);

  if (isLoading) {
    return <SplashLoader />;
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bf-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Dynamic3DLoader componentPath="./canvas/Stars" />
      </div>
      <ToastContainer position="bottom-center" transition={Zoom} />
    </div>
  );
}
