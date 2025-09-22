// components/CustomSolutionsSection.jsx
'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const textBlockVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const CustomSolutionsAspNet = () => {
  return (
    <section className="bg-gray-200 py-10 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Block */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={textBlockVariants}
          className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16"
        >
          One of the key advantages of partnering with Macco Tech is our ability to provide customized software solutions that are meticulously tailored to the unique requirements of each client. Whether you need to develop a brand-new system from scratch, optimize an existing application, or modernize your infrastructure, our expert team possesses the profound knowledge and hands-on experience to deliver.
        </motion.p>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textBlockVariants}
            className="mb-12 lg:mb-0 lg:order-1 col-span-1"
          >
            <p className="text-base text-gray-600 leading-relaxed">
              In addition to our technical prowess, Macco Tech is renowned for its unwavering commitment to client satisfaction. We dedicate time to truly listen to our clients, comprehensively understand their specific needs, and then provide personalized solutions that address their unique challenges. Our dedicated support team is always available to answer questions, offer guidance, and ensure that your entire development journey with us is smooth, transparent, and hassle-free.
            </p>
          </motion.div>

          {/* Center Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
            className="flex justify-center items-center lg:order-2 col-span-1 mb-12 lg:mb-0"
          >
            {/* Placeholder for the central illustration */}
            <Image
              src="/MySql2.svg"
              alt="Custom software solution development"
              width={450}
              height={350}
            />
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textBlockVariants}
            className="lg:order-3 col-span-1"
          >
            <p className="text-base text-gray-600 leading-relaxed">
              Furthermore, Macco Tech is passionately dedicated to staying at the forefront of industry trends and emerging technologies. Our developers consistently update their skills and expand their knowledge base to ensure that we are always offering the most up-to-date and cutting-edge solutions to our clients. By partnering with us, you can be confident that you are collaborating with a technology partner that is deeply committed to innovation, continuous improvement, and delivering tangible value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsAspNet;