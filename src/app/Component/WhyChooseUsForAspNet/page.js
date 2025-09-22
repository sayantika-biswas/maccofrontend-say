'use client'
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

const WhyChooseUsForAspNet = () => {
  const benefits = [
    "Highly experienced specialists delivering comprehensive software solutions.",
    "Customized development services tailored to evolving business needs.",
    "Flexible engagement models to suit diverse project requirements.",
    "Over a decade of industry expertise across various domains and technologies.",
    "End-to-end project assistance from ideation to successful launch.",
    "On-time project delivery using agile and effective methodologies.",
    "Focus on intuitive and engaging user interface designs for optimal user experience.",
  ];

  return (
    <section className="bg-black py-5 sm:py-10 lg:py-12 overflow-hidden text-white mb-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-white text-center mb-16 sm:text-4xl md:text-4xl"
        >
          Why Partner with <span className="text-indigo-500">Macco Tech</span>?
        </motion.h2>

        <div className="rounded-xl bg-zinc-900 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 shadow-2xl shadow-indigo-500/10">
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 lg:pt-32 lg:mb-0 lg:w-1/2 flex justify-center items-center"
          >
            <Image
              src="/asp-net-5.webp"
              alt="Macco Tech Software Development Illustration"
              width={600}
              height={550}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 leading-relaxed">
              At Macco Tech, we pride ourselves on being more than just a service provider; we are your strategic technology partner. Our team of highly skilled professionals is dedicated to crafting innovative and robust software solutions that propel your business forward.
            </motion.p>

            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li key={index} variants={itemVariants} className="flex items-start text-lg text-gray-200">
                  <span className="flex-shrink-0 mr-3 text-indigo-500 mt-1">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsForAspNet;
