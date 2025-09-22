"use client";

import React from "react";
import {
  FaShieldAlt,
  FaUserTie,
  FaBug,
  FaSyncAlt,
  FaDollarSign,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaShieldAlt className="text-green-600 text-3xl" />,
    title: "Simple. Secure. Intuitive",
    description:
      "Our iOS apps are designed with simplicity, security, and intuitive interfaces, ensuring ease of use and reliability.",
  },
  {
    icon: <FaUserTie className="text-green-600 text-3xl" />,
    title: "Proficient Developers",
    description:
      "Our skilled developers, experienced in Objective-C and the iPhone SDK, ensure that every app aligns perfectly with Apple's guidelines.",
  },
  {
    icon: <FaBug className="text-green-600 text-3xl" />,
    title: "Bug-Free App",
    description:
      "We perform rigorous testing and quality assurance to deliver apps with flawless performance and minimal bugs.",
  },
  {
    icon: <FaSyncAlt className="text-green-600 text-3xl" />,
    title: "Version Updates",
    description:
      "Keep your app up to date with the latest iOS versions and Apple devices, ensuring long-term compatibility and functionality.",
  },
  {
    icon: <FaDollarSign className="text-green-600 text-3xl" />,
    title: "Cost Effective",
    description:
      "Our iOS development services are both affordable and high-quality, tailored to meet your unique business needs and goals.",
  },
  {
    icon: <FaArrowRight className="text-green-600 text-3xl" />,
    title: "Migration Support",
    description:
      "Seamlessly migrate your existing Android or .NET apps to iOS with expert guidance, ensuring smooth transitions and continuity.",
  },
];

const IOSFeatures = () => {
  return (
    <section className="bg-[#FEEFEF]  py-8 px-6 sm:px-8 lg:px-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Our iOS App Development Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col h-full justify-between bg-white p-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="mb-4 p-4 bg-green-100 rounded-full text-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IOSFeatures;
