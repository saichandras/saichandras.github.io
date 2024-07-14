import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

SectionWrapper.propTypes = {
  Component: PropTypes.elementType.isRequired,
  idName: PropTypes.string.isRequired,
};

export default SectionWrapper;
