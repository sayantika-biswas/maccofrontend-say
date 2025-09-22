
'use client';
import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <div className="flex justify-center bg-white py-12 px-4 lg:px-0">
      <div className="w-full container bg-white rounded-2xl p-6 md:p-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12 border-b pb-4 border-blue-300">
          Privacy Policy
        </h1>

        <div className="space-y-12 text-gray-800 leading-relaxed tracking-wide antialiased">
          <Section
            title="Introduction"
            content={`This Privacy Policy outlines how Macco Tech collects, uses, discloses, and protects your personal information when you use our website and services. By accessing our site, you agree to the terms described in this policy.`}
          />

          <Section
            title="Information We Collect"
            content={`We may collect personal information such as your name, email address, contact number, IP address, location data, browser type, and browsing behavior. This data is collected when you interact with our site, fill out forms, or use our services.`}
          />

          <Section
            title="How We Use Your Information"
            content={`Your information is used to provide and improve our services, respond to inquiries, send updates and promotional content, enhance user experience, and comply with legal obligations. We do not sell your personal data to third parties.`}
          />

          <Section
            title="Cookies and Tracking Technologies"
            content={`We use cookies and similar tracking technologies to enhance your browsing experience, understand user behavior, and analyze website performance. You can control or disable cookies through your browser settings.`}
          />

          <Section
            title="Data Sharing and Disclosure"
            content={`We do not share your personal information with third parties except as required by law, to enforce our policies, protect our rights, or with trusted partners who support our operations under strict confidentiality agreements.`}
          />

          <Section
            title="Data Security"
            content={`We implement appropriate technical and organizational security measures to safeguard your personal information from unauthorized access, disclosure, or destruction. However, no method of online transmission or storage is completely secure.`}
          />

          <Section
            title="Your Rights"
            content={`You have the right to access, correct, or delete your personal data. You may also object to or restrict certain types of processing and request data portability. To exercise your rights, please contact us using the details provided below.`}
          />

          <Section
            title="Third-Party Links"
            content={`Our website may contain links to external sites not operated by Macco Tech. We are not responsible for the privacy practices or content of these third-party websites. Please review their policies before sharing any personal information.`}
          />

          <Section
            title="Policy Updates"
            content={`We may update this Privacy Policy periodically to reflect changes in legal, regulatory, or operational requirements. All changes will be posted on this page with a revised effective date. Continued use of our website implies acceptance of the updated policy.`}
          />

          <Section
            title="Governing Law"
            content={`This Privacy Policy is governed by the laws of the United Arab Emirates. Any disputes arising from this policy will be subject to the exclusive jurisdiction of UAE courts.`}
          />

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-l-4 pl-4 border-blue-600 bg-gray-100">
      {title}
    </h2>
    <p className="text-gray-700 whitespace-pre-line">{content}</p>
  </div>
);

export default PrivacyPolicyContent;
