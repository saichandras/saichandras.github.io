'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import Tooltip from './Tooltip';

const Tech = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      variants={fadeIn('right', 'spring', 0.25, 0.75)}
    >
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {technologies.map((technology) => (
          <Tooltip text={technology.name} key={technology.name}>
            <div
              className="sm:w-16 sm:h-16 w-14 h-14 flex items-center 
                justify-center bg-white from-gray-100 to-gray-200 shadow-lg 
                rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
            >
              <Image
                src={technology.icon}
                alt={technology.name}
                width={44}
                height={44}
                className="h-10 w-10 object-contain sm:h-11 sm:w-11"
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, '');
