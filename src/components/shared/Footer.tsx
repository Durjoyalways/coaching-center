"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-8 lg:pt-16 pb-6 bg-[#fcfcfc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* 🌿 মেইন ফুটার কার্ড - হালকা সবুজ (Light Green) থিম */}
        <div className="bg-[#f0fdf4] border border-[#10ac84]/20 rounded-[24px] lg:rounded-[48px] p-5 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-md">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            
            {/* ১. ব্র্যান্ড সেকশন */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3 lg:mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#10ac84] rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-lg shadow-sm">
                  শ
                </div>
                <h3 className="text-lg lg:text-xl font-black text-slate-800">
                  শিক্ষার <span className="text-[#10ac84]">আলো</span>
                </h3>
              </div>
              <p className="text-slate-500 text-[10px] lg:text-sm font-medium leading-relaxed mb-4 max-w-[250px]">
                সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আছি প্রতিটি শিক্ষার্থীর উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে।
              </p>
              {/* সোশ্যাল আইকন */}
              <div className="flex gap-2">
                {["FB", "YT", "LI"].map((social) => (
                  <div key={social} className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[8px] lg:text-[10px] font-bold text-slate-400 hover:border-[#10ac84] hover:text-[#10ac84] transition-all cursor-pointer">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            {/* ২. লিঙ্কসমূহ */}
            <div className="col-span-1">
              <h4 className="text-[11px] lg:text-sm font-black text-slate-800 uppercase tracking-widest mb-3 lg:mb-6">লিঙ্কসমূহ</h4>
              <ul className="space-y-2 text-slate-500 text-[10px] lg:text-sm font-semibold">
                <li><Link href="/" className="hover:text-[#10ac84] transition-colors">হোম</Link></li>
                <li><Link href="/courses" className="hover:text-[#10ac84] transition-colors">কোর্সসমূহ</Link></li>
                <li><Link href="/about" className="hover:text-[#10ac84] transition-colors">আমাদের সম্পর্কে</Link></li>
              </ul>
            </div>

            {/* ৩. ব্যাচসমূহ */}
            <div className="col-span-1">
              <h4 className="text-[11px] lg:text-sm font-black text-slate-800 uppercase tracking-widest mb-3 lg:mb-6">ব্যাচসমূহ</h4>
              <ul className="space-y-2 text-slate-500 text-[10px] lg:text-sm font-semibold italic">
                <li>৬ষ্ঠ - ৮ম শ্রেণি</li>
                <li>এসএসসি প্রস্তুতি</li>
                <li>মডেল টেস্ট</li>
              </ul>
            </div>

            {/* ৪. যোগাযোগ */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[11px] lg:text-sm font-black text-slate-800 mb-3 lg:mb-6 uppercase tracking-widest">যোগাযোগ</h4>
              <div className="bg-white/60 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-2xl border border-[#10ac84]/10">
                <p className="text-slate-700 text-[9px] lg:text-sm font-bold mb-1">মেইন রোড, ঢাকা।</p>
                <p className="text-[#10ac84] text-xs lg:text-base font-black">
                  📞 +৮৮০ ১৭১২-৩৪৫
                </p>
              </div>
            </div>

          </div>

          {/* ৫. কপিরাইট এবং স্ক্রল বাটন */}
          <div className="mt-8 lg:mt-12 pt-5 border-t border-slate-200/50 flex items-center justify-between">
            <p className="text-slate-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} শিক্ষার আলো
            </p>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="w-7 h-7 lg:w-10 lg:h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:bg-[#10ac84] hover:text-white hover:border-[#10ac84] transition-all shadow-sm"
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