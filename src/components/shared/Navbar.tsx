"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/courses", label: "কোর্সসমূহ" },
    { href: "/teachers", label: "শিক্ষক মণ্ডলী" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-4 flex justify-between items-center relative">
        
        {/* লোগো সেকশন */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-black text-gray-900">
              শিক্ষার <span className="text-green-600">আলো</span>
            </span>
          </div>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2 text-[16px] font-bold text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-all relative group overflow-hidden">
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="tel:01XXXXXXXXX" className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-gray-900 transition shadow-md">
            ভর্তি চলছে
          </Link>
        </div>

        {/* মোবাইল মেনু বাটন */}
        <button 
          className="md:hidden z-50 p-2 text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* মোবাইল ড্রয়ার (ব্লার ইফেক্টসহ সবুজ থিম) */}
        <div className={`absolute top-full left-0 w-full bg-white/70 backdrop-blur-xl shadow-xl border-t border-gray-100 transition-all duration-300 md:hidden overflow-hidden ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="flex flex-col p-6 gap-5 font-bold text-gray-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-1 hover:text-green-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link 
                href="tel:01XXXXXXXXX" 
                className="bg-green-600 text-white px-6 py-3.5 rounded-2xl inline-block w-full text-center shadow-lg shadow-green-100"
                onClick={() => setIsMenuOpen(false)}
              >
                ভর্তি চলছে
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}