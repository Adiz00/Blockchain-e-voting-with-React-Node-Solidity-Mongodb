import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Text, TextField, Button, Switch, Toggle, Loader, Pagination } from '../components/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { Utils, votingSystem } from "../config/index.js";
import { utils } from "ethers";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BigNumber } from "ethers";
import { Controller, useForm } from 'react-hook-form';
import { hoursValues, mailModalValues, voteValues } from '../config/Schema/Schema.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";


function Wallet() {

  
  const userData = useSelector((state) => state?.AppReducer?.userData);
  // console.log(userData);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");
  const [account, setAccount] = useState(null);
  const [candidates, setCandidates] = useState([
    // { name: "A", voteCount: 8 , candidateAddress: "0x8d38408c6BD6c371e1a771818D2bCb14FE11688h"},
    // { name: "B", voteCount: 5 , candidateAddress: "0x8d38408c6BD6c371e1a771818D2bCb14FE11688g"},
    // { name: "C", voteCount: 2 , candidateAddress: "0x8d38408c6BD6c371e1a771818D2bCb14FE11688f"},
    // { name: "D", voteCount: 10, candidateAddress: "0x8d38408c6BD6c371e1a771818D2bCb14FE11688d"},
  ]);
  const [electionActive, setElectionActive] = useState(false);
  const [contract, setContract] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const dispatch = useDispatch();

  const {name, email, role, voter_id, candidate_id, party} = useSelector((state) => state?.AppReducer?.userData);
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (role) {
  //     getUser();
  //   }
  // }, [role]);

  const navigate = useNavigate();
  //on acc change
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          console.log("Account changed:", accounts[0]);
        } else {
          setAddress("");
          console.log("MetaMask is locked or no accounts are connected.");
        }
      };

      // Listen for account changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      // Cleanup the listener on unmount
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
    checkElectionStatus();
    // registerCandidate('B'); 
    // voteForCandidate("0x8d38408c6BD6c371e1a771818D2bCb14FE11688F");
  }, []);

  // Listen for contract events
  useEffect(() => {
    if (contract) {
      votingSystem.listenForElectionEvents(handleVoteCast, handleElectionStart);
    }

    // Cleanup on unmount
    return () => {
      if (contract) {
        contract.removeAllListeners("VoteCast");
        contract.removeAllListeners("ElectionStarted");
      }
    };
  }, [contract]);

  const validationSchemaVote = voteValues;
  const { handleSubmit: handleSubmitVote, control: controlVote, reset: resetVote } = useForm({
    resolver: yupResolver(validationSchemaVote),
  });

  const validationSchemahours = hoursValues;
  const { handleSubmit: handleSubmitHours, control: controlhours, reset: resethours } = useForm({
    resolver: yupResolver(validationSchemahours),
  });

  useEffect(() => {
      if(voter_id || candidate_id){
        setAddress(voter_id || candidate_id);
      }
    }, []);

  // Function to connect MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request accounts
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        const walletAddress = accounts[0];
        setAddress(walletAddress);
        console.log("Connected Address:", walletAddress);
        Utils.showMessage("success", "Wallet connected successfully.");

        // Initialize contract
        const contract = await votingSystem.getContractInstance();
        setContract(contract);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  };

  // Function to send a transaction
  const sendTransaction = async () => {
    // if (window.ethereum && address) {
    //   try {
    //     // Specify transaction parameters
    //     const transactionParameters = {
    //       to: "0xRecipientAddressHere", // Replace with the recipient address
    //       from: address,
    //       value: "0x29a2241af62c0000", // 0.01 ETH in hexadecimal
    //     };

    //     // Request transaction
    //     const txHash = await window.ethereum.request({
    //       method: "eth_sendTransaction",
    //       params: [transactionParameters],
    //     });
    //     console.log("Transaction Hash:", txHash);
    //   } catch (error) {
    //     console.error("Error sending transaction:", error);
    //   }
    // } else {
    //   alert("Please connect your wallet first.");
    // }
  };

  // const convertCandidates = (candidatesList) => {
  //   console.log('candidatesList', candidatesList[0]);
  //   console.log('candidatesList', candidatesList[0]?.candidateAddress || candidatesList[0]?.[2]);
    
  //   return candidatesList.map(candidate => ({
  //     name: candidate[0],
  //     voteCount: BigNumber.isBigNumber(candidate[1]) ? candidate[1].toString() : candidate[1],
  //     candidateAddress: candidate.candidateAddress || candidate[2],  // it's a bytes32 hash

  //   }));
  // };


const convertCandidates = (candidatesList) => {
  return candidatesList.map(candidate => {
    const name = candidate[0];
    const voteCount = BigNumber.isBigNumber(candidate[1])
      ? candidate[1].toString()
      : candidate[1];

    // Get the last 40 characters (20 bytes) from the padded address
    const rawAddress = candidate[2];
    const cleanAddress = ethers.utils.getAddress(
      "0x" + rawAddress.slice(-40)
    );

    return {
      name,
      voteCount,
      candidateAddress: cleanAddress
    };
  });
};

  
  const fetchCandidates = async () => {
    try{
    const contract = await votingSystem.getContractInstance();
    if (!contract) {
      alert("Contract not found. Please connect your wallet."); 
      return;
    }
    const candidatesList = await contract.getTotalCandidates();
    console.log('candidatesList', candidatesList);
    const simplifiedCandidates = convertCandidates(candidatesList);
    console.log('simplifiedCandidates',simplifiedCandidates);
    setCandidates(simplifiedCandidates);
    Utils.showMessage("success", "Candidates fetched successfully!");
    console.log('candidates list',simplifiedCandidates);
    }
    catch (error) {
      console.error("Error fetching candidates:", error);
      Utils.showMessage("error", "Failed to fetch candidates.");
    }
  }; 

  const checkElectionStatus = async () => {
    try{
    const contract = await votingSystem.getContractInstance();
    const isActive = await contract.isElectionActive();
    setElectionActive(isActive);
    console.log('checkElectionStatus',isActive);
    }
    catch (error) {
      console.error("Error fetching candidates:", error);
      Utils.showMessage("error", "Could not check election status.");
    }
  };

  // Function to vote for a candidate
  const voteForCandidate = async (candidateAddress) => {
    // const {address } = candidateAddress; 
    console.log("Voting for candidate:", address);
    console.log("candidateAddress:", candidateAddress);

    if ((voter_id && voter_id !== address) || (candidate_id && candidate_id !== address)) {
      console.log("user id", voter_id || candidate_id);
      console.log("user address", address);
  
      alert("Connect registered wallet first");
      Utils.showMessage("error", "Connect registered wallet first");
      return;
  }

    try {
      const contract = await votingSystem.getContractInstance();
      const tx = await contract.vote(candidateAddress?.address);
      await tx.wait();
      alert("Vote cast successfully!");
      Utils.showMessage("success", "Vote cast successfully!");
      fetchCandidates(); // Refresh candidate list
    } catch (error) {
      console.error(error);
      Utils.showMessage("error", error.reason);
      // alert("An error occurred while voting.");
    }
  };

  // Function to register a candidate
  const registerCandidate = async (name) => {
    if ((candidate_id && candidate_id !== address)) {
      alert("Connect registered wallet first");
      Utils.showMessage("error", "Connect registered wallet first");
      return;
    }
    try {
      const contract = await votingSystem.getContractInstance();
      const tx = await contract.registerCandidate(name);
      await tx.wait();
      alert("Candidate registered successfully!");
      Utils.showMessage("success", "Candidate registered successfully!");
      fetchCandidates(); // Refresh candidate list
    } catch (error) {
      console.error(error);
      alert("An error occurred while registering the candidate.");
      Utils.showMessage("error", error.reason);
    }
  };

  // Handle Election Start Event
  const handleElectionStart = (start, end) => {
    setElectionActive(true);
    setStartTime(new Date(start.toNumber() * 1000).toLocaleString());
    setEndTime(new Date(end.toNumber() * 1000).toLocaleString());
    Utils.showMessage("success", "Election started successfully!");
  };

  // Handle Vote Cast Event
  const handleVoteCast = (candidateAddress, voteCount, candidatesArray) => {
    Utils.showMessage("success", `Vote cast successfully! Total votes: ${voteCount.toNumber()}`);
    // Update vote counts
    setCandidates(candidatesArray.map(candidate => ({
      ...candidate,
      voteCount: candidate.voteCount.toNumber(),
    })));
  };

  // Function to start an election
  const startElection = async (data) => {
    console.log("Starting election...", data);
    const { hours } = data;
    
    const contract = await votingSystem.getContractInstance();

    if (!contract) {
      Utils.showMessage("error", "Please connect your wallet first.");
      return;
    }

    try {
      
      const _startTime = Math.floor(Date.now() / 1000); // Current time in seconds
        const durationInSeconds = Math.floor(hours * 3600); // Convert hours to seconds
        const _endTime = _startTime + durationInSeconds; 

      const tx = await contract.startElection(_startTime, _endTime);
      await tx.wait();
      Utils.showMessage("success", "Election started successfully!");
    } catch (error) {
      console.error("Error starting election:", error);
      Utils.showMessage("error", error.reason);
    }
  };

  // Function to start an election
  const endElection = async (data) => {
    console.log("Ending election...", data);
    const { hours } = data;
    
    const contract = await votingSystem.getContractInstance();

    if (!contract) {
      Utils.showMessage("error", "Please connect your wallet first.");
      return;
    }

    try {
      const tx = await contract.endElection();
      await tx.wait();
      Utils.showMessage("success", "Election ended successfully!");
    } catch (error) {
      console.error("Error ending election:", error);
      Utils.showMessage("error", error.reason);
    }
  };

  const handleSubmitAddress = async () => {
     setLoading(true);
      
        try {
          const endpoint = "http://localhost:8080/update/update-wallet";
    
          const response = await fetch(endpoint, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              address: address,
              user_type: role,
            }),
          });
      
          const result = await response.json();
      
          if (result.success) {
            setLoading(false);
            console.log("Update successful:", result.message);
            Utils.showMessage("success", result.message);
            if (role === "candidate") {
              registerCandidate(party);
            }
            navigate("/dashboard");
          } else {
            setLoading(false);
            console.error("Update failed:", result.message);
            Utils.showMessage("error", result.message);
          }
        } catch (err) {
          setLoading(false);
          console.error("Server error:", err);
          Utils.showMessage("error", "An error occurred. Please try again later.");
        }
  };

  const getUser = async () => {
     setLoading(true);
      
        try {
          const endpoint = "http://localhost:8080/user";
    
          const response = await fetch(endpoint, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
              user_type: role,
            }),
          });
      
          const result = await response.json();
      
          if (result.success) {
            setLoading(false);
            console.log("User get successful:", result.message);
            Utils.showMessage("success", result.message);
          } else {
            setLoading(false);
            console.error("Update failed:", result.message);
            Utils.showMessage("error", result.message);
          }
        } catch (err) {
          setLoading(false);
          console.error("Server error:", err);
          Utils.showMessage("error", "An error occurred in getting user. Please try again later.");
        }
  };

  const downloadReport = () => {
    if (!candidates.length) {
      alert("No candidates to report.");
      return;
    }
  
    const headers = ["Name", "Vote Count", "Candidate Address"];
    const rows = candidates.map((c) =>
      [c.name, c.voteCount, c.candidateAddress].join(",")
    );
  
    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "election_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  


  return (
    <>
      {loading ? (
        <Loader.Circular
          className="loader-overlay"
          size={60}
          color={"#6087DD"}
        />
      ) : null}
      <div className=" bg-[#6087DD] ml-5 flex items-center justify-center">
        <div className="w-full">
          {/* <div className=""> */}
          {/* Tabs */}
          <div className="w-[15rem] flex items-center gap-4 p-7 py-4 rounded-t-xl bg-[#1A202A] text-white">
            <div className="h-3 w-3 rounded-full inline bg-[#6087DD]"></div>
            <Text.Basic
              className="text-[.6rem] md:text-[.8rem] font-semibold block"
              text="Wallet"
            />
          </div>

          <div className="p-6 pt-8 h-auto rounded-b-xl rounded-tr-xl bg-[#1A202A] flex flex-col ">
            {candidates.length > 0 && (
              <div className="w-full mt-10 mb-14">
                <Text.Basic
                  className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10"
                  text="Live Voting"
                />
                <VoteChart candidates={candidates} />
              </div>
            )}

            {!address && (
              <div>
                <Text.Basic
                  className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10"
                  text="No Wallet Connected"
                />
                <button
                  type="button"
                  onClick={connectWallet}
                  className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                >
                  Connect Wallet
                </button>
              </div>
            )}

            {address && (
              <>
                <Text.Basic
                  className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-6"
                  text={`Connected Address: " ${address}`}
                />

                {!(voter_id || candidate_id) && (
                  <button
                    type="submit"
                    onClick={handleSubmitAddress}
                    disabled={role == "admin"}
                    className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-16"
                  >
                    Save Address
                  </button>
                )}

                {/* Register Candidate */}
                {candidate_id && (
                  <button
                    type="submit"
                    onClick={() => registerCandidate(party)}
                    disabled={role == "admin" || role == "voter"}
                    className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-16"
                  >
                    Register As Candidate
                  </button>
                )}
                {/* Admin Controls */}
                {/* {role === "admin" && ( */}
                {true && (
                  <>
                    <div className="mb-4">
                      <label className="text-[#818B98] font-semibold">
                        Hours ( How many hours voting will be open )
                      </label>
                      <Controller
                        name="hours"
                        control={controlhours}
                        rules={{
                          required: "Hours is required",
                          pattern: {
                            // value: /^\d{13}$/,
                            message: "Enter a valid hours ",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <div>
                            <input
                              type="text"
                              placeholder="hours"
                              className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                              {...field}
                            />
                            {fieldState.error && (
                              <p className="text-red-500 text-xs mt-1">
                                {fieldState.error.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmitHours((data) => startElection(data))}
                      disabled={electionActive || role !== "admin"}
                      className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                    >
                      Start Election
                    </button>
                    <button
                      type="submit"
                      onClick={endElection}
                      disabled={role !== "admin"}
                      className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                    >
                      End Election
                    </button>

                    {/* Election Status */}
                    <div className="w-full max-w-md">
                      <Text.Basic
                        className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-5"
                        text={"Election Status "}
                      />
                      <Text.Basic
                        className="text-[.6rem] md:text-[.8rem] font-semibold block text-[#6087DD] mb-10"
                        text={electionActive ? "Active" : "Inactive"}
                      />

                      {/* {electionActive && (
                      <>
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10" text={"Start Time: " + startTime} />
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10" text={"End Time: " + endTime} />
                  
                      </>
                    )} */}
                    </div>
                  </>
                )}

                {/* Vote to candidate */}
                <Text.Basic
                  className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-6"
                  text=" Vote to Candidate"
                />

                {true && (
                  <>
                    <div className="mb-4">
                      <label className="text-[#818B98] font-semibold">
                        Candidate Address ( Enter the address of the candidate
                        you want to vote for )
                      </label>
                      <Controller
                        name="address"
                        control={controlVote}
                        rules={{
                          required: "Address is required",
                          pattern: {
                            // value: /  ^0x[a-fA-F0-9]{40}$/i,
                            message: "Enter a valid address",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <div>
                            <input
                              type="text"
                              placeholder="Candidate Address"
                              className="w-full bg-[#1A202A] border border-[#334153] text-white rounded-lg px-4 py-3 mt-2 mb-4 text-sm focus:outline-none  transition-colors"
                              {...field}
                            />
                            {fieldState.error && (
                              <p className="text-red-500 text-xs font-semibold mt-1">
                                {fieldState.error.message}
                              </p>
                            )}
                          </div>
                        )}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmitVote((data) =>
                        voteForCandidate(data)
                      )}
                      className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                    >
                      Vote
                    </button>

                    {/* <div className="w-full max-w-md">
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-5" text={"Election Status "} />
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-[#6087DD] mb-10" text={electionActive ? "Active" : "Inactive"} />

                    {electionActive && (
                      <>
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10" text={"Start Time: " + startTime} />
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10" text={"End Time: " + endTime} />
                  
                      </>
                    )}
                  </div> */}
                  </>
                )}

                {/* Candidate Registration */}
                {/* {true && (
                <div className="w-full">
                  <Text.Basic className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10" text={"Candidate Registration" } />
                  <RegisterCandidateForm registerCandidate={registerCandidate} />
                </div>
              )} */}

                {/* Voter Controls */}
                {true && (
                  <div className="w-full mb-10">
                    <Text.Basic
                      className="text-[.6rem] md:text-[.8rem] font-semibold block text-white mb-10"
                      text={"Candidates"}
                    />
                    <CandidatesList
                      candidates={candidates}
                      voteForCandidate={voteForCandidate}
                      electionActive={electionActive}
                    />
                  </div>
                )}
                {/* <button
                type="button"
                className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                onClick={sendTransaction}
              >
                Send Transaction
              </button> */}
                <button
                  type="submit"
                  onClick={downloadReport}
                  className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
                >
                  Download Report
                </button>
              </>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

// Component for Candidate Registration Form
const RegisterCandidateForm = ({ registerCandidate }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      Utils.showMessage("error", "Name cannot be empty.");
      return;
    }
    await registerCandidate(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Candidate Name"
        className="p-2 rounded text-black"
      />
      <button
        type="submit"
        className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
      >
        Register
      </button>
    </form>
  );
};

// Component for Displaying Candidates and Voting
const CandidatesList = ({ candidates, voteForCandidate, electionActive }) => {
  return (
    <div className="flex flex-col gap-4">
      {candidates.length === 0 ? (
        <p className="text-white">No candidates registered.</p>
      ) : (
        candidates.map((candidate, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded">
            <p className="text-white">Name: {candidate.name}</p>
            <p className="text-white">Votes: {candidate.voteCount}</p>
            <p className="text-white">Address: {candidate.candidateAddress}</p>
            {/* { (
              <button
                onClick={() => voteForCandidate(candidate.candidateAddress)}
                className="w-[25%] bg-gradient-to-r from-[#2F7AAC] to-[#5AF4FF] text-white py-3 hover:opacity-90 transition-opacity rounded font-medium mb-10"
              >
                Vote
              </button>
            )} */}
          </div>
        ))
      )}
    </div>
  );
};

// Component for displaying the vote chart
const VoteChart = ({ candidates }) => {
  const data = candidates.map(candidate => ({
    name: candidate.name,
    votes: candidate.voteCount,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="votes" fill="#8884d8" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Wallet;

