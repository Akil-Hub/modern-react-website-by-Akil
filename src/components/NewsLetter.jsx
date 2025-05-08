import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion, } from 'framer-motion'
import { scale } from '@/utilits/motion'

const NewsLetter = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:max-w-6xl' id='newsLetter'>
      <motion.div
      variants={scale(0.2)}
                  initial="hidden"
                  whileInView="show"
      
      className='bg-blue-600 rounded-2xl overflow-hidden'>
        <div className='relative md:px-16  py-16  px-6 md:py-24'>
            {/* gradient bg */}
            <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 transform -skew-x-12 hidden md:block'></div>
            <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                {/* left */}
                <div className='text-white max-w-lg text-center md:text-left '>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe Newsletter </h2>
                    
                    <p className=' text-sm sm:text-base'>Best codes and best delivery guys all at your service. Hot tasty food</p>
                </div>
            {/* right */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                <input type="text" name="" id="" placeholder='Enter your email address' className='w-full bg-white
                 sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none'/>
                 <button className='w-full sm:w-auto  cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex  justify-center items-center gap-2 '>
                    <span>Discover</span>
                    <HiArrowRight className='size-5'/>
                 </button>
            </div>


            </div>
        </div>
      </motion.div>
 
    </section>
  )
}

export default NewsLetter
