import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';
import  loginSide  from '../assets/images/loginside.png'

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        userType: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password, userType } = signupInfo;
        if (!name || !email || !password || !userType) {
            return handleError('All fields are required.');
        }
        try {
            // navigate('/face-capture', { state: { signupInfo } });
            const url = `http://localhost:8080/auth/signup`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message || 'Signup failed.';
                handleError(details);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError('An error occurred while signing up.');
        }
    };

    return (
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-[#0C1C33] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Signup Form Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12">
                            <div className="mb-8">
                                <h2 className="text-2xl text-white mb-2">
                                    Create an Account on{' '}
                                    <span className="text-[#4FACFE] font-bold">E-Voting</span>
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    Sign up to get started with our platform.
                                </p>
                            </div>

                            <form onSubmit={handleSignup} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={signupInfo.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={signupInfo.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={signupInfo.password}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    />
                                </div>

                                <div>
                                    <select
                                        name="userType"
                                        value={signupInfo.userType}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    >
                                        <option value="">Select your role</option>
                                        <option value="voter">Voter</option>
                                        <option value="candidate">Candidate</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#4FACFE] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Create Account
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <span className="text-sm text-gray-400">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-[#4FACFE] hover:text-blue-400">
                                        Login
                                    </Link>
                                </span>
                            </div>
                        </div>

                        {/* Illustration Section */}
                        <div className="hidden md:block w-1/2 p-12 relative">
                            <div className="h-full flex items-center justify-center">
                                <img
                                    src={loginSide}
                                    alt="Signup Illustration"
                                    className="w-full h-auto max-w-md"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0A1628]/50" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer theme="dark" />
        </div>
    );
}

export default Signup;
