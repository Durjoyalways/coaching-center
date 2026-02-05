"use client";

import React from "react";

const Programs: React.FC = () => {
  const academicPrograms = [
    {
      title: "জুনিয়র ব্যাচ",
      classes: "৬ষ্ঠ - ৮ম শ্রেণি",
      description: "বেসিক ফাউন্ডেশন তৈরি এবং স্কুলের সম্পূর্ণ সিলেবাস কভার করার নিশ্চয়তা।",
      features: ["স্কুল সিলেবাস ভিত্তিক ক্লাস", "প্রতি সপ্তাহে বিশেষ কুইজ", "বোর্ড পরীক্ষার প্রস্তুতি"],
      bg: "bg-[#f0ffea]", // হালকা সবুজ
      border: "border-green-100",
      accent: "bg-green-500"
    },
    {
      title: "এসএসসি প্রস্তুতি",
      classes: "৯ম - ১০ম শ্রেণি",
      description: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার শিক্ষার্থীদের জন্য পূর্ণাঙ্গ কোর্স প্ল্যান।",
      features: ["শাখা ভিত্তিক আলাদা ব্যাচ", "অধ্যায় ভিত্তিক লেকচার শিট", "বিগত বছরের প্রশ্ন সলভ"],
      bg: "bg-[#fff9e5]", // হালকা হলুদ
      border: "border-yellow-100",
      accent: "bg-yellow-500"
    },
    {
      title: "স্পেশাল প্রোগ্রাম",
      classes: "মডেল টেস্ট ও ইংরেজি",
      description: "পরীক্ষার্থী এবং ইংরেজি গ্রামার ও স্পোকেন-এ দূর্বলদের জন্য বিশেষ আয়োজন।",
      features: ["মডেল টেস্ট সিরিজ", "ইংরেজি গ্রামার স্পেশাল কেয়ার", "সৃজনশীল উত্তর লিখন কৌশল"],
      bg: "bg-[#f0ffea]", // হালকা সবুজ
      border: "border-green-100",
      accent: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 font-bold text-xs uppercase tracking-widest mb-4 rounded-md">
             শিক্ষা কার্যক্রম
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
            আমাদের <span className="text-green-600">একাডেমিক প্রোগ্রাম</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            অভিজ্ঞ মেন্টরদের তত্ত্বাবধানে প্রতিটি শিক্ষার্থীর জন্য সাজানো হয়েছে আলাদা আলাদা স্পেশাল ব্যাচ।
          </p>
        </div>

        {/* প্রোগ্রাম কার্ড গ্রিড */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden p-10 rounded-[45px] border-2 ${program.bg} ${program.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 group`}
            >
              {/* উপরের ডেকোরেশন */}
              <div className={`absolute -top-6 -right-6 w-24 h-24 ${program.accent} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700`}></div>

              <div className="relative z-10">
                <span className={`inline-block px-4 py-1 rounded-full text-white text-xs font-bold mb-4 ${program.accent}`}>
                  {program.classes}
                </span>
                
                <h3 className="text-3xl font-black text-slate-800 mb-4">{program.title}</h3>
                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-4">
                  {program.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${program.accent}`}>
                        ✓
                      </div>
                      <span className="text-slate-700 font-bold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-10 py-4 rounded-2xl font-bold transition-all duration-300 ${program.accent} text-white hover:opacity-90 shadow-lg shadow-black/5 active:scale-95`}>
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;