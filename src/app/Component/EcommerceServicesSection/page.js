
'use client';
import React from 'react';

const services = [
  {
    title: 'Custom E-commerce Development',
    description: 'Tailor-made platforms designed to fit your brand and specific business needs.',
    icon: '🛒',
  },
  {
    title: 'Responsive Web Design',
    description: 'User-friendly, mobile-first designs that work seamlessly across devices.',
    icon: '📱',
  },
  {
    title: 'Secure Payment Integration',
    description: 'Safe and flexible payment gateways supporting multiple methods.',
    icon: '🔒',
  },
  {
    title: 'Inventory & Order Management',
    description: 'Track inventory, manage orders, and automate fulfillment easily.',
    icon: '📦',
  },
  {
    title: 'SEO & Performance Optimization',
    description: 'Improve site visibility and performance for better rankings and conversions.',
    icon: '🚀',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description: 'Keep your e-commerce site updated, secure, and running smoothly.',
    icon: '🔧',
  },
];

export default function EcommerceServicesSection() {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
