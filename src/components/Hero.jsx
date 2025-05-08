import React from 'react';
import { FaStar } from 'react-icons/fa';
import heroImg from '../assets/hero-image.png';
import { fadeIn, textVariant } from '@/utilits/motion';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section
      id="home"
      className=" container mx-auto pt-22 pb-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center "
    >
      {/* left column  */}
      <div className=" md:w-1/2  space-y-8 ">
        {/* star badge */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex  gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full  hover:bg-gray-200 transition-colors cursor-pointer group"
        >
          <span className="text-blue-600  group-hover:text-yellow-500 group-hover:scale-110 transition-transform">
            <FaStar className="mt-[1px]" />
          </span>
          <span className="text-sm font-medium"> Jump start your growth </span>
        </motion.div>
        {/* heading */}

        <motion.h1
        variants={textVariant(0.3)}
            initial='hidden'
            whileInView='show'
        className="text-4xl md:text-5xl  font-bold leading-tight">
          {' '}
          We boost the growth for{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent relative ">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60 "></span>
          </span>{' '}
          Companies<span className="inline-block  animate-pulse">⏰</span>{' '}
        </motion.h1>
        <motion.p
        variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView='show'
        className="text-gray-600 text-lg md:text-xl  max-w-xl">
          Get the most accurate leads, sales people training and conversions, tools and more - all
          within the same one billing.
        </motion.p>

        <motion.div
         variants={fadeIn('up',0.5)}
         initial='hidden'
         whileInView='show'
        className="flex gap-3 max-w-md ">
          <input
            type="email"
            placeholder="Email Address "
            className="flex-1 px-6  py-4 border border-gray-200 rounded-xl focus:outline-none  focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all "
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer hover:shadow-lg hover:shadow-blue-300 text-xl ">
            ➜
          </button>
        </motion.div>
      </div>

      {/* Right column */}
      <motion.div
       variants={fadeIn('left',0.5)}
       initial='hidden'
       whileInView='show'
      className="lg:w-[550px]  md:w-1/2 md:mt-10 pl-0 md:pl-12  ">
        <div className="relative mt-3">
          <img
            src={heroImg}
            alt="hero image"
            className="rounded-lg z-10 relative hover:scale-[1.02] transition-transform duration-300 "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
