'use client';

import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Autoplay, EffectCards, EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const syncVideos = (swiper) => {
  if (!swiper?.el) return;

  const rect = swiper.el.getBoundingClientRect();
  const visible = rect.bottom > 0 && rect.top < window.innerHeight;

  swiper.slides.forEach((slide) => {
    const video = slide.querySelector('video');
    if (!video) return;

    if (visible && slide.classList.contains('swiper-slide-active')) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
};

const CardSlider = ({ images, variant = 'mobile' }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (swiperRef.current) syncVideos(swiperRef.current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        syncVideos(swiper);
      }}
      onSlideChange={syncVideos}
      {...swiperProps}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <video
            className="h-auto w-full rounded-2xl"
            src={image}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`Slide ${index + 1}`}
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
