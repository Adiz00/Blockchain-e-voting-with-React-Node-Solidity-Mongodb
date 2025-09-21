import React, { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { handleError, handleSuccess } from '../utils'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Particles from 'react-particles'
import { loadFull } from "tsparticles"
import 'react-toastify/dist/ReactToastify.css'
import  loginSide  from '../assets/images/loginside.png'
import { useDispatch, useSelector } from "react-redux";
import AppAction from "../store/actions/AppAction";

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
        userType: '',
        // rememberMe: false
    })

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setLoginInfo(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value   
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password, userType } = loginInfo;
        // if(email === 'adil@gmail.com' && password === '12345') {
        if(email === 'administrator@gmail.com' && password === '12345') {
            dispatch(AppAction.isAuthenticated(true, () => { }))
            dispatch(AppAction.saveUser({ token: '', email: 'adil@gmail.com', name: 'adil', role: 'admin' }, () => { }))
            navigate('/dashboard')
            return
        }
        console.log(loginInfo);
        
        if (!email || !password || !userType) {
            return handleError('All fields are required')
        }
        try {
            const url = `http://localhost:8080/auth/login`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            const result = await response.json()
            const { success, message, jwtToken, name, error } = result
            if (success) {
                console.log('authtoken', jwtToken);
                
                handleSuccess(message)
                // localStorage.setItem('token', jwtToken)
                // localStorage.setItem('loggedInUser', name)
                localStorage.setItem('token', jwtToken)
                dispatch(AppAction.saveUser({ token: jwtToken, email: email, name: name, role: userType }, () => { }))
                dispatch(AppAction.isAuthenticated(true, () => {
                    navigate('/dashboard')
                }))
                // setTimeout(() => {
                //     navigate('/home')
                // }, 1000)
            } else if (error) {
                const details = error?.details[0].message
                handleError(details)
            } else if (!success) {
                handleError(message)
            }
        } catch (err) {
            handleError(err)
        }
    }

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    return (
        <div className="min-h-screen bg-[#0A1628] flex items-center justify-center relative overflow-hidden">
            {/* <Particles
                className="absolute inset-0"
                init={particlesInit}
                options={{
                    particles: {
                        number: { value: 20 },
                        color: { value: "#4FACFE" },
                        opacity: { value: 0.3 },
                        size: { value: 3 },
                        move: {
                            direction: "none",
                            enable: true,
                            speed: 1,
                            random: true
                        }
                    }
                }}
            /> */}
            
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto bg-[#0C1C33] rounded-2xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Login Form Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12">
                            <div className="mb-8">
                                <h2 className="text-2xl text-white mb-2">Login to <span className="text-[#4FACFE] font-bold">E-Voting</span></h2>
                                <p className="text-gray-400 text-sm">
                                    To keep connected with us please login with your personal info
                                </p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={loginInfo.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={loginInfo.password}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    />
                                </div>

                                <div>
                                    <select
                                        name="userType"
                                        value={loginInfo.userType}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A1628] border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#4FACFE]"
                                    >
                                        <option value="">Select your role</option>
                                        <option value="voter">Voter</option>
                                        <option value="candidate">Candidate</option>
                                    </select>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={loginInfo.rememberMe}
                                            onChange={handleChange}
                                            className="rounded border-gray-700 text-[#4FACFE] focus:ring-[#4FACFE]"
                                        />
                                        <span className="ml-2 text-sm text-gray-400">Remember me</span>
                                    </label>
                                    <Link to="/forgot-password" className="text-sm text-[#4FACFE] hover:text-blue-400">
                                        Forgot Password?
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#4FACFE] text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Login to your Account
                                </button>

                                <div className="text-center">
                                    <p className="text-gray-400 text-sm mb-4">or Sign in with</p>
                                    <div className="flex justify-center space-x-4">
                                        <button type="button" className="p-2 rounded-full bg-[#0A1628] hover:bg-[#0C1C33] transition-colors">
                                            <FcGoogle size={24} />
                                        </button>
                                        <button type="button" className="p-2 rounded-full bg-[#0A1628] hover:bg-[#0C1C33] transition-colors text-blue-600">
                                            <FaFacebook size={24} />
                                        </button>
                                        <button type="button" className="p-2 rounded-full bg-[#0A1628] hover:bg-[#0C1C33] transition-colors text-blue-400">
                                            <FaTwitter size={24} />
                                        </button>
                                        <button type="button" className="p-2 rounded-full bg-[#0A1628] hover:bg-[#0C1C33] transition-colors text-blue-500">
                                            <FaLinkedin size={24} />
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-6 text-center">
                                <span className="text-sm text-gray-400">
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-[#4FACFE] hover:text-blue-400">
                                        Register Now
                                    </Link>
                                </span>
                            </div>
                        </div>

                        {/* Illustration Section */}
                        <div className="hidden md:block w-1/2 p-12 relative">
                            <div className="h-full flex items-center justify-center">
                                <img
                                    src={loginSide}
                                    alt="Analytics Illustration"
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
    )
}

export default Login

