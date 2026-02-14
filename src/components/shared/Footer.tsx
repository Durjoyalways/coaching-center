"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fcfcfc] pt-12 lg:pt-24 pb-8 border-t border-slate-100 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন - সিএসএস এনিমেশন */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-emerald-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-green-50 rounded-full blur-3xl animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        {/* মেইন কার্ড */}
        <div className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-[30px] lg:rounded-[60px] p-8 lg:p-16 shadow-[0_20px_50px_rgba(16,172,132,0.05)]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* ১. ব্র্যান্ড ইনফো */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#10ac84] rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3">
                  শ
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-slate-800 tracking-tight">
                  শিক্ষার <span className="text-[#10ac84]">আলো</span>
                </h3>
              </div>
              <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium">
                সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আপনার স্বপ্ন পূরণে অঙ্গীকারবদ্ধ।
              </p>
              {/* সোশ্যাল বাটন */}
              <div className="flex gap-3">
                {['FB', 'YT', 'LN'].map((item) => (
                  <button key={item} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:bg-[#10ac84] hover:text-white hover:border-[#10ac84] transition-all duration-300">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* ২. কুইক লিঙ্কস */}
            <div className="lg:ml-10">
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                নেভিগেশন
              </h4>
              <ul className="space-y-4">
                {['হোম', 'কোর্সসমূহ', 'আমাদের সম্পর্কে', 'যোগাযোগ'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-slate-500 hover:text-[#10ac84] font-semibold text-sm lg:text-base transition-colors duration-200">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ৩. ব্যাচ আপডেট */}
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                বর্তমান ব্যাচ
              </h4>
              <ul className="space-y-4">
                {['৬ষ্ঠ - ৮ম শ্রেণি', 'এসএসসি ২০২৬', 'মডেল টেস্ট স্পেশাল'].map((batch) => (
                  <li key={batch} className="flex items-center gap-2 text-slate-500 font-semibold text-sm lg:text-base">
                    <span className="text-emerald-500 text-xs">●</span> {batch}
                  </li>
                ))}
              </ul>
            </div>

            {/* ৪. কন্টাক্ট বক্স */}
            <div>
              <h4 className="text-sm font-black text-slate-800 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                সরাসরি কথা বলুন
              </h4>
              <div className="bg-[#f0fdf4] p-6 rounded-[25px] border border-emerald-100 group transition-all duration-300 hover:shadow-inner">
                <p className="text-slate-600 text-xs font-bold mb-2 uppercase tracking-tighter">হেল্পলাইন নম্বর</p>
                <p className="text-[#10ac84] text-lg lg:text-xl font-black group-hover:tracking-wider transition-all">
                  +৮৮০ ১৭১২-৩৪৫৬৭৮
                </p>
                <div className="mt-4 pt-4 border-t border-emerald-200/50">
                  <p className="text-slate-500 text-xs font-bold">মেইন রোড, ঢাকা, বাংলাদেশ।</p>
                </div>
              </div>
            </div>

          </div>

          {/* ৫. ফুটনোট ও স্ক্রল টু টপ */}
          <div className="mt-12 lg:mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
              © {currentYear} শিক্ষার আলো — All Rights Reserved
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[#10ac84] font-black text-xs uppercase tracking-widest hover:opacity-70 transition-all"
            >
              Back to top 
              <span className="w-10 h-10 rounded-full bg-white border border-emerald-100 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;