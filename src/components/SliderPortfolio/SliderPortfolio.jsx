import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import styles from './SliderPortfolio.module.scss';
import image1 from '../../assets/images/slider/interior1.jpg';
import image2 from '../../assets/images/slider/interior2.jpg';
import image3 from '../../assets/images/slider/interior3.jpg';
import image4 from '../../assets/images/slider/interior4.jpg';

export const SliderPortfolio = () => {
  const PrevArrow = ({ onClick }) => (
    <div className={styles['prev-arrow-custom']} onClick={onClick}>
      <FaArrowLeft className={styles['arrow-icon']} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className={styles['next-arrow-custom']} onClick={onClick}>
      <FaArrowRight className={styles['arrow-icon']} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src={image1}
          className={styles['slider-img']}
          alt="Opis obrazka 1"
        />
      </div>
      <div>
        <img
          src={image2}
          className={styles['slider-img']}
          alt="Opis obrazka 2"
        />
      </div>
      <div>
        <img
          src={image3}
          className={styles['slider-img']}
          alt="Opis obrazka 3"
        />
      </div>
      <div>
        <img
          src={image4}
          className={styles['slider-img']}
          alt="Opis obrazka 4"
        />
      </div>
      <div>
        <img
          src={image1}
          className={styles['slider-img']}
          alt="Opis obrazka 1"
        />
      </div>
      <div>
        <img
          src={image2}
          className={styles['slider-img']}
          alt="Opis obrazka 2"
        />
      </div>
    </Slider>
  );
};
