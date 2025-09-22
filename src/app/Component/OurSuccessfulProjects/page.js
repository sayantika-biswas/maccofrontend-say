'use client';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import axios from 'axios';
import { ExternalLink, Github } from 'lucide-react';

const OurSuccessfulProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Define filters based on your API response
  const filters = [
    { id: 'All', label: 'All Projects' },
    { id: 'Web Development', label: 'Web Development' },
    { id: 'Mobile App', label: 'Mobile Apps' },
    { id: 'completed', label: 'Completed' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'featured', label: 'Featured' }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.maccotech.in/api/projects');
        setProjects(response.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    // Filter by category/status
    const matchesFilter = 
      selectedFilter === 'All' ||
      project.category === selectedFilter ||
      project.status === selectedFilter ||
      (selectedFilter === 'featured' && project.featured);
    
    // Search by title or description
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0f172a] text-white">
        <div className="animate-pulse text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-[#0f172a] text-white py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/casetudy5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Our Successful Projects
        </motion.h2>
        <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
          Discover how we&asop;ve helped clients achieve success through innovation and expertise.
        </p>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Search projects by title or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-transparent text-indigo-300 border-indigo-500 hover:bg-indigo-600 hover:text-white'
                  }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-indigo-600/40 transform hover:scale-[1.02] transition duration-300 flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  {project.images && project.images[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover object-center"
                      unoptimized // Remove if you have proper image optimization setup
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs font-semibold rounded-full px-3 py-1 ${
                      project.status === 'completed' ? 'bg-green-100 text-green-800' :
                      project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mt-auto flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-xl text-slate-300">No projects found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedFilter('All');
                  setSearchQuery('');
                }}
                className="mt-4 text-indigo-400 hover:text-indigo-300 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default OurSuccessfulProjects;