'use client';

import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader'; // Your custom loader component

const Dynamic3DLoader = ({ componentPath, useLazy = true, loaderSize = 40, ...props }) => {
  let Component;

  if (useLazy) {
    Component = lazy(() => import(`${componentPath}`));
  } else {
    Component = require(`${componentPath}`).default;
  }

  return (
    <Suspense fallback={<Loader size={loaderSize} />}>
      <Component {...props} />
    </Suspense>
  );
};

Dynamic3DLoader.propTypes = {
  componentPath: PropTypes.string.isRequired,
  useLazy: PropTypes.bool,
};

export default Dynamic3DLoader;
