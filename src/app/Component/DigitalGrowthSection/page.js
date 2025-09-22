'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DigitalGrowthSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Side: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-start"
          variants={imageVariants}
        >
          <div className="relative w-full max-w-2xl h-58 sm:h-56 md:h-64 lg:h-82 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/DigitalMarketing3.webp"
              alt="Hand holding a digital growth graph illustration"
              fill
            />
          </div>
        </motion.div>


        {/* Right Side: Text Content */}
        <div className="lg:w-1/2 text-gray-700 text-center lg:text-left">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 text-gray-800 leading-tight"
            variants={textVariants}
          >
            Accelerate Your Business Growth <br className="hidden md:inline" />
            with <span className="text-purple-600">Macco Tech</span>
          </motion.h2>

          <motion.p className="mb-6 text-base leading-relaxed" variants={textVariants}>
            At Macco Tech, we empower your business to thrive in the digital world. From expanding your online visibility
            to generating measurable ROI, our digital marketing strategies are built to deliver growth and performance.
          </motion.p>

          <motion.p className="text-base leading-relaxed" variants={textVariants}>
            Don’t just go digital—grow digital. Let Macco Tech be your trusted partner in navigating the competitive
            online landscape with creative, data-driven, and tailored solutions.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalGrowthSection;
