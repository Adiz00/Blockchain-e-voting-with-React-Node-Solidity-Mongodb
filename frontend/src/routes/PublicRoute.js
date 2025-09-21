import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.AppReducer?.isAuthenticated);

  return  !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
