'use client';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const MorePowerSection = () => {
  const featuresLeft = [
    {
      id: 1,
      text: 'In-depth knowledge and expertise on multiple CMS platforms to deliver superior architecture',
    },
    {
      id: 2,
      text: 'Cost-effective development and implementation approach for all business needs',
    },
    {
      id: 3,
      text: 'Dedicated teams to implement custom layouts to meet your goals and drive consumer engagement',
    },
  ];

  const featuresRight = [
    {
      id: 1,
      text: 'Highly experienced experts to meet all your customization and integration needs',
    },
    {
      id: 2,
      text: 'Well-defined content migration process to keep your website live',
    },
    {
      id: 3,
      text: 'Established support model to maintain, upgrade and extend your CMS website on continual basis',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation for children
        delayChildren: 0.3,   // Delay before children start animating
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-16  px-4 sm:px-6 lg:px-8 bg-[#FEEFEF]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% of the section is in view
      variants={containerVariants} // Use container variants for the section to manage children
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          variants={headingVariants} // Apply heading specific variants
        >
          More Power for Your Business
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
          variants={containerVariants} // Apply container variants here as well for overall grid
        >
          {/* Left Column */}
          <div>
            <ul className="space-y-4">
              {featuresLeft.map((feature) => (
                <motion.li
                  key={feature.id}
                  className="flex items-start"
                  variants={itemVariants} // Apply item specific variants
                >
                  <span className="mr-2 text-gray-700">&#8226;</span> {/* Bullet point */}
                  <p className="text-base text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <ul className="space-y-4">
              {featuresRight.map((feature) => (
                <motion.li
                  key={feature.id}
                  className="flex items-start"
                  variants={itemVariants} // Apply item specific variants
                >
                  <span className="mr-2 text-gray-700">&#8226;</span> {/* Bullet point */}
                  <p className="text-base text-gray-700 leading-relaxed">
                    {feature.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MorePowerSection;