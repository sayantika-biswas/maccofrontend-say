'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AspNetStrengthsAndCTA = () => {
  return (
    <section className="bg-gray-950 text-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16 lg:mb-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-extrabold text-white sm:text-4xl md:text-4xl mb-4"
          >
            Our Core Strengths & Approach
          </motion.h2>
          {/* <motion.p
            variants={itemVariants}
            className="text-base text-gray-400 sm:text-base max-w-3xl mx-auto"
          >
            At Macco Tech, we combine innovation with unwavering commitment to deliver exceptional digital solutions.
          </motion.p> */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-300 sm:text-base max-w-3xl mx-auto"
          >
            At Macco Tech, we empower businesses by blending innovation and industry expertise, delivering tailored solutions for growth and impact.
          </motion.p>

        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-6">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start mb-10 lg:mb-0"
          >
            <Image
              src="/asp-net2.png"
              alt="Team success"
              width={550}
              height={400}
              className="object-contain"
            />
          </motion.div>

          {/* Strength List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-lg text-white-100"
          >
            {[
              "Global Standards, Local Expertise",
              "Uncompromising Quality Assurance",
              "Agile & Cutting-Edge Methodologies",
              "Efficient Project Delivery",
              "Proven Track Record of Excellence",
              "Scalable Solutions for Enterprise",
            ].map((point, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start space-x-3"
              >
                <span className="text-indigo-500">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mb-12 lg:mb-0"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Empowering your business with cutting-edge digital solutions is our mission. At Macco Tech, we understand that a well-crafted application can transform your operations and elevate your market presence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our strength lies in leveraging modern technologies and agile practices to deliver superior results. We focus on open-source solutions, cloud-native architectures, and user-centric design to ensure your investment yields maximum return.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="bg-indigo-900 rounded-lg p-8 shadow-lg flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between sm:items-center"
          >
            <div className="flex-shrink-0 sm:order-2 mb-6 sm:mb-0 sm:ml-8">
              <Image
                src="/ASPdiscuss.webp"
                alt="Discussion illustration"
                width={200}
                height={160}
                className="object-contain rounded-lg"
              />
            </div>
            <div className="sm:order-1 flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3">
                Experience the Macco Tech Advantage!
              </h3>
              <p className="text-gray-200 mb-6">
                Let&asop;s discuss your project and turn your ideas into powerful digital realities.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Get a Free Consultation
                <svg className="ml-2 -mr-0.5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AspNetStrengthsAndCTA;
