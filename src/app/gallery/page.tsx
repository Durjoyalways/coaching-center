"use client";

import React from "react";

// টাইপ ডিফাইন করা (TypeScript Error দূর করতে)
interface Achiever {
  id: number;
  name: string;
  className: string;
  result: string;
  image: string;
  badge: string;
}

const SuccessPage: React.FC = () => {
  // টপারদের ডেটা
  const achievers: Achiever[] = [
    { 
      id: 1, 
      name: "আরিফ রহমান", 
      className: "১০ম শ্রেণি", 
      result: "GPA 5.00 (Golden)", 
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      badge: "সেরা মেধাবী"
    },
    { 
      id: 2, 
      name: "সাদিয়া ইসলাম", 
      className: "৮ম শ্রেণি", 
      result: "ট্যালেন্টপুল বৃত্তি", 
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      badge: "সেরা ছাত্রী"
    },
    { 
      id: 3, 
      name: "রাহুল আহমেদ", 
      className: "৯ম শ্রেণি", 
      result: "গণিত অলিম্পিয়াড", 
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      badge: "সেরা অলরাউন্ডার"
    },
  ];

  // গ্যালারি ফটোর লিংক
  const galleryImages: string[] = [
    "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    "https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg",
    "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
    "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
    "https://images.pexels.com/photos/159844/science-lab-glass-test-tube-159844.jpeg",
  ];

  return (
    <div className="bg-[#f4fcf0] min-h-screen pt-32 pb-20 font-sans">
      
      {/* --- হিরো সেকশন --- */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="inline-block px-5 py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-yellow-200">
          🏆 আমাদের গর্ব ও অর্জন
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6">
          সাফল্যের <span className="text-green-600">স্মারক</span>
        </h1>
        <p className="text-slate-600 font-bold max-w-2xl mx-auto text-lg leading-relaxed">
          আমাদের মেধাবী শিক্ষার্থীদের কঠোর পরিশ্রম এবং শিক্ষকদের সঠিক দিকনির্দেশনায় অর্জিত কিছু অসামান্য ফলাফল।
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- ১. টপ অ্যাচিভার্স সেকশন (Premium Cards) --- */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-slate-800">সেরা ফলাফলসমূহ</h2>
            <div className="h-1 flex-1 bg-green-100 mx-6 rounded-full hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {achievers.map((student) => (
              <div key={student.id} className="group relative">
                {/* কার্ড ব্যাকগ্রাউন্ড */}
                <div className="absolute inset-0 bg-green-600 rounded-[50px] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                
                <div className="relative bg-[#fffdf5] border border-yellow-100 rounded-[50px] p-8 text-center shadow-xl hover:-translate-y-4 transition-all duration-500">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      className="w-full h-full object-cover rounded-[40px] border-4 border-white shadow-lg" 
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-4 py-2 rounded-2xl shadow-lg border-2 border-white">
                      {student.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-800 mb-1">{student.name}</h3>
                  <p className="text-green-600 font-bold text-sm mb-4">{student.className}</p>
                  
                  <div className="bg-white border border-green-50 rounded-2xl py-3 px-4 inline-block shadow-inner">
                    <p className="text-slate-700 font-black text-lg">{student.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- ২. ম্যাসনরি গ্যালারি সেকশন --- */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="h-1 flex-1 bg-green-100 mr-6 rounded-full hidden md:block"></div>
            <h2 className="text-3xl font-black text-slate-800 text-right">স্মরণীয় মুহূর্ত</h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-[40px] group border-4 border-white shadow-xl hover:shadow-2xl transition-all"
              >
                <img 
                  src={src} 
                  alt="Coaching Moments" 
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <p className="text-white font-black text-lg">অ্যাকাডেমিক ইভেন্ট ২০২৪</p>
                    <p className="text-green-100 text-xs font-bold uppercase tracking-widest">স্মৃতিচারণ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- কন্টাক্ট সেকশন (ফুটার ট্যাগ) --- */}
      <div className="max-w-3xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[50px] p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">তুমিও হতে পারো আমাদের পরবর্তী সফল শিক্ষার্থী!</h3>
            <p className="text-slate-400 font-bold mb-8">আজই আমাদের নতুন ব্যাচে ভর্তি হয়ে তোমার যাত্রা শুরু করো।</p>
            <button className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-green-900/20">
              ভর্তি ফরম পূরণ করো
            </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;