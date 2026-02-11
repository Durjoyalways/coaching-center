"use client";

import React from "react";

interface Achiever {
  id: number;
  name: string;
  className: string;
  result: string;
  image: string;
  badge: string;
  glow: string;
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
      glow: "rgba(34, 197, 94, 0.5)"
    },
    { 
      id: 2, 
      name: "সাদিয়া ইসলাম", 
      className: "৮ম শ্রেণি", 
      result: "ট্যালেন্টপুল বৃত্তি", 
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      badge: "সেরা ছাত্রী",
      glow: "rgba(59, 130, 246, 0.5)"
    },
    { 
      id: 3, 
      name: "রাহুল আহমেদ", 
      className: "৯ম শ্রেণি", 
      result: "গণিত অলিম্পিয়াড", 
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      badge: "সেরা অলরাউন্ডার",
      glow: "rgba(245, 158, 11, 0.5)"
    },
  ];

  const galleryImages: string[] = [
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg",
    "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
    "https://images.pexels.com/photos/159844/science-lab-glass-test-tube-159844.jpeg",
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 font-sans relative overflow-hidden">
      
      {/* 🌌 Background Glowing Science Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-8xl opacity-10 animate-float" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))' }}>🧪</div>
        <div className="absolute top-[40%] right-[5%] text-7xl opacity-10 animate-spin-slow" style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))' }}>⚛️</div>
        <div className="absolute bottom-[20%] left-[10%] text-9xl opacity-10 animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))' }}>🏆</div>
        
        {/* Soft Background Globs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[140px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[140px] -z-10" />
      </div>

      {/* --- হিরো সেকশন --- */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-green-100 rounded-full text-green-700 font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-sm">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
           আমাদের গর্ব ও অর্জন
        </div>
        <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
          সাফল্যের <span className="text-green-500 underline decoration-green-100 decoration-8 underline-offset-8">স্মারক</span>
        </h1>
        <p className="text-slate-500 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
          আমাদের মেধাবী শিক্ষার্থীদের কঠোর পরিশ্রম এবং সঠিক দিকনির্দেশনায় অর্জিত কিছু অসামান্য মাইলফলক।
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- ১. টপ অ্যাচিভার্স সেকশন (Glass Cards with Glow) --- */}
        <div className="mb-40">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">সেরা ফলাফলসমূহ</h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-green-200 to-transparent mx-8 rounded-full hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {achievers.map((student) => (
              <div key={student.id} className="group relative">
                {/* কার্ডের পেছনের নিয়ন গ্লো */}
                <div 
                  className="absolute inset-0 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: student.glow }}
                ></div>
                
                <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[60px] p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group-hover:-translate-y-4 transition-all duration-500">
                  <div className="relative w-44 h-44 mx-auto mb-8">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover rounded-[45px] border-4 border-white shadow-xl grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div 
                       className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[10px] font-black px-5 py-2.5 rounded-2xl shadow-xl tracking-widest border border-slate-800"
                       style={{ boxShadow: `0 10px 20px ${student.glow}` }}
                    >
                      {student.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-800 mb-2">{student.name}</h3>
                  <p className="text-green-600 font-black text-xs uppercase tracking-widest mb-6">{student.className}</p>
                  
                  <div className="bg-slate-50/80 border border-slate-100 rounded-3xl py-4 px-6 inline-block">
                    <p className="text-slate-800 font-black text-xl italic tracking-tight">{student.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ২. ম্যাসনরি গ্যালারি সেকশন --- */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-16">
            <div className="h-[2px] flex-1 bg-gradient-to-l from-green-200 to-transparent mx-8 rounded-full hidden md:block"></div>
            <h2 className="text-4xl font-black text-slate-900 text-right tracking-tight">স্মরণীয় মুহূর্ত</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-[50px] group border-4 border-white bg-white shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt="Coaching Moments" 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Overlay with Glow Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div>
                    <div className="w-10 h-1 bg-green-500 rounded-full mb-4 transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-700"></div>
                    <p className="text-white font-black text-2xl mb-1">অ্যাকাডেমিক ইভেন্ট</p>
                    <p className="text-green-400 text-xs font-black uppercase tracking-[0.3em]">Moment of Joy</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- কন্টাক্ট সেকশন (CTA) --- */}
      <div className="max-w-4xl mx-auto px-6 mt-40">
        <div className="relative group p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-[60px] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative bg-slate-900 rounded-[60px] p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute -top-10 -right-10 text-9xl opacity-10 text-white font-black">?</div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">তুমিও হতে পারো আমাদের <br /> <span className="text-green-400">পরবর্তী সফল</span> শিক্ষার্থী!</h3>
              <p className="text-slate-400 font-bold mb-10 text-lg">আজই আমাদের নতুন ব্যাচে ভর্তি হয়ে তোমার স্বপ্নের যাত্রা শুরু করো।</p>
              <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-lg hover:bg-green-500 hover:text-white transition-all shadow-2xl active:scale-95">
                ভর্তি ফরম পূরণ করো
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;