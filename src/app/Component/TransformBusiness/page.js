'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  { text: "Robust security" },
  { text: "Budget friendly" },
  { text: "Seamless integrations" },
  { text: "Regulatory compliance" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const TransformBusiness = () => {
  return (
    <section className="bg-white ">
      {/* Left Content Area */}
      <div className='container mx-auto py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12'>
      <motion.div
        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
          variants={textVariants}
        >
          Transform Your Business With <span className="text-blue-600">Cloud Technology</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl"
          variants={textVariants}
        >
          Impactful Cloud Engineering ensures a robust foundation for business success, enhancing
          reliability, agility, and scalability. Don&asop;t let unstable IT infrastructure hinder your customer-centric products. Trust {" "}
          <strong className="font-semibold text-blue-700">Macco Tech&asop;s</strong> expertise for precise cloud consultation and optimization,
          regardless of your current cloud journey stage.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full max-w-md mx-auto lg:mx-0"
          variants={containerVariants} // Stagger features
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center text-gray-700"
              variants={featureItemVariants}
            >
              <svg
                className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-lg">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex justify-center items-center p-4 lg:p-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/cloud2.webp"
          alt="Cloud Technology Illustration"
          width={500}
          height={420}
          className="max-w-full h-auto rounded-lg "
        />
      </motion.div>
      </div>
    </section>
  );
};

export default TransformBusiness;