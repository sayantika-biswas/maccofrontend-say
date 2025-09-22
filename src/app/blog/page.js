"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Image from "next/image";
import Link from "next/link";
import BlogModal from "../Component/BlogModal/page";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../Component/BlogCard/page";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchFocused, setSearchFocused] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Ensure API response has required fields
  const normalizeBlogData = (data) => {
    return data.map((blog) => ({
      id: blog._id || blog.id,
      title: blog.blogTitle || blog.title || "Untitled",
      description: blog.blogDescription || blog.description || "",
      content: blog.blogContent || "",
      category: blog.category || "General",
      heading: blog.heading || "Heading",
      author: blog.authorName || blog.author || "Anonymous",
      date: blog.createdAt || blog.date || new Date().toLocaleDateString(),
      readTime: `${blog.readTime || 5} min read`,
      image: blog.featuredImage || blog.image || "/blogimage.png",
      tags: blog.tags || [],
    }));
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_URL}/api/blog/`);
        console.log(response);
        const data = await response.json();
        setBlogs(normalizeBlogData(data));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [API_URL]);
  

  // Get popular blogs (all blogs)
  const popularPosts = blogs;

  // Get latest blogs sorted by date
  const latestPosts = [...blogs].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const categories = [
    "all",
    "Digital Marketing",
    "SEO",
    "Social Media",
    "Content Strategy",
    "Technology",
    "Design",
  ];

  // Filter all posts based on search and category
  const filteredPosts = [...popularPosts, ...latestPosts].filter((blog) => {
    const matchesSearch =
      blog?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      blog?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      blog?.content?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Separate filtered posts into popular and latest
  const filteredPopularPosts = popularPosts.filter((post) => {
    const matchesSearch =
      post?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      post?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredLatestPosts = latestPosts.filter((post) => {
    const matchesSearch =
      post?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      post?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });


  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{ marginTop: "85px" }}
      >
        {/* Banner Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/Portfolio-banner.jpg"
            alt="Blog Banner"
            fill
            sizes={600}
            priority
            className="brightness-50 object-cover"
          />
        </div>

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white shadow-text"
          >
            Explore Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto text-white shadow-text"
          >
            Insights, strategies, and expert knowledge to help you succeed in
            the digital world
          </motion.p>

          {/* Search and Filter Section */}
          <section className="py-8 mx-auto mb-12">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 justify-between items-stretch"
              >
                {/* Enhanced Search Bar with Floating Label */}
                <div className="w-full relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: searchFocused ? 1.02 : 1,
                      boxShadow: searchFocused
                        ? "0 8px 20px rgba(255, 255, 255, 0.2)"
                        : "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden max-w-2xl mx-auto border border-white/20"
                  >
                    <input
                      type="text"
                      placeholder=""
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      className="w-full px-12 py-4 border border-white/20 focus:border-white/40 rounded-2xl bg-transparent outline-none transition-all duration-300 placeholder-transparent text-gray-800"
                      id="searchInput"
                    />
                    <label
                      htmlFor="searchInput"
                      className={`absolute left-12 transition-all duration-300 ${searchQuery || searchFocused
                          ? "-top-0.5 text-xs text-white/80 font-medium"
                          : "top-1/2 -translate-y-1/2 text-gray-600"
                        }`}
                    >
                      Search articles...
                    </label>
                    <motion.div
                      animate={{
                        rotate: searchFocused ? 90 : 0,
                        scale: searchFocused ? 1.1 : 1,
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2"
                    >
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Interactive Category Filter */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-3 justify-center overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform whitespace-nowrap ${selectedCategory === category
                          ? "bg-white text-purple-900 shadow-lg shadow-white/30 scale-105"
                          : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 hover:shadow-md border border-white/20"
                        }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>

              {/* Search Results Count */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-center text-white"
              >
              </motion.div>
            </div>
          </section>
        </motion.div>
      </section>

      {/* Popular Blogs Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,240,0.1),rgba(120,0,240,0))]"></div>
        <div className="container mx-auto lg:px-10 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex justify-center items-center">
            <span className="text-purple-600 mr-2">📈</span> Popular Blogs
          </h2>
          <div className="p-7  relative overflow-hidden group">
            <Swiper
              {...swiperSettings}
              navigation={{
                nextEl: ".popular-swiper-button-next",
                prevEl: ".popular-swiper-button-prev",
              }}
              className="!overflow-visible"
            >
              {filteredPopularPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <BlogCard post={post} handleReadMore={handleReadMore} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="popular-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="popular-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,240,0.1),rgba(120,0,240,0))]"></div>
        <div className="container mx-auto lg:px-20 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 flex justify-center items-center">
            <span className="text-purple-600 mr-2">✨</span> Latest Blogs
          </h2>
          <div className="p-7 relative overflow-hidden group">
            <Swiper
              {...swiperSettings}
              navigation={{
                nextEl: ".latest-swiper-button-next",
                prevEl: ".latest-swiper-button-prev",
              }}
              className="!overflow-visible"
            >
              {filteredLatestPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <BlogCard post={post} handleReadMore={handleReadMore} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="latest-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="latest-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footerpage />

      {/* Blog Modal */}
      {isModalOpen && <BlogModal blog={selectedBlog} onClose={closeModal} />}
    </>
  );
};

export default BlogPage;

const swiperSettings = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: true,
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};