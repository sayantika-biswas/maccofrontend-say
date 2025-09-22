'use client';
import { motion } from 'framer-motion';
import {
  FaHandshake,
  FaLightbulb,
  FaUserFriends,
  FaHeadset,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

const ChooseDigitalAgencySection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const choiceFactors = [
    {
      icon: <FaHandshake className="text-white text-2xl" />,
      title: 'Trusted Partnership',
      description:
        'Choose an agency that believes in long-term collaboration and understands your business values.',
    },
    {
      icon: <FaLightbulb className="text-white text-2xl" />,
      title: 'Innovative Approach',
      description:
        'Look for creative, data-driven strategies that align with your brand vision and market trends.',
    },
    {
      icon: <FaUserFriends className="text-white text-2xl" />,
      title: 'Team Compatibility',
      description:
        'Ensure their communication style and work ethics align well with your internal operations.',
    },
    {
      icon: <FaHeadset className="text-white text-2xl" />,
      title: 'Dedicated Support',
      description:
        'A reliable agency provides proactive support, regular updates, and quick response times.',
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: 'Strong Data Security',
      description:
        'Make sure your agency follows strict NDA policies and implements best data security practices.',
    },
    {
  icon: <FaChartLine className="text-white text-2xl" />,
  title: 'Result-Oriented Execution',
  description:
    'Choose an agency that focuses on measurable outcomes, ensuring ROI and long-term brand success.',
}

  ];

  return (
    <section className="bg-gray-200 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-12 text-gray-800 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionTitleVariants}
        >
          How to Choose a Value-Driven Digital Marketing Agency For Your Project
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {choiceFactors.map((factor, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left"
              variants={cardVariants}
            >
              <div className="mb-5 bg-purple-600 p-3 rounded-full flex items-center justify-center shadow-md">
                {factor.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {factor.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {factor.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseDigitalAgencySection;
