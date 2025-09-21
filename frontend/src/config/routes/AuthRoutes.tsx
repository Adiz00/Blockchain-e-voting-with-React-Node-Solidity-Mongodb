import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { SignIn, Dashboard, ForgetPasswordEmail, OtpAuthentication, ForgetPassword } from "../../containers/index.js";
import DashboardLayout from "../../components/Layout/dashboardLayout.tsx";
import AppRoutes from "./AppRoutes.tsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { currentAuth  } from 'aws-amplify'
import { checkDomainOfScale } from "recharts/types/util/ChartUtils";
import { fetchUserAttributes } from "@aws-amplify/auth";
// import  {Auth} from 'aws-amplify';

type User = {
  // email_verified: false,
  
};

const AuthRoutes: React.FC = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState<User | any>({email_verified: false});
  const isAuthenticated = useSelector((state: any) => state.AppReducer?.isAuthenticated);
  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setUser(userAttributes);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
  
  useEffect(() => {
    // handleFetchUserAttributes();
    
  }, []);
  
  // useEffect(() => {
  //   console.log(user,'ssssss')
  // }, [user]);

  // const user = useSelector((state: any) => state.AppReducer?.user)

  // console.log("user", window.location.pathname);
  // if (window.location.pathname === "/login" && user?.email_verified) {
  //   navigate("/dashboard")
  // }

  console.log(isAuthenticated, "isAuthenticated");	
  
  return (
    <>
      {/* {!user?.authToken ? ( */}
      {/* {!user?.userId ? ( */}
      {/* {console.log(isAuthenticated, "isAuthenticated")} */}
       
        <Routes>
          <Route path="/login" element={
            !isAuthenticated ? <SignIn /> : <Dashboard />} />
          <Route path="/forget-password" element={<ForgetPasswordEmail />} />
          <Route path="/verify-code" element={<OtpAuthentication />} />
          <Route path="/reset-password" element={<ForgetPassword />} />
          <Route path="/logout" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
       {/* ) : (
      
         <DashboardLayout expandible={true}>
          <AppRoutes />
         </DashboardLayout> */}
    //   )
    {/* // } */}
    </>
  )
}

export default AuthRoutes
