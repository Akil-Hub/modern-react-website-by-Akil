import React from 'react';
import { purpose } from '@/assets/data.jsx';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utilits/motion';

const PurposeSection = () => {
  return (
    <motion.section
      variants={staggerContainer(0.4, 0.5)}
      initial="hidden"
      whileInView="show"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Heading text */}
          <motion.div variants={fadeIn('up', 0.1)}>
            <p className="text-sm text-purple-600 font-medium mb-2">Achieve More</p>
            <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
              Purpose of a convoy is to keep your team
            </h2>
          </motion.div>

          {/* Bullet points */}
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-7">
            {purpose.map((purposes, index) => (
              <motion.div
                variants={fadeIn('left',.5)}
                key={index}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 flex items-top mt-1 justify-start rounded-lg">
                  {purposes.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{purposes.title}</h3>
                  <p className="text-gray-600">{purposes.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PurposeSection;
