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
    <section className="relative py-10 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] text-4xl lg:text-8xl opacity-10 lg:opacity-30 animate-float">🧪</div>
        <div className="absolute top-[10%] right-[5%] text-5xl lg:text-9xl opacity-10 lg:opacity-30 animate-spin-slow">⚛️</div>
      </div>

      {/* কন্টেইনারে px-10 যোগ করা হয়েছে যাতে মোবাইলে দুই পাশে গ্যাপ থাকে */}
      <div className="max-w-7xl mx-auto px-10 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 rounded-[30px]`} />

              <div className="relative bg-white/70 backdrop-blur-md border border-white p-6 lg:p-10 rounded-[30px] lg:rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col items-center hover:-translate-y-2">
                
                {/* আইকন হোল্ডার */}
                <div className={`w-14 h-14 lg:w-20 lg:h-20 ${stat.bgLight} ${stat.glow} rounded-2xl lg:rounded-3xl flex items-center justify-center text-2xl lg:text-4xl mb-4 lg:mb-6`}>
                  {stat.icon}
                </div>

                {/* মেইন সংখ্যা */}
                <div className="flex items-baseline gap-1">
                  <h2 className={`text-4xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tracking-tighter`}>
                    {stat.value}
                  </h2>
                  <span className="text-xl lg:text-2xl font-black text-slate-300">{stat.suffix}</span>
                </div>

                <div className="mt-2 lg:mt-4 flex flex-col items-center">
                    <p className="text-slate-500 font-bold text-[10px] lg:text-sm uppercase tracking-[0.2em]">
                      {stat.label}
                    </p>
                    <div className="w-6 lg:w-8 h-1 lg:h-1.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent mt-2 group-hover:w-16 transition-all duration-500 rounded-full" />
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