"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courseData = [
  { 
    id: "06", title: "৬ষ্ঠ শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "বাংলা"], 
    fee: "১৫০০/-", icon: "📚", glow: "rgba(34, 197, 94, 0.4)", 
    details: "মেজর বিষয়সমূহ প্রতিদিন পড়ানো হয়। নন-মেজর বিষয় (সমাজ/ধর্ম) সপ্তাহে ৩ দিন পর্যায়ক্রমে অনুষ্ঠিত হয়।" 
  },
  { 
    id: "07", title: "৭ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "ডিজিটাল"], 
    fee: "১৫০০/-", icon: "🌍", glow: "rgba(14, 165, 233, 0.4)", 
    details: "মেজর বিষয়সমূহ প্রতিদিন পড়ানো হয়। নন-মেজর বিষয় (সমাজ/ধর্ম) সপ্তাহে ৩ দিন পর্যায়ক্রমে অনুষ্ঠিত হয়।" 
  },
  { 
    id: "08", title: "৮ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "আইসিটি"], 
    fee: "১৮০০/-", icon: "🧠", glow: "rgba(236, 72, 153, 0.4)", 
    details: "বোর্ড পরীক্ষার বিশেষ প্রস্তুতি। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "09", title: "৯ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "জীববিজ্ঞান"], 
    fee: "২৫০০/-", icon: "🚀", glow: "rgba(245, 158, 11, 0.4)", 
    details: "বিজ্ঞান বিভাগের স্পেশাল ব্যাচ। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "10", title: "১০ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "ইংরেজি"], 
    fee: "৩০০০/-", icon: "⚛️", glow: "rgba(139, 92, 246, 0.4)", 
    details: "এসএসসি পূর্ণাঙ্গ প্রস্তুতি। মেজর বিষয় প্রতিদিন এবং নন-মেজর বিষয় সপ্তাহে ৩ দিন।" 
  },
  { 
    id: "EX", title: "English Special", 
    subjects: ["Grammar", "Spoken", "Writing", "Vocabulary"], 
    fee: "১২০০/-", icon: "💡", glow: "rgba(20, 184, 166, 0.4)", 
    details: "ইংরেজি দক্ষতা বৃদ্ধির বিশেষ কোর্স। সব মডিউল রুটিন অনুযায়ী সাজানো।" 
  },
];

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const whatsappNumber = "88017XXXXXXXX"; 

  return (
    <div className="bg-[#0a192f] min-h-screen pb-32 relative overflow-hidden font-sans">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[10%] left-[5%] text-7xl opacity-5 blur-sm">🧪</div>
        <div className="absolute top-[20%] right-[10%] text-6xl opacity-5 blur-sm">🚀</div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <header className="pt-32 pb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6 shadow-xl"
          >
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
             ভর্তি চলছে
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter"
          >
            ভবিষ্যৎ গড়ি <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">একসাথে</span>
          </motion.h1>
        </header>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {courseData.map((course, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={course.id}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[45px] p-8 md:p-10 hover:border-emerald-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Inner Glow Effect */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: course.glow }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0d213b] rounded-[25px] flex items-center justify-center text-3xl md:text-4xl mb-6 shadow-2xl border border-white/10 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter">{course.title}</h3>
                
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {course.subjects.map((sub, i) => (
                    <span key={i} className="px-2 py-2 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-center text-slate-400 group-hover:text-emerald-300 transition-colors">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10 gap-4">
                   <div>
                      <p className="text-[9px] text-slate-500 font-black uppercase mb-1 tracking-widest">মাসিক ফি</p>
                      <p className="text-xl md:text-2xl font-black text-white">{course.fee}</p>
                   </div>
                   <button 
                    onClick={() => setSelectedCourse(course)}
                    className="px-6 py-4 bg-emerald-500 hover:bg-white text-[#0a192f] rounded-[20px] font-black text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                   >
                     বিস্তারিত
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌊 Glass Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-xl" onClick={() => setSelectedCourse(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0d213b] border border-white/10 rounded-[50px] p-8 md:p-14 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCourse(null)} 
                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-emerald-500 hover:text-[#0a192f] transition-colors z-20 font-black"
              >✕</button>
              
              <div className="text-center relative z-10">
                <div className="text-7xl mb-6 inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{selectedCourse.icon}</div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{selectedCourse.title}</h2>
                <p className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.5em] mb-10">Premium Education</p>
                
                <div className="bg-white/5 p-8 rounded-[35px] mb-10 text-left border border-white/5 shadow-inner">
                   <p className="text-slate-300 font-medium text-lg md:text-xl leading-relaxed">
                     <span className="text-emerald-400 text-3xl leading-none">“</span>
                     {selectedCourse.details}
                   </p>
                </div>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  className="flex items-center justify-center gap-4 w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-[#0a192f] py-6 rounded-[25px] font-black text-lg md:text-xl shadow-xl hover:shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  ভর্তি হতে মেসেজ দিন
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoursePage;