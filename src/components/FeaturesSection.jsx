import React from 'react';
import { features } from '@/assets/data.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utilits/motion';

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">How we can help your business?</h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const bgColors = ['bg-red-100', 'bg-blue-100', 'bg-green-100'];
          const color = bgColors[index % bgColors.length];

          // Define custom direction based on index
          let direction;
          if (index === 0) direction = 'right';
          else if (index === 1) direction = 'up';
          else direction = 'left';

          return (
            <motion.div
              key={index}
              variants={fadeIn(direction, 0.3)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center p-6 text-center"
            >
              <div
                className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center ${color}`}
              >
                <div className="text-3xl">{feature.icon}</div>
              </div>
              <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Button */}
      <motion.div
       variants={fadeIn('up', 0.5)}
       initial="hidden"
       whileInView="show"
      className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative">
          Become a partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-700/50 blur-xl top-0 left-0"></div>
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
