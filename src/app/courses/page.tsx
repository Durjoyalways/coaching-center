"use client";

import React, { useState } from "react";

const courseData = [
  { 
    id: "06", title: "৬ষ্ঠ শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "বাংলা"], 
    fee: "১৫০০/-", icon: "📚", glow: "rgba(34, 197, 94, 0.6)", 
    details: "মেজর বিষয়সমূহ প্রতিদিন পড়ানো হয়। নন-মেজর বিষয় (সমাজ/ধর্ম) সপ্তাহে ৩ দিন পর্যায়ক্রমে অনুষ্ঠিত হয়।" 
  },
  { 
    id: "07", title: "৭ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "ডিজিটাল"], 
    fee: "১৫০০/-", icon: "🌍", glow: "rgba(14, 165, 233, 0.6)", 
    details: "মেজর বিষয়সমূহ প্রতিদিন পড়ানো হয়। নন-মেজর বিষয় (সমাজ/ধর্ম) সপ্তাহে ৩ দিন পর্যায়ক্রমে অনুষ্ঠিত হয়।" 
  },
  { 
    id: "08", title: "৮ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "আইসিটি"], 
    fee: "১৮০০/-", icon: "🧠", glow: "rgba(236, 72, 153, 0.6)", 
    details: "বোর্ড পরীক্ষার বিশেষ প্রস্তুতি। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "09", title: "৯ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "জীববিজ্ঞান"], 
    fee: "২৫০০/-", icon: "🚀", glow: "rgba(245, 158, 11, 0.6)", 
    details: "বিজ্ঞান বিভাগের স্পেশাল ব্যাচ। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "10", title: "১০ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "ইংরেজি"], 
    fee: "৩০০০/-", icon: "⚛️", glow: "rgba(139, 92, 246, 0.6)", 
    details: "এসএসসি পূর্ণাঙ্গ প্রস্তুতি। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "EX", title: "English Special", 
    subjects: ["Grammar", "Spoken", "Writing", "Vocabulary"], 
    fee: "১২০০/-", icon: "💡", glow: "rgba(20, 184, 166, 0.6)", 
    details: "ইংরেজি দক্ষতা বৃদ্ধির বিশেষ কোর্স। সব মডিউল রুটিন অনুযায়ী সাজানো।" 
  },
];

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const whatsappNumber = "88017XXXXXXXX"; 

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-32 relative overflow-hidden font-sans">
      
      {/* 🌌 Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-7xl opacity-10" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.5))' }}>🧪</div>
        <div className="absolute top-[20%] right-[10%] text-6xl opacity-10">🚀</div>
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[120px]" />
      </div>

      {/* মোবাইলে দুই পাশ থেকে সরানোর জন্য px-12 ব্যবহার করা হয়েছে */}
      <div className="max-w-7xl mx-auto px-12 md:px-8 lg:px-6 relative z-10">
        
        {/* Header Section */}
        <header className="pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-green-100 rounded-full text-green-600 font-black text-[10px] uppercase tracking-[0.4em] mb-6 shadow-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
             ভর্তি চলছে
          </div>
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tighter">
            ভবিষ্যৎ গড়ি <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">একসাথে</span>
          </h1>
        </header>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-10">
          {courseData.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-white border-2 border-green-500/20 rounded-[50px] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] transition-all overflow-hidden"
              style={{ borderColor: `${course.glow.replace('0.6', '0.2')}` }}
            >
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-10 transition-opacity duration-700"
                style={{ backgroundColor: course.glow }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 shadow-lg border border-slate-50"
                  style={{ filter: `drop-shadow(0 8px 12px ${course.glow})` }}
                >
                  {course.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tighter">{course.title}</h3>
                
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {course.subjects.map((sub, i) => (
                    <span key={i} className="px-2 py-1.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] md:text-[10px] font-black text-center text-slate-500">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4">
                   <div className="text-center sm:text-left">
                      <p className="text-[9px] text-slate-400 font-black uppercase mb-1">মাসিক ফি</p>
                      <p className="text-xl md:text-2xl font-black text-slate-800">{course.fee}</p>
                   </div>
                   <button 
                    onClick={() => setSelectedCourse(course)}
                    className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-[18px] md:rounded-[20px] font-black text-xs md:text-sm shadow-lg shadow-green-200 active:scale-95"
                   >
                      বিস্তারিত
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🌊 Water Modal - পপ-আপ ডিজাইন */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-8 md:p-6">
          <div className="absolute inset-0 bg-blue-400/10 backdrop-blur-2xl" onClick={() => setSelectedCourse(null)} />
          
          <div className="relative w-full max-w-xl overflow-hidden rounded-[50px] md:rounded-[60px]">
            <div className="relative bg-white/50 backdrop-blur-3xl border border-white/60 p-8 md:p-14 shadow-2xl overflow-hidden">
              <button onClick={() => setSelectedCourse(null)} className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/50 text-slate-500 z-20">✕</button>
              
              <div className="text-center relative z-10">
                <div className="text-6xl mb-4 inline-block">{selectedCourse.icon}</div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">{selectedCourse.title}</h2>
                <p className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-8">Premium Education</p>
                
                <div className="bg-white/70 p-6 md:p-8 rounded-[35px] mb-8 text-left border border-white shadow-inner">
                   <p className="text-slate-700 font-bold text-base md:text-lg italic leading-relaxed">"{selectedCourse.details}"</p>
                </div>
                
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="flex items-center justify-center gap-4 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-5 rounded-[22px] font-black text-lg md:text-xl shadow-lg active:scale-95">
                  ভর্তি হতে মেসেজ দিন
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;