'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogCard = ({ post = {}, handleReadMore = () => {} }) => {
  if (!post || typeof post !== 'object') return null;

  const defaultImage = '/blogimage.png';

  const imageUrl =
    post.image && typeof post.image === 'string'
      ? post.image
      : defaultImage;

  // Check if it's an external image
  const isExternal = imageUrl.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-w-[300px] md:min-w-[350px] lg:min-w-[400px]"
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={post.title || 'Blog Image'}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
          priority
          unoptimized={isExternal} // avoid domain errors for external images
        />
      </div>
      <div className="p-6 h-[310px] flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-purple-600 font-medium">
            {post.category || 'Uncategorized'}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-500">{post.readTime || '2 min read'}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {post.title || 'Untitled Blog'}
        </h2>
        <p className="text-gray-600 mb-2 line-clamp-2">
          {post.heading || 'No heading available.'}
        </p>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.description || post.content?.substring(0, 100) || 'No description available.'}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author || 'Anonymous'}</p>
              <p className="text-xs text-gray-500">{post.date || 'Unknown Date'}</p>
            </div>
          </div>
          <button
            onClick={() => handleReadMore(post)}
            className="text-purple-600 font-medium hover:text-purple-700 cursor-pointer"
          >
            Read More →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
