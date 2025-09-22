'use client';
// components/ServiceHeader.js
const ServiceHeader = ({ 
  title, 
  tagline, 
  description, 
  companyName = "Macco Tech" 
}) => {
  return (
    <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-indigo-200 mb-2">
        {tagline}
      </p>
      <p className="text-indigo-200 mb-6 text-sm md:text-base">
        At <strong>{companyName}</strong>, {description}
      </p>
    </div>
  );
};

export default ServiceHeader;