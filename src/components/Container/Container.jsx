import PropTypes from 'prop-types';
import styles from './Container.module.scss';

export const Container = ({ children, className, type }) => {
  const containerClass = type === 'full' ? styles.full : styles.wide;

  return <div className={`${containerClass} ${className}`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['full', 'wide']),
};
