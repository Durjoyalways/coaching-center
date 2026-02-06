"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-20 pb-10 overflow-hidden">
      {/* 🟢 ব্যাকগ্রাউন্ড ডেকোরেশন (সফট লাইট গ্রিন গ্লো) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-300 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 🌿 মেইন ফুটার কার্ড - Light Green Glass Effect */}
        <div className="backdrop-blur-xl bg-green-50/60 border border-green-100 rounded-[50px] p-10 lg:p-16 shadow-2xl shadow-green-900/5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* ১. ব্র্যান্ড সেকশন */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-lg shadow-green-200">শ</div>
                <h3 className="text-2xl font-black text-slate-800">
                  শিক্ষার <span className="text-green-600">আলো</span>
                </h3>
              </div>
              <p className="text-slate-600 text-sm font-bold leading-relaxed mb-6">
                শিক্ষা যেখানে আনন্দময়। আমরা বিশ্বাস করি সঠিক মেন্টরশিপ শিক্ষার্থীর জীবন বদলে দিতে পারে।
              </p>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-green-100 flex items-center justify-center shadow-sm hover:bg-green-600 hover:text-white transition-all cursor-pointer font-bold text-xs text-green-600">FB</div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-green-100 flex items-center justify-center shadow-sm hover:bg-green-600 hover:text-white transition-all cursor-pointer font-bold text-xs text-green-600">YT</div>
              </div>
            </div>

            {/* ২. কুইক লিঙ্কস */}
            <div>
              <h4 className="text-lg font-black text-slate-800 mb-6 relative inline-block">
                লিঙ্কসমূহ
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-slate-600 text-sm font-bold">
                <li><Link href="/" className="hover:text-green-700 transition-all flex items-center gap-2"><span>•</span> হোম পেজ</Link></li>
                <li><Link href="/courses" className="hover:text-green-700 transition-all flex items-center gap-2"><span>•</span> কোর্সসমূহ</Link></li>
                <li><Link href="/notice" className="hover:text-green-700 transition-all flex items-center gap-2"><span>•</span> নোটিশ বোর্ড</Link></li>
              </ul>
            </div>

            {/* ৩. একাডেমিক ব্যাচ */}
            <div>
              <h4 className="text-lg font-black text-slate-800 mb-6 relative inline-block">
                একাডেমিক ব্যাচ
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-slate-600 text-sm font-bold">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> ৬ষ্ঠ - ৮ম শ্রেণি</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> এসএসসি (বিজ্ঞান)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> ইংরেজি স্পেশাল</li>
              </ul>
            </div>

            {/* ৪. সরাসরি যোগাযোগ */}
            <div>
              <h4 className="text-lg font-black text-slate-800 mb-6 relative inline-block">
                ঠিকানা
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <div className="bg-white/60 p-5 rounded-3xl border border-green-200/50 shadow-sm">
                <p className="text-slate-700 text-sm font-black mb-2 leading-tight">মেইন রোড, আপনার এলাকার নাম, ঢাকা।</p>
                <p className="text-green-700 text-xs font-black tracking-wider">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              </div>
            </div>

          </div>

          {/* কপিরাইট সেকশন */}
          <div className="mt-16 pt-8 border-t border-green-200/50 flex flex-col md:justify-between md:flex-row items-center gap-4 text-center">
            <p className="text-slate-500 text-[11px] font-black uppercase tracking-tight">
              © {new Date().getFullYear()} শিক্ষার আলো। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <div className="px-5 py-2 bg-green-600 rounded-full text-[10px] uppercase font-black text-white tracking-[0.2em] shadow-lg shadow-green-200">
              Education For All
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;