'use client';
import React from "react";

const TermsAndConditionsContent = () => {
  return (
    <div className="flex justify-center  bg-white-100 py-12 px-4 lg:px-0">
      <div className="w-full container  bg-white-100  rounded-2xl p-6 md:p-10 ">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12 border-b pb-4 border-blue-300">
          Terms and Conditions
        </h1>

        <div className="space-y-12 text-gray-800 leading-relaxed tracking-wide antialiased">
          <Section
            title="Intellectual Property Rights"
            content={`All content, visuals, and information displayed across the pages of this website—including layout, graphics, and data—are the intellectual property of Macco Tech, a registered entity in the United Arab Emirates under company number 2201034, located at Meydan Road, Nad Al Sheba, Dubai, UAE. Trademarks, logos, and service marks shown on this site are owned by Macco Tech unless otherwise stated. No material from this site may be used without written permission from Macco Tech or the respective owner. Reproduction, alteration, or redistribution of any content for commercial or public purposes is strictly prohibited.`}
          />

          <Section
            title="Use of Information and Materials"
            content={`Information on this site is subject to change at any time without notice. Any unauthorized access or misuse of Macco Tech's digital platforms, including websites and data systems, is strictly forbidden. Availability of services and features may vary by location, and eligibility is subject to final approval by Macco Tech. Users are expected to access this platform for lawful, intended use only. Illegal usage or access is strictly restricted.`}
          />

          <Section
            title="Links and References"
            content={`This website may contain references or links to third-party websites not operated by Macco Tech. We do not assume responsibility for any content, services, or reliability of such external websites. Macco Tech makes no endorsements or guarantees related to third-party sites and disclaims any liability for damages or losses incurred through them. Users should review the privacy policies and terms of those websites independently.`}
          />

          <Section
            title="No Warranty"
            content={`All information, including text, graphics, and downloadable content on this site, is provided "as is" and "as available." Macco Tech makes no warranties regarding the accuracy, completeness, or reliability of the content. We disclaim any and all express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Content may contain technical inaccuracies or typographical errors.`}
          />

          <Section
            title="Limitation of Liability"
            content={`Under no circumstances will Macco Tech be held responsible for any direct or indirect losses, incidental or consequential damages, or expenses that result from the use—or inability to use—this website or linked platforms. This includes but is not limited to technical issues, system failures, delays in transmission, and malware infections, even if Macco Tech has been notified of such possibilities in advance.`}
          />

          <Section
            title="Changes to Terms of Use"
            content={`Macco Tech reserves the right to modify these Terms of Use at any given time without advance notice. Continued use of the website constitutes acceptance of the revised terms. It is the user's responsibility to regularly review the terms to stay informed of updates or changes.`}
          />

          <Section
            title="Governing Law"
            content={`These Terms of Use and any disputes arising out of or in relation to this site shall be governed by the laws of the United Arab Emirates. By using this site, you agree to submit to the exclusive jurisdiction of the courts of the UAE for resolution of any legal matters or claims associated with the website or these terms.`}
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
    <p className="text-gray-700">{content}</p>
  </div>
);

export default TermsAndConditionsContent;
