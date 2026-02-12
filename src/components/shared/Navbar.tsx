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
  const [isAdminSubMenuOpen, setIsAdminSubMenuOpen] = useState(false); // অ্যাডমিন সাব-মেনুর জন্য
  
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
        setIsAdminSubMenuOpen(false); // বাইরে ক্লিক করলে অ্যাডমিন মেনুও বন্ধ হবে
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
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
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen || isDropdownOpen ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-4 flex justify-between items-center relative">
        
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg font-black">শ</div>
          <span className="text-xl md:text-2xl font-black text-gray-900 leading-none">শিক্ষার <span className="text-green-600">আলো</span></span>
        </Link>

        {/* ডেস্কটপ নেভিগেশন */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-2 text-[15px] font-bold text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="px-4 py-2 rounded-lg hover:text-green-600 transition-all">{link.label}</Link></li>
            ))}
          </ul>
          
          {!user ? (
            <Link href="/login" className="bg-green-600 text-white px-8 py-2.5 rounded-full font-bold shadow-md hover:bg-gray-900 transition">লগইন</Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                className={`flex items-center gap-3 p-1 pr-4 rounded-full border transition-all ${isDropdownOpen ? 'bg-green-600 border-green-600 shadow-lg' : 'bg-green-50 border-green-100'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-colors ${isDropdownOpen ? 'bg-white text-green-600' : 'bg-green-600 text-white'}`}>
                  {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className={`text-sm font-bold transition-colors ${isDropdownOpen ? 'text-white' : 'text-gray-700'}`}>
                  {userData?.name?.split(' ')[0] || "ইউজার"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180 text-white' : 'text-green-600'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* 🖥️ ডেস্কটপ প্রোফাইল ড্রপডাউন */}
              <div className={`absolute right-0 top-full mt-4 w-64 bg-white/90 backdrop-blur-xl rounded-[30px] shadow-2xl border border-white/50 py-4 transition-all duration-300 origin-top-right ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
                
                <div className="px-6 py-3 border-b border-gray-100 mb-2 text-center md:text-left">
                   <p className="text-[10px] font-black text-green-600 uppercase tracking-[0.2em]">{userData?.role || "Student"}</p>
                   <p className="text-xs font-bold text-gray-400 truncate">{user.email}</p>
                </div>

                {/* --- ⚙️ ড্রপডাউন যুক্ত অ্যাডমিন প্যানেল --- */}
                {userData?.role === "admin" && (
                  <div className="mb-1">
                    <button 
                      onClick={() => setIsAdminSubMenuOpen(!isAdminSubMenuOpen)}
                      className={`w-full flex items-center justify-between px-6 py-3 text-sm font-black transition-all ${isAdminSubMenuOpen ? 'bg-green-600 text-white' : 'text-green-700 hover:bg-green-50'}`}
                    >
                      <span>⚙️ অ্যাডমিন মেনু</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3 h-3 transition-transform ${isAdminSubMenuOpen ? 'rotate-0' : '-rotate-90'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    
                    {/* অ্যাডমিন সাব-লিংকসমূহ */}
                    <div className={`overflow-hidden transition-all duration-300 bg-green-50/50 ${isAdminSubMenuOpen ? 'max-h-40 py-2' : 'max-h-0'}`}>
                      <Link href="/admin" onClick={() => setIsDropdownOpen(false)} className="block px-10 py-2 text-xs font-bold text-green-600 hover:text-green-800">
                         📊 ড্যাশবোর্ড দেখুন
                      </Link>
                      <Link href="/add-notice" onClick={() => setIsDropdownOpen(false)} className="block px-10 py-2 text-xs font-bold text-green-600 hover:text-green-800">
                         + নোটিশ যুক্ত করুন
                      </Link>
                    </div>
                  </div>
                )}

                <Link href="/profile" onClick={() => setIsDropdownOpen(false)} className="block px-6 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 font-bold transition-colors">👤 আমার প্রোফাইল</Link>
                
                <div className="px-4 mt-3">
                  <button onClick={handleLogout} className="w-full bg-red-50 text-red-500 py-3 rounded-2xl font-black text-sm hover:bg-red-500 hover:text-white transition-all border border-red-100 flex items-center justify-center gap-2">
                    লগআউট
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* মোবাইল বাটন */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center text-white font-black text-sm shadow-md border-2 border-white">
              {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
            </div>
          )}
          <button className="p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 text-green-700"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            )}
          </button>
        </div>

        {/* 📱 মোবাইল মেনু */}
        <div 
          ref={mobileMenuRef}
          className={`absolute top-full right-5 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-[30px] shadow-2xl border border-white/50 py-8 transition-all duration-300 md:hidden z-[110] origin-top-right ${isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        >
          <ul className="flex flex-col gap-4 px-8 font-black text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}><Link href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 block text-lg">{link.label}</Link></li>
            ))}
            
            <div className="h-[1px] bg-gray-200/50 my-2"></div>

            {user ? ( 
              <>
                {/* মোবাইল অ্যাডমিন সাব-মেনু */}
                {userData?.role === "admin" && (
                  <div className="flex flex-col gap-3 mb-2">
                    <p className="text-[10px] text-green-600 tracking-widest uppercase">অ্যাডমিন কন্ট্রোল</p>
                    <Link href="/admin" onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-lg flex items-center gap-2 pl-2">
                      📊 ড্যাশবোর্ড
                    </Link>
                    <Link href="/add-notice" onClick={() => setIsMenuOpen(false)} className="text-gray-800 text-lg flex items-center gap-2 pl-2">
                      📝 নোটিশ পোস্ট
                    </Link>
                  </div>
                )}
                
                <li><Link href="/profile" onClick={() => setIsMenuOpen(false)} className="text-gray-700 text-lg block">👤 প্রোফাইল</Link></li>
                <li>
                  <button onClick={handleLogout} className="w-full bg-red-50 text-red-600 py-4 rounded-2xl font-black text-lg border border-red-100">লগআউট</button>
                </li>
              </>
            ) : (
              <li><Link href="/login" onClick={() => setIsMenuOpen(false)} className="bg-green-600 text-white py-4 rounded-2xl flex items-center justify-center font-black text-lg">লগইন</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}