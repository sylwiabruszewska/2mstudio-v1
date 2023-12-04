import PropTypes from 'prop-types';
import styles from './Section.module.scss';

export const Section = ({ title, children, className }) => {
  return (
    <section className={`${styles.section} ${className}`}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      <div className={styles.box}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
