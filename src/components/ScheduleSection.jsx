import React from 'react';
import scheduleImg from '../assets/stats.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utilits/motion';
const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:h-[400px]  ">
        {/* left */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/3 w-full "
        >
          <img src={scheduleImg} alt="schudelImag" className="w-auto h-auto md:ml-15 mt-15" />
        </motion.div>

        {/* right */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <p className="text-orange-500 font-semibold ">SCHEDULE</p>
          <h2 className="text-3xl md:text-4xlo font-bold text-neutral-900 mt-4 mb-6 ">
            Streamline Your Business <br />
            With Smart Scheduling Solution
          </h2>
          <p className="text-gray-600 mb-8">
            Take control of your time boost productivity with intelligent scheduling system.
            Automate appointments, manage team availability, and deliver exceptional customer
            experiences through seamless calender management.
          </p>
          <a
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all "
          >
            {' '}
            Explore scheduling feature<span className="h-5 ">➜</span>{' '}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
