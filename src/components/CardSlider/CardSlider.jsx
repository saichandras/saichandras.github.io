import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './CardSlider.css';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const CardSlider = ({ images }) => {
  return (
    <Swiper
      className="xs:w-[350px] xs:h-[730px] w-[310px] h-[645px]"
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img className="w-full h-full" src={image} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CardSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardSlider;