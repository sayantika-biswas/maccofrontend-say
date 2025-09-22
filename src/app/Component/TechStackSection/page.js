
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  SiNodedotjs,
  SiPython,
  SiOpenjdk,
  SiRubyonrails,
  SiDotnet,
  SiPhp,
} from 'react-icons/si';



// CountUp Component (moved here for simplicity in this combined component)
const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil((end / duration) * 20);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [end]);
  return (
    <span className="text-3xl font-semibold text-black">
      {count}
      {suffix}
    </span>
  );
};

const TechnologiesSection = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const technologiesData = {
    mobile: [
      { name: 'iOS', bg: 'bg-[#FFF7ED]', icon: '🚀' },
      { name: 'Swift', bg: 'bg-[#E0F7FA]', icon: '⚡' },
      { name: 'Flutter', bg: 'bg-[#E8F5E9]', icon: '📱' },
      { name: 'React Native', bg: 'bg-[#FCE4EC]', icon: '🔧' },
      { name: 'Kotlin', bg: 'bg-[#F8BBD0]', icon: '🔥' },
      { name: 'Android', bg: 'bg-[#F0F9E6]', icon: '🤖' },
    ],
    web: [
      { name: 'React', bg: 'bg-[#E0F7FA]', icon: '⚛' },
      { name: 'Angular', bg: 'bg-[#FBE9E7]', icon: '🅰' },
      { name: 'Vue.js', bg: 'bg-[#E6F9E8]', icon: 'V' },
      { name: 'HTML', bg: 'bg-[#FFE0B2]', icon: '<>' },
      { name: 'CSS', bg: 'bg-[#BBDEFB]', icon: '{ }' },
      { name: 'JavaScript', bg: 'bg-[#FFF9C4]', icon: 'JS' },
    ],
   backend : [
  { name: 'Node.js', bg: 'bg-[#E8F5E9]', icon: <SiNodedotjs className="text-2xl text-green-600" /> },
  { name: 'Python', bg: 'bg-[#FFFDE7]', icon: <SiPython className="text-2xl text-yellow-800" /> },
  { name: 'Java', bg: 'bg-[#FFE0B2]', icon: <SiOpenjdk className="text-2xl text-orange-700" /> },
  { name: 'Ruby on Rails', bg: 'bg-[#FBE9E7]', icon: <SiRubyonrails className="text-2xl text-rose-600" /> },
  { name: '.NET', bg: 'bg-[#E1F5FE]', icon: <SiDotnet className="text-2xl text-blue-700" /> },
  { name: 'PHP', bg: 'bg-[#F3E5F5]', icon: <SiPhp className="text-2xl text-indigo-600" /> },
],

  };
  const currentTechnologies = technologiesData[activeTab] || [];

  // Counter Data
  const counters = [
    { value: 9, suffix: '+', label: 'Years of Industry Experience' },
    { value: 3000, suffix: '+', label: 'Digital Assets Delivered' },
    { value: 50, suffix: '+', label: 'Awards and Certification' },
    { value: 90, suffix: '%', label: 'Returning Client Rate' },
  ];

  return (
    <section className='text-center pt-18 min-h-[85vh] bg-gray-100'>
    <div className=" max-w-7xl mx-auto ">
    
      <h2 className="text-3xl font-bold">
        <span className="text-sky-500">Technologies</span> We Use for Software & App Development
      </h2>
      <p className="text-gray-400 mt-4 text-sm mb-5">
        We&asop;ve mastered every technology combination, so you can focus on what matters.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4 mt-5 ">
        {Object.keys(technologiesData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5  cursor-pointer py-2 rounded-md text-sm font-medium ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Technology Cards */}
      <div className="flex flex-wrap justify-center gap-4 mb-10"> 
        {currentTechnologies.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-32 h-32 ${tech.bg} rounded-lg flex flex-col justify-center items-center shadow-md`}
          >
            <span className="text-3xl mb-1">{tech.icon}</span>
            <span className="font-medium text-black text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Counters */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-50 rounded-xl p-6 md:p-10 mx-auto max-w-6xl mb-6" 
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {counters.map((item, idx) => (
            <div key={idx} className="border-r last:border-none border-gray-300 px-2">
              <CountUp end={item.value} suffix={item.suffix} />
              <p className="text-xs mt-1 uppercase text-gray-500 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
            <Link href="/contact">
          <button className="bg-gradient-to-r cursor-pointer from-sky-400 to-sky-800 text-white px-6 py-2 rounded font-medium shadow hover:scale-105 transition-transform">
            Discuss Your Web Project Requirements
          </button>
          </Link>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default TechnologiesSection;