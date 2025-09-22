"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa"; // Only essential icons

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileMenuOpen, setIsServicesMobileMenuOpen] =
    useState(false);
      const [socialLinks, setSocialLinks] = useState({});
  const [isContactMobileMenuOpen, setIsContactMobileMenuOpen] = useState(false);
  // const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // Desktop services dropdown
  // const [isContactMenuOpen, setIsContactMenuOpen] = useState(false); // Desktop contact dropdown

  const [isAboutUsMobileMenuOpen, setIsAboutUsMobileMenuOpen] = useState(false); // New state for mobile About Us

  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // Desktop services dropdown
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false); // Desktop contact dropdown
  const [isAboutUsMenuOpen, setIsAboutUsMenuOpen] = useState(false); // Desktop About Us dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isEcommerceDropdownOpen, setIsEcommerceDropdownOpen] = useState(false);
  const [isWebdevelopmentDropdownOpen, setIsWebdevelopmentDropdownOpen] =
    useState(false);
  const [isDigitalMarketingDropdownOpen, setIsDigitalMarketingDropdownOpen] =
    useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesMobileMenuOpen(false); // Close other mobile menus when toggling
    setIsContactMobileMenuOpen(false);
  };

  const toggleMobileDropdown = () =>
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  const toggleEcommerceDropdown = () =>
    setIsEcommerceDropdownOpen(!isEcommerceDropdownOpen);
  const toggleWebdevelopmentDropdown = () =>
    setIsWebdevelopmentDropdownOpen(!isWebdevelopmentDropdownOpen);
  const toggleDigitalMarketingDropdown = () =>
    setIsDigitalMarketingDropdownOpen(!isDigitalMarketingDropdownOpen);
  const toggleOtherDropdown = () =>
    setIsOtherDropdownOpen(!isOtherDropdownOpen);

  const toggleMobileServicesMenu = () => {
    setIsServicesMobileMenuOpen(!isServicesMobileMenuOpen);
  };

  const toggleMobileContactMenu = () => {
    setIsContactMobileMenuOpen(!isContactMobileMenuOpen);
  };

  const toggleMobileAboutUsMenu = () => {
    // New toggle for mobile About Us
    setIsAboutUsMobileMenuOpen(!isAboutUsMobileMenuOpen);
    setIsServicesMobileMenuOpen(false); // Close other mobile menus
    setIsContactMobileMenuOpen(false); // Close other mobile menus
  };

