import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardLayout from '../components/Layout/dashboardLayout.tsx';
const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.AppReducer?.isAuthenticated);

  // console.log(isAuthenticated)

  return isAuthenticated ?

    <DashboardLayout expandible={true}>
      <Outlet />
    </DashboardLayout>

    :
    <Navigate to="/login" />;
};

export default PrivateRoute;