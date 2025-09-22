"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi"; // Make sure this icon exists in your installed version

const HireUsSection = () => {
  const reasons = [
    "We believe in complete transparency and provide regular updates throughout the project.",
    "Our experienced iOS team is fully dedicated to your app from start to finish.",
    "Your app idea stays protected with 100% confidentiality and secure coding practices.",
    "Timely delivery is our priority, along with quality testing before final deployment.",
    "We ensure clean, optimized, and bug-free code that meets your business goals.",
    "We offer cost-effective development with a focus on beautiful and user-friendly design.",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12">
          Top Reasons To Hire Us For iOS App Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <HiBadgeCheck className="text-green-600 text-xl" />
              </div>
              <p className="text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;
