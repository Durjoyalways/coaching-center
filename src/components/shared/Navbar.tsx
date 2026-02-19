"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) setUserData(userDoc.data());
      } else {
        setUser(null);
        setUserData(null);
      }
    });

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // ক্লিক যদি টগল বাটনের ভেতরে না হয়, তবেই মেনু বন্ধ হবে
        const toggleBtn = document.getElementById('mobile-toggle-btn');
        if (toggleBtn && !toggleBtn.contains(event.target as Node)) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/courses", label: "কোর্সসমূহ" },
    { href: "/gallery", label: "সাফল্য" },
    { href: "/notice", label: "নোটিশ" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
  ];

  return (
    <nav 
      style={{ backgroundColor: "#0a192f" }} // সরাসরি ডার্ক ব্যাকগ্রাউন্ড নিশ্চিত করা
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b border-white/10 ${isScrolled ? "py-3 shadow-2xl bg-opacity-90" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg font-black">
            শ
          </div>
          <span className="text-xl md:text-2xl font-black text-white">
            শিক্ষার <span className="text-emerald-400">আলো</span>
          </span>
        </Link>

        {/* ডেস্কটপ নেভিগেশন */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2 text-[14px] font-bold text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="px-4 py-2 hover:text-emerald-400 transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {!user ? (
            <Link href="/login" className="bg-emerald-500 text-[#0a192f] px-8 py-2.5 rounded-full font-black text-sm hover:bg-white transition-all">
              লগইন
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="flex items-center gap-3 p-1.5 pr-4 rounded-full border border-white/10 bg-white/5"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-[#0a192f] flex items-center justify-center font-black text-xs">
                  {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-sm font-black text-white">
                  {userData?.name?.split(' ')[0] || "ইউজার"}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* 📱 মোবাইল বাটন */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            id="mobile-toggle-btn"
            className="p-2 text-white relative z-[130]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              // Cross Button (বন্ধ করার জন্য)
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Button
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* 📱 মোবাইল মেনু বক্স */}
        <div 
          ref={mobileMenuRef}
          style={{ backgroundColor: "#0d213b" }}
          className={`absolute top-full right-5 mt-4 w-72 rounded-[30px] shadow-2xl border border-white/10 py-8 transition-all duration-300 md:hidden z-[120] ${isMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        >
          <ul className="flex flex-col gap-6 px-10 font-black text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-400 block text-lg">
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="h-[1px] bg-white/10 my-2"></div>
            {user ? (
              <button onClick={handleLogout} className="w-full bg-red-500/10 text-red-500 py-4 rounded-2xl border border-red-500/20">লগআউট</button>
            ) : (
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="bg-emerald-500 text-[#0a192f] py-4 rounded-2xl flex items-center justify-center">লগইন</Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}