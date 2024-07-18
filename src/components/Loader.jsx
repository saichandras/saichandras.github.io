'use client';

import { Html, useProgress } from '@react-three/drei';
import PropTypes from 'prop-types';

const Loader = ({ decimal = 2 }) => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
        }}
      >
        {decimal === 0 ? progress : progress.toFixed(decimal)}%
      </p>
    </Html>
  );
};

Loader.propTypes = {
  decimal: PropTypes.number,
};

export default Loader;
