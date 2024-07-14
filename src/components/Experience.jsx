import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { getGradientClassFromString } from '../utils/colors';
import { textVariant } from '../utils/motion';
import Point from './Point';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a href={experience.company_link} target="_blank">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[75%] h-[75%] object-contain"
            />
          </div>
        </a>
      }
      position="right"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {experience.company_name}
          </p>
        </div>
        <span className="text-secondary text-[14px]">{experience.date}</span>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14.4px] pl-1 tracking-wider"
          >
            <Point text={point} />
          </li>
        ))}
      </ul>
      {/* {experience.tech_stack && experience.tech_stack.length > 0 && (
        <div className="text-white font-light mt-4 font-sans text-[15px] tracking-wider">
          <span className="font-semibold">Tech Stack: </span>
          {experience.tech_stack.join(', ')}
        </div>
      )} */}
      {experience.tech_stack && experience.tech_stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.tech_stack.map((tech) => (
            <span key={`${tech}`} className={`text-[14px] ${getGradientClassFromString(tech)}`}>
              #{tech}
            </span>
          ))}
        </div>
      )}

      <div className="pb-1.5" />
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    company_link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    tech_stack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Experience = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout={'1-column-left'}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

Experience.propTypes = {};

export default SectionWrapper(Experience, 'work');
