'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footerpage from '../../Component/Footerpage/page';
import Navbar from '../../Component/Navbar/page';

export default function ApplyNow() {
  const [resumeFile, setResumeFile] = useState(null);
  // Combined state for additional documents
  const [additionalDocumentsFile, setAdditionalDocumentsFile] = useState(null); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentCTC: '',
    expectedCTC: '',
    experience: '',
    previousOrg: '',
    role: '',
    jobDesc: '', 
    projectTitle: '',
    projectDesc: '',
    linkedIn: '',
    github: '',
  });

  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
      setErrors((prev) => ({ ...prev, resumeFile: '' }));
    }
  };

  // New handler for additional documents
  const handleAdditionalDocumentsChange = (e) => {
    if (e.target.files.length > 0) {
      setAdditionalDocumentsFile(e.target.files[0]);
      setErrors((prev) => ({ ...prev, additionalDocumentsFile: '' }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.currentCTC.trim()) newErrors.currentCTC = 'Current CTC is required';
    if (!formData.expectedCTC.trim()) newErrors.expectedCTC = 'Expected CTC is required';
    if (!formData.experience) newErrors.experience = 'Experience is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.linkedIn.trim()) newErrors.linkedIn = 'LinkedIn URL is required';
    if (!formData.github.trim()) newErrors.github = 'GitHub URL is required';
    if (!resumeFile) newErrors.resumeFile = 'Resume is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const formDataToSend = new FormData();
        
        // Append form fields
        formDataToSend.append('firstName', formData.firstName);
        formDataToSend.append('lastName', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('linkedinURL', formData.linkedIn);
        formDataToSend.append('githubURL', formData.github);
        formDataToSend.append('currentCTC', formData.currentCTC);
        formDataToSend.append('expectedCTC', formData.expectedCTC);
        formDataToSend.append('experience', formData.experience);
        formDataToSend.append('previousOrganization', formData.previousOrg);
        formDataToSend.append('role', formData.role);
        formDataToSend.append('previousProjectTitle', formData.projectTitle);
        formDataToSend.append('projectDescription', formData.projectDesc);
    
        // Append files
        if (resumeFile) {
          formDataToSend.append('resume', resumeFile);
        }
        if (additionalDocumentsFile) {
          formDataToSend.append('salarySlip', additionalDocumentsFile);
        }
    
        const response = await fetch('https://api.maccotech.in/api/jobopening/create', {
          method: 'POST',
          body: formDataToSend,
        });
    
        if (!response.ok) {
          throw new Error('Failed to submit application');
        }
    
        const result = await response.json();
        alert('Application submitted successfully!');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          currentCTC: '',
          expectedCTC: '',
          experience: '',
          previousOrg: '',
          role: '',
          jobDesc: '',
          projectTitle: '',
          projectDesc: '',
          linkedIn: '',
          github: ''
        });
        setResumeFile(null);
        setAdditionalDocumentsFile(null);
        setErrors({});
      } catch (error) {
        console.error('Error submitting application:', error);
        alert('Failed to submit application. Please try again.');
      }
    } else {
      console.log('Form validation failed', errors);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "#c026d3",
    transition: { duration: 0.3 },
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="min-h-screen bg-white-100 flex items-center justify-center p-6 pt-28 mb-8">
          <motion.div
            className="w-full container p-24 bg-slate-200 shadow-lg rounded-3xl flex flex-col lg:flex-row overflow-hidden h-full items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* LEFT SECTION */}
            <div className="bg-gray-100 lg:w-1/2 p-8 flex flex-col items-center justify-center text-center h-[1400px]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Apply Now</h2>
              <p className="text-gray-600 mb-7">
                We are looking for ambitious people who like to dream big and work hard to make them a reality.
              </p>
              <Image
                src="/emailUs.jpg"
                alt="Apply illustration"
                width={450}
                height={800}
                className="rounded-xl"
              />
            </div>

            {/* RIGHT SECTION (FORM) */}
            <div className="lg:w-2/3 p-8 bg-white overflow-y-auto lg:pt-17" >
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">First Name<span className="text-red-500">*</span></label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Email<span className="text-red-500">*</span></label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Phone</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

                {/* LinkedIn & GitHub */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">LinkedIn URL<span className="text-red-500">*</span></label>
                    <input
                      name="linkedIn"
                      type="url"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.linkedIn ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.linkedIn && <p className="text-red-500 text-sm mt-1">{errors.linkedIn}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">GitHub URL<span className="text-red-500">*</span></label>
                    <input
                      name="github"
                      type="url"
                      value={formData.github}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.github ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github}</p>}
                  </div>
                </div>

                {/* CTC Fields */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Current CTC<span className="text-red-500">*</span></label>
                    <input
                      name="currentCTC"
                      type="text"
                      value={formData.currentCTC}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.currentCTC ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.currentCTC && <p className="text-red-500 text-sm mt-1">{errors.currentCTC}</p>}
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Expected CTC<span className="text-red-500">*</span></label>
                    <input
                      name="expectedCTC"
                      type="text"
                      value={formData.expectedCTC}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.expectedCTC ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.expectedCTC && <p className="text-red-500 text-sm mt-1">{errors.expectedCTC}</p>}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Your Experience<span className="text-red-500">*</span></label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select Experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-2">1-2 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>

                {/* Previous Org & Role */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Previous Organization</label>
                    <input
                      name="previousOrg"
                      type="text"
                      value={formData.previousOrg}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-semibold text-gray-700">Your Role<span className="text-red-500">*</span></label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className={`w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500 ${errors.role ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select Role</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="manager">Manager</option>
                      <option value="qa">QA Engineer</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Previous Project Title</label>
                  <input
                    name="projectTitle"
                    type="text"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Project Description</label>
                  <textarea
                    name="projectDesc"
                    rows={4}
                    value={formData.projectDesc}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                  ></textarea>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Your Resume <span className="text-red-500">*</span>
                  </label>
                  <label
                    htmlFor="resume-upload"
                    className={`border-2 border-dashed rounded-md p-6 text-center text-gray-500 hover:border-rose-500 hover:text-rose-500 transition cursor-pointer block
                      ${errors.resumeFile ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                  >
                    {resumeFile ? resumeFile.name : 'Click or drag a file to this area to upload.'}
                  </label>
                  <input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  {errors.resumeFile && <p className="text-red-500 text-sm mt-1">{errors.resumeFile}</p>}
                </div>

                {/* Additional Documents Upload - Combined Field with specific label */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Additional Documents (e.g., Latest Salary Letter, Experience Letter) (Optional)
                  </label>
                  <label
                    htmlFor="additional-documents-upload"
                    className={`border-2 border-dashed rounded-md p-6 text-center text-gray-500 hover:border-rose-500 hover:text-rose-500 transition cursor-pointer block
                      ${errors.additionalDocumentsFile ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                  >
                    {additionalDocumentsFile ? additionalDocumentsFile.name : 'Click or drag files to this area to upload.'}
                  </label>
                  <input
                    id="additional-documents-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" // Accepts common document and image formats
                    className="hidden"
                    onChange={handleAdditionalDocumentsChange}
                  />
                  {errors.additionalDocumentsFile && <p className="text-red-500 text-sm mt-1">{errors.additionalDocumentsFile}</p>}
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-rose-700 cursor-pointer hover:bg-rose-800 text-white font-semibold py-3 px-4 rounded-md"
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Application
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      <Footerpage />
    </div>
  );
}