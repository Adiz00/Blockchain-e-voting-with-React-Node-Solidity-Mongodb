import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchUserAttributes } from '@aws-amplify/auth';

const PublicRoute = () => {
  const isAuthenticated = useSelector((state) => state.AppReducer?.isAuthenticated);

  return  !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
