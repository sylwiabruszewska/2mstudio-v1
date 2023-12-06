import styles from './ListTrust.module.scss';
import sprite from 'assets/images/icons.svg';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ListTrust = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      customButtonGroup={null}
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 4,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 768,
          },
          items: 3,
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
      <div className={styles['carousel-item']}>
        <svg className={styles['clients-icon']} width="220" height="100">
          <use href={sprite + '#icon-logo1'}></use>
        </svg>
      </div>
      <div className={styles['carousel-item']}>
        <svg className={styles['clients-icon']} width="220" height="100">
          <use href={sprite + '#icon-logo2'}></use>
        </svg>
      </div>
      <div className={styles['carousel-item']}>
        <svg className={styles['clients-icon']} width="220" height="100">
          <use href={sprite + '#icon-logo3'}></use>
        </svg>
      </div>
      <div className={styles['carousel-item']}>
        <svg className={styles['clients-icon']} width="220" height="100">
          <use href={sprite + '#icon-logo4'}></use>
        </svg>
      </div>
      <div className={styles['carousel-item']}>
        <svg className={styles['clients-icon']} width="220" height="100">
          <use href={sprite + '#icon-logo5'}></use>
        </svg>
      </div>
    </Carousel>
  );
};
