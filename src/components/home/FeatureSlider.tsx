"use client";

import React from "react";

const FeatureSlider: React.FC = () => {
  // শুধুমাত্র হালকা সবুজ এবং হালকা হলুদ থিম ব্যবহার করা হয়েছে
  const items = [
    { name: "গণিত", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "পদার্থবিজ্ঞান", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    { name: "রসায়ন", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "ইংরেজি স্পোকেন", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    { name: "জীববিজ্ঞান", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "উচ্চতর গণিত", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    { name: "সাপ্তাহিক মডেল টেস্ট", color: "bg-green-50 text-green-700 border-green-100" },
    { name: "বিগত বছরের প্রশ্ন সলভ", color: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    { name: "অভিজ্ঞ শিক্ষক মন্ডলী", color: "bg-green-50 text-green-700 border-green-100" },
  ];

  return (
    <div className="py-12 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        {/* ছোট আইকন সহ টাইটেল */}
        <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-green-200"></span>
            <h3 className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] lg:text-xs">
              আমাদের বিশেষত্ব ও সেবাসমূহ
            </h3>
            <span className="w-8 h-[2px] bg-green-200"></span>
        </div>
      </div>

      {/* স্লাইডার কন্টেইনার */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className={`mx-4 lg:mx-6 px-6 py-3 rounded-full flex items-center justify-center border shadow-sm transition-all duration-300 hover:shadow-md cursor-default ${item.color}`}
            >
              <span className="font-bold text-base lg:text-lg tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default FeatureSlider;