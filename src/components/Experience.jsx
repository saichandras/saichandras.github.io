'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../app/styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { getGradientClassFromString } from '../utils/colors';
import { textVariant } from '../utils/motion';
import Point from './Point';

const ExperienceCard = ({ experience }) => {
  const techStack = experience.techStack;
  const techStackClasses = useMemo(
    () => techStack.map((tech) => getGradientClassFromString(tech)),
    [techStack],
  );

  return (
    <VerticalTimelineElement
      visible
      contentStyle={{
        background: 'rgba(21, 16, 48, 0.55)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 18px 40px -24px rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.14)' }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src={experience.icon}
              alt={experience.companyName}
              width={48}
              height={48}
              className="h-[75%] w-[75%] object-contain"
            />
          </div>
        </a>
      }
      position="right"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p className="text-secondary text-[18px] font-semibold" style={{ margin: 0 }}>
            {experience.companyName}
          </p>
          {experience.location && (
            <p className="text-secondary text-[14px]" style={{ margin: 0 }}>
              {experience.location}
            </p>
          )}
        </div>
        <span className="block font-mono text-secondary text-[13px] sm:text-[13.5px] sm:pl-4 sm:mt-1.5 shrink-0 sm:whitespace-nowrap">
          {experience.date}
        </span>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point) => (
          <li key={point} className="text-white-100 text-[14.4px] pl-1 tracking-wider">
            <Point text={point} />
          </li>
        ))}
      </ul>
      {techStack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {techStack.map((tech, idx) => (
            <span key={tech} className={`font-mono text-[13px] ${techStackClasses[idx]}`}>
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
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    companyName: PropTypes.string.isRequired,
    companyLink: PropTypes.string.isRequired,
    location: PropTypes.string,
    title: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
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
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.companyName}-${experience.date}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
