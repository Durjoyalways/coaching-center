"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-10 lg:pt-20 pb-6 lg:pb-10 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] text-4xl lg:text-7xl opacity-10 animate-float">🧪</div>
        <div className="absolute bottom-[10%] right-[5%] text-5xl lg:text-8xl opacity-10 animate-spin-slow">⚛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 🌿 মেইন ফুটার কার্ড */}
        <div className="relative group">
          {/* Card Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400/10 via-yellow-300/10 to-emerald-400/10 rounded-[35px] lg:rounded-[60px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative backdrop-blur-2xl bg-white/80 border border-white/50 rounded-[35px] lg:rounded-[60px] p-8 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* ১. ব্র্যান্ড সেকশন */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-5 lg:mb-8">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-black text-lg lg:text-xl shadow-lg transform -rotate-6">শ</div>
                  <h3 className="text-xl lg:text-2xl font-black text-slate-800 tracking-tight">
                    শিক্ষার <span className="text-green-500">আলো</span>
                  </h3>
                </div>
                <p className="text-slate-500 text-xs lg:text-sm font-bold leading-relaxed mb-6">
                  সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আছি প্রতিটি শিক্ষার্থীর উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে।
                </p>
                <div className="flex justify-center lg:justify-start gap-3">
                  {["FB", "YT", "LI"].map((social) => (
                    <div key={social} className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm hover:border-green-400 hover:text-green-600 hover:-translate-y-1 transition-all cursor-pointer font-black text-[9px] text-slate-400">
                      {social}
                    </div>
                  ))}
                </div>
              </div>

              {/* ২. কুইক লিঙ্কস (মোবাইলে ২ কলামের গ্রিড হিসেবে দেখাবে) */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:col-span-2">
                <div>
                  <h4 className="text-sm lg:text-lg font-black text-slate-800 mb-4 lg:mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-green-500 rounded-full"></span>
                    লিঙ্কসমূহ
                  </h4>
                  <ul className="space-y-3 text-slate-500 text-[11px] lg:text-sm font-bold">
                    <li><Link href="/" className="hover:text-green-500 transition-all flex items-center gap-2"> হোম পেজ</Link></li>
                    <li><Link href="/courses" className="hover:text-green-500 transition-all flex items-center gap-2"> কোর্সসমূহ</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm lg:text-lg font-black text-slate-800 mb-4 lg:mb-8 flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-yellow-400 rounded-full"></span>
                    ব্যাচ
                  </h4>
                  <ul className="space-y-3 text-slate-500 text-[11px] lg:text-sm font-bold">
                    <li className="flex items-center gap-2 italic">৬ষ্ঠ - ৮ম শ্রেণি</li>
                    <li className="flex items-center gap-2 italic">এসএসসি প্রস্তুতি</li>
                  </ul>
                </div>
              </div>

              {/* ৩. সরাসরি যোগাযোগ */}
              <div>
                <h4 className="text-sm lg:text-lg font-black text-slate-800 mb-4 lg:mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
                  যোগাযোগ
                </h4>
                <div className="bg-gradient-to-br from-white to-green-50/30 p-5 rounded-[25px] border border-white shadow-sm">
                  <p className="text-slate-700 text-[11px] lg:text-sm font-black mb-2">মেইন রোড, ঢাকা।</p>
                  <p className="text-green-600 text-sm lg:text-base font-black tracking-tight italic">
                    📞 +৮৮০ ১৭১২-৩৪৫
                  </p>
                </div>
              </div>

            </div>

            {/* কপিরাইট সেকশন - মোবাইলে আরও ছোট */}
            <div className="mt-10 lg:mt-16 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-center">
                © {new Date().getFullYear()} শিক্ষার আলো | Excellence in Education
              </p>
              
              <div className="flex items-center gap-3">
                 <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-green-600 rounded-xl flex items-center justify-center text-lg shadow-sm border border-slate-100 hover:bg-green-50 transition-all">
                    ↑
                 </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );  
};

export default Footer;