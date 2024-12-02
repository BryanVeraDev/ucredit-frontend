import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/login' && <NavBar />}
      <Outlet />
    </>
  );
};

export default Layout;
