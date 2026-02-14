"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-8 lg:pt-16 pb-6 bg-[#fcfcfc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* মেইন কার্ড - হালকা সবুজ ব্যাকগ্রাউন্ড */}
        <div className="bg-[#f0fdf4] border border-[#10ac84]/10 rounded-[24px] lg:rounded-[48px] p-6 lg:p-12 shadow-sm">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* ১. ব্র্যান্ড সেকশন */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#10ac84] rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                  শ
                </div>
                <h3 className="text-lg lg:text-xl font-black text-slate-800">
                  শিক্ষার <span className="text-[#10ac84]">আলো</span>
                </h3>
              </div>
              <p className="text-slate-500 text-xs lg:text-sm font-medium leading-relaxed mb-4">
                সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আছি আপনার সাথে।
              </p>
              <div className="flex gap-2">
                {["FB", "YT", "LI"].map((social) => (
                  <div key={social} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-400 hover:text-[#10ac84] transition-colors cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            {/* ২. লিঙ্কসমূহ */}
            <div className="col-span-1">
              <h4 className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">লিঙ্ক</h4>
              <ul className="space-y-2 text-slate-500 text-xs lg:text-sm font-semibold">
                <li><Link href="/" className="hover:text-[#10ac84]">হোম</Link></li>
                <li><Link href="/courses" className="hover:text-[#10ac84]">কোর্সসমূহ</Link></li>
                <li><Link href="/about" className="hover:text-[#10ac84]">আমাদের সম্পর্কে</Link></li>
              </ul>
            </div>

            {/* ৩. ব্যাচসমূহ */}
            <div className="col-span-1">
              <h4 className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">ব্যাচ</h4>
              <ul className="space-y-2 text-slate-500 text-xs lg:text-sm font-semibold">
                <li>৬ষ্ঠ - ৮ম</li>
                <li>এসএসসি</li>
                <li>মডেল টেস্ট</li>
              </ul>
            </div>

            {/* ৪. যোগাযোগ */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">যোগাযোগ</h4>
              <div className="bg-white/50 p-4 rounded-xl border border-[#10ac84]/5">
                <p className="text-slate-700 text-xs lg:text-sm font-bold mb-1">মেইন রোড, ঢাকা।</p>
                <p className="text-[#10ac84] text-sm lg:text-base font-black">
                  📞 +৮৮০ ১৭১২-৩৪৫
                </p>
              </div>
            </div>

          </div>

          {/* কপিরাইট সেকশন */}
          <div className="mt-8 lg:mt-12 pt-6 border-t border-slate-200/50 flex flex-row items-center justify-between">
            <p className="text-slate-400 text-[10px] lg:text-xs font-bold">
              © {new Date().getFullYear()} শিক্ষার আলো
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="w-8 h-8 lg:w-10 lg:h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:bg-[#10ac84] hover:text-white transition-all shadow-sm"
            >
              ↑
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;