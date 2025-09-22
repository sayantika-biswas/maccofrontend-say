'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaPaintBrush, FaComments } from 'react-icons/fa';

const HireTeamSectionqualityAssurance = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        damping: 14,
        stiffness: 120,
      },
    },
  };

  const features = [
    {
      icon: <FaPaintBrush className="text-blue-600 text-3xl" />,
      title: "Flawless Design",
      description:
        "Ensure seamless user experience by validating every UI/UX element through meticulous testing and design evaluation.",
    },
    {
      icon: <FaCode className="text-blue-600 text-3xl" />,
      title: "Effective Code",
      description:
        "Our QA experts rigorously test your codebase across frameworks to ensure performance, security, and functionality.",
    },
    {
      icon: <FaComments className="text-blue-600 text-3xl" />,
      title: "Effortless Communication",
      description:
        "Stay updated with real-time progress through transparent communication and dedicated QA reporting systems.",
    },
  ];

  return (
    <section className="bg-white py-20 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-16 gap-8">
          <div className="md:w-3/4">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-4xl text-gray-700 font-bold leading-tight mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromTop}
            >
              Hire Dedicated Software Testing and QA Developers
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInFromTop}
            >
              We understand the critical role that quality assurance plays in the success of SaaS and mobile applications. Here&asop;s why partnering with us is the smart choice to elevate your product.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInFromTop}
          >
            <Link href="/contact">
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-all duration-300">
              HIRE US NOW!
            </button>
            </Link>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {features.map(({ title, description, icon }, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-blue-300 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full shadow-inner">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-base leading-relaxed text-gray-600">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HireTeamSectionqualityAssurance;
