import { BiSolidCoffeeAlt } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';

import styles from './ListStages.module.scss';

export const ListStages = () => {
  return (
    <div>
      <div className={styles['stages-bg']}></div>
      <ul className={styles['list-stages']}>
        <li className={styles['list__item']}>
          <BiSolidCoffeeAlt className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Spotkanie</h3>
          <p className={styles['item__text']}>
            Spotykamy się na wstępną rozmowę odnośnie potrzeb i stylistyki, przy
            okazji wykonywana jest inwentaryzacja pomieszczeń.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaLightbulb className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Projektowanie</h3>
          <p className={styles['item__text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            imperdiet, erat id porttitor pellentesque, magna velit facilisis
            ante, et auctor enim nunc non nunc.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaBook className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Projekt wykonawczy</h3>
          <p className={styles['item__text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            imperdiet, erat id porttitor pellentesque, magna velit facilisis
            ante, et auctor enim nunc non nunc.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaHouse className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Realizacja</h3>
          <p className={styles['item__text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            imperdiet, erat id porttitor pellentesque, magna velit facilisis
            ante, et auctor enim nunc non nunc.
          </p>
        </li>
      </ul>
    </div>
  );
};
