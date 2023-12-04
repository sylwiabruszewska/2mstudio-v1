import { Link } from 'react-router-dom';

import { StyledLink } from './Header.styled';
import styles from './Header.module.scss';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';

export const Header = () => {
  return (
    <div className={styles['page-header']}>
      <Link to="/" aria-label="strona główna">
        <Logo className={styles['logo']} />
      </Link>

      <nav className={styles['nav']}>
        <StyledLink to="/" aria-label="strona główna">
          Home
        </StyledLink>
        <StyledLink to="/blog" aria-label="blog">
          Blog
        </StyledLink>
        <StyledLink to="/projekty/wnetrza" aria-label="projekty">
          Projekty
        </StyledLink>
        <StyledLink to="/o-nas" aria-label="o nas">
          O nas
        </StyledLink>
        <StyledLink to="/kontakt" aria-label="kontakt">
          Kontakt
        </StyledLink>
      </nav>

      {/* MENU MOBILE */}
      <button
        className={styles['menu-toggle']}
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        <AiOutlineMenu />
      </button>
    </div>
  );
};
