'use client';
import { motion } from 'framer-motion';
import { FaRegGem, FaMoneyBillWave, FaRocket, FaBug, FaSearchPlus } from 'react-icons/fa';

const SoftWareTestingAdvantages = () => {
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
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
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const advantages = [
    {
      icon: <FaRegGem className="text-purple-600 text-3xl" />,
      title: "Enhanced Quality",
      description:
        "Deliver consistent and reliable software through structured, automated QA practices.",
    },
    {
      icon: <FaMoneyBillWave className="text-purple-600 text-3xl" />,
      title: "Cost-Effective",
      description:
        "Reduce long-term costs by identifying issues early and avoiding repeated fixes.",
    },
    {
      icon: <FaRocket className="text-purple-600 text-3xl" />,
      title: "Faster Releases",
      description:
        "Speed up delivery cycles with fast, repeatable, and reliable test automation.",
    },
    {
      icon: <FaBug className="text-purple-600 text-3xl" />,
      title: "Early Bug Detection",
      description:
        "Catch bugs during development before they impact your users or business.",
    },
    {
      icon: <FaSearchPlus className="text-purple-600 text-3xl" />,
      title: "Wider Coverage",
      description:
        "Cover more use cases, browsers, and devices than manual testing can handle.",
    },
    {
      icon: <FaRocket className="text-purple-600 text-3xl" />,
      title: "Continuous Improvement",
      description:
        "Enable frequent updates and refinements with confidence through automated feedback.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-16 text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionTitleVariants}
        >
          Advantages of QA Automation
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="w-14 h-14 mb-4 mx-auto flex items-center justify-center bg-purple-100 rounded-full shadow-inner">
                {advantage.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftWareTestingAdvantages;
