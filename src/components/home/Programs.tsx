"use client";

import React from "react";
import { motion } from "framer-motion";

const Programs: React.FC = () => {
  const whatsappNumber = "8801700000000"; // আপনার নম্বরটি এখানে দিন

  const academicPrograms = [
    {
      title: "জুনিয়র ব্যাচ",
      classes: "৬ষ্ঠ - ৮ম শ্রেণি",
      description: "বেসিক ফাউন্ডেশন তৈরি এবং স্কুলের সম্পূর্ণ সিলেবাস কভার করার নিশ্চয়তা।",
      features: ["স্কুল সিলেবাস ভিত্তিক ক্লাস", "প্রতি সপ্তাহে বিশেষ কুইজ", "বোর্ড পরীক্ষার প্রস্তুতি"],
      gradient: "from-emerald-500/20 to-emerald-600/5",
      accent: "bg-emerald-500",
      glow: "group-hover:shadow-emerald-500/20",
      icon: "📚",
      whatsappMsg: "আসসালামু আলাইকুম, আমি জুনিয়র ব্যাচ সম্পর্কে জানতে চাই।"
    },
    {
      title: "এসএসসি প্রস্তুতি",
      classes: "৯ম - ১০ম শ্রেণি",
      description: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা শাখার শিক্ষার্থীদের জন্য পূর্ণাঙ্গ কোর্স প্ল্যান।",
      features: ["শাখা ভিত্তিক আলাদা ব্যাচ", "অধ্যায় ভিত্তিক লেকচার শিট", "বিগত বছরের প্রশ্ন সলভ"],
      gradient: "from-blue-500/20 to-indigo-600/5",
      accent: "bg-blue-500",
      glow: "group-hover:shadow-blue-500/20",
      icon: "🎓",
      whatsappMsg: "আসসালামু আলাইকুম, আমি এসএসসি প্রস্তুতি সম্পর্কে জানতে চাই।"
    },
    {
      title: "স্পেশাল প্রোগ্রাম",
      classes: "মডেল টেস্ট ও ইংরেজি",
      description: "পরীক্ষার্থী এবং ইংরেজি গ্রামার ও স্পোকেন-এ দূর্বলদের জন্য বিশেষ আয়োজন।",
      features: ["মডেল টেস্ট সিরিজ", "ইংরেজি গ্রামার স্পেশাল কেয়ার", "সৃজনশীল লিখন কৌশল"],
      gradient: "from-amber-500/20 to-orange-600/5",
      accent: "bg-amber-500",
      glow: "group-hover:shadow-amber-500/20",
      icon: "✨",
      whatsappMsg: "আসসালামু আলাইকুম, আমি স্পেশাল প্রোগ্রাম সম্পর্কে জানতে চাই।"
    }
  ];

  return (
    <section id="programs" className="relative py-24 lg:py-32 bg-[#0a192f] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Background Luxury Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
             <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
             একাডেমিক প্রোগ্রামসমূহ
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
            সেরা প্রস্তুতির জন্য <br /> 
            <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">সঠিক কোর্স</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
            </span> বেছে নিন
          </h2>
        </motion.div>

        {/* কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {academicPrograms.map((program, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Card Body */}
              <div className={`relative h-full bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl border border-white/10 p-8 lg:p-10 rounded-[45px] flex flex-col transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 shadow-2xl ${program.glow}`}>
                
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 rounded-[45px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* আইকন বক্স */}
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-3xl mb-8 border border-white/10 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                  {program.icon}
                </div>

                <div className="flex-grow">
                  <div className={`inline-block px-4 py-1.5 rounded-xl text-white text-[10px] font-black mb-5 shadow-lg tracking-wider ${program.accent}`}>
                    {program.classes}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-400 font-medium mb-8 text-sm lg:text-base leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {program.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 group/item">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-white text-[10px] ${program.accent} shadow-md group-hover/item:scale-110 transition-transform`}>
                          ✓
                        </div>
                        <span className="text-slate-300 font-bold text-xs lg:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Button - Premium Style */}
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(program.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full group/btn relative overflow-hidden py-5 rounded-[22px] font-black transition-all duration-300 bg-white/5 border border-white/10 hover:border-transparent text-white flex items-center justify-center gap-3 text-sm lg:text-base shadow-xl active:scale-95`}
                >
                  <div className={`absolute inset-0 ${program.accent} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                  <span className="relative z-10 flex items-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                    বিস্তারিত জানুন 
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.408 2.445 1.103 3.407l-.722 2.637 2.7-.71c.917.586 2.003.931 3.17.931 3.181 0 5.767-2.586 5.767-5.767s-2.586-5.767-5.767-5.767zm0 10.455c-.993 0-1.923-.312-2.693-.84l-.193-.112-1.61.423.432-1.57-.123-.196a4.63 4.63 0 01-.763-2.553c0-2.558 2.081-4.639 4.639-4.639s4.639 2.081 4.639 4.639-2.081 4.639-4.639 4.639z"/>
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Programs;