import styles from './Bar.module.scss';
import { Container } from 'components';

import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

export const Bar = () => {
  return (
    <Container type="wide">
      <div className={styles['bar']}>
        <ul className={styles['contact-list']}>
          <li>
            <a href="mailto:marczak@2mstudio.org.pl">
              <div className={styles['contact-list__content']}>
                <FaEnvelope className={styles['contact-list__icon']} />
                <span>marczak@2mstudio.org.pl</span>
              </div>
            </a>
          </li>
          <li>
            <a href="tel:+48604258222">
              <div className={styles['contact-list__content']}>
                <FaPhoneAlt className={styles['contact-list__icon']} />
                <span>+48 604 258 222</span>
              </div>
            </a>
          </li>
        </ul>

        <ul className={styles['social-links']}>
          <li>
            <a
              className={styles['social-links__link']}
              href="https://www.facebook.com/2mstudiopracowniaprojektowa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz mój profil na Facebooku"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              className={styles['social-links__link']}
              href="https://www.instagram.com/2mstudiopracownia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz mój profil na Instagramie"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};
