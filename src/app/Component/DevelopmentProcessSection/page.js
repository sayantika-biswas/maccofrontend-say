'use client';

import React, { useState, useEffect, useRef } from 'react';

const developmentSteps = [
  {
    title: 'Requirement Gathering',
    description:
      'We work closely with stakeholders to gather clear, detailed project requirements and align expectations.',
    icon: 'clipboard-check',
  },
  {
    title: 'Design',
    description:
      'Our team crafts intuitive, user-friendly designs that ensure seamless navigation and a visually appealing experience.',
    icon: 'pencil-alt',
  },
  {
    title: 'Prototype',
    description:
      'We create interactive prototypes for stakeholders to visualize and refine the design before development.',
    icon: 'desktop-computer',
  },
  {
    title: 'Development',
    description:
      'Using best practices, we build scalable, secure solutions that deliver optimal performance.',
    icon: 'code',
  },
  {
    title: 'Quality Assurance',
    description:
      'We test rigorously to ensure a flawless product, addressing issues promptly to meet quality standards.',
    icon: 'shield-check',
  },
  {
    title: 'Deployment',
    description:
      'We ensure smooth product deployment with minimal disruption and a seamless transition to the live environment.',
    icon: 'rocket',
  },
  {
    title: 'Support & Maintenance',
    description:
      'Our ongoing support ensures your solution stays up-to-date, reliable, and issue-free for long-term success.',
    icon: 'lifebuoy',
  },
  // यदि आप 4 से अधिक कार्ड चाहते हैं तो और जोड़ सकते हैं
];

function DevelopmentProcessModern() {
  const [isVisible, setIsVisible] = useState(Array(developmentSteps.length).fill(false));
  const observer = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setIsVisible((prevVisible) => {
                const newVisible = [...prevVisible];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150); // प्रत्येक कार्ड के लिए थोड़ा डिले
            observer.current.unobserve(entry.target); // एक बार दिखने के बाद अनऑब्जर्व करें
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px', // जब कार्ड का 50px बॉटम से ऊपर हो
        threshold: 0.1, // थोड़ा सा दिखने पर ही ट्रिगर हो
      }
    );

    cardRefs.current.forEach((element) => {
      if (element) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    cardRefs.current = Array(developmentSteps.length).fill(null);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
    {/* <section className="py-16 bg-[#FEEFEF]"> */}
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
          Our Meticulous Development Journey
        </h2>
        <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Experience our structured and transparent development process, designed for optimal results and client satisfaction.
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {developmentSteps.map((step, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-in-out ${
              isVisible[index] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
            } hover:shadow-lg`}
          >
            <div className="p-5 text-center">
              <div className="inline-flex items-center justify-center bg-indigo-100 text-indigo-500 rounded-full p-3 mb-4">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your SVG icons (same logic) */}
                  {/* Example for 'clipboard-check' */}
                  {step.icon === 'clipboard-check' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  )}
                  {step.icon === 'pencil-alt' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.828 9 18.656 6.172 15.828a2 2 0 112.828-2.828l2.828 2.828 2.828-2.828z"
                  />
                )}
                {step.icon === 'desktop-computer' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 7.5l3 2.25-3 2.25m6-9l3 2.25-3 2.25m-6 0h2m6 0h2m6 0l3 2.25-3 2.25m-3-9h2m3 0h2m3 0l3 2.25-3 2.25m-9-2.25h2m-3 0h2m-3 0l3 2.25-3 2.25m9 0h2m-3 0h2m-3 0l3 2.25-3 2.25"
                  />
                )}
                {step.icon === 'code' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l-7-7m0 0l7-7m-7 7h18m-15.9-2.8a5.861 5.861 0 01-1.8-4.2 5.861 5.861 0 011.8-4.2h13.8a5.861 5.861 0 011.8 4.2 5.861 5.861 0 01-1.8 4.2h-13.8z"
                  />
                )}
                {step.icon === 'shield-check' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                )}
                {step.icon === 'rocket' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4zm-8 6H4v6l4-2 4 2v-6h-4z"
                  />
                )}
                {step.icon === 'lifebuoy' && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18v-2m-4-4h8m-4-4v-2M3 5h18M3 19h18M5 5l-4 4m0 0l4 4m-4-4l4-4m0 0l-4-4m-4 4h8m-4-4h8M9 16v-2M15 16v-2M5 19l-4-4m0 0l4-4m-4 4l4 4m0 0l-4 4"
                  />
                )}

                  {/* Add other icons here, unchanged */}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-snug">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
}

export default DevelopmentProcessModern;





// <section className="py-20 bg-slate-200"> {/* बैकग्राउंड कलर बदला */}
// <div className="container mx-auto px-4">
//   <div className="text-center mb-16">
//     <h2 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">
//       Our Meticulous Development Journey
//     </h2>
//     <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
//       Experience our structured and transparent development process, designed for optimal results and client satisfaction.
//     </p>
//   </div>
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
//     {developmentSteps.map((step, index) => (
//       <div
//         key={index}
//         data-index={index}
//         ref={(el) => (cardRefs.current[index] = el)}
//         className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${
//           isVisible[index] ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'
//         } hover:shadow-2xl`}
//       >
//         <div className="p-8 text-center">
//           <div className="inline-flex items-center justify-center bg-indigo-100 text-indigo-500 rounded-full p-5 mb-6">
//             {step.icon && (
//               <svg
//                 className="w-10 h-10"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {step.icon === 'clipboard-check' && (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 )}
                // {step.icon === 'pencil-alt' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.828 9 18.656 6.172 15.828a2 2 0 112.828-2.828l2.828 2.828 2.828-2.828z"
                //   />
                // )}
                // {step.icon === 'desktop-computer' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M9.75 7.5l3 2.25-3 2.25m6-9l3 2.25-3 2.25m-6 0h2m6 0h2m6 0l3 2.25-3 2.25m-3-9h2m3 0h2m3 0l3 2.25-3 2.25m-9-2.25h2m-3 0h2m-3 0l3 2.25-3 2.25m9 0h2m-3 0h2m-3 0l3 2.25-3 2.25"
                //   />
                // )}
                // {step.icon === 'code' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M10 20l-7-7m0 0l7-7m-7 7h18m-15.9-2.8a5.861 5.861 0 01-1.8-4.2 5.861 5.861 0 011.8-4.2h13.8a5.861 5.861 0 011.8 4.2 5.861 5.861 0 01-1.8 4.2h-13.8z"
                //   />
                // )}
                // {step.icon === 'shield-check' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                //   />
                // )}
                // {step.icon === 'rocket' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M16 12a4 4 0 00-4-4 4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4zm-8 6H4v6l4-2 4 2v-6h-4z"
                //   />
                // )}
                // {step.icon === 'lifebuoy' && (
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     strokeWidth="2"
                //     d="M12 18v-2m-4-4h8m-4-4v-2M3 5h18M3 19h18M5 5l-4 4m0 0l4 4m-4-4l4-4m0 0l-4-4m-4 4h8m-4-4h8M9 16v-2M15 16v-2M5 19l-4-4m0 0l4-4m-4 4l4 4m0 0l-4 4"
                //   />
                // )}
//               </svg>
//             )}
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
//           <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </section>