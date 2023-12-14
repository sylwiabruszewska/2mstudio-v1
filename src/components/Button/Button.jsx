import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = props => {
  const { type = 'button', onClick, children, className } = props;

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
