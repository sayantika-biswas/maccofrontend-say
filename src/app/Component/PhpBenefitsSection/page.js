'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Smile, MonitorSmartphone, ShieldCheck,
  Puzzle, Rocket
} from 'lucide-react';

const phpBenefitsData = [
  {
    icon: <Brain className="w-10 h-10 text-indigo-400" />,
    title: 'Highly Flexible',
    description: 'PHP is adaptable and supports procedural, object-oriented, and functional programming.',
  },
  {
    icon: <Smile className="w-10 h-10 text-emerald-400" />,
    title: 'User-Friendly Design',
    description: 'Fast and easy-to-navigate applications deliver great user experiences.',
  },
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-purple-400" />,
    title: 'Cross-Platform Compatibility',
    description: 'PHP works on all major operating systems and platforms.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-rose-400" />,
    title: 'Scalable Applications',
    description: 'Easily scale your apps with PHP frameworks and modular codebase.',
  },
  {
    icon: <Puzzle className="w-10 h-10 text-teal-400" />,
    title: 'Third-party Integrations',
    description: 'Integrate with APIs, CRMs, and other tools effortlessly.',
  },
  {
    icon: <Rocket className="w-10 h-10 text-amber-400" />,
    title: 'Rapid Development',
    description: 'Quick turnaround times thanks to built-in libraries and frameworks.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const PhpBenefitsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] py-16 md:py-24 text-white">
      {/* <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 py-16 md:py-24 text-white"> */}


      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-3xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Business Benefits of Having A{' '}
            <span className="text-blue-500">PHP Web Development Company</span>
          </motion.h2>
          {/* <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            PHP offers flexibility, speed, and compatibility that meets diverse business needs efficiently.
          </motion.p> */}
          <motion.p
            className="text-lg md:text-xl text-gray-300"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            PHP delivers unmatched flexibility, rapid development, and broad compatibility, empowering businesses to build scalable and efficient web solutions tailored to their unique requirements.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {phpBenefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20 hover:shadow-2xl transition duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhpBenefitsSection;
