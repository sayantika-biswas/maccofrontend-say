'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HireCMSDevelopersSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: 0.3, // Slightly delay image entrance
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image/Illustration Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center p-4 "
            variants={imageVariants}
          >
            
            <Image
              src="/cms2.jpg" // Make sure this path is correct in your public folder
              alt="Illustration of a developer working on a CMS with mobile and web elements"
              width={600}
              height={400}
              className='rounded-lg'
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={containerVariants} // Use container variants here for the text blocks
          >
            <motion.h2
              className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              Hire Expert CMS Developers
            </motion.h2>

            <motion.p className="text-base text-gray-700 mb-6 leading-relaxed" variants={itemVariants}>
              We have a talented team of content management experts who take pride in delivering comprehensive CMS development
              solutions with fast turnaround time. We seamlessly understand the requisites of clients and complete all projects by following
              the best methodologies and coding practices. Our talented CMS developers with incredible knowledge of top content
              management systems ensure that your website achieves an unrivaled position in the digital space.
            </motion.p>

            <motion.p className="text-base text-gray-700 mb-8 leading-relaxed" variants={itemVariants}>
              Hire CMS developer from <strong className="font-semibold">Macco Tech</strong> to avail accurate, scalable and powerful content management services under your
              budget. Contact us to <a href="#" className="text-red-500 hover:text-red-600 underline font-semibold">hire software developers</a> in India.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-300 shadow-lg"
              >
                Contact Us 
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireCMSDevelopersSection;