"use client";

import React from "react";
import { motion } from "framer-motion";

interface Achiever {
  id: number;
  name: string;
  className: string;
  result: string;
  image: string;
  badge: string;
  glow: string;
  borderColor: string;
  bgColor: string; // নতুন বিজি কালার
  badgeBg: string;
}

const SuccessPage: React.FC = () => {
  const achievers: Achiever[] = [
    { 
      id: 1, 
      name: "আরিফ রহমান", 
      className: "১০ম শ্রেণি", 
      result: "GPA 5.00 (Golden)", 
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      badge: "সেরা মেধাবী",
      glow: "rgba(34, 197, 94, 0.4)",
      borderColor: "border-green-100",
      bgColor: "bg-green-50/50", // হালকা সবুজ ব্যাকগ্রাউন্ড
      badgeBg: "bg-green-600"
    },
    { 
      id: 2, 
      name: "সাদিয়া ইসলাম", 
      className: "৮ম শ্রেণি", 
      result: "ট্যালেন্টপুল বৃত্তি", 
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      badge: "সেরা ছাত্রী",
      glow: "rgba(59, 130, 246, 0.4)",
      borderColor: "border-blue-100",
      bgColor: "bg-blue-50/50", // হালকা নীল ব্যাকগ্রাউন্ড
      badgeBg: "bg-blue-600"
    },
    { 
      id: 3, 
      name: "রাহুল আহমেদ", 
      className: "৯ম শ্রেণি", 
      result: "গণিত অলিম্পিয়াড", 
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      badge: "সেরা অলরাউন্ডার",
      glow: "rgba(245, 158, 11, 0.4)",
      borderColor: "border-amber-100",
      bgColor: "bg-amber-50/50", // হালকা হলুদ ব্যাকগ্রাউন্ড
      badgeBg: "bg-amber-600"
    },
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg",
    "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
    "https://images.pexels.com/photos/159844/science-lab-glass-test-tube-159844.jpeg",
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 md:pt-32 pb-20 font-sans relative overflow-hidden text-center">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20 -z-10">
        <div className="absolute top-[10%] left-[5%] text-6xl animate-bounce">🧪</div>
        <div className="absolute top-[40%] right-[5%] text-5xl animate-spin-slow">⚛️</div>
        <div className="absolute bottom-[20%] left-[8%] text-8xl animate-pulse">🏆</div>
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-green-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        
        {/* --- হিরো সেকশন --- */}
        <div className="mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-100 rounded-full text-green-700 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
             আমাদের গর্ব ও অর্জন
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
            সাফল্যের <span className="text-green-500 underline decoration-green-100 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">স্মারক</span>
          </h1>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            মেধাবী শিক্ষার্থীদের কঠোর পরিশ্রম এবং সঠিক দিকনির্দেশনায় অর্জিত কিছু অসামান্য মাইলফলক।
          </p>
        </div>

        {/* --- ১. টপ অ্যাচিভার্স সেকশন (Colored Background Cards) --- */}
        <div className="mb-32 md:mb-40">
          <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-r from-transparent to-green-300"></div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">সেরা ফলাফলসমূহ</h2>
            <div className="h-[2px] w-12 md:w-24 bg-gradient-to-l from-transparent to-green-300"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {achievers.map((student) => (
              <motion.div 
                key={student.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* কার্ডের পেছনের নিয়ন গ্লো */}
                <div 
                  className="absolute inset-0 rounded-[40px] md:rounded-[60px] blur-3xl opacity-10 group-hover:opacity-40 transition-all duration-700"
                  style={{ backgroundColor: student.glow }}
                ></div>
                
                <div className={`relative ${student.bgColor} backdrop-blur-sm p-8 md:p-10 rounded-[40px] md:rounded-[60px] border-2 ${student.borderColor} shadow-sm group-hover:shadow-xl group-hover:-translate-y-3 transition-all duration-500`}>
                  
                  {/* Image Container */}
                  <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 md:mb-8">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover rounded-[35px] md:rounded-[45px] border-4 border-white shadow-xl" 
                    />
                    <div className={`absolute -bottom-2 -right-2 ${student.badgeBg} text-white text-[8px] md:text-[10px] font-black px-4 py-2 rounded-xl shadow-lg tracking-widest`}>
                      {student.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">{student.name}</h3>
                  <p className="text-green-600 font-black text-[10px] md:text-xs uppercase tracking-widest mb-6">{student.className}</p>
                  
                  <div className="bg-white/80 border border-white shadow-inner rounded-2xl md:rounded-3xl py-3 px-6 inline-block">
                    <p className="text-slate-800 font-black text-base md:text-xl italic tracking-tight">{student.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ২. স্মরণীয় মুহূর্ত (Gallery) --- */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tight">স্মরণীয় মুহূর্ত</h2>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[30px] md:rounded-[50px] group border-4 border-white bg-white shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 md:p-10">
                  <div className="text-left">
                    <p className="text-white font-black text-lg md:text-2xl">অ্যাকাডেমিক ইভেন্ট</p>
                    <p className="text-green-400 text-[10px] font-black uppercase tracking-widest">Moment of Joy</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- কন্টাক্ট সেকশন (CTA) --- */}
        <div className="max-w-4xl mx-auto px-2 mt-28 md:mt-40">
          <div className="relative bg-slate-900 rounded-[40px] md:rounded-[60px] p-10 md:p-20 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight relative z-10">
                তুমিও হতে পারো আমাদের <br /> <span className="text-green-400">পরবর্তী সফল</span> শিক্ষার্থী!
              </h3>
              <p className="text-slate-400 font-bold mb-10 text-base md:text-lg relative z-10">আজই আমাদের নতুন ব্যাচে ভর্তি হয়ে তোমার স্বপ্নের যাত্রা শুরু করো।</p>
              <button className="relative z-10 bg-white text-slate-900 px-10 md:px-14 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-green-500 hover:text-white transition-all shadow-xl active:scale-95">
                ভর্তি ফরম পূরণ করো
              </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;