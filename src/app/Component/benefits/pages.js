"use client";

import React, { useEffect, useRef } from 'react';
import {
  PlusCircleIcon,
  BookOpenIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: <ShieldCheckIcon className="h-10 w-10 text-indigo-500 mb-4" />,
    title: 'Peace of mind',
    description:
      'Experience a work environment where your growth and well-being are prioritized. Focus and succeed with a team that values you.',
  },
  {
    icon: <PlusCircleIcon className="h-10 w-10 text-red-500 mb-4" />,
    title: 'Private healthcare',
    description:
      'Your health is our priority. Enjoy comprehensive healthcare benefits designed to keep you and your loved ones at ease.',
  },
  {
    icon: <LightBulbIcon className="h-10 w-10 text-yellow-500 mb-4" />,
    title: 'Internal workshops',
    description:
      'Learn, grow, and excel with exclusive workshops that help you master new skills and elevate your career to the next level.',
  },
  {
    icon: <EyeIcon className="h-10 w-10 text-blue-500 mb-4" />,
    title: 'Additional accessories',
    description:
      'Get the tools and perks you need to work smarter, better, and with style. Your success deserves every advantage.',
  },
  {
    icon: <BookOpenIcon className="h-10 w-10 text-green-500 mb-4" />,
    title: 'Books & paid content',
    description:
      'Access exclusive, high-quality premium resources, eBooks, and learning material to enhance your skills, broaden your knowledge, and stay ahead in your field.',
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10 text-teal-500 mb-4" />,
    title: 'World class infrastructure',
    description:
      'Work in a state-of-the-art environment designed to boost creativity and productivity for every individual.',
  },
  {
    icon: <UserGroupIcon className="h-10 w-10 text-purple-500 mb-4" />,
    title: 'Community Meetups',
    description:
      'Engage with like-minded professionals, share innovative ideas, and grow together through regular meetups and insightful discussions.',
  },
  {
    icon: (
      <PresentationChartLineIcon className="h-10 w-10 text-orange-500 mb-4" />
    ),
    title: 'Training and Mentorship',
    description:
      'Gain valuable insights and guidance from industry experts to accelerate your professional development.',
  },
];

function CareerBenefits() {
  const benefitRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    benefitRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // <div className="bg-gray-100 py-16">
    <div className="bg-[#FEEFEF] py-16">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          We’re Hiring Exceptional Talent – Your Skills Matter Here
        </h2>
        <p className="text-gray-600">
          Join <span className="font-semibold text-indigo-600">Macco Tech</span> and be part of a dynamic team where your expertise is valued and nurtured.
          We offer an environment full of opportunities to grow, innovate, and build a future shaped by your unique abilities.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            ref={(el) => (benefitRefs.current[index] = el)}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg opacity-0 transform translate-y-8 transition-all duration-700"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold text-gray-700 mb-2 border-b-2 border-gray-300 pb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-500 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerBenefits;
