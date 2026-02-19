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
      glow: "rgba(52, 211, 153, 0.5)",
      borderColor: "border-emerald-500/20",
      badgeBg: "bg-emerald-500"
    },
    { 
      id: 2, 
      name: "সাদিয়া ইসলাম", 
      className: "৮ম শ্রেণি", 
      result: "ট্যালেন্টপুল বৃত্তি", 
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      badge: "সেরা ছাত্রী",
      glow: "rgba(56, 189, 248, 0.5)",
      borderColor: "border-blue-500/20",
      badgeBg: "bg-blue-500"
    },
    { 
      id: 3, 
      name: "রাহুল আহমেদ", 
      className: "৯ম শ্রেণি", 
      result: "গণিত অলিম্পিয়াড", 
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      badge: "সেরা অলরাউন্ডার",
      glow: "rgba(251, 191, 36, 0.5)",
      borderColor: "border-amber-500/20",
      badgeBg: "bg-amber-500"
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
    <div className="bg-[#0a192f] min-h-screen pt-32 pb-20 font-sans relative overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 -z-10">
        <div className="absolute top-[10%] left-[5%] text-6xl opacity-20 blur-sm">🧪</div>
        <div className="absolute top-[40%] right-[5%] text-5xl opacity-20 blur-sm animate-spin-slow">⚛️</div>
        <div className="absolute bottom-[20%] left-[8%] text-8xl opacity-10 blur-sm">🏆</div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* --- হিরো সেকশন --- */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6 shadow-xl"
          >
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
             আমাদের গর্ব ও অর্জন
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter"
          >
            সাফল্যের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 underline decoration-white/10 underline-offset-8">স্মারক</span>
          </motion.h1>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            মেধাবী শিক্ষার্থীদের কঠোর পরিশ্রম এবং সঠিক দিকনির্দেশনায় অর্জিত অসামান্য মাইলফলক।
          </p>
        </div>

        {/* --- ১. টপ অ্যাচিভার্স সেকশন (Glass Cards) --- */}
        <div className="mb-32 md:mb-40">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">সেরা ফলাফলসমূহ</h2>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {achievers.map((student, idx) => (
              <motion.div 
                key={student.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* কার্ডের পেছনের নিয়ন গ্লো */}
                <div 
                  className="absolute inset-0 rounded-[50px] blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700"
                  style={{ backgroundColor: student.glow }}
                ></div>
                
                <div className={`relative bg-white/[0.03] backdrop-blur-xl p-10 rounded-[50px] border border-white/10 group-hover:border-emerald-500/30 transition-all duration-500 shadow-2xl`}>
                  
                  {/* Image Container */}
                  <div className="relative w-40 h-40 mx-auto mb-8">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover rounded-[40px] border-4 border-[#0d213b] shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className={`absolute -bottom-2 -right-2 ${student.badgeBg} text-[#0a192f] text-[10px] font-black px-4 py-2 rounded-xl shadow-lg tracking-widest uppercase`}>
                      {student.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-2">{student.name}</h3>
                  <p className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-6">{student.className}</p>
                  
                  <div className="bg-white/5 border border-white/5 shadow-inner rounded-2xl py-4 px-6 inline-block">
                    <p className="text-slate-200 font-black text-xl italic tracking-tight">{student.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- ২. স্মরণীয় মুহূর্ত (Gallery with Masonry) --- */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-16 tracking-tight">স্মরণীয় মুহূর্ত</h2>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[40px] group border border-white/10 bg-[#0d213b] shadow-xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 text-left">
                  <div>
                    <p className="text-white font-black text-2xl">অ্যাকাডেমিক ইভেন্ট</p>
                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Moment of Joy</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- কন্টাক্ট সেকশন (CTA) --- */}
        <div className="max-w-5xl mx-auto mt-40">
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative bg-gradient-to-br from-[#0d213b] to-[#0a192f] border border-white/10 rounded-[50px] md:rounded-[70px] p-12 md:p-24 text-center overflow-hidden shadow-2xl"
          >
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
              
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight relative z-10">
                তুমিও হতে পারো আমাদের <br /> <span className="text-emerald-400">পরবর্তী সফল</span> শিক্ষার্থী!
              </h3>
              <p className="text-slate-400 font-bold mb-12 text-lg relative z-10">আজই আমাদের নতুন ব্যাচে ভর্তি হয়ে তোমার স্বপ্নের যাত্রা শুরু করো।</p>
              
              <button className="relative z-10 bg-emerald-500 text-[#0a192f] px-12 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl active:scale-95">
                ভর্তি ফরম পূরণ করো
              </button>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;