"use client";

import React from "react";

const Statistics: React.FC = () => {
  const stats = [
    { 
        label: "সফল শিক্ষার্থী", 
        value: "৫০০", 
        suffix: "+",
        color: "from-green-400 to-emerald-600",
        icon: "🎓",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]",
        bgLight: "bg-green-50"
    },
    { 
        label: "অভিজ্ঞ মেন্টর", 
        value: "১০", 
        suffix: "+",
        color: "from-yellow-400 to-orange-500",
        icon: "👨‍🏫",
        glow: "shadow-[0_0_30px_rgba(234,179,8,0.4)]",
        bgLight: "bg-yellow-50"
    },
    { 
        label: "সাফল্যের হার", 
        value: "৯৮", 
        suffix: "%",
        color: "from-emerald-400 to-teal-600",
        icon: "📈",
        glow: "shadow-[0_0_30px_rgba(20,184,166,0.4)]",
        bgLight: "bg-emerald-50"
    },
    { 
        label: "বছরের অভিজ্ঞতা", 
        value: "১৫", 
        suffix: "+",
        color: "from-orange-400 to-red-500",
        icon: "🏆",
        glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]",
        bgLight: "bg-orange-50"
    },
  ];

  return (
    <section className="relative py-24 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 হিরো সেকশনের মতো ব্যাকগ্রাউন্ড আইকনস (Colorful & Glowing) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* ল্যাব টেস্ট টিউব - উজ্জ্বল সবুজ গ্লো */}
        <div className="absolute top-[10%] left-[5%] text-8xl opacity-30 animate-float" 
             style={{ filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))' }}>🧪</div>
        
        {/* অ্যাটম - নীল গ্লো */}
        <div className="absolute top-[15%] right-[5%] text-9xl opacity-30 animate-spin-slow"
             style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}>⚛️</div>
        
        {/* মাইক্রোস্কোপ - পার্পল গ্লো */}
        <div className="absolute bottom-[10%] left-[8%] text-8xl opacity-25 animate-bounce-slow"
             style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' }}>🔬</div>

        {/* ম্যাথ পাই (Pi) - হলুদ গ্লো */}
        <div className="absolute top-[50%] right-[2%] text-7xl font-serif text-yellow-500/10 rotate-45"
             style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.4))' }}>π</div>

        {/* ব্যাকগ্রাউন্ড গ্লো স্পট (Soft Blobs) */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-100/40 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              
              {/* কার্ড হোভার গ্লো */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-[40px]`} />

              <div className="relative bg-white/70 backdrop-blur-md border border-white p-8 lg:p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-center hover:-translate-y-4">
                
                {/* আইকন হোল্ডার - উইথ গ্লো */}
                <div className={`w-20 h-20 ${stat.bgLight} ${stat.glow} rounded-3xl flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {stat.icon}
                </div>

                {/* মেইন সংখ্যা */}
                <div className="flex items-baseline gap-1">
                  <h2 className={`text-5xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tracking-tighter`}>
                    {stat.value}
                  </h2>
                  <span className="text-2xl font-black text-slate-300">{stat.suffix}</span>
                </div>

                <div className="mt-4 flex flex-col items-center">
                    <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-[0.2em]">
                      {stat.label}
                    </p>
                    {/* আন্ডারলাইন গ্রাডিয়েন্ট */}
                    <div className="w-8 h-1.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent mt-3 group-hover:w-20 transition-all duration-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;