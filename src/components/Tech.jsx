import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';

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
          <div
            className="sm:w-16 sm:h-16 w-14 h-14 flex items-center 
            justify-center bg-white from-gray-100 to-gray-200 shadow-lg 
            rounded-xl transform transition-transform hover:scale-110 hover:shadow-xl"
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="sm:w-11 sm:h-11 w-10 h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

Tech.propTypes = {};

export default SectionWrapper(Tech, '');
