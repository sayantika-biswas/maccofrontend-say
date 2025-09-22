'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="fixed text-gray-50 bg-black rounded-2xl m-2 p-2 hover:text-gray-700 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-64 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            style={{ objectFit: 'contain' }}
            sizes={600}
            priority
            className="rounded-t-xl"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full">
              {blog.category}
            </span>
            <span className="text-gray-600 text-sm">{blog.readTime}</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h2>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">By {blog.author}</span>
            </div>
            <span className="text-gray-600">{new Date(blog.date).toLocaleDateString()}</span>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-3">{blog.heading}</h3>
            <div className="text-gray-700 whitespace-pre-wrap mb-6">{blog.content}</div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogModal;