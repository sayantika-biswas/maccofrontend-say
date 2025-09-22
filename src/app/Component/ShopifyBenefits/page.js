'use client';
import Image from "next/image";

const ShopifyBenefits = () => {
  return (
  <section className="max-w-7xl mx-auto">
    <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Why Choose Shopify for Your eCommerce Business?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Shopify empowers brands with scalable, user-friendly tools to build and grow successful
          online stores. Here’s what makes it a preferred choice for entrepreneurs worldwide:
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full h-auto">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/development-team-working.jpg"
              alt="eCommerce team planning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Benefits */}
        <div className="space-y-6">
          {[
            {
                title: 'Easy to Use',
                desc:
                  'Shopify is easy to use, so you can build your online store without coding skills. The platform keeps updating and adding new features to make it even easier.',
              },
              {
                title: 'Great Designs',
                desc:
                  'Shopify offers many professional, modern themes for your store. Our Shopify developers can also customize themes to match your brand.',
              },
              {
                title: 'Affordable',
                desc:
                  'Shopify is an affordable choice for starting your eCommerce journey, with plans starting at just $29 per month. The best part? Your plan covers bandwidth and hosting—no hidden costs!',
              },
              {
                title: 'Excellent Support',
                desc:
                  'Shopify has your back with top-notch support and resources. Whether it’s setting up your store, running promotions, or managing orders, you can even bring in expert Shopify developers to make it easier.',
              },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-blue-600 text-lg mt-1">•</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ShopifyBenefits;
