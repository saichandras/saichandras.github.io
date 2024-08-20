import PropTypes from 'prop-types';
import { EffectCards, EffectCube, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DynamicImageLoader from '../DynamicImageLoader';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const CardSlider = ({ images, variant = 'mobile' }) => {
  let swiperEffect = 'cards';
  let swiperModules = [EffectCards, Autoplay];
  let swiperClassNames = 'sm:w-[95%] w-[80%] h-full';
  let swiperProps = {};

  if (variant === 'website') {
    swiperEffect = 'cube';
    swiperModules = [EffectCube, Pagination, Autoplay];
    swiperClassNames = 'w-[97%] h-[97%]';
    swiperProps = {
      ...swiperProps,
      pagination: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    };
  }

  return (
    <Swiper
      className={swiperClassNames}
      effect={swiperEffect}
      grabCursor={true}
      modules={swiperModules}
      centeredSlides={true}
      autoplay={{
        delay: 8500,
        pauseOnMouseEnter: true,
      }}
      {...swiperProps}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <DynamicImageLoader
            unoptimized
            className="w-full h-full rounded-2xl"
            src={image}
            alt={`Slide ${index + 1}`}
            useLazy={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CardSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  variant: PropTypes.oneOf(['website', 'mobile']),
};

export default CardSlider;
