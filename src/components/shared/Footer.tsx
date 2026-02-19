"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a192f] pt-12 pb-8 overflow-hidden border-t border-white/5">
      
      {/* 🌌 Background Decoration */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20">
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* মেইন কম্প্যাক্ট কার্ড */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[35px] lg:rounded-[50px] p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* ১. ব্র্যান্ডিং সেকশন */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg transform -rotate-3 transition-transform">
                  শ
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
                  শিক্ষার <span className="text-emerald-400">আলো</span>
                </h3>
              </div>
              <p className="text-slate-400 text-sm font-medium text-center lg:text-left max-w-[280px]">
                সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি। আমরা আপনার স্বপ্ন পূরণে অঙ্গীকারবদ্ধ।
              </p>
            </div>

            {/* ২. সোশ্যাল লিঙ্কস (সেন্টার) */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">আমাদের সাথে যুক্ত হন</p>
              <div className="flex gap-4">
                {['FB', 'YT', 'IN'].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-xl"
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* ৩. কন্টাক্ট ইনফো (ডান পাশ) */}
            <div className="flex flex-col items-center lg:items-end space-y-2">
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em]">হেল্পলাইন</p>
              <a 
                href="tel:+8801700000000" 
                className="text-xl lg:text-2xl font-black text-white hover:text-emerald-400 transition-colors"
              >
                +৮৮০ ১৭১২-৩৪৫৬৭৮
              </a>
              <p className="text-slate-500 text-xs font-bold tracking-tight">মেইন রোড, ঢাকা, বাংলাদেশ।</p>
            </div>

          </div>

          {/* নিচের সরু অংশ (Copyright & Scroll Top) */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] text-center">
              © {currentYear} শিক্ষার আলো — All Rights Reserved
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-emerald-400 font-black text-[10px] uppercase tracking-[0.2em]"
            >
              Back to top 
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-xl group-hover:-translate-y-1 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* নিচের ছোট ক্রেডিট ট্যাগ */}
        <div className="mt-6 text-center">
           <span className="text-slate-600 text-[9px] font-bold uppercase tracking-widest opacity-50">
             Crafted with ❤️ by Gemini
           </span>
        </div>
      </div>
    </footer> // <--- এই ট্যাগটি আগে ভুল ছিল, এখন ঠিক করা হয়েছে
  );
};

export default Footer;