'use client';
import Link from 'next/link';
import React from 'react';

const ConversationStarter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-green-600 to-blue-500 rounded-2xl m-6 p-10 md:p-16 lg:p-24 xl:p-28">
      
      {/* Left text section */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-white lg:p-6 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          All great relationships start with a single conversation.
        </h1>
      </div>

      {/* Right button section */}
      <div className="flex-shrink-0">
        <Link href="/contact">
          <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-4 px-8 sm:py-5 sm:px-10 rounded-lg shadow-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <span className="mr-3  text-lg sm:text-xl">So let&asop;s get talking!</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>
      </div>

    </div>
  );
};

export default ConversationStarter;
