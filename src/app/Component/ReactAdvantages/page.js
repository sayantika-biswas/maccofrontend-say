'use client';
import React from 'react';
import { FaClock, FaExchangeAlt, FaFolderOpen, FaLink, FaSearch, FaCode } from 'react-icons/fa'; // Font Awesome 5
import { AiOutlineArrowsAlt } from 'react-icons/ai'; // Ant Design Icons
import { MdFolderOpen } from 'react-icons/md'; // Material Design Icons

const ReactAdvantagesAlternativeIcons = () => {
  const advantages = [
    {
      title: 'Time-Saving',
      description: 'ReactJS allows component reusability, reducing development time and effort significantly.',
      icon: FaClock, // Using Font Awesome 5 clock
    },
    {
      title: 'One-Way Data Flow',
      description: 'Ensures stable code with predictable behavior and easy debugging.',
      icon: AiOutlineArrowsAlt, // Using Ant Design horizontal arrows (you might explore others)
    },
    {
      title: 'Open-Source',
      description: 'Supported by Meta and a huge developer community for continuous improvements.',
      icon: MdFolderOpen, // Using Material Design open folder
    },
    {
      title: 'Easy API Integration',
      description: 'Seamlessly connects with RESTful APIs and third-party services.',
      icon: FaLink, // Using Font Awesome 5 link
    },
    {
      title: 'SEO-Friendly',
      description: 'Improves search rankings with fast rendering and optimized performance.',
      icon: FaSearch, // Using Font Awesome 5 search
    },
    {
      title: 'Developer-Friendly',
      description: 'Simple, scalable, and easy to maintain with reusable components.',
      icon: FaCode, // Using Font Awesome 5 code
    },
  ];

  return (
    <div className="bg-[#FEEFEF] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-black-600 text-center mb-12">Key Advantages of <span className="text-blue-400">React</span>JS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mt-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                <advantage.icon size={24} /> {/* Render the icon component */}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactAdvantagesAlternativeIcons;