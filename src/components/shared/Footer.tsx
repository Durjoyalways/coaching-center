"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-10 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Glowing Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-7xl opacity-20 animate-float" 
             style={{ filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.5))' }}>🧪</div>
        
        <div className="absolute bottom-[20%] right-[5%] text-8xl opacity-20 animate-spin-slow"
             style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))' }}>⚛️</div>

        {/* 🎨 Dynamic Color Blobs for Footer Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🌿 মেইন ফুটার কার্ড - New Glow & Color Sense */}
        <div className="relative group">
          {/* কার্ডের পেছনের গ্লো (Outer Glow) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 via-yellow-300/20 to-emerald-400/20 rounded-[60px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative backdrop-blur-2xl bg-white/80 border border-white/50 rounded-[60px] p-10 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* ১. ব্র্যান্ড সেকশন */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] transform -rotate-6">শ</div>
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                    শিক্ষার <span className="text-green-500">আলো</span>
                  </h3>
                </div>
                <p className="text-slate-500 text-sm font-bold leading-relaxed mb-8">
                  সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আছি প্রতিটি শিক্ষার্থীর উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে।
                </p>
                <div className="flex gap-4">
                  {["FB", "YT", "LI"].map((social) => (
                    <div key={social} className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm hover:shadow-green-200 hover:border-green-400 hover:text-green-600 hover:-translate-y-2 transition-all duration-300 cursor-pointer font-black text-[10px] text-slate-400">
                      {social}
                    </div>
                  ))}
                </div>
              </div>

              {/* ২. কুইক লিঙ্কস */}
              <div>
                <h4 className="text-lg font-black text-slate-800 mb-8 flex items-center gap-2">
                  <span className="w-2 h-5 bg-green-500 rounded-full"></span>
                  লিঙ্কসমূহ
                </h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li><Link href="/" className="hover:text-green-500 transition-all flex items-center gap-3 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/link:bg-green-500 transition-all"></span> হোম পেজ</Link>
                  </li>
                  <li><Link href="/courses" className="hover:text-green-500 transition-all flex items-center gap-3 group/link">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/link:bg-green-500 transition-all"></span> কোর্সসমূহ</Link>
                  </li>
                </ul>
              </div>

              {/* ৩. একাডেমিক ব্যাচ */}
              <div>
                <h4 className="text-lg font-black text-slate-800 mb-8 flex items-center gap-2">
                  <span className="w-2 h-5 bg-yellow-400 rounded-full"></span>
                  একাডেমিক ব্যাচ
                </h4>
                <ul className="space-y-4 text-slate-500 text-sm font-bold">
                  <li className="flex items-center gap-3 hover:text-slate-800 transition-colors cursor-default">
                    <span className="w-6 h-6 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-[10px]">✓</span>
                    ৬ষ্ঠ - ৮ম শ্রেণি
                  </li>
                  <li className="flex items-center gap-3 hover:text-slate-800 transition-colors cursor-default">
                    <span className="w-6 h-6 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center text-[10px]">✓</span>
                    এসএসসি প্রস্তুতি
                  </li>
                </ul>
              </div>

              {/* ৪. সরাসরি যোগাযোগ */}
              <div>
                <h4 className="text-lg font-black text-slate-800 mb-8 flex items-center gap-2">
                  <span className="w-2 h-5 bg-emerald-500 rounded-full"></span>
                  যোগাযোগ
                </h4>
                <div className="bg-gradient-to-br from-white to-green-50/30 p-6 rounded-[35px] border border-white shadow-sm group hover:border-green-200 transition-all">
                  <p className="text-slate-700 text-sm font-black mb-3 leading-relaxed">মেইন রোড, আপনার এলাকা, ঢাকা।</p>
                  <p className="text-green-600 text-base font-black tracking-tight group-hover:scale-105 transition-transform origin-left italic">
                    📞 +৮৮০ ১৭১২-৩৪৫৬৭৮
                  </p>
                </div>
              </div>

            </div>

            {/* কপিরাইট সেকশন */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:justify-between md:flex-row items-center gap-6">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} শিক্ষার আলো | Excellence in Education
              </p>
              <div className="flex items-center gap-4">
                  <div className="px-8 py-3 bg-slate-900 rounded-2xl text-[10px] uppercase font-black text-white tracking-[0.2em] shadow-xl hover:bg-green-600 transition-all active:scale-95 cursor-pointer">
                    Get Started
                  </div>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-12 h-12 bg-white text-green-600 rounded-2xl flex items-center justify-center text-lg font-black shadow-sm border border-slate-100 hover:bg-green-50 transition-all">
                      ↑
                  </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-10"></div>
      </div>
    </footer>
  );
};

export default Footer;