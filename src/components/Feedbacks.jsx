'use client';

import { motion } from 'framer-motion';

import PropTypes from 'prop-types';
import { styles } from '../app/styles';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import DynamicImageLoader from './DynamicImageLoader';

const FeedbackCard = ({ index, testimonial, name, connector, designation, company, image }) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    <p className="text-white font-black text-[42px]">&ldquo;</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[17px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {connector} {company}
          </p>
        </div>
        <DynamicImageLoader
          unoptimized
          src={image}
          alt={`feedback_by-${name}`}
          className="rounded-full object-cover"
          width={40}
          height={40}
          useLazy={false}
        />
      </div>
    </div>
  </motion.div>
);

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-16 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

Feedbacks.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      testimonial: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      designation: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

export default SectionWrapper(Feedbacks, '');
