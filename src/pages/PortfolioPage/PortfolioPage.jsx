import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <>
      <p>Portfolio</p>

      <Suspense fallback={'is loading'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PortfolioPage;
