
'use client';
import React from 'react';
import { FaShoppingCart, FaCode, FaPalette } from 'react-icons/fa'; // Import React icons

const ShopifyDevelopmentServices = () => {
  const services = [
    {
      title: 'Visually Appealing Stores',
      description:
        'We craft visually stunning and user-friendly Shopify stores that captivate your audience and drive conversions. Our designs focus on seamless user experiences across all devices.',
      icon: <FaPalette className="text-indigo-500 text-2xl mb-2" />,
    },
    {
      title: 'Customized Solutions',
      description:
        'Our expert Shopify developers tailor solutions to your unique business needs. From custom themes to specific functionalities, we ensure your store stands out in the competitive online marketplace.',
      icon: <FaCode className="text-green-500 text-2xl mb-2" />,
    },
    {
      title: 'Seamless Checkout Processes',
      description:
        'We optimize the checkout flow to reduce cart abandonment and enhance the purchasing experience. Our focus is on creating a smooth and secure transaction process for your customers.',
      icon: <FaShoppingCart className="text-yellow-500 text-2xl mb-2" />,
    },
  ];

  return (
    <div className="bg-[#FEEFEF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        {/* <div className="md:flex md:items-center md:justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Partner with us for Comprehensive Shopify Development
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Gain access to a reliable and dedicated Shopify development team committed to your success.
            </p>
          </div>
        </div> */}
        <div className="md:flex md:items-center md:justify-between mb-8">
  <div className="mb-4 md:mb-0">
    <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
      Partner with Us for Expert Shopify Development Solutions
    </h2>
    <p className="mt-2 text-lg text-gray-600">
      Collaborate with a dedicated and experienced Shopify development team focused on driving your business success.
    </p>
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopifyDevelopmentServices;
