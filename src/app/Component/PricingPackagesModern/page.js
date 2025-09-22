'use client';
import React from 'react';

const PricingPackagesModernStyled = () => {
  const pricingPackages = [
    {
      name: 'Basic',
      price: 400,
      originalPrice: 600,
      features: [
        '1 Domain Name',
        '10 Web Pages (including 1 Home Page)',
        'SEO Semantic HTML Code',
        'HTML 5 Sitemap Page',
        'Fully Mobile Compatible',
        '2 Design Concepts',
        '2 Revisions',
      ],
      buttonText: 'Get Started',
    },
    {
      name: 'Enhance',
      price: 800,
      originalPrice: 1000,
      features: [
        '1 Domain Name',
        '15 Web Pages (including 1 Home Page)',
        'SEO Semantic HTML Code',
        'HTML 5 Sitemap Page',
        'Fully Mobile Compatible',
        '3 Design Concepts',
        '5 Revisions',
        'FREE: Search Engine Submission',
      ],
      buttonText: 'Choose Plan',
      isPopular: true,
    },
    {
      name: 'Premium',
      price: 1200,
      originalPrice: 1400,
      features: [
        '1 Domain Name',
        '50 Web Pages (including 1 Home Page)',
        'SEO Semantic HTML Code',
        'HTML 5 Sitemap Page',
        'Fully Mobile Compatible',
        '3 Design Concepts',
        'Unlimited Revisions',
        'FREE: Hosting for one year',
        'FREE: Search Engine Submission',
      ],
      buttonText: 'Go Premium',
    },
  ];

  return (
    <div className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl tracking-tight">
            Flexible & <span className="text-orange-600">Transparent Pricing</span>
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed sm:text-lg">
            Choose the plan that best fits your business needs and budget, ensuring maximum value for your investment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {pricingPackages.map((packageItem) => (
            <div
              key={packageItem.name}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                packageItem.isPopular ? 'border-2 border-orange-500' : ''
              }`}
            >
              {packageItem.isPopular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white font-semibold py-1 px-3 rounded-tl-xl rounded-br-md text-sm">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{packageItem.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-gray-900">${packageItem.price}</span>
                  {packageItem.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">${packageItem.originalPrice}</span>
                  )}
                  <span className="text-sm text-gray-700 ml-1">/ package</span>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm mb-6">
                  {packageItem.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md transition duration-300">
                  {packageItem.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">
          Our web design rates are very reasonable. Know more about our{' '}
          <a href="#" className="text-orange-600 hover:underline">
            Website Design Services
          </a>
        </p>
        <div className="mt-6 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md border border-orange-300 transition duration-300">
            Request A Quote <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPackagesModernStyled;