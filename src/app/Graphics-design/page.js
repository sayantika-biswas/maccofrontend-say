'use client';

import Image from 'next/image';
import Navbar from '../Component/Navbar/page';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import Footerpage from '../Component/Footerpage/page';
import HireUsSection from '../Component/HireUsSection/page';

const features = [
  'Proper introduction',
  'Business Reputation',
  'Website presentation',
  'Social Media Engagement',
  'Positive Brand Image',
  'Media resource',
];

const images = [
  '/imagee1.png',
  '/imagee2.png',
  '/imagee5.png',
  '/imagee3.png'
];

const shakeTransition = {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 0.4,
  ease: "easeInOut",
};

// const images = [1, 2, 3, 4];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function GraphicDesignSection() {
  return (
    <>
      <Navbar />
      <div className="flex  h-[85vh] flex-col-reverse md:flex-row bg-black text-white p-6 md:p-16 gap-10 relative" style={{ top: '85px' }}>
        {/* Background Image */}
        <div
          className="absolute   top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/graphics.png')" }}
        ></div>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="md:w-1/2 space-y-8 relative z-10"
        >
          {/* Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'backOut' }}
            className="space-y-1"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-snug">Graphic Design</h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-yellow-400 leading-snug">Companies Boost</h2>
            <h3 className="text-3xl md:text-5xl font-semibold leading-snug">Business</h3>
          </motion.div>

          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-2 gap-3 text-sm"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start space-x-2 hover:text-yellow-400 transition duration-300"
              >
                <FaCheckCircle className="text-yellow-400 pt-1" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call Now Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative w-max"
          >
            {/* Glow Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-50 z-0"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#facc15', color: '#000' }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg transition-colors duration-300"
            >
              CALL NOW
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="space-y-1 text-sm"
          >
            <p className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [-10, 10, -10] }}
                transition={shakeTransition}
                className="text-yellow-400"
              >
                <FiPhone size={18} />
              </motion.span>
              <span>+91 95251 04860</span>
            </p>
            <p className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [-10, 10, -10] }}
                transition={shakeTransition}
                className="text-yellow-400"
              >
                <FiMail size={18} />
              </motion.span>
              <span>maccotech@gmail.com</span>
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 grid grid-cols-2 gap-6 place-items-center relative z-10"
        >
          {images.map((img, i) => (
            <motion.div
              key={img}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="transform rotate-45 w-32 h-32 md:w-44 md:h-44 border-4 border-yellow-400 overflow-hidden shadow-lg hover:scale-110 transition-transform duration-500"
            >
              <div className="-rotate-45 w-full h-full relative">
                <Image
                  src={img}
                  alt={`graphic ${i + 1}`}
                  fill
                  className="object-cover scale-145 hover:scale-[1.4] transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-2xl p-8 md:p-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col md:flex-row gap-12 animate-fade-in">
        {/* Decorative Background Blurs */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-500 opacity-20 rounded-full filter blur-3xl z-0 animate-pulse-slow"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-600 opacity-20 rounded-full filter blur-3xl z-0 animate-pulse-slow"></div>

        {/* Left Side - Text */}
        {/* <div className="relative z-10 md:w-1/2 space-y-8 pt-6 pb-5 animate-fade-in">
          <h2 className="text-xl font-semibold text-yellow-500 relative pb-3 group cursor-pointer animate-slide-in-left">
            <span className="inline-block font-inter transition-transform duration-500">A Variety of Design Services</span>
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-yellow-400 opacity-40 group-hover:animate-underline-expand"></span>
          </h2>

          <p className="text-gray-300 font-inter text-xl leading-relaxed font-medium tracking-wide animate-fade-in delay-300">
            Imagine stunning illustrations, impactful print designs, and engaging digital marketing that truly captures your audience. Our world-class graphic designers are here to turn those visions into reality.
          </p>

          <p className="text-gray-400 font-inter text-lg leading-relaxed animate-fade-in delay-500">
            Tired of traditional agency limitations? We offer a modern, tech-driven Creative-as-a-Service solution designed for the speed and agility of today`s teams. Get access to a comprehensive suite of design services with complete transparency.
          </p>

          <button className="bg-yellow-500 font-inter hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 animate-slide-in-bottom delay-700">
            Explore Our Services
          </button>
        </div> */}
        <div className="relative z-10 md:w-1/2 space-y-8 pt-6 pb-5 animate-fade-in">
          <h2 className="text-xl font-semibold text-yellow-500 relative pb-3 group cursor-pointer animate-slide-in-left">
            <span className="inline-block font-inter transition-transform duration-500">
              Comprehensive Creative Design Solutions
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-12 bg-yellow-400 opacity-40 group-hover:animate-underline-expand"></span>
          </h2>

          <p className="text-gray-300 font-inter text-xl leading-relaxed font-medium tracking-wide animate-fade-in delay-300">
            Delivering stunning illustrations, impactful print materials, and compelling digital marketing assets tailored to engage your target audience effectively. Our expert graphic designers transform your ideas into visually striking realities.
          </p>

          <p className="text-gray-400 font-inter text-lg leading-relaxed animate-fade-in delay-500">
            Move beyond traditional agency constraints with our innovative Creative-as-a-Service model. Designed for today’s fast-paced business environment, we provide a transparent, tech-driven platform offering a full spectrum of design services to accelerate your brand’s growth.
          </p>

          <button className="bg-yellow-500 font-inter hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 animate-slide-in-bottom delay-700">
            Explore Our Services
          </button>
        </div>


        {/* Right Side - Video */}
        <div className="relative z-10 md:w-1/2  overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow duration-300 animate-slide-in-right">
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300 flex justify-center items-center">
            <svg className="w-20 h-20 text-yellow-500 cursor-pointer transition-all duration-300 group-hover:scale-110 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5.5A1.5 1.5 0 005.5 4h13a1.5 1.5 0 011.5 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 004 18.5v-13zM5 5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h14a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5H5z"
              />
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>

          {/* Replace this part to display the video */}
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
            <source src="/graphics.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <HireUsSection />
      <Footerpage />
    </>
  );
}
