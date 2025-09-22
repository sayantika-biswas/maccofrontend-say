'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Placeholder for icons — replace with actual SVGs or icons in production
const IconPlaceholder = ({ children }) => (
  <div className="text-4xl text-blue-600 mb-4">{children}</div>
);

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '👤',
      title: 'Guidance From Professionals',
      description: 'With 12+ years of Expertise',
    },
    {
      icon: '⚙️',
      title: 'Package of Perfect Tools',
      description: 'Processes, & Skills',
    },
    {
      icon: '💻',
      title: 'Pre-Assorted',
      description: 'DevOps Pipelines',
    },
    {
      icon: '🔗',
      title: 'Smooth Integration of Tools',
      description: 'With Various Domains',
    },
    {
      icon: '🔒',
      title: 'Reduced Security Risk',
      description: 'Through Automation',
    },
    {
      icon: '📈',
      title: 'Guaranteed Faster Time-To-Market',
      description: 'And Better ROI',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Why</span> Choose Macco Tech for DevOps Consulting Services?
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Macco Tech, a trusted DevOps Strategy Consulting Company with over 12 years of experience, accelerates application release cycles, streamlines automation, and embeds security at every phase of your transformation. Our proven strategies help reduce costs, increase efficiency, and deliver faster, more secure outcomes.
          </p>
        </motion.div>

        {/* Sub-heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Accelerate Growth — Hit Business Goals Faster!
          </h3>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <IconPlaceholder>{reason.icon}</IconPlaceholder>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h4>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
