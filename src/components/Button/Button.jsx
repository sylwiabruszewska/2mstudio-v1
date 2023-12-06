import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = props => {
  const { type = 'button', onClick, children } = props;

  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
