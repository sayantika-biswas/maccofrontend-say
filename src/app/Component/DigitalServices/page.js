'use client';
import { motion } from 'framer-motion';
import { FaHandHoldingUsd, FaUsers, FaChartLine, FaCrown, FaBuilding, FaDollarSign } from 'react-icons/fa';

const DigitalServices = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      icon: <FaHandHoldingUsd className="text-white text-3xl" />,
      title: "Support brand value",
      description: "Digital marketing firms assist your company in expanding its reach and making your offerings stand out in a competitive market.",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      title: "Boost user relationships",
      description: "Our analytics helps to dig out the crucial and concise user needs and help you target the potential audience on the receiving end.",
    },
    {
      icon: <FaChartLine className="text-white text-3xl" />,
      title: "Drive more traffic",
      description: "Digital marketing agency helps to propel multiple cross-channel business opportunities to enable exceptional user experience.",
    },
    {
      icon: <FaCrown className="text-white text-3xl" />,
      title: "Stay on top",
      description: "These marketing services allow you to use multiple channels with a consistent funnel to check for seamless connectivity.",
    },
    {
      icon: <FaBuilding className="text-white text-3xl" />,
      title: "Increase in competition",
      description: "Digital marketing experts help small to mid-sized enterprises to compete head-to-head with multinational firms.",
    },
    {
      icon: <FaDollarSign className="text-white text-3xl" />,
      title: "Improve conversion rates",
      description: "Attract numerous leads, businesses, conversions, opportunities, and users to your brand products and services.",
    },
  ];

  return (
    <section className="bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-12 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionTitleVariants}
        >
          Why Your Business Needs Digital Marketing Services?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-100 hover:shadow-[0_0_20px_#a855f7] hover:border border-purple-500 flex flex-col items-center text-center"
              variants={cardVariants}
            >
              <div className="p-4 rounded-full bg-purple-700 mb-4 transition-transform duration-300 group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalServices;
