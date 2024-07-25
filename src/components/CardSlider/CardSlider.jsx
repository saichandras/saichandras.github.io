import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DynamicImageLoader from '../DynamicImageLoader';
import './CardSlider.css';

const CardSlider = ({ images }) => {
  return (
    <Swiper
      className="xs:w-[320px] xs:h-[691px] w-[244px] h-[518px]"
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <DynamicImageLoader
            unoptimized
            className="w-full h-full"
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
};

export default CardSlider;
