import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './layout/SharedLayout';

import Home from './pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* Strona główna */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
