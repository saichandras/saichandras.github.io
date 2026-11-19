'use client';

import dynamic from 'next/dynamic';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Feedbacks from '../components/Feedbacks';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Tech from '../components/Tech';
import Works from '../components/Works';

const StarsCanvas = dynamic(() => import('../components/canvas/Stars'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="hero-stage relative bg-hero-pattern bg-cover bg-no-repeat bf-center">
        <div className="hero-mesh" aria-hidden="true" />
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
        <StarsCanvas />
      </div>
      <ToastContainer position="bottom-center" transition={Zoom} />
    </div>
  );
}
