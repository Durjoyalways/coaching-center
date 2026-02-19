"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// সংখ্যা এনিমেশনের জন্য ছোট একটি সাব-কম্পোনেন্ট
const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(parseInt(value));
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="flex items-baseline gap-1">
      <motion.span>{displayValue}</motion.span>
      <span className="text-xl lg:text-2xl font-black opacity-50">{suffix}</span>
    </span>
  );
};

const Statistics: React.FC = () => {
  const stats = [
    { 
        label: "সফল শিক্ষার্থী", 
        value: "500", 
        suffix: "+",
        color: "from-emerald-400 to-teal-500",
        icon: "🎓",
        bgLight: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20", 
    },
    { 
        label: "অভিজ্ঞ মেন্টর", 
        value: "10", 
        suffix: "+",
        color: "from-blue-400 to-indigo-500",
        icon: "👨‍🏫",
        bgLight: "bg-blue-500/10",
        borderColor: "border-blue-500/20", 
    },
    { 
        label: "সাফল্যের হার", 
        value: "98", 
        suffix: "%",
        color: "from-amber-400 to-orange-500",
        icon: "📈",
        bgLight: "bg-amber-500/10",
        borderColor: "border-amber-500/20", 
    },
    { 
        label: "বছরের অভিজ্ঞতা", 
        value: "15", 
        suffix: "+",
        color: "from-rose-400 to-red-500",
        icon: "🏆",
        bgLight: "bg-rose-500/10",
        borderColor: "border-rose-500/20", 
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-[#0a192f] overflow-hidden border-t border-white/5">
      
      {/* 🌌 আধুনিক ব্যাকগ্রাউন্ড এলিমেন্টস */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* সেকশন হেডার (ঐচ্ছিক) */}
        <div className="text-center mb-16">
            <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">আমাদের অর্জন</h3>
            <h2 className="text-3xl md:text-4xl font-black text-white">সাফল্যের কিছু পরিসংখ্যান</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* কার্ড কন্টেইনার */}
              <div className={`h-full relative bg-white/[0.03] backdrop-blur-xl border-t border-l ${stat.borderColor} p-8 lg:p-10 rounded-[35px] flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.07] overflow-hidden shadow-2xl shadow-black/20`}>
                
                {/* হোভার করলে শাইন ইফেক্ট */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12" />

                {/* আইকন বক্স */}
                <div className={`w-16 h-16 lg:w-20 lg:h-20 ${stat.bgLight} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {stat.icon}
                </div>

                {/* এনিমেটেড নাম্বার */}
                <h2 className={`text-4xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent tracking-tighter mb-2`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h2>

                {/* লেবেল */}
                <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] text-center">
                  {stat.label}
                </p>

                {/* ডাইনামিক বটম বার */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.color} group-hover:w-full transition-all duration-700`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default Statistics;