'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowWeWork = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="md:w-1/2 text-gray-700">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800"
            variants={textVariants}
          >
            How We Work For Your SEO Campaign?
          </motion.h2>

          <motion.p className="mb-4 text-lg leading-relaxed" variants={textVariants}>
            We will collect the complete requirement and review your website completely. We spy on
            your competitor backlinks, ranking keywords, technologies used, and much more.
          </motion.p>

          <motion.p className="text-lg leading-relaxed" variants={textVariants}>
            You know there are plenty of SEO service providers out there. But as a leading SEO
            company in Coimbatore, we are passionate about this stuff. So we design our SEO
            strategies and plans, to suit small and medium business owners as well as e-commerce
            websites. Believe us, SEO is a powerful tool to generate quality leads for a long time.
          </motion.p>
        </div>

        <motion.div className="md:w-1/2 flex justify-center md:justify-end" variants={imageVariants}>
          <div className="relative w-full max-w-md h-64 sm:h-80 md:h-96 lg:h-[450px]">
            <Image
              src="/SEO2.png"
              alt="Illustration of people working on an SEO campaign"
              height={600}
              width={450}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
