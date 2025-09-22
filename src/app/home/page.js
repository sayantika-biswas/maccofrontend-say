"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HomeBanner from "../Component/HomeBanner/page";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Contact from "../Component/Contact/page";
import FAQSection from "../Component/FAQItem/page";
import TechStackSection from "../Component/TechStackSection/page";
import EmployeeTestimonials from "../Component/testimonials/page";
export default function Home1() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true); // Changed to true to show immediately
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const fadeInElements = document.querySelectorAll('.fade-in-up');

    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeInElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setShowContactForm(false);
      setFormSubmitted(false);
    }, 3000);
  };

  const technologies = [
    { name: "iOS", icon: "https://www.freeiconspng.com/thumbs/ios-png/app-ios-png-4.png" },
    { name: "Android", icon: "https://w7.pngwing.com/pngs/546/448/png-transparent-android-mobile-app-development-logo-android-logo-grass-mobile-app-development-thumbnail.png" },
    { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "Java", icon: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" },
    { name: "React Native", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjnyv5ek2a6qk88oUt76RCsdS5gqBiZ0Aog&s" },
    { name: "Python", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCtCtWfdUmyhwQExAENCDH-Y38UUyck8jRw&s" },
    { name: "Node.js", icon: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png" },
    { name: "Swift", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWovRpJJxcjFdPav8-pkS-pNQQFsxQlhCMww&s" },
    { name: "PWA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0qoMqXLsTp4Mz66Be-MwijCAY2Fx7hhzIA&s" },
  ];

  return (
    <>
      <Navbar />
      <HomeBanner />

      {/* Animated Contact Form - Now appears immediately */}
      {showContactForm && (
        <div className="fixed bottom-4 right-4 z-50 animate-slide-in-right">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden w-80">
              <div className="bg-[#1eb4e4]  p-4 text-white flex justify-between items-center">
                <h3 className="font-bold  text-lg">Contact Us</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-white hover:text-gray-200 focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">We&aposll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="3"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1eb4e4] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Rest of your existing code... */}
      <div className="w-full container mx-auto lg:py-20 bg-white min-h-[40vh] flex items-start justify-center mt-4">
        <div
          className={`w-full rounded-lg shadow-1xl overflow-hidden min-h-[50vh] p-6 md:p-10 lg:p-14 transform transition-all duration-700 ease-in-out ${isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
            }`}
        >
          <p className="text-orange-500 font-semibold uppercase mb-2 text-center tracking-wide mt-[40px]">
            WE ARE MACCO TECH
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center leading-snug">
            Innovative App Development Company Delivering Excellence and Building Trust
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            A Leading Mobile App Development Company
          </p>
          <div className="text-gray-600 text-justify px-4 md:px-12">
            {/* <p>
            Macco Tech is a globally recognized Web, App, Game, and Digital Marketing company with branches in India and Australia. Since our inception, we have been delivering top-tier solutions in Web Design, App Development, Game Development, Digital Marketing, Product Design, and Cloud Services. Our expertise in game development sets us apart, creating immersive and engaging experiences that captivate players worldwide. Combined with our commitment to customer satisfaction and a high rate of repeat business, we stand as pioneers in the industry. Whether it&apos;s a cutting-edge app, an innovative game, or a robust digital strategy, we turn your ideas into reality with unmatched precision and creativity. Let&apos;s build the future together – Your success is our mission.
          </p> */}
            <p>
              Macco Tech is a globally acclaimed company specializing in Web, App, Game Development, and Digital Marketing, with offices in India and Australia. Since our inception, we have delivered industry-leading solutions in web design, mobile app development, game creation, product design, cloud services, and digital marketing. Our expertise in game development allows us to craft immersive, engaging experiences that captivate users worldwide. With a strong focus on client satisfaction and a high rate of repeat business, we are pioneers in delivering innovative and reliable digital solutions. Partner with us to transform your ideas into reality with precision, creativity, and commitment — because your success is our mission.
            </p>

          </div>
        </div>
      </div>

      <section className=" bg-[#FEEFEF] py-12 w-full min-h-[70vh]">
        <div className=" max-w-7xl mx-auto px-4 md:px-8 lg:px-8 mb-7">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-semibold uppercase mb-2">MACCO TECH</p>
            <h2 className="text-3xl font-bold text-gray-800">Empowering Ideas with Innovative Digital Solutions.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile App Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/img1.webp"
                  alt="Mobile App Development"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Development</h3>
              <p className="text-gray-600 text-sm mb-4">We build user-friendly mobile apps that turn ideas into reality using the latest technology. Our focus is on delivering seamless performance.</p>
              <a href="AndroidAppDevelopment" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
            </div>

            {/* Software Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/image.png"
                  alt="Software Development"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">React JS Development</h3>
<p className="text-gray-600 text-sm mb-4">We have a team of highly skilled & experienced professionals who are capable of developing dynamic, high-performance React.js applications tailored to your unique business needs.</p>
<a href="ReactJsDevelopment" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>

            </div>

            {/* Hybrid App Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center mb-4">
                <Image
                  src="/image3.png"
                  alt="Hybrid App Development"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">E-commerce Development</h3>
<p className="text-gray-600 text-sm mb-4">We specialize in building robust, scalable, and user-friendly e-commerce solutions that enhance customer experience and drive online sales.</p>
<a href="ecommerce-application-development" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>

            </div>
          </div>
        </div>
      </section>
      <EmployeeTestimonials />
      <TechStackSection />
      <FAQSection />
      <Contact />
      <Footerpage />

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards; /* Reduced animation duration to 0.3s for faster appearance */
        }
      `}</style>
    </>
  );
}