'use client';

import React from 'react';
import Navbar from '../Navbar/page';

const PageSkeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-md p-4 space-y-4">
      <Navbar />
    <div className="h-16 bg-gray-300 rounded-md" />
    <div className="h-96 bg-gray-300 rounded " />
    <div className="h-16 bg-gray-300 rounded " />
    <div className="h-16 bg-gray-300 rounded " />
    <div className="h-16 bg-gray-300 rounded " />
  </div>
  );
};

export default PageSkeleton;