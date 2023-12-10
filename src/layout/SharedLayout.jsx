import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import styles from './SharedLayout.module.scss';
import { Bar, Header, Footer, Loader } from 'components';
import { selectIsLoading } from '../redux/global/selectors';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles['wrapper']}>
        <header>
          <Bar />
          <Header />
        </header>
        <main className={styles['page-main']}>
          <Suspense fallback={'is loading'}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
