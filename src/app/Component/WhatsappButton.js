// components/WhatsappButton.js
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  const [whatsappLink, setWhatsappLink] = useState(null);
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

      setWhatsappLink(linksObj.whatsapp);
    } catch (err) {
      console.error("Error fetching social links", err);
    }
  };
  fetchSocialLinks();
}, [API_URL]);

  if (!whatsappLink) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition">
          <FaWhatsapp size={24} />
        </div>
      </Link>
    </div>
  );
}
