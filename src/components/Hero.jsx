'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { styles } from '../app/styles';
import { socialIcons } from '../constants';
import Loader from './Loader/Loader';

const CanvasLoader = ({ size }) => (
  <div className="flex h-full w-full items-center justify-center">
    <Loader size={size} />
  </div>
);

const ComputersCanvas = dynamic(() => import('./canvas/Computers'), {
  ssr: false,
  loading: () => <CanvasLoader size={40} />,
});

const SocialIconCanvas = dynamic(() => import('./canvas/SocialIconCanvas'), {
  ssr: false,
  loading: () => <CanvasLoader size={25} />,
});

const Hero = () => {
  return (
    <section className="relative z-10 w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[105px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi! I&lsquo;m <span className="text-[#22d3ee]">Sai Chandra</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I architect and build the systems that power complex products, from secure enterprise
            platforms and distributed services to healthcare technology and AI-powered analytics.
          </p>
          <div className="w-full h-full flex flex-row gap-4 cursor-pointer">
            {socialIcons.map((icon) => (
              <div key={icon.name} className="relative w-[50px] h-[50px] mt-7 z-20">
                <SocialIconCanvas link={icon.link} iconPath={icon.iconPath} args={icon.args} />
                {/* Keyboard and screen-reader access for the 3D icon above. */}
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sr-only focus:not-sr-only focus:absolute focus:inset-0 focus:rounded-full focus:ring-2 focus:ring-[#915eff]"
                >
                  {icon.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-2" />
      <div className="computers-canvas-container">
        <ComputersCanvas />
      </div>
      <div className="absolute bottom-20 z-20 ml-[50%] mr-[50%] flex items-center justify-center">
        <a href="#about" aria-label="Scroll to about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
