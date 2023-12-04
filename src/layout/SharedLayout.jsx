import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import styles from './SharedLayout.module.scss';

export const SharedLayout = () => {
  return (
    <div className={styles['wrapper']}>
      <header>header</header>
      <main className={styles['page-main']}>
        <Suspense fallback={'is loading'}>
          <Outlet />
        </Suspense>
      </main>
      <footer>footer</footer>
    </div>
  );
};
