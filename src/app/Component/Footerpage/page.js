"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  PinIcon as PinterestIcon,
  ArrowUp,
  Phone,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const iconMap = {
  facebook: <Facebook size={20} />,
  instagram: <Instagram size={20} />,
  twitter: <Twitter size={20} />,
  linkedin: <Linkedin size={20} />,
  whatsapp: <FaWhatsapp size={20} />,
};

export default function Home() {
  const [socialLinks, setSocialLinks] = useState([]);
const API_URL = process.env.NEXT_PUBLIC_API_URL;


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
    <div className="flex flex-col ">
      {/* <main className="flex-grow">  
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p>Scroll down to see the footer</p>
        </div>
      </main> */}

      <footer className="bg-[#0e0a2e] text-white md:px-10">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <Image
                    src="/Maccotech1-removebg-preview.png"
                    alt="Macco Tech Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h2 className="text-[#1eb4e4] text-2xl font-bold">
                    MACCO TECH
                  </h2>
                  {/* <p className="text-white text-sm">TECH</p> */}
                </div>
              </div>
              <p className="text-sm mb-6">
                Macco Tech provides the best software, web & mobile app
                development services for small to large-scale businesses. Our
                efficient development process helps you to only focus on results
                instead of process overhead.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-2">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full text-black hover:scale-110 transition"
                  >
                    {iconMap[platform] ?? <span>{platform}</span>}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="md:ml-10">
              <h3 className="text-xl font-bold mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/healthcare" className="hover:text-[#1eb4e4]">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="hover:text-[#1eb4e4]">
                    Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/ReactJsDevelopment"
                    className="hover:text-[#1eb4e4]"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/Social" className="hover:text-[#1eb4e4]">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Graphics-design"
                    className="hover:text-[#1eb4e4]"
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ShopifyDevelopment"
                    className="hover:text-[#1eb4e4]"
                  >
                    Shopify Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/AndroidAppDevelopment"
                    className="hover:text-[#1eb4e4]"
                  >
                    Android App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iOSAppDevelopment"
                    className="hover:text-[#1eb4e4]"
                  >
                    iOS App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ReactNativeAppDevelopment"
                    className="hover:text-[#1eb4e4]"
                  >
                    React-Native App Development
                  </Link>
                </li>
                <li>
                  <Link href="/email" className="hover:text-[#1eb4e4]">
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecommerce-application-development"
                    className="hover:text-[#1eb4e4]"
                  >
                    E-commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work with us & Office Location */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Work with us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/careers" className="hover:text-[#1eb4e4]">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="hover:text-[#1eb4e4]">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Office Location</h3>
                <address className="not-italic">
                  548 Market St,
                  <br />
                  surat
                  <br />
                  India
                </address>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Contact us</h3>
                <div className="space-y-2">
                  {/* Phone Number */}
                  <div className="flex items-center">
                    <Phone className="text-[#1eb4e4] mr-2" size={20} />
                    <a href="tel:+919525104860" className="hover:underline">
                      +91 95251 04860
                    </a>
                  </div>

                  {/* Mail */}
                  <a
                    href="mailto:maccotech.info@gmail.com"
                    className="flex items-center hover:underline"
                  >
                    <Mail className="text-[#1eb4e4] mr-2" size={20} />
                    <span>maccotech.info@gmail.com</span>
                  </a>

                  {/* WhatsApp */}
                 <a
              href={socialLinks.whatsapp || "https://wa.me/919525104860"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <FaWhatsapp className="text-[#1eb4e4] mr-2" size={20} />
              <span>WhatsApp Us</span>
            </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Copyright text centered */}
            <div className="flex-1 text-center">
              ©2025 All Rights Reserved by Macco Tech &nbsp; | &nbsp;
              <Link
                href="/PrivacyPolicy"
                className="hover:text-[#1eb4e4] whitespace-nowrap"
              >
                Privacy Policy
              </Link>
              &nbsp; | &nbsp;
              <Link
                href="/TermsAndCondition"
                className="hover:text-[#1eb4e4] whitespace-nowrap"
              >
                Terms & Conditions
              </Link>
            </div>
            {/* ArrowUp button at the end */}
            <Link href="#" className="bg-[#1eb4e4] p-2 rounded">
              <ArrowUp size={30} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
