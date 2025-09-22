"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import axios from 'axios';

const EmployeeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cardsPerSlide = 2;
  const totalSlides = testimonials?.length > 0 ? Math.ceil(testimonials.length / cardsPerSlide) : 0;

  const nextSlide = useCallback(() => {
    if (totalSlides > 0) {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides > 0) {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  }, [totalSlides]);

  const goToSlide = (index) => {
    if (totalSlides > 0) {
      setCurrentSlide(index);
    }
  };
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/employees`);
        console.log("Api Response:", response)
        setTestimonials((response.data || []).slice().reverse()); // Handle potential undefined data
      } catch (err) {
        setError(err.message);
        console.error('Error fetching employees:', err);
        setTestimonials([]); // Ensure testimonials is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  console.log(testimonials);

  useEffect(() => {
    if (totalSlides > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [nextSlide, totalSlides]);

  if (loading) {
    return (
      <section className="py-12 bg-white-50 w-full min-h-[70vh] flex items-center justify-center">
        <div className="text-center">Loading testimonials...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white-50 w-full min-h-[70vh] flex items-center justify-center">
        <div className="text-center text-red-500">Error: {error}</div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-12 bg-white-50 w-full min-h-[70vh] flex items-center justify-center">
        <div className="text-center">No testimonials available</div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white-50 w-full min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-10">
          Employees Speak
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex space-x-4 w-full"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {testimonials
                  .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                  .map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 lg:p-10 w-1/2 border border-gray-200"
                    >
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.profilePicture}
                          alt={testimonial.firstName || 'Employee'}
                          width={56}
                          height={56}
                          className="rounded-full mr-4 object-cover"
                          style={{ height: '56px' }}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {`${testimonial.firstName || 'Anonymous'} ${testimonial.lastName || ''}`}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.role || 'Employee'}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.description || 'No description available'}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {totalSlides > 1 && (
            <>
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
                <button
                  onClick={prevSlide}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  &#8594;
                </button>
              </div>
              <div className="mt-8 flex justify-center space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                      currentSlide === index
                        ? "bg-teal-500 scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => goToSlide(index)}
                  ></button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;