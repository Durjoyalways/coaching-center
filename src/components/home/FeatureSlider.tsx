"use client";

import React from "react";
import { motion } from "framer-motion";

const FeatureSlider: React.FC = () => {
  const items = [
    { name: "গণিত", icon: "📐", color: "from-emerald-500 to-teal-600" },
    { name: "পদার্থবিজ্ঞান", icon: "⚛️", color: "from-blue-500 to-indigo-600" },
    { name: "রসায়ন", icon: "🧪", color: "from-amber-400 to-orange-600" },
    { name: "ইংরেজি স্পোকেন", icon: "🗣️", color: "from-rose-500 to-pink-600" },
    { name: "জীববিজ্ঞান", icon: "🧬", color: "from-green-400 to-emerald-600" },
    { name: "উচ্চতর গণিত", icon: "📊", color: "from-violet-500 to-purple-600" },
    { name: "মডেল টেস্ট", icon: "📝", color: "from-cyan-400 to-blue-600" },
    { name: "প্রশ্ন সলভ", icon: "🔍", color: "from-yellow-400 to-orange-500" },
    { name: "সেরা শিক্ষক", icon: "👨‍🏫", color: "from-emerald-400 to-teal-500" },
  ];

  return (
    <div className="relative py-14 lg:py-24 bg-[#0a192f] overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-[10px] lg:text-xs">
                আমাদের বিশেষত্ব ও সেবাসমূহ
              </h3>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            সবকিছু <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">এক জায়গায়</span>
          </h2>
        </motion.div>
      </div>

      {/* স্লাইডার কন্টেইনার */}
      <motion.div 
        className="relative flex items-center"
      >
        {/* প্রফেশনাল ফেড ইফেক্ট */}
        <div className="absolute left-0 w-24 md:w-80 h-full bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 w-24 md:w-80 h-full bg-gradient-to-l from-[#0a192f] via-[#0a192f]/80 to-transparent z-20 pointer-events-none" />

        {/* এনিমেটেড স্লাইডার */}
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] py-10 z-10">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="mx-4 lg:mx-6 group cursor-pointer"
            >
              {/* মডার্ন নিওন কার্ড ডিজাইন */}
              <div className="relative p-[1.5px] rounded-2xl lg:rounded-3xl bg-white/10 group-hover:bg-gradient-to-br transition-all duration-500 overflow-hidden shadow-xl shadow-black/20 group-hover:shadow-emerald-500/20">
                
                {/* কার্ড কন্টেন্ট */}
                <div className="relative bg-[#0d1e36] px-6 lg:px-10 py-5 lg:py-7 rounded-2xl lg:rounded-3xl flex items-center gap-4 lg:gap-6 z-10 border border-white/5 group-hover:border-white/10 transition-all">
                  
                  {/* আইকন হোল্ডার */}
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl lg:rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-black/40 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-2xl lg:text-3xl filter drop-shadow-md">
                      {item.icon}
                    </span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="font-bold text-lg lg:text-2xl text-slate-100 tracking-tight group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] lg:text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      Premium Class
                    </span>
                  </div>
                </div>

                {/* হোভার করলে নিচে একটি গ্লোয়িং লাইন আসবে */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ডেকোরেটিভ ডিভাইডার */}
      <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mt-12 opacity-50"></div>
    </div>
  );
};

export default FeatureSlider;