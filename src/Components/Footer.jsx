import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8  w-full ">
      <div className="container mx-auto px-4 w-1/2 ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold text-white">VideoShare</div>

          {/* Navigation Links */}
          <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
           
          </ul>
        
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} VideoShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
