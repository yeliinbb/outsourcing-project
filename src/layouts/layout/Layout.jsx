import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../common/NavBar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex-1 bg-bgGray overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
