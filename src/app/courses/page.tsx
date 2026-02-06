"use client";

import React, { useState } from "react";

// ১. টাইপ ডিফাইন করা (ইন্টারফেস)
interface CourseType {
  id: string;
  title: string;
  subjects: string[];
  time: string;
  fee: string;
  details: string;
}

// ২. ডাটাকে আলাদা ভেরিয়েবলে রাখা (ক্লিন কোডের জন্য)
const courseData: CourseType[] = [
  { 
    id: "06", 
    title: "৬ষ্ঠ শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "বাংলা"], 
    time: "বিকাল ৫:০০ - রাত ৮:০০", 
    fee: "১৫০০/-",
    details: "নতুন কারিকুলাম অনুযায়ী হ্যান্ডস-অন প্র্যাকটিস এবং বেসিক ফাউন্ডেশন কোর্স।" 
  },
  { 
    id: "07", 
    title: "৭ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "ইতিহাস"], 
    time: "বিকাল ৫:০০ - রাত ৮:০০", 
    fee: "১৫০০/-",
    details: "সৃজনশীল পদ্ধতিতে পাঠদান এবং নিয়মিত মূল্যায়ন পরীক্ষা।" 
  },
  { 
    id: "08", 
    title: "৮ম শ্রেণি", 
    subjects: ["গণিত", "ইংরেজি", "বিজ্ঞান", "আইসিটি"], 
    time: "বিকাল ৫:০০ - রাত ৮:০০", 
    fee: "১৮০০/-",
    details: "বোর্ড পরীক্ষার আগে সিলেবাস শেষ করার বিশেষ প্ল্যান এবং মডেল টেস্ট।" 
  },
  { 
    id: "09", 
    title: "৯ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "জীববিজ্ঞান"], 
    time: "বিকাল ৫:০০ - রাত ৮:০০", 
    fee: "২৫০০/-",
    details: "বিজ্ঞান বিভাগের শিক্ষার্থীদের জন্য অধ্যায় ভিত্তিক লেকচার শিট ও বোর্ড প্রশ্ন সমাধান।" 
  },
  { 
    id: "10", 
    title: "১০ম শ্রেণি", 
    subjects: ["পদার্থ", "রসায়ন", "উচ্চতর গণিত", "জীববিজ্ঞান"], 
    time: "বিকাল ৫:০০ - রাত ৮:০০", 
    fee: "৩০০০/-",
    details: "এসএসসি পরীক্ষার শর্ট সিলেবাস ও পূর্ণাঙ্গ রিভিশন এবং স্পেশাল মডেল টেস্ট সিরিজ।" 
  },
];

const CoursePage: React.FC = () => {
  const whatsappNumber = "88017XXXXXXXX"; 
  
  // ৩. স্টেট ফিক্স করা (CourseType অথবা null)
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  return (
    <div className="bg-[#f4fcf0] min-h-screen pb-20 relative font-sans">
      
      {/* হিরো সেকশন */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-5 py-2 bg-white/80 backdrop-blur-sm text-green-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-green-100 shadow-sm">
            একাডেমিক প্রোগ্রাম ২০২৪
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            আপনার পছন্দের <span className="text-green-600">কোর্সটি</span> বেছে নিন
          </h1>
          <p className="text-slate-600 font-bold max-w-2xl mx-auto text-lg leading-relaxed bg-yellow-100/50 inline-block px-4 py-1 rounded-lg italic">
            "বিকাল ৫টা থেকে রাত ৮টা পর্যন্ত আমাদের সকল ব্যাচের ক্লাস অনুষ্ঠিত হয়"
          </p>
        </div>
      </div>

      {/* কোর্স কার্ড গ্রিড */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courseData.map((cls) => (
            <div 
              key={cls.id} 
              className="group bg-[#fffdf5] rounded-[50px] p-10 border border-yellow-200 shadow-[0_15px_40px_-15px_rgba(22,101,52,0.08)] hover:border-green-400 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center text-3xl font-black text-green-600 shadow-sm border border-yellow-50 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                    {cls.id}
                  </div>
                  <div className="bg-yellow-200/50 text-yellow-800 px-4 py-1.5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-yellow-200">
                    ভর্তি চলছে
                  </div>
                </div>

                <h3 className="text-3xl font-black text-slate-800 mb-4 tracking-tight">{cls.title}</h3>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white/50 p-3 rounded-2xl border border-yellow-50">
                    <span>⏰</span>
                    {cls.time}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cls.subjects.map((sub, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-slate-600 text-[11px] font-bold rounded-lg border border-yellow-100 group-hover:border-green-200 shadow-sm">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-yellow-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">মাসিক ফি</p>
                  <p className="text-2xl font-black text-slate-900">{cls.fee}</p>
                </div>
                <button 
                  onClick={() => setSelectedCourse(cls)}
                  className="bg-green-600 text-white px-8 py-4 rounded-[20px] font-black hover:bg-slate-900 transition-all shadow-lg shadow-green-100 active:scale-95 text-sm"
                >
                  বিস্তারিত
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ব্লার মোডাল - এরর মুক্ত করার জন্য কন্ডিশনাল চেকিং */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-white/20 backdrop-blur-xl transition-opacity duration-500"
            onClick={() => setSelectedCourse(null)}
          ></div>

          <div className="relative bg-[#fffdf5] border border-green-100 w-full max-w-xl p-10 lg:p-14 rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.12)] transition-transform duration-300 transform scale-100">
            <button 
              onClick={() => setSelectedCourse(null)}
              className="absolute top-10 right-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl hover:bg-red-50 hover:text-red-500 transition-all shadow-sm border border-slate-100"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="inline-block px-5 py-2 bg-green-500 text-white rounded-2xl text-2xl font-black mb-6 shadow-xl shadow-green-200">
                {selectedCourse.id}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-3">{selectedCourse.title}</h2>
              <p className="text-green-600 font-black text-sm mb-10 uppercase tracking-[0.3em]">Course Details</p>
              
              <div className="bg-white p-8 rounded-[40px] border border-yellow-100 mb-10 text-left">
                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> কোর্স বিবরণ ও সুবিধা
                </h4>
                <p className="text-slate-700 font-bold leading-[1.8] text-lg italic">
                  "{selectedCourse.details}"
                </p>
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=আসসালামু আলাইকুম, আমি ${selectedCourse.title} এর ভর্তি সম্পর্কে জানতে চাই।`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white py-6 rounded-3xl font-black text-xl shadow-2xl shadow-green-200 hover:opacity-90 hover:scale-[1.02] transition-all flex items-center justify-center gap-4"
              >
                হোয়াটসঅ্যাপে যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;