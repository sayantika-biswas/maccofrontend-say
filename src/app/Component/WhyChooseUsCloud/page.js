'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    title: "Custom-Tailored Solutions",
    description: "Solutions aligned with business goals and technical needs.",
  },
  {
    title: "End-to-End Support",
    description: "From migration to ongoing optimization, we ensure a seamless journey.",
  },
  {
    title: "DevOps & Automation Experts",
    description: "Implement CI/CD pipelines, infrastructure as code, and automation best practices.",
  },
  {
    title: "Proven Track Record",
    description: "Trusted by leading startups and enterprises globally.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const WhyChooseUsCloud = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Image Area */}
      <motion.div
        className="lg:w-1/2 flex justify-center items-center p-4 lg:p-0"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/cloud4.jpeg"
          alt="Cloud Technology Illustration"
          width={600}
          height={450}
          className="max-w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Right Content Area */}
      <motion.div
        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-800 mb-10 leading-tight"
          variants={textVariants}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center md:items-start"
              variants={cardVariants}
            >
              <h3 className="text-xl md:text-1xl font-semibold text-gray-800 mb-2 leading-tight">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsCloud;
