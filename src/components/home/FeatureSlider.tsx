"use client";

import React from "react";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে

const FeatureSlider: React.FC = () => {
  const items = [
    { name: "গণিত", icon: "📐", border: "border-green-500" },
    { name: "পদার্থবিজ্ঞান", icon: "⚛️", border: "border-yellow-500" },
    { name: "রসায়ন", icon: "🧪", border: "border-green-500" },
    { name: "ইংরেজি স্পোকেন", icon: "🗣️", border: "border-yellow-500" },
    { name: "জীববিজ্ঞান", icon: "🧬", border: "border-green-500" },
    { name: "উচ্চতর গণিত", icon: "📊", border: "border-yellow-500" },
    { name: "মডেল টেস্ট", icon: "📝", border: "border-green-500" },
    { name: "প্রশ্ন সলভ", icon: "🔍", border: "border-yellow-500" },
    { name: "সেরা শিক্ষক", icon: "👨‍🏫", border: "border-green-500" },
  ];

  return (
    <div className="relative py-10 lg:py-20 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Glowing Decorations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-0 left-10 text-4xl lg:text-6xl opacity-10 animate-float"
             style={{ filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.4))' }}>🧪</div>
        <div className="absolute bottom-0 right-10 text-4xl lg:text-6xl opacity-10 animate-spin-slow"
             style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.4))' }}>⚛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-8 lg:mb-14 text-center relative z-10">
        
        {/* হেডার এনিমেশন - প্রতিবার স্ক্রল করলে আসবে */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          {/* মডার্ন পালসিং ব্যাজ */}
          <div className="inline-flex items-center gap-2.5 px-4 lg:px-5 py-1.5 lg:py-2 rounded-full bg-white border border-slate-100 mb-4 lg:mb-6 shadow-sm">
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <h3 className="text-slate-500 font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-[9px] lg:text-xs">
                আমাদের বিশেষত্ব ও সেবাসমূহ
              </h3>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight">
            সবকিছু <span className="text-green-500">এক জায়গায়</span>
          </h2>
        </motion.div>
      </div>

      {/* স্লাইডার কন্টেইনার এনিমেশন */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex items-center group"
      >
        
        {/* দুই পাশে প্রফেশনাল ফেড ইফেক্ট (Glass Mask) */}
        <div className="absolute left-0 w-16 md:w-64 h-full bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 w-16 md:w-64 h-full bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-20 pointer-events-none" />

        {/* এনিমেটেড স্লাইডার (Marquee) */}
        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] py-4 lg:py-8 z-10">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className={`mx-3 lg:mx-6 px-5 lg:px-8 py-3 lg:py-5 rounded-[20px] lg:rounded-[28px] flex items-center gap-3 lg:gap-4 border-[3px] ${item.border} bg-white/80 backdrop-blur-md shadow-[0_5px_15px_rgba(0,0,0,0.03)] transition-all duration-500 hover:scale-105 lg:hover:scale-110 hover:-translate-y-1 lg:hover:-translate-y-2 cursor-pointer group/item hover:bg-white hover:shadow-2xl`}
            >
              {/* Icon Holder with drop shadow */}
              <div className="text-xl lg:text-3xl transform group-hover/item:rotate-12 transition-transform duration-500 drop-shadow-sm">
                {item.icon}
              </div>
              
              <span className="font-black text-base lg:text-2xl text-slate-700 tracking-tight group-hover/item:text-green-600 transition-colors">
                {item.name}
              </span>
              
              {/* Inner Accent Dot matching the border */}
              <div className={`w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full ${item.border === 'border-green-500' ? 'bg-green-500' : 'bg-yellow-500'} transition-all`}></div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* স্লাইডারটির নিচে একটি হালকা শেড */}
      <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent mt-8 lg:mt-12 opacity-50"></div>
    </div>
  );
};

export default FeatureSlider;