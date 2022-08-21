import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const DashboardLayout = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />
      {/* Content here */}
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
