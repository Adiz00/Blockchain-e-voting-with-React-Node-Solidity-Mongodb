import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';
import Camera from '../pages/Camera';
import Camera2 from '../pages/Camera2';


const AppMenu = () => {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <React.Fragment>
      <Routes>
        <Route element={<PublicRoute />}>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/face-capture" element={<Camera />} /> */}
          {/* <Route path="/face-capture-login" element={<Camera2 />} /> */}
          {/* <Route path="/forget-password" element={<ForgetPasswordEmail />} /> */}
          {/* <Route path="/verify-code" element={<OtpAuthentication />} /> */}
          {/* <Route path="/reset-password" element={<ForgetPassword />} /> */}
          <Route path="/logout" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        
        <Route element={<PrivateRoute />}>
          {/* <DashboardLayout expandible={true}> */}
          {/* <Route path="/dashboard" element={<DashboardLayout value={'Dashboard' } />}  */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings/sub-admin-management" element={<Dashboard />} />
          <Route path="/settings/change-password" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contact-support" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          {/* </DashboardLayout> */}

        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}

      </Routes>
    </React.Fragment>
  )
}

export default AppMenu