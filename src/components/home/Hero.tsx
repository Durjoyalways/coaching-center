"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Framer Motion ইম্পোর্ট করা হয়েছে

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcfcfc] overflow-hidden py-10 lg:py-24 px-4 md:px-12 min-h-[auto] lg:min-h-screen flex items-center">
      
      {/* 🌌 কালারফুল এডুকেশনাল এলিমেন্টস (Floating Background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[5%] left-[5%] text-5xl md:text-9xl opacity-20 animate-bounce">🧪</div>
        <div className="hidden md:block absolute bottom-[15%] right-[10%] text-9xl opacity-20 animate-pulse">⚗️</div>
        <div className="absolute top-[20%] left-[15%] w-16 h-16 md:w-40 md:h-40 border-[8px] md:border-[15px] border-blue-400/10 rounded-full animate-float" />
        <div className="absolute bottom-[5%] left-[5%] w-0 h-0 border-l-[30px] md:border-l-[70px] border-l-transparent border-r-[30px] md:border-r-[70px] border-r-transparent border-b-[50px] md:border-b-[120px] border-b-red-400/10 rotate-[20deg] animate-float" />
        <div className="absolute top-[2%] right-[5%] text-6xl md:text-[12rem] font-serif text-purple-500/5 rotate-12">π</div>
        <div className="absolute top-[35%] right-[2%] text-5xl md:text-9xl opacity-10 animate-spin-slow">⚛️</div>
        <div className="absolute bottom-[20%] left-[2%] text-4xl md:text-8xl text-yellow-500/10 -rotate-12 animate-bounce-slow">∑</div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* কন্টেন্ট অংশ - প্রতিবার স্ক্রল করলে বাম দিক থেকে আসবে */}
        <motion.div 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} // once: false মানে প্রতিবার স্ক্রল করলে কাজ করবে
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 rounded-full text-green-600 font-bold mb-6 border border-green-200/50 shadow-sm">
            <span className="text-sm">★</span>
            <span className="tracking-widest text-[10px] md:text-[12px] uppercase">আধুনিক শিক্ষা ব্যবস্থা</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.2] lg:leading-[1.1] mb-6">
            শেখার কোনো <br /> <span className="text-green-500">সীমানা নেই</span>
          </h1>
          
          <p className="text-slate-500 text-base md:text-xl mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
            সেরা মেন্টরদের সাথে সায়েন্স এবং ম্যাথের কঠিন বিষয়গুলো শিখুন একদম সহজভাবে।
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/courses" className="bg-[#2bb361] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl shadow-green-200 hover:bg-[#23924e] hover:scale-105 transition-all duration-300">
              কোর্স শুরু করুন ↗
            </Link>
          </div>
        </motion.div>

        {/* ইমেজ অংশ - প্রতিবার স্ক্রল করলে নিচ থেকে ফেড ইন হবে */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // যতবার স্ক্রিনে আসবে ততবার এনিমেটেড হবে
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 order-1 lg:order-2 relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] w-full"
        >
          <div className="relative w-full h-full">
            
            {/* Woman Card (Right Side) */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[90%] z-10 flex justify-center items-end transform transition-transform hover:scale-105 duration-500">
                <div className="absolute bottom-[10%] left-[5%] w-[95%] h-[80%] bg-[#fff9e5] rounded-[30px] md:rounded-[40px] -z-10 shadow-xl border border-yellow-100/30" />
                <div className="relative w-full h-full transform scale-110 origin-bottom">
                   <Image src="/images/woman.png" alt="Student" fill className="object-contain" priority />
                </div>
            </div>

            {/* Man Card (Left Side) */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[95%] z-20 flex justify-center items-end transform translate-x-[15%] lg:translate-x-0 transition-transform hover:scale-105 duration-500">
              <div className="absolute bottom-[10%] w-[90%] h-[85%] bg-[#e9f7e4] rounded-[30px] md:rounded-[40px] -z-10 shadow-xl border border-green-100/30" />
              <div className="relative w-full h-full transform scale-105 origin-bottom">
                <Image src="/images/man.png" alt="Student" fill className="object-contain" priority />
              </div>
            </div>

          </div>
        </motion.div>
        
      </div>

      {/* প্রয়োজনীয় এনিমেশন এবং স্টাইল */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;