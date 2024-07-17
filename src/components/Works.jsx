import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { getGradientClassFromString } from '../utils/colors';
import { fadeIn, textVariant } from '../utils/motion';
import CardSlider from './CardSlider';

import 'swiper/css';
import 'swiper/css/effect-cards';

const ProjectCard = ({ index, name, description, tags, images, source_code_link }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.01 }}
      variants={fadeIn('up', 'spring', index * 0.1, 0.55)}
    >
      <div className="bg-tertiary p-5 rounded-2xl xs:w-[410px] md:w-[400px] w-[362px]">
        <div className="relative w-full h-full mb-6">
          <CardSlider images={images} />
        </div>
        <div className="mt-3 mb-4 flex justify-between items-center">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="source code" className="w-[60%] h-[60%] object-contain" />
          </div>
        </div>
        <p className="mt-2 text-secondary text-[14.4px]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${tag}`} className={`text-[14px] ${getGradientClassFromString(tag)}`}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  source_code_link: PropTypes.string.isRequired,
};

const Works = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={textVariant()}
      >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-x-52 gap-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

Works.propTypes = {};

export default SectionWrapper(Works, 'projects');
