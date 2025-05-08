import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeOffIcon, MailIcon, LockClosedIcon, UserIcon } from '@heroicons/react/outline';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create background particles
    const newParticles = [];
    const colors = ['#60a5fa', '#93c5fd', '#3b82f6', '#818cf8', '#8b5cf6'];
    
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        posX: Math.random() * window.innerWidth,
        posY: Math.random() * window.innerHeight,
        moveX: (Math.random() - 0.5) * 200,
        moveY: (Math.random() - 0.5) * 200,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 20 + 10
      });
    }
    
    setParticles(newParticles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('This is a sample login page. No actual authentication is performed.');
  };

  const formVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
    
    className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-blue-800 font-sans relative overflow-hidden" id='loginPage'>
      {/* Background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            left: `${particle.posX}px`,
            top: `${particle.posY}px`,
          }}
          animate={{
            x: particle.moveX,
            y: particle.moveY,
            opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="w-full max-w-md z-10">
        {/* Logo and header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block p-3 bg-white bg-opacity-10 rounded-full mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg className="h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </motion.div>
          <motion.h1 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome Back
          </motion.h1>
          <motion.p 
            className="text-blue-200 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Sign in to access your account
          </motion.p>
        </motion.div>
        
        {/* Login form */}
        <motion.div 
          className="backdrop-blur-lg bg-white/15 border border-white/20 rounded-2xl p-8 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white/5 p-1 rounded-lg mb-6 relative">
            <div className="flex">
              <button 
                onClick={() => setActiveTab('login')}
                className={`w-1/2 py-3 text-center font-medium rounded-lg z-10 relative transition-colors ${activeTab === 'login' ? 'text-white' : 'text-white/70'}`}
              >
                Login
              </button>
              <button 
                onClick={() => setActiveTab('signup')}
                className={`w-1/2 py-3 text-center font-medium rounded-lg z-10 relative transition-colors ${activeTab === 'signup' ? 'text-white' : 'text-white/70'}`}
              >
                Sign Up
              </button>
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-1/2 rounded-full"
              animate={{ 
                x: activeTab === 'login' ? 0 : '100%' 
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
            />
          </div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'login' ? (
              <motion.form 
                key="loginForm"
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      className="block w-full pl-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium text-blue-200">
                      Password
                    </label>
                    <a href="#" className="text-sm text-blue-300 hover:text-blue-200 transition">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="block w-full pl-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Enter a Strong password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-blue-300 hover:text-blue-200 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-center" variants={itemVariants}>
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-white/10 border-white/20 rounded focus:ring-blue-500 text-blue-600"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-blue-200">
                    Remember me
                  </label>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                    whileHover={{ y: -2, boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.6)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              <motion.form 
                key="signupForm"
                className="space-y-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleSubmit}
              >
                <motion.div variants={itemVariants}>
                  <label htmlFor="signup-name" className="block text-sm font-medium text-blue-200 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input
                      type="text"
                      id="signup-name"
                      className="block w-full pl-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input
                      type="email"
                      id="signup-email"
                      className="block w-full pl-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-blue-200 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockClosedIcon className="h-5 w-5 text-blue-300" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="signup-password"
                      className="block w-full pl-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-blue-300 hover:text-blue-200 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                    whileHover={{ y: -2, boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.6)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Account
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-blue-200 text-sm">Or continue with</p>
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { name: 'github', icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                )},
                { name: 'google', icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09c-3.27-.31-5.82-3.08-5.82-6.44 0-3.36 2.55-6.14 5.82-6.44v3.18H8.41c-.45 0-.82.37-.82.82 0 .46.37.82.82.82h2.18v2.18c0 .45.37.82.82.82.46 0 .82-.37.82-.82v-2.18h2.18c.45 0 .82-.37.82-.82 0-.46-.37-.82-.82-.82h-2.18V5.65c3.27.31 5.82 3.08 5.82 6.44 0 3.36-2.55 6.14-5.82 6.44v-3.18h2.18c.45 0 .82-.37.82-.82 0-.46-.37-.82-.82-.82h-2.18v-2.18c0-.45-.37-.82-.82-.82-.46 0-.82.37-.82.82v2.18H8.41c-.45 0-.82.37-.82.82 0 .46.37.82.82.82h2.18v3.18z" />
                  </svg>
                )},
                { name: 'twitter', icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                )},
                { name: 'facebook', icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              ].map((provider, index) => (
                <motion.button
                  key={provider.name}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition text-blue-300"
                  whileHover={{ y: -3, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {provider.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-blue-200 text-sm">
            This is a sample login page demo. No data is collected.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;