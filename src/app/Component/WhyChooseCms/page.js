'use client';
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseMaccoTech = () => {
  const bulletPoints = [
    "Leading-edge technology and innovation",
    "Tailored solutions for diverse business needs",
    "Expert team with a proven track record",
    "Seamless integration and robust scalability",
    "Dedicated support and ongoing maintenance",
    "Commitment to timely delivery and excellence",
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren", // Animate parent first
        staggerChildren: 0.2, // Stagger children animation
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12 leading-tight"
          variants={headingVariants}
        >
          Why Choose Macco Tech as Your Technology Partner?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section: Description */}
          <motion.div
            className="text-base text-gray-700 space-y-6"
            variants={sectionVariants}
          >
            <motion.p variants={paragraphVariants}>
              Choose Macco Tech for unparalleled expertise in technology solutions,
              with a focus on innovation and efficiency that drives business growth.
            </motion.p>
            <motion.p variants={paragraphVariants}>
              Our commitment to cutting-edge development, seamless integration,
              and exceptional support ensures your projects are robust, scalable,
              and perfectly aligned with your strategic objectives.
            </motion.p>
          </motion.div>

          {/* Right Section: Bullet Points */}
          <motion.div
            className="space-y-4"
            variants={sectionVariants} // Apply container variants for bullet points to enable stagger
          >
            {bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                variants={itemVariants} // Apply item variants to each bullet point
              >
                <svg className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-base text-gray-800">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseMaccoTech;