'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SoftwareTestingServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3, // Stagger main elements (heading, subheading, cards)
      },
    },
  };

  const textFadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardFadeInUp = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring", // Use spring for a subtle bounce
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const services = [
  {
    title: "Software Testing Services",
    description:
      "Our software testing services ensure your digital products are high-performing, stable, and user-friendly. We use a combination of manual and automated testing methods — including unit testing, integration testing, and regression testing — to detect and eliminate critical issues before your product reaches users.",
  },
  {
    title: "QA Automation Services",
    description:
      "We offer robust QA automation solutions to make your testing process faster and more efficient. Our approach includes test planning, tool selection, automation framework implementation, and ongoing script maintenance. This helps increase test coverage, reduce manual effort, and ensure consistent quality.",
  },
];


  return (
    <section className="relative w-full py-7 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SoftwareTesting2.avif" // Make sure this path is correct
          alt="Person working on laptop, software testing background"
          height={600}
          width={400}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate when 20% of section is in view
        variants={sectionVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          variants={textFadeInUp}
        >
          Software Testing
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-12 drop-shadow-md max-w-3xl mx-auto"
          variants={textFadeInUp}
        >
          We offer a comprehensive range of high-quality software testing and QA services, including:
        </motion.p>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl text-gray-800 text-left
                         max-w-xl w-full flex-shrink-0" // Ensure cards don't shrink too much
              variants={cardFadeInUp}
              custom={index} // For individual card animation staggering within the parent stagger
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SoftwareTestingServices;