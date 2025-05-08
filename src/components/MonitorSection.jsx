import React from 'react';
import monitorCardImg from '../assets/monitor-card.webp';
import { motion } from 'framer-motion';
import { textVariant } from '@/utilits/motion';
const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:h-[400px]  ">
        {/* left */}
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          className="sm:w-1/3 md:w-1/2  md:ml-18  w-full"
        >
          <p className="text-green-500 font-semibold ">MONITOR</p>
          <h2 className="text-3xl md:text-4xlo font-bold text-neutral-900 mt-4 mb-6 md:w-3/5 ">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600 mb-8 ">
            Take control of your time boost productivity with intelligent scheduling system.
            Automate appointments, manage team availability, and deliver exceptional customer
            experiences through seamless calender management.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all "
          >
            {' '}
            Explore monitoring feature<span className="h-5 ">➜</span>{' '}
          </a>
        </motion.div>
        {/* right */}

        <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
        
        className="md:w-1/2 w-full ">
          <img src={monitorCardImg} alt="cardImage" className="w-auto h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default MonitorSection;
