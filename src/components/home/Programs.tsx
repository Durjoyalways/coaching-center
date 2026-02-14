"use client";

import React from "react";

const Programs: React.FC = () => {
  const whatsappNumber = "8801700000000"; // আপনার নম্বরটি এখানে দিন

  const academicPrograms = [
    {
      title: "জুনিয়র ব্যাচ",
      classes: "৬ষ্ঠ - ৮ম শ্রেণি",
      description: "বেসিক ফাউন্ডেশন তৈরি এবং স্কুলের সম্পূর্ণ সিলেবাস কভার করার নিশ্চয়তা।",
      features: ["স্কুল সিলেবাস ভিত্তিক ক্লাস", "প্রতি সপ্তাহে বিশেষ কুইজ", "বোর্ড পরীক্ষার প্রস্তুতি"],
      bg: "bg-green-50/50",
      accent: "bg-green-500",
      borderColor: "border-green-200",
      hoverBorder: "group-hover:border-green-500",
      glowColor: "rgba(34, 197, 94, 0.4)",
      icon: "📚",
      whatsappMsg: "আসসালামু আলাইকুম, আমি জুনিয়র ব্যাচ সম্পর্কে জানতে চাই।"
    },
    {
      title: "এসএসসি প্রস্তুতি",
      classes: "৯ম - ১০ম শ্রেণি",
      description: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার শিক্ষার্থীদের জন্য পূর্ণাঙ্গ কোর্স প্ল্যান।",
      features: ["শাখা ভিত্তিক আলাদা ব্যাচ", "অধ্যায় ভিত্তিক লেকচার শিট", "বিগত বছরের প্রশ্ন সলভ"],
      bg: "bg-yellow-50/50",
      accent: "bg-yellow-500",
      borderColor: "border-yellow-200",
      hoverBorder: "group-hover:border-yellow-500",
      glowColor: "rgba(234, 179, 8, 0.4)",
      icon: "🎓",
      whatsappMsg: "আসসালামু আলাইকুম, আমি এসএসসি প্রস্তুতি সম্পর্কে জানতে চাই।"
    },
    {
      title: "স্পেশাল প্রোগ্রাম",
      classes: "মডেল টেস্ট ও ইংরেজি",
      description: "পরীক্ষার্থী এবং ইংরেজি গ্রামার ও স্পোকেন-এ দূর্বলদের জন্য বিশেষ আয়োজন।",
      features: ["মডেল টেস্ট সিরিজ", "ইংরেজি গ্রামার স্পেশাল কেয়ার", "সৃজনশীল লিখন কৌশল"],
      bg: "bg-emerald-50/50",
      accent: "bg-emerald-500",
      borderColor: "border-emerald-200",
      hoverBorder: "group-hover:border-emerald-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      icon: "✨",
      whatsappMsg: "আসসালামু আলাইকুম, আমি স্পেশাল প্রোগ্রাম সম্পর্কে জানতে চাই।"
    }
  ];

  return (
    <section id="programs" className="relative py-10 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Glowing Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[5%] left-[5%] text-5xl lg:text-8xl opacity-10 lg:opacity-30 animate-float">🧪</div>
        <div className="absolute top-[10%] right-[5%] text-6xl lg:text-9xl opacity-10 lg:opacity-30 animate-spin-slow">⚛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-10 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full text-green-700 font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em] mb-4 shadow-sm">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             একাডেমিক প্রোগ্রামসমূহ
          </div>
          <h2 className="text-3xl lg:text-6xl font-black text-slate-900 leading-tight">
            সেরা প্রস্তুতির জন্য <br /> <span className="text-green-500">সঠিক কোর্স</span> বেছে নিন
          </h2>
        </div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {academicPrograms.map((program, index) => (
            <div key={index} className="relative group">
              
              {/* Outer Glow Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.accent} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-700 rounded-[35px] lg:rounded-[50px]`} />

              {/* Main Card with Permanent Border and Hover Glow */}
              <div className={`relative h-full bg-white/80 backdrop-blur-md border-2 ${program.borderColor} ${program.hoverBorder} p-8 lg:p-10 rounded-[35px] lg:rounded-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] flex flex-col items-center text-center lg:items-start lg:text-left hover:-translate-y-2 group-hover:shadow-[0_20px_50px_${program.glowColor}] transition-all duration-500`}>
                
                {/* আইকন হোল্ডার */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl ${program.bg} flex items-center justify-center text-2xl lg:text-3xl mb-6 shadow-inner transform group-hover:rotate-6 transition-all duration-500`}
                     style={{ filter: `drop-shadow(0 0 10px ${program.glowColor})` }}>
                  {program.icon}
                </div>

                <div className="flex-grow w-full">
                  <span className={`inline-block px-4 py-1 rounded-full text-white text-[9px] lg:text-[10px] font-black mb-3 ${program.accent}`}>
                    {program.classes}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-black text-slate-800 mb-4 tracking-tight">{program.title}</h3>
                  <p className="text-slate-500 font-medium mb-6 lg:mb-8 text-sm lg:text-base leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-8 flex flex-col items-center lg:items-start">
                    {program.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-white text-[9px] ${program.accent}`}>
                          ✓
                        </div>
                        <span className="text-slate-700 font-bold text-xs lg:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(program.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black transition-all duration-300 ${program.accent} text-white hover:brightness-110 active:scale-95 flex items-center justify-center gap-2 text-sm lg:text-base`}
                  style={{ boxShadow: `0 10px 20px -5px ${program.glowColor}` }}
                >
                  <span>বিস্তারিত জানুন</span>
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.987-.51-5.742-1.47l-6.334 1.689zm6.086-5.309l.345.204c1.447.86 3.123 1.314 4.858 1.314 4.817 0 8.735-3.918 8.735-8.735 0-2.333-.909-4.524-2.56-6.175-1.651-1.652-3.846-2.561-6.175-2.561-4.817 0-8.735 3.918-8.735 8.735 0 1.68.47 3.32 1.358 4.767l.223.364-.951 3.475 3.562-.951z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;