'use client';

import React from 'react';
import Image from 'next/image';

const ECommerceOverview = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 bg-white container mx-auto">
      <div className="w-full md:w-1/2">
        <Image
          src="/e-commerce.png"
          alt="E-Commerce Development"
          width={500}
          height={350}
          className="rounded-xl   "
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          E-Commerce Development Services Overview
        </h2>
        <p className="text-gray-700 mb-4">
          At <span className="text-blue-600 font-semibold">Macco Tech</span>, we
          craft high-performance e-commerce websites tailored for growing
          businesses. Based in India, our team delivers scalable and
          user-friendly online store solutions to help brands excel in the
          digital marketplace.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you need a custom retail store or a fully featured enterprise
          e-commerce system, our strategies are built around intuitive design,
          seamless integration, and robust features.
        </p>
        <p className="text-gray-700">
          Our capabilities include WooCommerce and WordPress development,
          e-commerce CMS setup, and performance optimization. As a trusted
          eCommerce partner globally, Macco Tech is dedicated to building
          secure, dynamic online platforms that boost engagement and
          conversions.
        </p>
      </div>
    </section>
  );
};

export default ECommerceOverview;
