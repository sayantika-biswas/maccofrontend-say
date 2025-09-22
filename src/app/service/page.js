import React from 'react';
import Navbar from '../Component/Navbar/page';
import OurServices from '../Component/OurServices/page';
import Footerpage from '../Component/Footerpage/page';
import DevelopmentServices from '../Component/DevelopmentServices/page';
import Image from 'next/image';
import Link from 'next/link'

const Service = () => {
  return (
    <>
      <Navbar />
      {/* background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%); */}
      <div className="relative text-white pt-36 pb-16 px-6 sm:px-8 lg:px-12 xl:px-16 overflow-hidden bg-gradient-to-r from-[#ffd2ee] to-[#7ba2ff]">
    
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <svg
            className="absolute top-1/4 left-[6%] transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-400 animate-pulse"
            viewBox="0 0 20 20"
          >
            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
          </svg>
          <svg
            className="absolute bottom-[12.5%] right-[3%] transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-800 animate-pulse"
            viewBox="0 0 20 20"
          >
            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-2xl font-bold text-gray-700 tracking-tight sm:text-3xl lg:text-4xl mt-5">
            Custom Software <span className="text-gray-700">Development Services</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            At <span className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 bg-clip-text text-transparent">Macco Tech</span>, we help businesses transform ideas into powerful digital solutions. From startup MVPs to enterprise-grade platforms, we deliver tailored software that scales with your growth.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex justify-center space-x-6">
            <Link href='/contact'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full transition duration-300 shadow-md cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Rating */}
          <div className="mt-10 flex items-center justify-center text-sm text-gray-600">
            Clients rate our services
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current ml-1 text-yellow-400" viewBox="0 0 20 20">
                <path d="M10 1l2.39 6.75L19 7l-5.46 4.79L15.83 19 10 16.01 4.17 19l1.29-6.21L1 7l6.61-.25L10 1z" />
              </svg>
            ))}
            <span className="ml-2 font-semibold">5.0</span>
          </div>
        </div>
      </div>
      <OurServices />
      <DevelopmentServices />

      <div className="bg-white-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8 md:text-3xl">
            Flexible collaboration models tailored to your project
          </h2>
          <p className="text-base text-gray-700 text-center mb-12 md:text-base max-w-3xl mx-auto">
            Every business has unique needs. Macco Tech offers three practical collaboration modes—choose the one that best fits your workflow, resources, and strategic goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Card */}
            {[{
              title: "Software Development Outsourcing",
              desc: "Let Macco Tech manage your complete software project lifecycle, from initial design to final deployment, allowing you to concentrate on your overarching business objectives.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-14 h-14 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.891M12 13a5 5 0 00-4.796 6.724l2.292.287-.283 2.292a1 1 0 001.414 1.414l2.283-2.283 1.414-1.414L16.796 19.724a5 5 0 00-4.796-6.724z" />
                </svg>
              )
            }, {
              title: "Staff Augmentation",
              desc: "Integrate Macco Tech's skilled experts into your existing team precisely when you need them, providing flexibility and specialized skills without long-term commitments.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-14 h-14 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m14-4l-3-3m3 3l-3 3M3 6h18M3 10h18M3 14h18M3 18h18" />
                </svg>
              )
            }, {
              title: "Dedicated Team",
              desc: "Leverage a full-time, dedicated team from Macco Tech, built specifically for your project. You maintain leadership, while we provide robust support and execution.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-14 h-14 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-2m6-14H9a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2v-2m3-4h3" />
                </svg>
              )
            }].map((card, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-between h-full">
                <div className="mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-3 w-full">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Footerpage />
    </>
  );
};

export default Service;
