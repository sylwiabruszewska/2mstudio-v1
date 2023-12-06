import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import styles from './SliderPortfolio.module.scss';
import image1 from '../../assets/images/slider/interior1.jpg';
import image2 from '../../assets/images/slider/interior2.jpg';
import image3 from '../../assets/images/slider/interior3.jpg';
import image4 from '../../assets/images/slider/interior4.jpg';

export const SliderPortfolio = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass=""
      customButtonGroup={null}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1280,
          },
          items: 3,
        },
        tablet: {
          breakpoint: {
            max: 1280,
            min: 768,
          },
          items: 2,
        },
        mobile: {
          breakpoint: {
            max: 768,
            min: 0,
          },
          items: 1,
        },
      }}
      sliderClass=""
    >
      <img src={image1} className={styles['slider-img']} alt="Opis obrazka 1" />
      <img src={image2} className={styles['slider-img']} alt="Opis obrazka 2" />
      <img src={image3} className={styles['slider-img']} alt="Opis obrazka 3" />
      <img src={image4} className={styles['slider-img']} alt="Opis obrazka 4" />
      <img src={image1} className={styles['slider-img']} alt="Opis obrazka 1" />
      <img src={image2} className={styles['slider-img']} alt="Opis obrazka 2" />
    </Carousel>
  );
};
