import { Helmet } from 'react-helmet';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Portfolio</title>
      </Helmet>

      <p>Portfolio</p>

      <Suspense fallback={'is loading'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default PortfolioPage;
