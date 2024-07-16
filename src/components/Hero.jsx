import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import SocialIconCanvas from './canvas/SocialIconCanvas';
import { social_icons } from '../constants';
import ComputersCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[105px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="z-20">
          <h1 className={`${styles.heroHeadText}`}>
            Hi! I&lsquo;m <span className="text-[#915eff]">Sai Chandra</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I develop and maintain customer-facing web apps and operational data management systems.
          </p>
          <div className="w-full h-full flex flex-row gap-4 cursor-pointer">
            {social_icons.map((icon) => (
              <div key={icon.name} className="w-[50px] h-[50px] mt-7">
                <SocialIconCanvas link={icon.link} iconPath={icon.icon_path} args={icon.args} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-2" />
      <div className="absolute inset-0 lg:top-[30%] md:top-[33%] sm:top-[38%] top-[38.2%] w-full lg:h-[70%] md:h-[65%] h-[60%] flex items-center justify-center z-10">
        <ComputersCanvas />
      </div>
      <div className="absolute bottom-20 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