useEffect(() => {
  const fetchSocialLinks = async () => {
    try {
      const res = await fetch(`${API_URL}/api/social-links`);
      const result = await res.json();

      // Convert array to object
      const linksObj = result.data.reduce((acc, curr) => {
        acc[curr.platform] = curr.url;
        return acc;
      }, {});

      setSocialLinks(linksObj);
    } catch (err) {
      console.error("Error fetching social links", err);
    }
  };

  fetchSocialLinks();
}, [API_URL]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0e0a2e] h-[90px] shadow-lg z-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center">
          <div className="flex items-center mt-10 justify-left">
            <motion.h1 className="flex-shrink-0 mr-4">
              <motion.img
                src="/Maccotech1-removebg-preview.png"
                alt="MaccoTech Logo"
                className="h-15 w-auto"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </motion.h1>

            {/* Animated Text */}
            <motion.div
              className="text-[#1eb4e4] text-3xl font-bold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                M
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                acco
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Tech
              </motion.span>
            </motion.div>
          </div>
          </Link>
          {/* Mobile Menu Button - Visible on mobile and tablets (up to lg breakpoint) */}
          <div className="lg:hidden">
            {" "}
            {/* Changed md:hidden to lg:hidden */}
            <button
              onClick={toggleMobileMenu}
              className="text-white mt-10 mr-5 hover:text-purple-700 focus:outline-none"
            >
              <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu - Visible only on large screens (lg breakpoint and up) */}
          <div className="hidden lg:flex space-x-6 items-center relative mt-10">
            {" "}
            {/* Changed md:flex to lg:flex */}
            <Link href="/home">
              <button className="text-white text-[17px]  md:text-[15px] hover:text-purple-700 transition-all cursor-pointer">
                Home
              </button>
            </Link>
            {/* Services with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <Link href="/service">
                <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 transition-all cursor-pointer">
                  Services
                </button>
              </Link>

              {isServicesMenuOpen && (
                // <div className="custom-scroll absolute top-full left-0 bg-white shadow-lg z-50 py-6 px-6 w-[320px] rounded-md max-h-[300px] overflow-y-auto grid gap-4 scrollbar-none">
                //   <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                <div className="custom-scroll absolute top-full left-4 -translate-x-1/2 bg-white shadow-lg z-50 py-6 px-6 w-[320px] rounded-md max-h-[300px] overflow-y-auto grid gap-4 scrollbar-none">
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    <div className="text-purple-700 font-bold mb-2">
                      Mobile App Development
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link
                          href="/AndroidAppDevelopment"
                          className="hover:text-purple-500"
                        >
                          Android App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/iOSAppDevelopment"
                          className="hover:text-purple-500"
                        >
                          iOS App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ReactNativeAppDevelopment"
                          className="hover:text-purple-500"
                        >
                          React-Native App
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ecommerce-application-development"
                          className="hover:text-purple-500"
                        >
                          E-Commerce App
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ReactJsDevelopment"
                          className="hover:text-purple-500"
                        >
                          React Js Development
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    <div className="text-purple-700 font-bold mb-2">
                      Ecommerce Solution
                    </div>
                    <ul className="space-y-1 text-sm">
                      {/* <li><Link href="/ShopifyDevelopment" className="hover:text-purple-500">Shopify Development</Link></li>
                      <li><Link href="/Graphics-design" className="hover:text-purple-500">Graphic Design</Link></li>
                      <li><Link href="/Branding" className="hover:text-purple-500">Branding</Link></li> */}
                      <li>
                        <Link
                          href="/ShopifyDevelopment"
                          className="hover:text-purple-500"
                        >
                          Shopify Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Graphics-design"
                          className="hover:text-purple-500"
                        >
                          Graphic Design
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Branding"
                          className="hover:text-purple-500"
                        >
                          Branding
                        </Link>
                      </li>

                      <li>
                        <Link href="/email" className="hover:text-purple-500">
                          Email Marketing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    {/* <div className="text-purple-700 font-bold mb-2">JS Frameworks</div> */}
                    <div className="text-purple-700 font-bold mb-2">
                      Web Development
                    </div>
                    <ul className="space-y-1 text-sm">
                      {/* <li><Link href="/ReactJsDevelopment" className="hover:text-purple-500">React Js Development</Link></li>
                      <li><Link href="/Social" className="hover:text-purple-500">Social Media</Link></li>
                      <li><Link href="/email" className="hover:text-purple-500">Email Marketing</Link></li> */}
                      <li>
                        <Link
                          href="/PhpDevelopment"
                          className="hover:text-purple-500"
                        >
                          PHP Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/LaravelDevelopment"
                          className="hover:text-purple-500"
                        >
                          Laravel Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/CMSDevelopment"
                          className="hover:text-purple-500"
                        >
                          CMS Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ASPNETDevelopment"
                          className="hover:text-purple-500"
                        >
                          ASP.NET Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/MySQLDevelopment"
                          className="hover:text-purple-500"
                        >
                          MySQL Development
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    {/* <div className="text-purple-700 font-bold mb-2">JS Frameworks</div> */}
                    <div className="text-purple-700 font-bold mb-2">
                      Digital Marketing
                    </div>
                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link href="/Social" className="hover:text-purple-500">
                          Social Media
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/DigitalMarketingService"
                          className="hover:text-purple-500"
                        >
                          Digital Marketing Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/SearchEngineOptimization"
                          className="hover:text-purple-500"
                        >
                          {" "}
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/SoftwareTesting"
                          className="hover:text-purple-500"
                        >
                          Quality Assurance
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    {/* <div className="text-purple-700 font-bold mb-2">JS Frameworks</div> */}

                    <ul className="space-y-1 text-sm">
                      <li>
                        <Link
                          href="/DevOpsConsultingServices"
                          className="hover:text-purple-500"
                        >
                          DevOps Consulting Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/CloudServicesSolutions"
                          className="hover:text-purple-500"
                        >
                          Cloud Services Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* <Link href="/about-us"><button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">About Us</button></Link> */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutUsMenuOpen(true)}
              onMouseLeave={() => setIsAboutUsMenuOpen(false)}
            >
              <Link href="/about-us">
                <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                  About Us
                </button>
              </Link>
              {isAboutUsMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg z-50 py-2 w-48 rounded-md">
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/PrivacyPolicy">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                          Privacy Policy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/TermsAndCondition">
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors">
                          Terms & Conditions
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/careers">
              <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                Careers
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                Portfolio
              </button>
            </Link>
            <Link href="/case-study">
              <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                Case Study
              </button>
            </Link>
            <Link href="/pricing">
              <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                Pricing
              </button>
            </Link>
            <Link href="/blog">
              <button className="text-white text-[17px] md:text-[15px] hover:text-purple-700 cursor-pointer">
                Blogs
              </button>
            </Link>
            <div
              className="relative inline-block text-left"
              onMouseEnter={() => setIsContactMenuOpen(true)}
              onMouseLeave={() => setIsContactMenuOpen(false)}
            >
              <Link href="/contact">
                <button className="bg-indigo-600 text-white md:text-[15px] font-semibold text-sm px-6 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-md">
                  Contact Us
                </button>
              </Link>

              {isContactMenuOpen && (
                <div className="absolute z-50 mt-3 w-64 left-1/2 -translate-x-1/2 bg-white backdrop-blur-md border border-gray-200 rounded-xl shadow-xl transition-all duration-200 ease-out animate-fade-in">
                  <div className="p-4">
                    <ul className="space-y-4 text-sm text-gray-800">
                      <li>
                        <a
                      href={socialLinks.whatsapp }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-800"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Whatsapp Us</span>
                    </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@maccotech.com"
                          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
                        >
                          <FaEnvelope className="w-5 h-5 text-blue-600" />
                          <span className="truncate">info@maccotech.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
                    <div className="w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu - Remains hidden on large screens */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute left-0 w-full bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg z-40 rounded-b-lg"
            style={{ top: "100px" }}
          >
            <div className="px-6 py-4 space-y-3">
              <Link href="/home">
                <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 transition-all font-medium">
                  Home
                </button>
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMobileServicesMenu}
                  className="w-full text-left py-2 px-3 flex justify-between items-center rounded-md hover:bg-gray-100 transition-all font-medium"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Services
                  {isServicesMobileMenuOpen ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {/* {isServicesMobileMenuOpen && ( */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isServicesMobileMenuOpen
                      ? "max-h-[3000px] opacity-100 scale-100"
                      : "max-h-0 opacity-0 scale-95"
                  }`}
                >
                  {/* Mobile App Development Card */}
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md">
                    {/* Clickable Heading */}
                    <div
                      onClick={toggleMobileDropdown}
                      className="text-purple-700 font-bold mb-2 flex justify-between items-center cursor-pointer"
                    >
                      Mobile App Development
                      {isMobileDropdownOpen ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>

                    {/* Toggle Content */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isMobileDropdownOpen
                          ? "max-h-[500px] opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      <div className="space-y-1">
                        {[
                          {
                            href: "/AndroidAppDevelopment",
                            label: "Android App Development",
                          },
                          {
                            href: "/iOSAppDevelopment",
                            label: "iOS App Development",
                          },
                          {
                            href: "/ReactNativeAppDevelopment",
                            label: "React-Native App",
                          },
                          {
                            href: "/ecommerce-application-development",
                            label: "E-Commerce App",
                          },
                        ].map(({ href, label }) => (
                          <Link key={href} href={href}>
                            <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                              {label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ecommerce Solution Card */}
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md">
                    {/* Clickable Heading */}
                    <div
                      onClick={toggleEcommerceDropdown}
                      className="text-purple-700 font-bold mb-2 flex justify-between items-center cursor-pointer"
                    >
                      Ecommerce Solution
                      {isEcommerceDropdownOpen ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>

                    {/* Toggle Content */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isEcommerceDropdownOpen
                          ? "max-h-[500px] opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      <div className="space-y-1">
                        {[
                          {
                            href: "/ShopifyDevelopment",
                            label: "Shopify Development",
                          },
                          { href: "/Graphics-design", label: "Graphic Design" },
                          { href: "/Branding", label: "Branding" },
                        ].map(({ href, label }) => (
                          <Link key={href} href={href}>
                            <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                              {label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Web Development Card */}
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md">
                    <div
                      onClick={toggleWebdevelopmentDropdown}
                      className="text-purple-700 font-bold mb-2 flex justify-between items-center cursor-pointer"
                    >
                      Web Development
                      {isWebdevelopmentDropdownOpen ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isWebdevelopmentDropdownOpen
                          ? "max-h-[500px] opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      {[
                        {
                          href: "/ReactJsDevelopment",
                          label: "React Js Development",
                        },
                        { href: "/PhpDevelopment", label: "PHP Development" },
                        {
                          href: "/LaravelDevelopment",
                          label: "Laravel Development",
                        },
                        { href: "/CMSDevelopment", label: "CMS Development" },
                      ].map(({ href, label }) => (
                        <Link key={href} href={href}>
                          <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                            {label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Digital Marketing Card */}
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md">
                    <div
                      onClick={toggleDigitalMarketingDropdown}
                      className="text-purple-700 font-bold mb-2 flex justify-between items-center cursor-pointer"
                    >
                      Digital Marketing
                      {isDigitalMarketingDropdownOpen ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isDigitalMarketingDropdownOpen
                          ? "max-h-[500px] opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      {[
                        { href: "/Social", label: "Social Media" },
                        { href: "/email", label: "Email Marketing" },
                        {
                          href: "/DigitalMarketingService",
                          label: "Digital Marketing Service",
                        },
                        {
                          href: "/SearchEngineOptimization",
                          label: "Search Engine Optimization",
                        },
                      ].map(({ href, label }) => (
                        <Link key={href} href={href}>
                          <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                            {label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Other Services Card */}
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md">
                    <div
                      onClick={toggleOtherDropdown}
                      className="text-purple-700 font-bold mb-2 flex justify-between items-center cursor-pointer"
                    >
                      Other Services
                      {isOtherDropdownOpen ? (
                        <FaChevronUp size={14} />
                      ) : (
                        <FaChevronDown size={14} />
                      )}
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isOtherDropdownOpen
                          ? "max-h-[500px] opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      {[
                        {
                          href: "/SoftwareTesting",
                          label: "Quality Assurance",
                        },
                        {
                          href: "/DevOpsConsultingServices",
                          label: "DevOps Consulting Services",
                        },
                        {
                          href: "/CloudServicesSolutions",
                          label: "Cloud Services Solutions",
                        },
                      ].map(({ href, label }) => (
                        <Link key={href} href={href}>
                          <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                            {label}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* )} */}
              </div>

              <div className="relative">
                <button
                  onClick={toggleMobileAboutUsMenu}
                  className="w-full text-left py-2 px-3 flex justify-between items-center rounded-md hover:bg-gray-100 transition-all font-medium"
                >
                  About Us
                  {isAboutUsMobileMenuOpen ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                {isAboutUsMobileMenuOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l border-gray-300 pl-4">
                    <Link href="/PrivacyPolicy">
                      <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                        Privacy Policy
                      </button>
                    </Link>
                    <Link href="/TermsAndCondition">
                      <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">
                        Terms & Conditions
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              {[
                // { href: "/about-us", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-study", label: "Case Study" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blogs" },
              ].map(({ href, label }) => (
                <Link key={href} href={href}>
                  <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 transition-all font-medium">
                    {label}
                  </button>
                </Link>
              ))}

              {/* Contact Us Section */}
              <div className="pt-4 border-t border-gray-300">
                <button
                  onClick={toggleMobileContactMenu}
                  className="bg-blue-600 text-white font-semibold w-full text-center rounded-full py-2 hover:bg-purple-600 transition-all"
                >
                  Contact Us
                </button>

                {isContactMobileMenuOpen && (
                  <div className="mt-2 space-y-2 pl-2">
                    <a
                      href={socialLinks.whatsapp }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-800"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Whatsapp Us</span>
                    </a>
                    <a
                      href="mailto:info@maccotech.com"
                      className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
                    >
                      <FaEnvelope className="w-5 h-5" />
                      <span>info@maccotech.com</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
