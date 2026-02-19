"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0a192f] overflow-hidden py-14 lg:py-20 px-6 md:px-12 min-h-[auto] lg:min-h-screen flex items-center">
      
      {/* 🌌 Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full" />

        {/* Floating Icons & Shapes */}
        <div className="absolute top-[5%] left-[5%] text-5xl md:text-8xl opacity-10 animate-float filter blur-[1px]">🧪</div>
        <div className="absolute top-[15%] right-[15%] text-6xl md:text-9xl opacity-5 animate-spin-slow text-blue-400">⚛️</div>
        <div className="absolute bottom-[15%] right-[10%] text-7xl md:text-8xl opacity-10 animate-pulse">⚗️</div>
        <div className="absolute top-[5%] right-[5%] text-6xl md:text-[10rem] font-serif text-white/[0.03] rotate-12">π</div>
        <div className="absolute bottom-[20%] left-[2%] text-4xl md:text-8xl text-emerald-500/5 -rotate-12 animate-bounce-slow">∑</div>
        
        {/* Geometric Shapes (Circles & Triangles) */}
        <div className="absolute top-[20%] left-[15%] w-16 h-16 md:w-40 md:h-40 border-[4px] md:border-[8px] border-emerald-500/5 rounded-full animate-float" />
        <div className="absolute bottom-[10%] left-[20%] w-24 h-24 border-t-[3px] border-l-[3px] border-blue-500/10 rotate-45 animate-spin-slow" />
        <div className="absolute top-[40%] right-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-bottom-[50px] border-bottom-emerald-500/5 opacity-20 rotate-[30deg] animate-float" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* 📝 টেক্সট কন্টেন্ট */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* ব্যাজ */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-6 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-[0.1em] text-[10px] md:text-[12px] uppercase font-bold text-emerald-400">
              শিক্ষার আলো কোচিং সেন্টার
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] md:leading-[1.2] mb-6">
            <span className="block">শিক্ষার আলোয়</span>
            <span className="relative inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic pt-1 pb-6 px-1 overflow-visible">
              আলোকিত হোক
            </span>
            <span className="lg:block lg:mt-[-10px]"> তোমার ভবিষ্যৎ</span>
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            সেরা মেন্টরদের সাথে সায়েন্স ও ম্যাথের কঠিন বিষয়গুলো শিখুন সবচেয়ে আধুনিক ও সহজ উপায়ে।
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <Link href="/admission" className="group relative bg-emerald-500 hover:bg-emerald-400 text-[#0a192f] px-8 py-4 rounded-xl font-black text-sm md:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(16,185,129,0.2)] active:scale-95 overflow-hidden">
              <span className="relative z-10">ভর্তি হন ↗</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>
        </motion.div>

        {/* 🖼️ ইমেজ সেকশন - বড় কার্ড ডিজাইন */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative h-[450px] sm:h-[550px] md:h-[650px] w-full lg:scale-110"
        >
          <div className="relative w-full h-full">
            {/* Woman Card */}
            <div className="absolute bottom-0 right-0 w-[58%] h-[92%] z-10 flex justify-center items-end group">
                <div className="absolute bottom-[8%] left-[5%] w-[95%] h-[85%] bg-[#132337] rounded-[40px] md:rounded-[50px] -z-10 shadow-2xl border border-white/5 transition-all group-hover:border-emerald-500/20" />
                <div className="relative w-full h-full transform scale-110 origin-bottom transition-all duration-500 group-hover:scale-[1.18]">
                   <Image src="/images/woman.png" alt="Student" fill className="object-contain" priority />
                </div>
            </div>

            {/* Man Card */}
            <div className="absolute bottom-0 left-0 w-[62%] h-[98%] z-20 flex justify-center items-end group transform translate-x-[5%] lg:translate-x-0">
              <div className="absolute bottom-[8%] w-[92%] h-[88%] bg-[#0d1e36] rounded-[40px] md:rounded-[50px] -z-10 shadow-2xl border border-white/5 transition-all group-hover:border-blue-500/20" />
              <div className="relative w-full h-full transform scale-105 origin-bottom transition-all duration-500 group-hover:scale-115">
                <Image src="/images/man.png" alt="Student" fill className="object-contain" priority />
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(-15px) rotate(-12deg); }
        }
        .animate-bounce-slow { animation: bounce-slow 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;