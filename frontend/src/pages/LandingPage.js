import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { FaShieldAlt, FaChartLine, FaUserLock, FaGlobe, FaCubes } from 'react-icons/fa';

const LandingPage = () => {
  const particlesInit = React.useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#230046" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", random: true, straight: false, out_mode: "out" }
          }
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 bg-[#141414] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BlockVote</h1>
          <div className="space-x-4">
            <Link to="/login" className="hover:text-[#320046]">Login</Link>
            <Link to="/signup" className="bg-[#230046] px-4 py-2 rounded hover:bg-[#320046]">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Future of Democracy
          </motion.h2>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Secure, transparent, and accessible voting powered by blockchain technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/signup" className="bg-[#320046] text-white px-8 py-3 rounded-full text-lg hover:bg-[#230046] transition duration-300">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-[#141414]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaShieldAlt />, title: "Secure Voting", description: "End-to-end encryption ensures your vote remains confidential" },
              { icon: <FaChartLine />, title: "Real-time Results", description: "Watch the election unfold with live vote counting" },
              { icon: <FaUserLock />, title: "Voter Verification", description: "Advanced identity verification to prevent fraud" },
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-[#282828] p-6 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4 text-[#320046]">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { step: 1, title: "Register", description: "Create your secure voter account" },
              { step: 2, title: "Verify", description: "Confirm your identity" },
              { step: 3, title: "Vote", description: "Cast your ballot securely" },
              { step: 4, title: "Track", description: "Monitor the results in real-time" },
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-[#230046] rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative z-10 py-20 bg-[#141414]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Uncompromising Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaGlobe className="text-4xl text-[#320046]" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Decentralized Network</h3>
                <p>Our blockchain technology ensures no single point of failure</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaCubes className="text-4xl text-[#320046]" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Immutable Records</h3>
                <p>Once recorded, votes cannot be altered or deleted</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Voting?</h2>
          <p className="text-xl mb-8">Join us in shaping the future of democracy</p>
          <Link to="/signup" className="bg-[#320046] text-white px-8 py-3 rounded-full text-lg hover:bg-[#230046] transition duration-300">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

