'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaHandshake, FaChartLine, FaRocket } from 'react-icons/fa';

const WhyChooseUsDigital = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const features = [
    {
      icon: <FaLaptopCode className="text-gray-700 text-2xl mb-2" />,
      title: "Custom-Tailored Strategies",
      description: "Digital marketing plans uniquely designed to meet your specific business goals and market needs.",
    },
    {
      icon: <FaHandshake className="text-gray-700 text-2xl mb-2" />,
      title: "End-to-End Campaign Management",
      description: "From initial strategy to ongoing optimization and reporting, we ensure a seamless journey.",
    },
    {
      icon: <FaChartLine className="text-gray-700 text-2xl mb-2" />,
      title: "Performance Analytics & ROI",
      description: "Data-driven insights to track campaign effectiveness and maximize your return on investment.",
    },
    {
      icon: <FaRocket className="text-gray-700 text-2xl mb-2" />,
      title: "Innovation & Future-Proofing",
      description: "Leveraging cutting-edge tools and trends to keep your digital presence ahead of the curve.",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center p-4 lg:p-0"
            variants={imageVariants}
          >
            <Image
              src="/DigitalMarketing4.jpg"
              alt="Cloud Technology Illustration"
              width={600}
              height={450}
              priority
              className="w-full h-[450px] object-contain rounded-lg"
            />
          </motion.div>

          {/* Text Section */}
          <div className="lg:w-1/2 text-gray-700 text-center lg:text-left">
            <motion.h2
              className="text-3xl font-bold mb-8 text-gray-800"
              variants={textVariants}
            >
              Why macco tech as Your Extended Digital Marketing Team
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed mb-8"
              variants={textVariants}
            >
              At Macco Tech, we combine innovative strategies with a client-centric approach to deliver exceptional digital marketing results. Our team is dedicated to understanding your unique business needs and driving measurable growth.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start text-left"
                  variants={cardVariants}
                >
                  <div className="mr-3 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsDigital;
