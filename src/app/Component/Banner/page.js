'use client';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="container mx-auto mb-7 bg-indigo-900 rounded-xl py-9 px-7 md:py-12 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="text-white text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-2 md:text-3xl">
          Join us and give wings to your <span className="text-cyan-400">Career</span>.
        </h2>
        <Link href="/contact">
        <button className="bg-white cursor-pointer text-indigo-900 font-semibold py-3 px-6 rounded-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2">
          Contact Us
        </button>
        </Link>
      </div>
      <div className="relative w-64 h-40 md:w-80 md:h-52">
        {/* You can replace this with your actual image or SVG */}
         <DotLottieReact
      src="https://lottie.host/023e6705-f8e3-48ea-b2fd-a3dae5fd6e4b/a894ZdUcMs.lottie"
      loop
      autoplay
    />
        {/* End of placeholder SVG */}
      </div>
    </div>
  );
};

export default Banner;