
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";


const slides = [
  {
    heading: "Technology That Transforms, Solutions That Deliver",
    text: "Customized technology solutions to optimize, automate, and scale your business.",
    images: ["/img1.png", "/img2.png"],
    background: "/eLearning_Slider.webp",
  },
  {
    heading: "Innovative Design, Seamless Experience",
    text: "Creating intuitive and responsive designs for modern platforms.",
    images: ["/img3.png", "/img4.png"],
    background: "/Telecom_and_NetworkSlide.jpg",
  },
  {
    heading: "Smart Systems, Smarter Results",
    text: "Empowering growth through intelligent technology infrastructure.",
    images: ["/img5.png", "/img6.png"],
    background: "/AI-MLSlide.webp",
  },
];

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { heading, text, images, background } = slides[currentSlide];

  return (
    <>
 
      <section
        className="w-full relative min-h-[80vh] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-20 transition-all duration-700"
        style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    top: '80px'
  }}
      >
        <div
          className={`text-black max-w-xl transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            {heading.split(",").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-6 text-lg lg:text-xl">{text}</p>
            <Link href="/contact" className="mt-8 max-w-fit px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center gap-2">
              Contact Us
              <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full">▶</span>
            </Link>
        </div>

        {/* <div
          className={`mt-12 lg:mt-0 flex items-center gap-8 transition-all duration-700 ease-in-out transform ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide Image ${index + 1}`}
              className={`w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 ${
                index === 0 ? "rotate-[-10deg]" : "rotate-[10deg]"
              } drop-shadow-xl`}
            />
          ))}
        </div> */}
      </section>
    </>
  );
}
