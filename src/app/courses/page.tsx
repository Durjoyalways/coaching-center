"use client";

import React, { useState } from "react";

// কোর্স ডাটাবেস (নতুন আইকন ও গ্লো সহ)
const courseData = [
  { 
    id: "06", title: "৬ষ্ঠ শ্রেণি", subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান"], time: "৫:০০ - ৮:০০", fee: "১৫০০/-",
    icon: "📚", glow: "rgba(34, 197, 94, 0.6)", details: "নতুন কারিকুলাম ও বেসিক ফাউন্ডেশন।" 
  },
  { 
    id: "07", title: "৭ম শ্রেণি", subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান"], time: "৫:০০ - ৮:০০", fee: "১৫০০/-",
    icon: "🌍", glow: "rgba(14, 165, 233, 0.6)", details: "সৃজনশীল পদ্ধতি ও নিয়মিত মূল্যায়ন।" 
  },
  { 
    id: "08", title: "৮ম শ্রেণি", subjects: ["গণিত", "ইংরেজি", "আইসিটি"], time: "৫:০০ - ৮:০০", fee: "১৮০০/-",
    icon: "🧠", glow: "rgba(236, 72, 153, 0.6)", details: "বোর্ড পরীক্ষার বিশেষ প্রস্তুতি ও মডেল টেস্ট।" 
  },
  { 
    id: "09", title: "৯ম শ্রেণি", subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত"], time: "৫:০০ - ৮:০০", fee: "২৫০০/-",
    icon: "🚀", glow: "rgba(245, 158, 11, 0.6)", details: "বিজ্ঞান বিভাগের শিক্ষার্থীদের জন্য স্পেশাল ব্যাচ।" 
  },
  { 
    id: "10", title: "১০ম শ্রেণি", subjects: ["পদার্থ", "রসায়ন", "জীববিজ্ঞান"], time: "৫:০০ - ৮:০০", fee: "৩০০০/-",
    icon: "⚛️", glow: "rgba(139, 92, 246, 0.6)", details: "এসএসসি পরীক্ষার পূর্ণাঙ্গ রিভিশন ও সলভ ক্লাস।" 
  },
  { 
    id: "EX", title: "English Special", subjects: ["Grammar", "Spoken", "Writing"], time: "৬:৩০ - ৮:০০", fee: "১২০০/-",
    icon: "💡", glow: "rgba(20, 184, 166, 0.6)", details: "সঠিক উচ্চারণ ও ইংরেজি কথা বলার দক্ষতা বৃদ্ধি।" 
  },
];

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const whatsappNumber = "88017XXXXXXXX";

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-32 relative overflow-hidden font-sans">
      
      {/* 🌌 Floating Science Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Floating Icons with specific glow colors */}
        <div className="absolute top-[10%] left-[5%] text-8xl opacity-20 animate-bounce" style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.8))', animationDuration: '6s' }}>🧪</div>
        <div className="absolute top-[20%] right-[10%] text-7xl opacity-20 animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))' }}>🚀</div>
        <div className="absolute bottom-[30%] left-[8%] text-8xl opacity-15 animate-spin" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))', animationDuration: '10s' }}>💡</div>
        <div className="absolute bottom-[10%] right-[15%] text-9xl opacity-20" style={{ filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.8))' }}>🧠</div>
        <div className="absolute top-[50%] left-[50%] text-6xl opacity-10" style={{ filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.8))' }}>🔬</div>
        
        {/* Abstract Glow Blobs */}
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <header className="pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-slate-100 rounded-full text-green-600 font-black text-[10px] uppercase tracking-[0.4em] mb-8 shadow-sm">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
             New Batch Admissions Open
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
            ভবিষ্যৎ গড়ি <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">একসাথে</span>
          </h1>
        </header>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((course) => (
            <div 
              key={course.id}
              className="group relative bg-white/70 backdrop-blur-xl border border-white rounded-[60px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 overflow-hidden"
            >
              {/* Internal Glow Effect */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundColor: course.glow }}
              />

              <div className="relative z-10">
                <div 
                  className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-xl border border-slate-50 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                  style={{ filter: `drop-shadow(0 10px 15px ${course.glow})` }}
                >
                  {course.icon}
                </div>
                
                <h3 className="text-4xl font-black text-slate-800 mb-4 tracking-tighter">{course.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.subjects.map((sub, i) => (
                    <span key={i} className="px-4 py-1 bg-white border border-slate-100 rounded-xl text-[11px] font-black text-slate-500 group-hover:border-green-200 transition-colors">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                   <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Monthly Fee</p>
                      <p className="text-2xl font-black text-slate-800">{course.fee}</p>
                   </div>
                   <button 
                    onClick={() => setSelectedCourse(course)}
                    className="px-8 py-4 bg-slate-900 text-white rounded-[20px] font-black text-sm hover:bg-green-600 transition-all shadow-lg active:scale-95"
                   >
                     বিস্তারিত
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" onClick={() => setSelectedCourse(null)} />
          
          <div className="relative bg-white w-full max-w-xl p-12 lg:p-16 rounded-[70px] shadow-[0_50px_150px_rgba(0,0,0,0.15)] border border-white animate-in zoom-in-95 duration-300">
             <button onClick={() => setSelectedCourse(null)} className="absolute top-10 right-10 text-2xl font-black text-slate-300 hover:text-red-500 transition-colors">✕</button>
             
             <div className="text-center">
                <div className="text-7xl mb-6 inline-block" style={{ filter: `drop-shadow(0 15px 20px ${selectedCourse.glow})` }}>{selectedCourse.icon}</div>
                <h2 className="text-5xl font-black text-slate-900 mb-2">{selectedCourse.title}</h2>
                <p className="text-green-500 font-black text-xs uppercase tracking-[0.4em] mb-10">Premium Quality Education</p>
                
                <div className="bg-slate-50 p-8 rounded-[40px] mb-10 text-left border border-slate-100">
                   <p className="text-slate-600 font-bold text-lg leading-relaxed italic">"{selectedCourse.details}"</p>
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=আসসালামু আলাইকুম, আমি ${selectedCourse.title} এর ভর্তি সম্পর্কে জানতে চাই।`}
                  target="_blank" 
                  className="flex items-center justify-center gap-4 w-full bg-[#25D366] text-white py-6 rounded-[30px] font-black text-xl shadow-2xl hover:bg-[#1eb954] transition-all hover:-translate-y-1"
                >
                  WhatsApp ভর্তি সাপোর্ট
                </a>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;