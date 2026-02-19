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
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
    window.location.href = "/login";
  };

  // নেভিগেশন লিংকসমূহ
  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/courses", label: "কোর্সসমূহ" },
    { href: "/gallery", label: "সাফল্য" },
    { href: "/notice", label: "নোটিশ" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
  ];

  return (
    <nav 
      style={{ backgroundColor: "#0a192f" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b border-white/10 ${isScrolled ? "py-3 shadow-2xl bg-opacity-95 backdrop-blur-md" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-[#0a192f] shadow-lg font-black text-lg">
            শ
          </div>
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter">
            শিক্ষার <span className="text-emerald-400">আলো</span>
          </span>
        </Link>

        {/* 💻 ডেস্কটপ নেভিগেশন */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2 text-[14px] font-bold text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="px-4 py-2 hover:text-emerald-400 transition-all">
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* 🛡️ অ্যাডমিন হলে আলাদা লিংক সরাসরি মেনুতে দেখাবে */}
            {userData?.role === "admin" && (
              <li>
                <Link href="/admin" className="px-4 py-2 text-emerald-400 border border-emerald-500/30 rounded-full bg-emerald-500/5 hover:bg-emerald-500 hover:text-[#0a192f] transition-all">
                  অ্যাডমিন প্যানেল
                </Link>
              </li>
            )}
          </ul>
          
          {!user ? (
            <Link href="/login" className="bg-emerald-500 text-[#0a192f] px-8 py-2.5 rounded-full font-black text-sm hover:bg-white transition-all">
              লগইন
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className="flex items-center gap-3 p-1.5 pr-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-[#0a192f] flex items-center justify-center font-black text-xs">
                  {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-sm font-black text-white">
                  {userData?.name?.split(' ')[0] || "ইউজার"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ড্রপডাউন মেনু */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-56 bg-[#0d213b] border border-white/10 rounded-2xl shadow-2xl py-3 z-[150] overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5 mb-2">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">প্রোফাইল</p>
                    <p className="text-white font-bold truncate text-sm">{userData?.name || "ইউজার"}</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:bg-red-500/10 text-sm font-bold transition-all mt-1"
                  >
                    🚪 লগআউট
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 📱 মোবাইল কন্ট্রোলস */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            id="mobile-toggle-btn"
            className="p-2 text-white relative z-[130] bg-white/5 rounded-xl border border-white/10" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          className={`absolute top-full right-6 mt-4 w-72 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 py-10 transition-all duration-300 md:hidden z-[120] ${isMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
        >
          <ul className="flex flex-col gap-6 px-10 font-black text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-emerald-400 block text-lg transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}

            {/* 🛡️ মোবাইলে অ্যাডমিন প্যানেল লিংক */}
            {userData?.role === "admin" && (
              <li>
                <Link href="/admin" onClick={() => setIsMenuOpen(false)} className="text-emerald-400 block text-lg border-t border-white/5 pt-4">
                   ⚙️ অ্যাডমিন প্যানেল
                </Link>
              </li>
            )}
            
            <div className="h-[1px] bg-white/10 my-2"></div>
            
            {user ? (
              <button onClick={handleLogout} className="w-full bg-red-500/10 text-red-500 py-4 rounded-2xl border border-red-500/20">লগআউট</button>
            ) : (
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="bg-emerald-500 text-[#0a192f] py-5 rounded-3xl flex items-center justify-center font-black">লগইন</Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}