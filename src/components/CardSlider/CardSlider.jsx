import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './CardSlider.css';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

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
          <Image unoptimized className="w-full h-full" src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CardSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardSlider;
