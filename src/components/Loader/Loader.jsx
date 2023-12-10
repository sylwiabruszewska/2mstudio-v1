import { TailSpin } from 'react-loader-spinner';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles['loader']}>
      <TailSpin
        height="80"
        width="80"
        color="#c0c0c0"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
