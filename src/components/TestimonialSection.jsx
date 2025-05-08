import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdArrowBackIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { testimonials } from '@/assets/data.jsx'; // Adjust path if needed
import { fadeIn, slideIn } from '@/utilits/motion';

// Utility function to generate star rating JSX
const renderStars = rating => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <div className="flex justify-center text-blue-500 mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="text-xs mx-[1px]" />
      ))}
      {hasHalf && <FaStarHalfAlt className="text-xs mx-[1px]" />}
      {[...Array(totalStars - fullStars - (hasHalf ? 1 : 0))].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-xs mx-[1px]" />
      ))}
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="testimonials">
      {/* Section Title */}
      <motion.div
        variants={slideIn('left', 'easeIn', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold md:text-4xl mb-4">What our happy client says</h2>
        <p className="text-gray-600">Things that make it the best place to start trading</p>
      </motion.div>

      {/* Swiper Wrapper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={16}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((client, index) => {
            // Simulate realistic ratings (5, 4.5, or 4 stars)
            const sampleRatings = [5, 4.5, 4];
            const rating = sampleRatings[index % sampleRatings.length];

            return (
         
                <SwiperSlide key={client.id}>
                  <motion.div 
                        variants={fadeIn('left', 0.4)} initial="hidden" whileInView="show"
                  
                  
                  className="bg-white p-4 border rounded-lg shadow-sm max-w-[270px] mx-auto text-center">
                    {/* Client Image */}
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-14 h-14 rounded-full mx-auto mb-3 object-cover"
                    />
                    {/* Star Ratings */}
                    {renderStars(rating)}
                    {/* Client Name */}
                    <h3 className="text-sm font-semibold">{client.name}</h3>
                    {/* Review Text */}
                    <p className="text-gray-600 mt-2 text-xs leading-relaxed">{client.text}</p>
                  </motion.div>
                </SwiperSlide>
              
            );
          })}
        </Swiper>

        {/* Navigation Buttons Below */}
        <div className="flex justify-center mt-6 gap-4">
          <button className="swiper-prev bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded">
            <MdArrowBackIos />
          </button>
          <button className="swiper-next bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
