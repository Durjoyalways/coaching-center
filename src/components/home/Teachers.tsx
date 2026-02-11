"use client";

import Image from "next/image";
import React, { useState } from "react";

const Teachers: React.FC = () => {
  const allTeachers = [
    { name: "আরিফ হোসেন", qualification: "বিএসসি, বুয়েট (BUET)", specialty: "পদার্থবিজ্ঞান", image: "https://i.pravatar.cc/300?img=11", accent: "green" },
    { name: "তানজিলা আক্তার", qualification: "এমএসসি, ঢাকা বিশ্ববিদ্যালয়", specialty: "রসায়ন", image: "https://i.pravatar.cc/300?img=26", accent: "yellow" },
    { name: "মেহেদী হাসান", qualification: "এম.এ, ইংরেজি (ঢাবি)", specialty: "ইংরেজি", image: "https://i.pravatar.cc/300?img=12", accent: "green" },
    { name: "রাকিবুল ইসলাম", qualification: "বিএসসি, সাস্ট (SUST)", specialty: "উচ্চতর গণিত", image: "https://i.pravatar.cc/300?img=13", accent: "yellow" },
    { name: "ফারজানা হক", qualification: "এমবিবিএস, ডিএমসি", specialty: "জীববিজ্ঞান", image: "https://i.pravatar.cc/300?img=47", accent: "green" },
    { name: "সায়েম মাহমুদ", qualification: "বিএসসি, কুয়েট (KUET)", specialty: "সাধারণ বিজ্ঞান", image: "https://i.pravatar.cc/300?img=15", accent: "yellow" },
    { name: "জুবায়ের আহমেদ", qualification: "বিএসসি, রুয়েট (RUET)", specialty: "আইসিটি", image: "https://i.pravatar.cc/300?img=18", accent: "green" },
    { name: "নাসরিন সুলতানা", qualification: "এম.এ, বাংলা (ঢাবি)", specialty: "বাংলা ও সাহিত্য", image: "https://i.pravatar.cc/300?img=32", accent: "yellow" },
    { name: "ইমতিয়াজ হক", qualification: "বিএসসি, চুয়েট (CUET)", specialty: "গণিত", image: "https://i.pravatar.cc/300?img=33", accent: "green" },
    { name: "কামরুল হাসান", qualification: "এমএসসি, জাবি (JU)", specialty: "পরিসংখ্যান", image: "https://i.pravatar.cc/300?img=53", accent: "yellow" },
    { name: "শায়লা শারমিন", qualification: "এমএসসি, রাবি (RU)", specialty: "ভূগোল ও পরিবেশ", image: "https://i.pravatar.cc/300?img=48", accent: "green" },
    { name: "ফয়সাল মাহমুদ", qualification: "বিবিএ, আইবিএ (ঢাবি)", specialty: "হিসাববিজ্ঞান", image: "https://i.pravatar.cc/300?img=59", accent: "yellow" },
    { name: "আদনান সামি", qualification: "বিএসসি, নর্থ সাউথ", specialty: "সাধারণ গণিত", image: "https://i.pravatar.cc/300?img=60", accent: "green" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? allTeachers : allTeachers.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Glowing Background Icons (Consistent with other sections) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] text-8xl opacity-30 animate-float" 
             style={{ filter: 'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))' }}>🧪</div>
        
        <div className="absolute top-[40%] left-[2%] text-9xl opacity-30 animate-spin-slow"
             style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' }}>⚛️</div>
        
        <div className="absolute bottom-[10%] right-[8%] text-8xl opacity-25 animate-bounce-slow"
             style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' }}>🔬</div>

        <div className="absolute top-[20%] left-[10%] text-7xl font-serif text-yellow-500/10 rotate-12"
             style={{ filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.4))' }}>∑</div>

        {/* Soft Background Blobs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-green-100/40 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* হেডার */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full text-green-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 shadow-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             মেন্টর প্যানেল
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
            আমাদের দক্ষ <span className="text-green-500 underline decoration-green-200 decoration-8 underline-offset-8">শিক্ষক</span> মন্ডলী
          </h2>
        </div>

        {/* টিচার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleTeachers.map((teacher, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${teacher.accent === 'green' ? 'from-green-400' : 'from-yellow-400'} to-transparent opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-[50px]`} />

              <div className="relative bg-white/70 backdrop-blur-md border border-white p-8 rounded-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center hover:-translate-y-4">
                
                {/* ইমেজ কন্টেইনার */}
                <div className={`relative w-full h-80 mb-8 overflow-hidden rounded-[40px] border-4 border-white shadow-xl transform transition-transform duration-700 group-hover:scale-[1.02]`}>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* গ্রেডিয়েন্ট ওভারলে */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-green-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className={`font-bold text-sm mb-4 ${teacher.accent === 'green' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {teacher.qualification}
                  </p>
                  
                  {/* ডাইনামিক আন্ডারলাইন */}
                  <div className={`w-12 h-1.5 mx-auto mb-6 rounded-full transition-all duration-500 group-hover:w-32 ${teacher.accent === 'green' ? 'bg-green-100' : 'bg-yellow-100'}`}></div>
                  
                  <div className={`inline-block px-6 py-2 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest`}>
                    বিশেষজ্ঞ: <span className="text-slate-800">{teacher.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ডাইনামিক বাটন */}
        <div className="text-center mt-20">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 bg-white text-slate-800 px-12 py-5 rounded-full font-black text-lg shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 active:scale-95 border border-slate-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">
                {showAll ? "কম দেখুন" : `সকল ${allTeachers.length} জন শিক্ষক দেখুন`}
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 relative z-10 text-green-600 transition-transform duration-500 ${showAll ? "rotate-180" : "group-hover:translate-y-1"}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Teachers;