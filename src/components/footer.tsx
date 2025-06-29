"use client";

import { FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black bottom-0 w-full min-h-8 pt-0 pb-0  text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-lime-400">ZAP!</h2>
          <p className="text-sm text-gray-400 mt-1">
            Shock your system ⚡ Stay wired.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 text-xl">
          <a href="#" className="hover:text-lime-400 transition" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-lime-400 transition" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-lime-400 transition" aria-label="TikTok">
            <FaTiktok />
          </a>
          <a href="#" className="hover:text-lime-400 transition" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © {currentYear} ZAP Inc. All rights reserved. This site is entirely fictional (but the hype is real).
      </div>
    </footer>
  );
}
