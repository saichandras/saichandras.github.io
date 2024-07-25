import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader'; // Your custom loader component

const DynamicImageLoader = ({ src, alt, useLazy = true, loaderSize = 40, ...props }) => {
  let ImageComponent;

  if (useLazy) {
    ImageComponent = lazy(() => import('next/image'));
  } else {
    ImageComponent = require('next/image').default;
  }

  return (
    <Suspense fallback={<Loader size={loaderSize} />}>
      <ImageComponent src={src} alt={alt} {...props} />
    </Suspense>
  );
};

DynamicImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  useLazy: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DynamicImageLoader;
