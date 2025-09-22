'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialMediaOptimization = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="bg-white">
        <div className=' container mx-auto  p-8'>
      <motion.div
        className=" flex flex-col md:flex-row items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Section */}
        <motion.div
          className="flex-1 md:pr-12 mb-8 md:mb-0 max-w-3xl text-center md:text-left"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4"
            variants={itemVariants}
          >
            Social Media Optimization Service in India
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            Web Link Services Pvt Ltd Provides Social Media Optimization Service
            Provider in Pune. We are best company for Social Media Optimization
            services in Pune, MH India.
          </motion.p>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Request a Quote
          </motion.button>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="flex-1 flex justify-center items-center max-w-lg w-full"
          variants={imageVariants}
        >
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/social-media-bg.png"
              alt="Social Media Optimization"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaOptimization;
