'use client';
import Image from 'next/image';
import Navbar from '../Component/Navbar/page';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiLayers, FiTarget, FiSun, FiTrendingUp } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import Footerpage from '../Component/Footerpage/page';
import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const brandingFeatures = [
    { icon: <FiLayers size={20} />, text: 'Strategic Brand Development' },
    { icon: <FiTarget size={20} />, text: 'Target Audience Analysis' },
    { icon: <FiSun size={20} />, text: 'Creative Visual Identity' },
    { icon: <FiTrendingUp size={20} />, text: 'Consistent Brand Messaging' },
    { icon: <FaCheckCircle size={20} />, text: 'Brand Guidelines & Documentation' },
    { icon: <FiPhone size={20} />, text: 'Dedicated Support' },
];

const slideUpTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: 'easeOut' },
};

const fadeInTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, ease: 'easeOut' },
};


const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: 'easeInOut' },
};

const slideUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};
const TypingEffect = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[index]);
                setIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};
export default function BrandingSection() {
    return (
        <>
            <Navbar />
            <div className="flex h-[86vh] flex-col-reverse md:flex-row bg-black text-white p-6 md:p-16 gap-10 relative" style={{ top: '85px' }}>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
                    style={{ backgroundImage: "url('/brand.png')" }}
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                        className="space-y-3 text-left"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                            Branding
                        </h1>


                        {/* Smooth Fade-In Text */}
                        <motion.h2
                            {...fadeInTransition}
                            className="text-xl md:text-3xl font-semibold leading-snug text-white"
                        >
                            Elevate Your
                        </motion.h2>

                        {/* Sub Heading */}
                        <motion.h3
                            {...slideUpTransition}
                            transition={{ ...fadeInTransition.transition, delay: 0.5 }}
                            className="text-3xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
                        >
                            Business Identity
                        </motion.h3>
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"
                    >
                        {brandingFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="flex items-start space-x-2 hover:text-yellow-400 transition duration-300"
                            >
                                <span className="text-yellow-400 pt-0.5">{feature.icon}</span>
                                <span>{feature.text}</span>
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
                        {/* Glow Animation Layer */}
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
                            GET A QUOTE
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
                                transition={{ repeat: Infinity, duration: 0.5, repeatType: "mirror" }}
                                className="text-yellow-400"
                            >
                                <FiPhone size={18} />
                            </motion.span>
                            <span>+ 91 95251 04860</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <motion.span
                                animate={{ rotate: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 0.5, repeatType: "mirror" }}
                                className="text-yellow-400"
                            >
                                <FiMail size={18} />
                            </motion.span>
                            <span>maccotech@gmail.com</span>
                        </p>
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE - Video Section Removed */}
            </div>

            <div className="relative overflow-hidden shadow-2xl pt-32 md:p-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white flex flex-col md:flex-row gap-12 group font-[Poppins]">

                {/* Background Gradient + Animated Blurs */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse-slow" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 opacity-30 rounded-full filter blur-3xl z-0 animate-pulse-slow" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_70%)] z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_70%)] z-0" />

                {/* LEFT SIDE */}
                {/* <div className="relative z-10 md:w-1/2 space-y-8 pt-6 pb-5">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 relative pb-4 group cursor-pointer animate-slide-in-left">
            <span className="inline-block transition-all duration-500 group-hover:tracking-wide">
                Crafting Powerful Brands
            </span>
            <span className="absolute bottom-0 left-0 h-1 w-16 bg-yellow-400 opacity-40 group-hover:w-24 transition-all duration-500"></span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-inter font-medium tracking-wide">
            Your brand is more than just a logo. It’s the essence of your business — a story, a promise, an experience.
            We specialize in building brands that are bold, memorable, and designed to drive real growth.
        </p>

        <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300 w-max">
            Explore Our Branding Services
        </button>
    </div> */}
                <div className="relative z-10 md:w-1/2 space-y-8 pt-6 pb-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 relative pb-4 group cursor-pointer animate-slide-in-left">
                        <span className="inline-block transition-all duration-500 group-hover:tracking-wide">
                            Building Impactful, Timeless Brands
                        </span>
                        <span className="absolute bottom-0 left-0 h-1 w-16 bg-yellow-400 opacity-40 group-hover:w-24 transition-all duration-500"></span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-inter font-medium tracking-wide">
                        A brand is more than just a name or a logo—it&asop;s your story, your promise, and the experience you deliver.
                        At MaccoTech, we create bold and strategic brand identities that not only captivate your audience but also
                        drive long-term business growth.
                    </p>

                    <button className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300 w-max">
                        Discover Our Branding Solutions
                    </button>
                </div>


                {/* RIGHT SIDE */}
                <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="overflow-hidden shadow-lg border border-gray-700 transition-transform duration-300"
                    >
                        <video
                            src="/brand.mp4"
                            width={600}
                            height={400}
                            className="object-cover rounded-2xl"
                            autoPlay
                            loop
                            muted
                        />
                    </motion.div>
                </div>
            </div>

            <div className="relative bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 py-24 px-8 md:px-32 lg:px-40">
                {/* Animated Background Section */}
                <div className="absolute inset-0 bg-gradient-to-r animate-pulse opacity-40"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center relative z-10">
                    {/* Left Side: Enlarged Lottie Animation */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <DotLottieReact
                            src="https://lottie.host/92dda592-4035-4fc9-8e39-3aea83672a18/LFNKV5PGfM.lottie"
                            loop
                            autoplay
                            style={{ width: "100%", maxWidth: "600px", height: "130%" }} // Increased size
                        />
                    </div>

                    {/* Right Side: Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                        {/* <motion.h2
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                            className="text-4xl md:text-4xl font-extrabold text-white mb-8 drop-shadow-lg"
                        >
                            Exclusive Agency For{" "}
                            <span className="text-indigo-600">Technology Solutions</span>
                        </motion.h2>

                     
                        <motion.p
                            variants={slideUp}
                            initial="initial"
                            animate="animate"
                            className="text-white leading-relaxed mb-10 text-lg md:text-xl"
                        >
                            <TypingEffect
                                text="We offer advanced technology solutions to streamline your business processes, enhance productivity, and drive innovation in the digital world."
                                speed={100}
                            />
                        </motion.p> */}

                        <motion.h2
                            variants={fadeIn}
                            initial="initial"
                            animate="animate"
                            className="text-4xl md:text-4xl font-extrabold text-white mb-8 drop-shadow-lg"
                        >
                            Exclusive Agency For{" "}
                            <span className="text-indigo-600">Innovative Technology Solutions</span>
                        </motion.h2>

                        {/* Typing Effect for Text */}
                        <motion.p
                            variants={slideUp}
                            initial="initial"
                            animate="animate"
                            className="text-white leading-relaxed mb-10 text-lg md:text-xl"
                        >
                            <TypingEffect
                                text="Empowering your business with cutting-edge technology to optimize operations, accelerate growth, and deliver exceptional digital transformation."
                                speed={100}
                            />
                        </motion.p>


                        <motion.ul
                            variants={slideUp}
                            initial="initial"
                            animate="animate"
                            className="space-y-5 text-left text-gray-100"
                        >
                            <li className="flex items-center">
                                <span className="text-indigo-500 mr-2">✓</span>
                                <span>Expertise in cutting-edge technology trends.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-500 mr-2">✓</span>
                                <span>Customized solutions for unique business needs.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-500 mr-2">✓</span>
                                <span>Ongoing support and optimized integration.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-indigo-500 mr-2">✓</span>
                                <span>Innovative approaches for impactful results.</span>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>
            <Footerpage />
        </>
    );
}
