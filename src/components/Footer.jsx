import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { footerLinks } from '@/assets/data.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utilits/motion';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex gap-2 items-center mb-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full opacity-100 hover:opacity-75 -ml-2 transition-opacity"></div>
              </div>
              <span className="text-xl font-medium ml-1">The Next Design</span>
            </div>
            <p className="text-gray-600 mb-6 md:w-3/4">
              The copy warned the little Blind Text, that where it came from it would have been
              rewritten a thousand times.
            </p>
            <div className="flex gap-4">
              <a href="#">
                <FaFacebook className="w-10 h-10 bg-gray-200 rounded-full text-gray-500 hover:text-blue-600 transition duration-200 p-2" />
              </a>
              <a href="#">
                <FaLinkedin className="w-10 h-10 bg-gray-200 rounded-full text-gray-500 hover:text-blue-600 transition duration-200 p-2" />
              </a>
              <a href="#">
                <FaTwitterSquare className="w-10 h-10 bg-gray-200 rounded-full text-gray-500 hover:text-blue-600 transition duration-200 p-2" />
              </a>
            </div>
          </div>

          {/* Footer Links Column */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-medium mb-4 uppercase">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-600 hover:text-gray-900 ">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* footer bottom section */}

        <div className="border-t border-gray-200 mt-12 pt-8  ">
          <div className=" flex justify-between flex-col md:flex-row items-center gap-4">
            <p className="text-gray-600 ">
              Copyright @ {new Date().getFullYear()} codewithakil.com
            </p>
            <p className="text-600 text-sm ">Created by 'Akil Anjum Mahi' </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
