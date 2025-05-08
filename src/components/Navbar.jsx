import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn } from '../utilits/motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Service' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);

    const scrollToSection = () => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Wait for navigation to complete, then scroll
      setTimeout(scrollToSection, 100); // Adjust timeout as needed
    } else {
      scrollToSection();
    }
  };

  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-4 h-4 bg-red-500 rounded-full -ml-2 hover:opacity-75 transition-opacity"
          ></motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={fadeIn('down', 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={index}
              variants={fadeIn('down', 0.1 * (index + 1))}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all
                ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {link.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Desktop CTA Button */}
        <motion.button
          variants={fadeIn('up', 0.4)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/login')}
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          Get in touch
        </motion.button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn('down', 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                variants={fadeIn('right', 0.1 * (index + 1))}
                onClick={() => handleNavClick(link.href)}
                className={`block text-sm font-medium py-2 w-full text-left ${
                  activeLink === link.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </motion.button>
            ))}

            {/* Mobile CTA Button */}
            <motion.button
              variants={fadeIn('up', 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/login');
              }}
              className="block md:hidden w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
