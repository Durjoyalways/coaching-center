"use client";

import Image from "next/image";
import React, { useState } from "react";

const Teachers: React.FC = () => {
  const allTeachers = [
    { name: "আরিফ হোসেন", qualification: "বিএসসি, বুয়েট (BUET)", specialty: "পদার্থবিজ্ঞান", image: "https://i.pravatar.cc/300?img=11", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "তানজিলা আক্তার", qualification: "এমএসসি, ঢাকা বিশ্ববিদ্যালয়", specialty: "রসায়ন", image: "https://i.pravatar.cc/300?img=26", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "মেহেদী হাসান", qualification: "এম.এ, ইংরেজি (ঢাবি)", specialty: "ইংরেজি", image: "https://i.pravatar.cc/300?img=12", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "রাকিবুল ইসলাম", qualification: "বিএসসি, সাস্ট (SUST)", specialty: "উচ্চতর গণিত", image: "https://i.pravatar.cc/300?img=13", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "ফারজানা হক", qualification: "এমবিবিএস, ডিএমসি", specialty: "জীববিজ্ঞান", image: "https://i.pravatar.cc/300?img=47", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "সায়েম মাহমুদ", qualification: "বিএসসি, কুয়েট (KUET)", specialty: "সাধারণ বিজ্ঞান", image: "https://i.pravatar.cc/300?img=15", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "জুবায়ের আহমেদ", qualification: "বিএসসি, রুয়েট (RUET)", specialty: "আইসিটি", image: "https://i.pravatar.cc/300?img=18", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "নাসরিন সুলতানা", qualification: "এম.এ, বাংলা (ঢাবি)", specialty: "বাংলা ও সাহিত্য", image: "https://i.pravatar.cc/300?img=32", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "ইমতিয়াজ হক", qualification: "বিএসসি, চুয়েট (CUET)", specialty: "গণিত", image: "https://i.pravatar.cc/300?img=33", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "কামরুল হাসান", qualification: "এমএসসি, জাবি (JU)", specialty: "পরিসংখ্যান", image: "https://i.pravatar.cc/300?img=53", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "শায়লা শারমিন", qualification: "এমএসসি, রাবি (RU)", specialty: "ভূগোল ও পরিবেশ", image: "https://i.pravatar.cc/300?img=48", bg: "bg-[#f0ffea]", border: "border-green-100" },
    { name: "ফয়সাল মাহমুদ", qualification: "বিবিএ, আইবিএ (ঢাবি)", specialty: "হিসাববিজ্ঞান", image: "https://i.pravatar.cc/300?img=59", bg: "bg-[#fff9e5]", border: "border-yellow-100" },
    { name: "আদনান সামি", qualification: "বিএসসি, নর্থ সাউথ", specialty: "সাধারণ গণিত", image: "https://i.pravatar.cc/300?img=60", bg: "bg-[#f0ffea]", border: "border-green-100" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleTeachers = showAll ? allTeachers : allTeachers.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* হেডার */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-green-50 rounded-full text-green-600 font-bold text-xs uppercase tracking-widest mb-4">
             ১৩+ অভিজ্ঞ মেন্টর
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            আমাদের দক্ষ <span className="text-green-500">শিক্ষক মন্ডলী</span>
          </h2>
        </div>

        {/* টিচার গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleTeachers.map((teacher, index) => (
            <div 
              key={index} 
              className={`relative group p-6 rounded-[40px] border ${teacher.bg} ${teacher.border} transition-all duration-500 hover:shadow-2xl hover:-translate-y-3`}
            >
              <div className="relative w-full h-72 mb-6 overflow-hidden rounded-[30px] bg-white border border-white shadow-inner">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-800 mb-1">{teacher.name}</h3>
                <p className="text-green-600 font-bold text-sm mb-3">{teacher.qualification}</p>
                <div className="w-12 h-1 bg-slate-200 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500"></div>
                <p className="text-slate-500 text-sm font-semibold italic">
                   विशेषজ্ঞ: <span className="text-slate-800 not-italic">{teacher.specialty}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ডাইনামিক বাটন: হালকা সবুজ থেকে হলুদ */}
        <div className="text-center mt-16">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-[#dcfce7] text-green-800 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-[#fef9c3] hover:text-yellow-800 hover:scale-105 hover:shadow-lg active:scale-95 group border border-green-200 hover:border-yellow-300"
          >
            {showAll ? "কম দেখুন" : "সকল ১৩ জন শিক্ষক দেখুন"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-1"}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Teachers;