import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { SignIn, Dashboard, ForgetPasswordEmail, OtpAuthentication, ForgetPassword, UserManagement, EmailManagement, ContactSupport } from "../../containers/index.js";
import Settings from '../../containers/Settings/index.js';
import SubAdminManagement from '../../containers/SubAdminManagement/index.js';

// import PageNotFound from '../../pages/PageNotFound';
// import routes from '../../utils/menu';

const AppMenu = () => {
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <React.Fragment>
      <Routes>
        <Route element={<PublicRoute />}>

          <Route path="/login" element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPasswordEmail />} />
          <Route path="/verify-code" element={<OtpAuthentication />} />
          <Route path="/reset-password" element={<ForgetPassword />} />
          <Route path="/logout" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
        
        <Route element={<PrivateRoute />}>
          {/* <DashboardLayout expandible={true}> */}
          {/* <Route path="/dashboard" element={<DashboardLayout value={'Dashboard' } />}  */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings/sub-admin-management" element={<SubAdminManagement />} />
          <Route path="/settings/change-password" element={<Settings />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/email-management" element={<EmailManagement />} />
          <Route path="/contact-support" element={<ContactSupport />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          {/* </DashboardLayout> */}

        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}

      </Routes>
    </React.Fragment>
  )
}

export default AppMenu