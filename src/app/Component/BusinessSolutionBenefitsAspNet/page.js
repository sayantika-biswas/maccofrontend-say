'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const BusinessSolutionBenefitsAspNet = () => {
  const benefits = [
    {
      title: 'Scalability & Flexibility',
      description:
        "Macco Tech's solutions can handle growing data requirements with scalability and cross-platform flexibility.",
    },
    {
      title: 'High Performance',
      description:
        'Robust configurations for high-traffic apps ensure resilient platforms and fast transactions.',
    },
    {
      title: 'Open-Source Advantage',
      description:
        'Cost-effective development using open-source tools with rapid innovation and community support.',
    },
    {
      title: 'Data Security',
      description:
        'Exceptional protection with compliance-focused protocols and breach-prevention practices.',
    },
    {
      title: 'Seamless Migration',
      description:
        'Zero-downtime system migrations with full data integrity and minimal disruption.',
    },
    {
      title: 'Cost-Effective Solutions',
      description:
        'Optimize costs with smart architectures while maintaining high scalability and performance.',
    },
  ];

  return (
    <section className="bg-black text-white py-10 sm:py-14 lg:py-15 overflow-hidden mb-7">
      <div className="container mx-auto px-4 sm:px-4 lg:px-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-12 lg:mb-16"
            >
              <h2 className="text-4xl font-bold text-white sm:text-4xl">
                Why Choose Macco Tech  <span className="text-indigo-500">for Business Solution Development?</span>
              </h2>
              <p className="mt-6 text-base text-gray-300 leading-relaxed max-w-xl">
                We specialize in scalable, secure, and efficient business solutions built for performance and integration across technologies.
              </p>
            </motion.div>

            {/* Benefit Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-12"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-gray-900 hover:bg-gray-800 rounded-xl p-5 shadow transition duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 lg:mt-0 lg:col-span-6 flex justify-center"
          >
            <div className="w-full max-w-xl"> {/* max-w-md -> max-w-2xl किया गया */}
              <Image
                src="/mysql4.png"
                alt="Business Solution Illustration"
                width={800} // पहले था 600
                height={600} // पहले था 500
                className="rounded-lg mt-21"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionBenefitsAspNet;




// Why Choose Macco Tech for Business Solution Development?