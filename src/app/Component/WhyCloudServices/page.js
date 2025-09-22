'use client';
import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    title: "Scalability On Demand",
    description: "Develop a winning roadmap to expand resources instantly to meet business needs, sition your startup for success.",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Protect your data with robust security and compliance frameworks.",
  },
  {
    title: "Increased Agility",
    description: "Accelerate time-to-market with flexible cloud environments.",
  },
  {
    title: "Cost Optimization",
    description: "Reduce IT overhead with pay-as-you-go models.",
  },
  {
    title: "Seamless Integration",
    description: "Connect applications, databases, and third-party services effortlessly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: cardData.length * 0.1 + 0.2, // Animate after cards
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const WhyCloudServices = () => {
  return (
    <section className="bg-gray-200  ">
        <div className='container mx-auto py-16 px-4 md:px-8 lg:px-16'>
      <motion.h2
        className="text-4xl md:text-5xl font-light text-gray-800 mb-12 text-center lg:text-left"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Why Cloud Services?
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col justify-between"
            variants={cardVariants}
            whileHover={{ translateY: -5 }} // Slight lift on hover
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Placeholder for "Hire us" button or empty space in the grid */}
        <div className="flex items-center justify-center lg:col-span-1 md:col-span-2"> {/* Adjust column span for responsiveness */}
            <motion.a
                href="#" // Link to your contact page or a relevant section
                className="inline-block px-12 py-4 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true, amount: 0.5 }}
            >
                Hire us
            </motion.a>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default WhyCloudServices;