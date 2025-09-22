'use client';
import React from 'react';

const services = [
  {
    title: 'Custom ReactJS Development',
    description:
      'Tailored ReactJS solutions built to meet your specific business needs, ensuring flexibility, scalability, and performance.',
  },
  {
    title: 'ReactJS Web Development',
    description:
      'From SPAs to PWAs, we craft responsive and dynamic web apps optimized for both client-side and server-side rendering.',
  },
  {
    title: 'UI/UX Development',
    description:
      'Deliver engaging, interactive UI experiences that enhance usability and boost user retention across platforms.',
  },
  {
    title: 'Enterprise Web Apps',
    description:
      'Robust, scalable ReactJS applications designed for enterprise-level performance and seamless system integration.',
  },
  {
    title: 'App Migration to ReactJS',
    description:
      'Modernize legacy systems by migrating to ReactJS for faster performance, better UX, and future scalability.',
  },
  {
    title: 'Plugins & Widget Development',
    description:
      'Extend your app functionality with custom-built plugins and widgets tailored to your application’s ecosystem.',
  },
];

const ReactJSServices = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            React JS Development Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-gray-600">
            We deliver scalable, high-performance ReactJS solutions — from interactive SPAs to enterprise-grade applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 h-full"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactJSServices;
