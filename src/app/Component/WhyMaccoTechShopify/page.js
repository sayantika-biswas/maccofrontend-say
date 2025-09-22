
'use client'; // Mark this file as a client component

import React from 'react';
import { motion } from 'framer-motion';

function WhyMaccoTechShopify() {
  const reasons = [
    'Domain Expertise',
    'Team of Professionals',
    'Complete analysis of business values',
    'Safe And Secure Services',
    'Follow agile development process',
    '24/7 Support and maintenance system',
  ];

  return (
    <div className="bg-[#FEEFEF] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Title Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl mb-4">
            Why Choose Macco Tech for Shopify Development?
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            We provide expert Shopify development services to help you build and scale your online store with ease. Our solutions are designed to improve efficiency, ensure smooth functionality, and deliver a seamless user experience.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6 space-x-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
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
                  />
                </svg>
                <h3 className="text-base font-semibold text-gray-900">{reason}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default WhyMaccoTechShopify;
