"use client"
import React, { useState } from 'react';
import { FaBullseye, FaEye, FaHeart, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

function OurValuesSection() {
  const [activeSection, setActiveSection] = useState('mission');

  const sections = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <FaBullseye className="mr-3" />,
      color: 'orange',
      content: [
        `At Macco Tech, our mission is to deliver innovative enterprise solutions that drive growth and success. We stay ahead of technology trends to create impactful digital products tailored to client needs. Our team of experts specializes in app design, web development, digital marketing, ecommerce and cloud development.`,
        `We believe in transforming concepts into seamless, user-centric experiences. By evolving with technological advancements, we ensure that our solutions are always ahead of the curve. Our goal is to empower businesses to thrive in a dynamic digital world. We are committed to creating lasting value for our clients worldwide.`,
      ],
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <FaEye className="mr-3" />,
      color: 'blue',
      content: [
        `At Macco Tech, our vision is to be a global leader in delivering innovative, technology-driven solutions that empower businesses to thrive. We aim to be the go-to partner for companies seeking cutting-edge digital products that drive transformation and growth.`,
        `Our focus is on harnessing the latest technological advancements to create seamless, user-centric experiences across various industries. We strive to build long-lasting relationships with our clients by consistently delivering high-quality, scalable solutions. Our vision is to shape the future of enterprise solutions, making technology an enabler of business success worldwide.`,
      ],
    },
    {
      id: 'commitment',
      title: 'Our Commitment',
      icon: <FaHeart className="mr-3" />,
      color: 'green',
      content: [
        `At Macco Tech, we are committed to delivering the highest quality solutions that meet the evolving needs of our clients. We promise to leverage the latest technologies to create innovative, scalable, and user-centric products that drive business success.`,
        `Our team of experts is dedicated to providing exceptional service, fostering long-term relationships, and continuously exceeding client expectations. We are committed to maintaining integrity, transparency, and excellence in all our endeavors, ensuring that we are always a trusted partner in your digital transformation journey.`,
      ],
    },
    {
      id: 'values',
      title: 'Core Values',
      icon: <FaHandshake className="mr-3" />,
      color: 'purple',
      content: [
        `These are at the heart of the Macco culture and brand: a passionate team driven by innovation, integrity, Client-Centricity, collaboration, and Entrepreneurship dedicated to empowering our clients and seizing every opportunity to create lasting impact and growth.`,
        `We prioritize innovation, integrity, and client-centricity by delivering cutting-edge solutions with transparency and ethical practices. Collaboration and teamwork drive our success, both internally and with clients. Embracing an entrepreneurial mindset, we continuously seek creative ways to add value and push boundaries.`,
      ],
    },
  ];

  return (
    // <section className="py-12 shadow-lg w-full min-h-[40vh] bg-gray-200">
    <section className="py-12 shadow-lg w-full min-h-[40vh] bg-[#FEEFEF]">
      <div className="max-w-7xl mx-auto py-9 px-6 md:px-8 lg:px-12">
        <div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
          {/* Left Side Navigation */}
          <aside className="w-full md:w-64 bg-gray-100">
            <nav className="space-y-3 py-4">
              {sections.map(({ id, title, icon, color }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`w-full text-left px-6 py-3 font-semibold text-sm flex items-center transition-colors duration-200 
                    ${activeSection === id
                      ? `bg-${color}-100 text-${color}-700 border-r-4 border-${color}-500`
                      : 'text-gray-700 hover:bg-gray-50 hover:text-' + color + '-700'
                    }`}
                >
                  {icon} {title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Side Content */}
          <main className="flex-1 p-6">
            {sections.map(({ id, title, color, content }) =>
              activeSection === id ? (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className={`text-2xl font-semibold text-gray-800 mb-4`}>{title}</h2>
                  {content.map((para, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0}}
                      transition={{delay: index * 0.1}}
                      className="text-gray-700 leading-relaxed mb-4"
                    >
                      {para}
                    </motion.p>
                  ))}
                </motion.div>
              ) : null
            )}
          </main>
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
