"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Teachers: React.FC = () => {
  const allTeachers = [
    { 
      name: "আরিফ হোসেন", 
      qualification: "বিএসসি, বুয়েট (BUET)", 
      specialty: "পদার্থবিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=11", 
      accent: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/20"
    },
    { 
      name: "তানজিলা আক্তার", 
      qualification: "এমএসসি, ঢাকা বিশ্ববিদ্যালয়", 
      specialty: "রসায়ন", 
      image: "https://i.pravatar.cc/300?img=26", 
      accent: "blue",
      gradient: "from-blue-500 to-indigo-600",
      glow: "shadow-blue-500/20"
    },
    { 
      name: "মেহেদী হাসান", 
      qualification: "এম.এ, ইংরেজি (ঢাবি)", 
      specialty: "ইংরেজি", 
      image: "https://i.pravatar.cc/300?img=12", 
      accent: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/20"
    },
    { 
      name: "রাকিবুল ইসলাম", 
      qualification: "বিএসসি, সাস্ট (SUST)", 
      specialty: "উচ্চতর গণিত", 
      image: "https://i.pravatar.cc/300?img=13", 
      accent: "amber",
      gradient: "from-amber-500 to-orange-600",
      glow: "shadow-amber-500/20"
    },
    { 
      name: "ফারজানা হক", 
      qualification: "এমবিবিএস, ডিএমসি", 
      specialty: "জীববিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=47", 
      accent: "emerald",
      gradient: "from-emerald-500 to-teal-600",
      glow: "shadow-emerald-500/20"
    },
    { 
      name: "সায়েম মাহমুদ", 
      qualification: "বিএসসি, কুয়েট (KUET)", 
      specialty: "সাধারণ বিজ্ঞান", 
      image: "https://i.pravatar.cc/300?img=15", 
      accent: "amber",
      gradient: "from-amber-500 to-orange-600",
      glow: "shadow-amber-500/20"
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? allTeachers : allTeachers.slice(0, 3);

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a192f] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] right-[10%] text-7xl lg:text-9xl animate-spin-slow opacity-10">⚛️</div>
        <div className="absolute bottom-[10%] left-[5%] text-6xl lg:text-8xl animate-float opacity-10">🧪</div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* হেডার সেকশন */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
             মেন্টর প্যানেল
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            আমাদের দক্ষ <br /> 
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic">শিক্ষক</span> মন্ডলী
          </h2>
        </motion.div>

        {/* টিচার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-8 lg:gap-x-12">
          <AnimatePresence mode="popLayout">
            {visibleTeachers.map((teacher, index) => (
              <motion.div 
                key={teacher.name} 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* কার্ড বডি (Glassmorphism) */}
                <div className={`relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 pt-24 rounded-[45px] transition-all duration-500 flex flex-col items-center group-hover:bg-white/[0.07] group-hover:border-white/20 shadow-2xl ${teacher.glow}`}>
                  
                  {/* 🟢 ইমেজ সেকশন - প্রিমিয়াম ডিজাইন */}
                  <div className="absolute -top-20 flex justify-center items-center w-44 h-44 lg:w-48 lg:h-48 z-20">
                    <div className={`absolute inset-0 rounded-[40px] rotate-6 group-hover:rotate-12 transition-all duration-500 bg-gradient-to-br ${teacher.gradient} opacity-20 blur-xl`} />
                    <div className={`absolute inset-0 rounded-[40px] -rotate-6 group-hover:rotate-0 transition-all duration-500 border-2 border-white/10 group-hover:border-emerald-500/50 bg-white/5 backdrop-blur-lg`} />
                    
                    <div className="relative w-[85%] h-[85%] rounded-[30px] overflow-hidden border-2 border-white/20 z-10 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={teacher.image}
                        alt={teacher.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* টেক্সট কন্টেন্ট */}
                  <div className="text-center w-full relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                      {teacher.name}
                    </h3>
                    
                    <p className="font-bold text-xs lg:text-sm text-slate-400 mb-6 uppercase tracking-widest">
                      {teacher.qualification}
                    </p>
                    
                    {/* এনিমেটেড সেপারেটর */}
                    <div className="flex justify-center mb-6">
                        <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${teacher.gradient} group-hover:w-32 transition-all duration-500 shadow-lg`} />
                    </div>
                    
                    {/* বিশেষজ্ঞ ব্যাজ */}
                    <div className="inline-flex items-center px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-white/10 transition-colors">
                      বিশেষজ্ঞ: <span className="ml-2 text-white">{teacher.specialty}</span>
                    </div>
                  </div>

                  {/* কার্ড শাইন ইফেক্ট */}
                  <div className="absolute inset-0 rounded-[45px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 🟢 আপডেট করা প্রিমিয়াম বাটন */}
        <motion.div 
          layout
          className="text-center mt-32"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group relative inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-emerald-500/50 px-12 py-5 rounded-2xl font-black text-white text-lg transition-all duration-300 active:scale-95 overflow-hidden shadow-2xl shadow-black/40"
          >
            {/* বাটন হোভার ব্যাকগ্রাউন্ড */}
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
            
            <span className="relative z-10 flex items-center gap-3">
                {showAll ? "কম দেখুন" : "সকল শিক্ষক দেখুন"}
                <svg className={`h-6 w-6 transition-transform duration-500 ${showAll ? "rotate-180" : "group-hover:translate-y-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </span>
          </button>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
      `}</style>
    </section>
  );
};

export default Teachers;