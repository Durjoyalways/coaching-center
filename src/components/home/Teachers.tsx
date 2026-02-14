"use client";

import Image from "next/image";
import React, { useState } from "react";

const Teachers: React.FC = () => {
  const allTeachers = [
    { 
      name: "আরিফ হোসেন", 
      qualification: "বিএসসি, বুয়েট (BUET)", 
      specialty: "পদার্থবিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=11", 
      accent: "green", 
      borderColor: "border-green-200", 
      glowColor: "group-hover:border-green-500 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]" 
    },
    { 
      name: "তানজিলা আক্তার", 
      qualification: "এমএসসি, ঢাকা বিশ্ববিদ্যালয়", 
      specialty: "রসায়ন", 
      image: "https://i.pravatar.cc/300?img=26", 
      accent: "yellow", 
      borderColor: "border-yellow-200", 
      glowColor: "group-hover:border-yellow-500 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]" 
    },
    { 
      name: "মেহেদী হাসান", 
      qualification: "এম.এ, ইংরেজি (ঢাবি)", 
      specialty: "ইংরেজি", 
      image: "https://i.pravatar.cc/300?img=12", 
      accent: "green", 
      borderColor: "border-green-200", 
      glowColor: "group-hover:border-green-500 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]" 
    },
    { 
      name: "রাকিবুল ইসলাম", 
      qualification: "বিএসসি, সাস্ট (SUST)", 
      specialty: "উচ্চতর গণিত", 
      image: "https://i.pravatar.cc/300?img=13", 
      accent: "yellow", 
      borderColor: "border-yellow-200", 
      glowColor: "group-hover:border-yellow-500 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]" 
    },
    { 
      name: "ফারজানা হক", 
      qualification: "এমবিবিএস, ডিএমসি", 
      specialty: "জীববিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=47", 
      accent: "green", 
      borderColor: "border-green-200", 
      glowColor: "group-hover:border-green-500 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]" 
    },
    { 
      name: "সায়েম মাহমুদ", 
      qualification: "বিএসসি, কুয়েট (KUET)", 
      specialty: "সাধারণ বিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=15", 
      accent: "yellow", 
      borderColor: "border-yellow-200", 
      glowColor: "group-hover:border-yellow-500 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]" 
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? allTeachers : allTeachers.slice(0, 3);

  return (
    <section className="relative py-12 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] text-5xl lg:text-8xl opacity-10 animate-float">🧪</div>
        <div className="absolute top-[40%] left-[2%] text-6xl lg:text-9xl opacity-10 animate-spin-slow">⚛️</div>
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-6 relative z-10">
        
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 border border-green-100 rounded-full text-green-700 font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em] mb-4 shadow-sm">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             মেন্টর প্যানেল
          </div>
          <h2 className="text-3xl lg:text-6xl font-black text-slate-900 leading-tight">
            আমাদের দক্ষ <span className="text-green-500 underline decoration-green-200 decoration-4 md:decoration-8 underline-offset-8">শিক্ষক</span> মন্ডলী
          </h2>
        </div>

        {/* টিচার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12 mt-20">
          {visibleTeachers.map((teacher, index) => (
            <div key={index} className="relative group">
              
              {/* Card Body with Constant Border and Hover Glow */}
              <div className={`relative bg-white/90 backdrop-blur-md border-2 p-8 pt-28 rounded-[40px] transition-all duration-500 flex flex-col items-center hover:-translate-y-2 ${teacher.borderColor} ${teacher.glowColor}`}>
                
                {/* 🟢 ইমেজ সেকশন */}
                <div className="absolute -top-20 flex justify-center items-center w-40 h-40 lg:w-48 lg:h-48 z-20">
                  <div className={`absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110 shadow-xl ${teacher.accent === 'green' ? 'bg-green-500 shadow-green-200' : 'bg-yellow-500 shadow-yellow-200'}`} />
                  
                  <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-white z-10 shadow-inner">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* টেক্সট কন্টেন্ট */}
                <div className="text-center w-full">
                  <h3 className={`text-2xl lg:text-3xl font-black mb-1 transition-all duration-500 
                    ${teacher.accent === 'green' 
                      ? 'text-slate-800 group-hover:text-green-600 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]' 
                      : 'text-slate-800 group-hover:text-yellow-600 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]'}`}>
                    {teacher.name}
                  </h3>
                  
                  <p className={`font-bold text-[11px] lg:text-sm mb-4 ${teacher.accent === 'green' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {teacher.qualification}
                  </p>
                  
                  <div className={`w-12 h-1.5 mx-auto mb-6 rounded-full transition-all duration-700 group-hover:w-32 ${teacher.accent === 'green' ? 'bg-green-100 group-hover:bg-green-400' : 'bg-yellow-100 group-hover:bg-yellow-400'}`}></div>
                  
                  <div className="inline-block px-6 py-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest group-hover:bg-white transition-colors">
                    বিশেষজ্ঞ: <span className="text-slate-800">{teacher.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🟢 আপডেট করা বাটন: Green Color with Glow */}
        <div className="text-center mt-24">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 bg-green-500 text-white px-10 py-4 lg:px-12 lg:py-5 rounded-full font-black text-base lg:text-lg shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-all duration-300 active:scale-95 overflow-hidden"
          >
            {/* Hover Shine Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            <span className="relative z-10">
                {showAll ? "কম দেখুন" : `সকল শিক্ষক দেখুন`}
            </span>
            <svg className={`relative z-10 h-5 w-5 lg:h-6 lg:w-6 text-white transition-transform duration-500 ${showAll ? "rotate-180" : "group-hover:translate-y-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Teachers;