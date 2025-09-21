import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "react-toastify/dist/ReactToastify.css";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { mailModalValues } from '../config/Schema/Schema.ts';
import { Text, TextField, Button, Switch, Toggle, Loader, Pagination } from '../components/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { Utils } from "../config/index.js";
import { SAVE_USER } from "../store/constants.js";
import AppAction from "../store/actions/AppAction.js";


function Dashboard() {

  const [loading, setLoading] = useState(false);
  
  const {name, email, role} = useSelector((state) => state?.AppReducer?.userData);
    const token = localStorage.getItem('token');
  // console.log(userData);

  const dispatch = useDispatch();

  useEffect(() => {
      if (role) {
        getUser();
      }
    }, [role]);

  const getUser = async () => {
    setLoading(true);

    try {
        const endpoint = `http://localhost:8080/user?user_type=${role}`; 

        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        const result = await response.json();

        if (result.success) {
            setLoading(false);
            console.log("User data fetched successfully:", result.user);
            Utils.showMessage("success", result.message);
            console.log("User data fetched successfully:", result.user);
            dispatch(AppAction.saveUser({ role, ...result.user }, () => { }))
          } else {
            setLoading(false);
            console.error("Fetching user data failed:", result.message);
            Utils.showMessage("error", result.message);
        }
    } catch (err) {
        setLoading(false);
        console.error("Error fetching user data:", err);
        Utils.showMessage("error", "An error occurred while fetching user data.");
    }
};


  return (
    <>
    {loading ?
              <Loader.Circular className="loader-overlay" size={60} color={'#6087DD'} /> : null
            }
    <div className=" bg-[#6087DD] ml-5 flex items-center justify-center">
    <div className="w-full">
      {/* <div className=""> */}
        {/* Tabs */}
        <div className="w-[15rem] flex items-center gap-4 p-7 py-4 rounded-t-xl bg-[#1A202A] text-white">
        <div className="h-3 w-3 rounded-full inline bg-[#6087DD]"></div>
          <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block" text="Welcome" />
        </div>

        <div className="p-6 pt-16 h-[100vh] rounded-b-xl rounded-tr-xl bg-[#1A202A]" >
          <h1 className="text-center mt-[10rem] text-3xl font-semibold text-white mb-8 tracking-wider ">
            Welcome <span className="text-[#6087DD] font-bold glow-effect">{name}!</span>
          </h1>
          <h1 className="text-center mt-[1rem] text-xl font-semibold text-white mb-8 tracking-wider ">
            Complete Your Profile to {role == "candidate" ? "Registered as Candidate and Vote" : "Vote"}.
          </h1>
          

          
        </div>
      {/* </div> */}
    </div>
  </div>
  </>
  );
}

export default Dashboard;
