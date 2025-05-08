import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utilits/motion';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    //Navbar box
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-16 h-12">
        {/*  logo box */}
        <div
          className="flex items-center gap-1
            cursor-pointer"
        >
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 -ml-2 transition-opacity"></div>
        </div>
        {/*  Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" ml-auto md:hidden p-2">
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/*  Navbar */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={` text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-700 hover:text-gray-900'} `}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/*   get in touch button  */}
        <div>
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-blue-100">
            <a href="#newsLetter"> Get in touch </a>
          </button>
        </div>
      </div>

      {/*  Mobile menu items  */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <div className="container  mx-auto px-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2 ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}  `}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            <button className=" w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-blue-100">
              <a href="#newsLetter"> Get in touch </a>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
