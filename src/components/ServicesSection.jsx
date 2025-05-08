import React from 'react';
import { services } from '@/assets/data.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utilits/motion';
const ServicesSection = () => {
  return (
    <section className="py-20 container mx-auto  px-4 sm:px-6 lg:px-8 " id="services">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* header */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/3 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
            Future of support with new shape{' '}
          </h2>
          <p className="text-gray-600 text-lg mb-4 md:w-4/5 ">
            Discuss your goals, determine success metrics, identify problems{' '}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg bg-indigo-100 flex  items-center justify-center ">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>

              <span className="text-gray-600">UX design content strategy </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg bg-indigo-100 flex  items-center justify-center ">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>

              <span className="text-gray-600">Development bring </span>
            </div>
          </div>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full cursor-pointer hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </motion.div>

        {/* service card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 
             hover:shadow-[0_0_24px_rgba(99,102,241,0.5)]

             transition duration-300 hover:scale-105 m-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
