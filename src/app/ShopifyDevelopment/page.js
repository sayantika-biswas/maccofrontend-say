'use client';
import React from 'react';
import Navbar from '../Component/Navbar/page';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhyMaccoTechShopify from '@/app/Component/WhyMaccoTechShopify/page';
import ShopifyDevelopmentServices from '@/app/Component/ShopifyDevelopmentServices/page';
import ShopifyBenefits from '@/app/Component/ShopifyBenefits/page';
import Footerpage from '@/app/Component/Footerpage/page';

function ShopifyDevelopment() {
  return (
    <>
      <Navbar />
      <section>
        <div
          className="relative bg-gray-900 h-[70vh] sm:h-[70vh]"
          style={{
            backgroundImage: `url('/SHOPIFY_DEVELOPMENT_COMPANY_IN_BANGALORE8.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: '85px'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true" />

          <div className="relative w-full h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4"
              initial={{ scale: 0.8, opacity: 0 }}  // Initial state
              animate={{ scale: 1, opacity: 1 }}   // Final state
              transition={{ duration: 0.8, ease: 'easeOut' }}  // Animation properties
            >
              Shopify Development Company
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
              initial={{ scale: 0.8, opacity: 0 }}  // Initial state
              animate={{ scale: 1, opacity: 1 }}   // Final state
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}  // Animation properties
            >
              We build powerful and scalable e-commerce stores. Our expert Shopify development services
              offer seamless shopping experiences.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ scale: 0.8, opacity: 0 }}  // Initial state
              animate={{ scale: 1, opacity: 1 }}   // Final state
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}  // Animation properties
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition md:py-4 md:text-lg md:px-10"
              >
                Talk to Our Experts
              </a>
            </motion.div>

          </div>
        </div>
      </section>



      <section>
        <div className="bg-white py-24 md:py-24 lg:py-39">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:flex items-center justify-between">

            {/* Text Section */}
            <motion.div
              className="lg:w-1/2 mb-8 lg:mb-0"
              initial={{ x: -100, opacity: 0 }}  // Initial state: off-screen (left) and invisible
              animate={{ x: 0, opacity: 1 }}     // Final state: on-screen and visible
              transition={{ duration: 0.8, ease: 'easeOut' }}  // Animation properties
            >
              <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-3xl mb-4">
                Shopify Website Development <br className="hidden lg:inline" /> Company in India
              </h1>
              <p className="text-gray-600 mb-6 text-base">
                At Macco Tech, we are dedicated to delivering custom Shopify solutions that empower businesses to excel in the digital landscape. Whether you&asop;re a startup or an established brand, we build intuitive, high-performing eCommerce stores that captivate customers and drive measurable results. Our Shopify development services focus on cost-efficiency, transparency, and user-centric design, ensuring your online store not only looks exceptional but also delivers a seamless, fast, and engaging shopping experience.
              </p>
              <p className="text-gray-600 text-base">
                We take time to understand your business vision, challenges, and goals, delivering Shopify solutions that drive growth and maximize your ROI. Partnering with Macco Tech means working with a team of creative and skilled developers who are passionate about delivering top-notch Shopify experiences. Our satisfied clients are a testament to the quality, innovation, and reliability we bring to every project.
              </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ x: 100, opacity: 0 }}  // Initial state: off-screen (right) and invisible
              animate={{ x: 0, opacity: 1 }}     // Final state: on-screen and visible
              transition={{ duration: 0.8, ease: 'easeOut' }}  // Animation properties
            >
              <Image
                src="/shopify-dev-img.png"
                alt="Shopify Website Development"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <WhyMaccoTechShopify />
      <div className="bg-white py-24 md:py-24 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 md:hidden">Macco Tech & Shopify</h2>
            <p className="text-gray-600 text-lg">
              At Macco Tech, we understand the importance of user experience and conversion
              optimization in e-commerce. We work closely with our clients to create visually appealing
              and user-friendly Shopify stores that engage customers and drive sales. From responsive
              design to seamless checkout processes, we focus on delivering solutions that help you
              stand out in the competitive online marketplace.
            </p>
          </div>

          {/* Middle Section (Illustrative - Replace with your image) */}
          {/* <div className="flex justify-center">
          
           Replace the above div with your actual image 
           <img src="https://www.strivemindz.com/images/offerings/mobile/shopify-development.png" alt="Shopify Illustration" className="max-w-full h-auto" /> 
        
        </div> */}
          <div className="flex justify-center">
            <div className="relative w-48 h-60 md:w-60 md:h-72">
              <Image
                src="/shopify-dev-img.png"
                alt="Shopify Illustration"
                fill // this makes the image cover the entire parent container
                className="object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 hidden md:block">Partner with Macco Tech</h2>
            <p className="text-gray-600 text-lg">
              Partnering with Macco Tech means gaining access to a reliable and dedicated Shopify
              development team that is committed to your success. We offer comprehensive Shopify
              development services, including store setup, customization, theme design, app integrations,
              and ongoing support and maintenance.
            </p>
          </div>
        </div>
      </div>

      <ShopifyDevelopmentServices />
      <ShopifyBenefits />
      <Footerpage />
    </>
  );
}


export default ShopifyDevelopment;
