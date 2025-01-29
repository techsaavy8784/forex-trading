"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Icon Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://imgs.search.brave.com/uEpx5P5k7aYOuGTfQnkVhxtMoySi4rZ6ZsZBJ3HOcd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vYldWV1B0/dDZMNWEzQ1BTUlhU/N2ZGYzl1MkNmOFlw/d0VfMTRQYmowNXdr/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2UmpoNFF6/TkgvV0ZCTlRWTnRi/Rzg1UzFGRC9aekJm/YkZONVIzYzRTR3hW/L01rcFVPRVZUVWw5/TFFWOHovTUM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1hC/aVYwWnVMMXBZVFhW/ai9TRXB3WXpJeGNG/bDVOWEF2L1luazVl/bUp0Um5ka1NFcG8v/V2tkVmRDOWthazEy/VjI1Ry9iV1F3WkRS/T1ZYaHNMMVJyL05W/VmxSM041VTBZNU1H/TnQvUm1zdllWYzFi/azFxUlhsTS9WM2gy/V2pJNGRDOWpNMFl4/L1dWaEtiRXh1UW5W/YWVqbG8vTDJSWVVu/WlFWMXAyWTIweC9h/R1JEZUdvdllqSXhk/Mk50L1ZucGpkdy5q/cGVn"
                alt="Company Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <button className="bg-blue-500 text-white font-bold px-5 rounded-md hover:bg-blue-600 py-1">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
