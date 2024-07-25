'use client';

import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ size = 38 }) => {
  return (
    <div className={styles.loaderConatiner}>
      <div className={styles.loader} style={{ width: `${size}px`, height: `${size}px` }}></div>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};

export default Loader;
