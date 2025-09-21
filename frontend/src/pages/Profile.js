import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "react-toastify/dist/ReactToastify.css";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { candidateFormValues, mailModalValues, voterFormValues } from '../config/Schema/Schema.ts';
import { Text, TextField, Button, Switch, Toggle, Loader, Pagination } from '../components/index.js'
import { useSelector } from "react-redux";
import { Utils } from "../config/index.js";


function Profile() {



  const [loading, setLoading] = useState(false);

  const {name, email, role , voter_id, candidate_id, email_verified, phone_verified} = useSelector((state) => state?.AppReducer?.userData);
  const authToken = useSelector((state) => state?.AppReducer?.user);
  console.log('role ',role);
  
    const validationSchemaCandidateForm = candidateFormValues;
const { handleSubmit: handleSubmitCandidateForm, control: controlCandidateForm, reset: resetCandidateForm } = useForm({
    resolver: yupResolver(validationSchemaCandidateForm),
  });

    const validationSchemaVoterForm = voterFormValues;
const { handleSubmit: handleSubmitVoterForm, control: controlVoterForm, reset: resetVoterForm } = useForm({
    resolver: yupResolver(validationSchemaVoterForm),
  });

  useEffect(() => {
    if(voter_id || candidate_id){
      
    }
  }, []);
  



  const handleCandidateFormSubmit = async (e) => {
    // e.preventDefault();
    console.log('profile info', e);
    setLoading(true);
    const { cnic, registeredDistrict, phone, party, bio } = e;
  
    try {
      const endpoint = "http://localhost:8080/update/update-user";

      const response = await fetch(endpoint, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          cnic,
          registered_district: registeredDistrict,
          phone,
          party,
          bio,
          user_type: role,
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setLoading(false);
        console.log("Update successful:", result.message);
        Utils.showMessage("success", result.message);
        resetCandidateForm({ cnic: "", registeredDistrict: "", phone: "", party: "", bio: "" });
      } else {
        setLoading(false);
        console.error("Update failed:", result.message);
        handleError(result.message || "An error occurred"); // Assuming `handleError` is defined
      }
    } catch (err) {
      setLoading(false);
      console.error("Server error:", err);
      handleError("Server Error: Unable to update profile");
    }
  };

  const handleVoterFormSubmit = async (e) => {
    setLoading(true);
    console.log("Profile info", e);
    const { cnic, registeredDistrict, phone } = e;
  
    try {
      const endpoint = "http://localhost:8080/update/update-user";

      const response = await fetch(endpoint, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          cnic,
          registered_district: registeredDistrict,
          phone,
          user_type: role,
        }),
      });
  
      const result = await response.json();
  
      if (result.success) {
        setLoading(false);
        console.log("Update successful:", result.message);
        Utils.showMessage("success", result.message);
        resetVoterForm({ cnic: "", registeredDistrict: "", phone: "" });
      } else {
        setLoading(false);
        console.error("Update failed:", result.message);
        handleError(result.message || "An error occurred"); // Assuming `handleError` is defined
      }
    } catch (err) {
      setLoading(false);
      console.error("Server error:", err);
      handleError("Server Error: Unable to update profile");
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
          <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block" text={role === "voter" ? "Voter Profile" : "Candidate Profile"} />
        </div>

        {/* Form for candidate */}
        {role === "candidate" && !phone_verified ?

          
            <form className="p-6 pt-16 rounded-b-xl rounded-tr-xl bg-[#1A202A]" >
          <h2 className="text-xl font-semibold text-white mb-8 tracking-wider ">
            Complete <span className="text-[#6087DD] font-bold glow-effect">Your Profile</span>
          </h2>

          {/* CNIC Field */}
          <div className="mb-4">
           <label className="text-[#818B98] font-semibold">CNIC</label>
            <Controller
              name="cnic"
              control={controlCandidateForm}
              // rules={{
              //   required: "CNIC is required",
              //   pattern: {
                  
              //     message: "Enter a valid 13-digit CNIC",
              //   },
              // }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="CNIC"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex flex-wrap -mx-2">

          {/* Party Field */}
          <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">Party</label>

            <Controller
              name="party"
              control={controlCandidateForm}
              // rules={{ required: "Party is required" }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="Party"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* District Field */}
          <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">District</label>

            <Controller
              name="registeredDistrict"
              control={controlCandidateForm}
              // rules={{ required: "District is required" }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="District"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Phone Field */}
          <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">Phone
          </label>

            <Controller
              name="phone"
              control={controlCandidateForm}
              // rules={{
              //   required: "Phone number is required",
              //   pattern: {
              //     value: /^[0-9]{10,15}$/,
              //     message: "Enter a valid phone number (10-15 digits)",
              //   },
              // }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          </div>

          {/* Bio Field */}
          <div className="mb-6">
          <label className="text-[#818B98] font-semibold">Bio</label>

            <Controller
              name="bio"
              control={controlCandidateForm}
              render={({ field, fieldState }) => (
                <div>
                  <textarea
                    placeholder="Bio"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none transition-colors h-32 resize-none"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="flex">
          <button
              type='submit'
              onClick={handleSubmitCandidateForm((data) => handleCandidateFormSubmit(data))}
              className="w-[25%] ml-auto bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-20"
          >
            Submit
          </button>
          </div>
        </form>
        : role === "candidate" && phone_verified  ? 
        <form className="p-6 pt-16 rounded-b-xl rounded-tr-xl bg-[#1A202A]" >
          <h2 className="text-xl font-semibold text-white mb-12 tracking-wider ">
            Completed <span className="text-[#6087DD] font-bold glow-effect"> Profile</span>
          </h2>
          {/* name, email, role , voter_id, candidate_id, email_verified, phone_verified */}
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Name <span className="text-[#818986] font-bold"> {name}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Email <span className="text-[#818986] font-bold"> {email}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Role <span className="text-[#818986] font-bold"> {role}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Address <span className="text-[#818986] font-bold"> {candidate_id}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Email <span className="text-[#818986] font-bold"> {email_verified && "Verified"}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Phone <span className="text-[#818986] font-bold"> {phone_verified && "Verified"}</span>
          </h3>
        </form>
        : null}
        
        

        {/* Form for Voter */}
        {role === "voter" &&  !phone_verified ?
        <form className="p-6 pt-16 rounded-b-xl rounded-tr-xl bg-[#1A202A]" >
          <h2 className="text-xl font-semibold text-white mb-8 tracking-wider ">
            Complete <span className="text-[#6087DD] font-bold glow-effect">Your Profile</span>
          </h2>

          {/* CNIC Field */}
          <div className="mb-4">
           <label className="text-[#818B98] font-semibold">CNIC</label>
            <Controller
              name="cnic"
              control={controlVoterForm}
              // rules={{
              //   required: "CNIC is required",
              //   pattern: {
                  
              //     message: "Enter a valid 13-digit CNIC",
              //   },
              // }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="CNIC"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="flex flex-wrap -mx-2">

          {/* Party Field */}
          {/* <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">Party</label>

            <Controller
              name="party"
              control={controlCandidateForm}
              // rules={{ required: "Party is required" }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="Party"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div> */}

          {/* District Field */}
          <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">District</label>

            <Controller
              name="registeredDistrict"
              control={controlVoterForm}
              // rules={{ required: "District is required" }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="District"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Phone Field */}
          <div className="w-1/2 px-2 mb-4">
          <label className="text-[#818B98] font-semibold">Phone
          </label>

            <Controller
              name="phone"
              control={controlVoterForm}
              // rules={{
              //   required: "Phone number is required",
              //   pattern: {
              //     value: /^[0-9]{10,15}$/,
              //     message: "Enter a valid phone number (10-15 digits)",
              //   },
              // }}
              render={({ field, fieldState }) => (
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          </div>

          {/* Bio Field */}
          {/* <div className="mb-6">
          <label className="text-[#818B98] font-semibold">Bio</label>

            <Controller
              name="bio"
              control={controlCandidateForm}
              render={({ field, fieldState }) => (
                <div>
                  <textarea
                    placeholder="Bio"
                    className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none transition-colors h-32 resize-none"
                    {...field}
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                  )}
                </div>
              )}
            />
          </div> */}

          {/* Submit Button */}
          <div className="flex">
          <button
              type='submit'
              onClick={handleSubmitVoterForm((data) => handleVoterFormSubmit(data))}
              className="w-[25%] ml-auto bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-20"
          >
            Submit
          </button>
          </div>
        </form>

        : role === "voter" && phone_verified ?

        <form className="p-6 pt-16 rounded-b-xl rounded-tr-xl bg-[#1A202A]" >
          <h2 className="text-xl font-semibold text-white mb-12 tracking-wider ">
            Completed <span className="text-[#6087DD] font-bold glow-effect"> Profile</span>
          </h2>
          {/* name, email, role , voter_id, candidate_id, email_verified, phone_verified */}
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Name <span className="text-[#818986] font-bold"> {name}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Email <span className="text-[#818986] font-bold"> {email}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Role <span className="text-[#818986] font-bold"> {role}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Address <span className="text-[#818986] font-bold"> {voter_id}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Email <span className="text-[#818986] font-bold"> {email_verified && "Verified"}</span>
          </h3>
          <h3 className="text-sm font-semibold text-white mb-8 tracking-wider ">
            Phone <span className="text-[#818986] font-bold"> {phone_verified && "Verified"}</span>
          </h3>
        </form>

        : null
        }
      {/* </div> */}
    </div>
  </div>
  </>
  );
}

export default Profile;
