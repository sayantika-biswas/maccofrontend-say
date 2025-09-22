"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar/page";
import {
  SiDribbble,
  SiBehance,
  SiDeviantart,
  SiInstagram,
  SiArtstation,
} from "react-icons/si";
import PortfolioSection from "../Component/PortfolioSection/page";
import Footerpage from "../Component/Footerpage/page";
import Image from "next/image";

function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const target = document.getElementById("creativeWorkSection");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        id="creativeWorkSection"
        className="bg-gradient-to-br relative from-gray-100 to-gray-50 py-16 md:py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Portfolio-banner.jpg')`,
          top: "85px",
        }}
      >
        <div className="container min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              Our Creative Work
            </h2>
            <p
              className={`text-white text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              Explore our portfolio of innovative digital solutions, where
              creativity meets technology to deliver impactful results for our
              clients.
            </p>
          </div>
        </div>
      </div>

      <PortfolioSection />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 lg:py-30">
            {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            Quality is more important than quantity
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8">
                            Take a look at our latest work. Check our portfolio on other websites as well.
                        </p> */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Quality Over Quantity
            </h2>
            <p className="text-gray-600 text-base sm:text-lg ">
              Discover our latest projects reflecting our dedication to
              excellence. View our <a href="portfolio" className="text-blue-500 font-semibold">Portfolio</a> across multiple platforms.
            </p>

          </div>
        </div>
      </div>

      <Footerpage />
    </>
  );
}

export default Portfolio;
