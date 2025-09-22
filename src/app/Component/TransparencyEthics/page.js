"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TransparencyEthics = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this code only runs on the client side
  }, []);

  if (!isClient) return null; // Prevent server-side rendering issues with Framer Motion

  const data = [
    {
      title: 'Client-centric Approach',
      description:
        "We prioritize our clients' needs, delivering solutions that cater to their specific requirements, ensuring long-term satisfaction.",
      icon: (
        <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 7h18m-9 3v7m5-7v7M5 10l4.5 5 4.5-5M7 19h10" />
        </svg>
      ),
    },
    {
      title: 'Service Delivered in Time',
      description:
        'We are committed to providing timely solutions without compromising on quality, ensuring on-time delivery every time.',
      icon: (
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Effective Collaboration',
      description:
        'We believe in working closely with our clients and internal teams, ensuring clear communication and successful outcomes.',
      icon: (
        <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2h2m8-2H9m4-6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Employee Benefits',
      description:
        'We offer comprehensive employee benefits, ensuring the well-being and growth of our team to deliver the best results.',
      icon: (
        <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h3m8 0h3m-7 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Team Work',
      description:
        'We foster a collaborative environment where each team member contributes to the success of the project, driving innovation together.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0-5l5 5m2-2v4l-2-2M9 11l-5-5m0 5l5-5m2 2v-4l-2 2m2-2l-2 2m-2-2l2 2" />
        </svg>
      ),
    },
    {
      title: 'Quality of Service',
      description:
        'We maintain the highest standards of service quality, ensuring that every solution is crafted to exceed client expectations.',
      icon: (
        <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 px-[90px]">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Our Transparency and Ethics</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="text-left p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <div className="w-16 border-b-4 border-blue-600 my-2"></div>
            <p className="text-sm text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TransparencyEthics;
