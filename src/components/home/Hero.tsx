"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcfcfc] overflow-hidden py-10 lg:py-24 px-6 md:px-12">
      
      {/* 🌌 কালারফুল এডুকেশনাল এলিমেন্টস */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        
        {/* বড় টেস্ট টিউব - সবুজ */}
        <div className="absolute top-[12%] left-[8%] text-7xl md:text-9xl opacity-30 animate-bounce">🧪</div>
        
        {/* বড় বিকর - নীল */}
        <div className="hidden md:block absolute bottom-[15%] right-[10%] text-9xl opacity-30 animate-pulse">⚗️</div>
        
        {/* বড় নীল সার্কেল - যা 'animate-float' ব্যবহার করছে */}
        <div className="absolute top-[25%] left-[18%] w-24 h-24 md:w-40 md:h-40 border-[15px] border-blue-400/20 rounded-full animate-float" />
        
        {/* বড় লাল ট্রায়াঙ্গেল */}
        <div className="absolute bottom-[8%] left-[10%] w-0 h-0 border-l-[40px] md:border-l-[70px] border-l-transparent border-r-[40px] md:border-r-[70px] border-r-transparent border-b-[70px] md:border-b-[120px] border-b-red-400/20 rotate-[20deg] animate-float" />
        
        {/* ম্যাথ পাই (Pi) - পার্পল */}
        <div className="absolute top-[5%] right-[12%] text-8xl md:text-[12rem] font-serif text-purple-500/10 rotate-12">π</div>

        {/* নিউক্লিয়াস/অ্যাটম - যা 'animate-spin-slow' ব্যবহার করছে */}
        <div className="absolute top-[40%] right-[3%] text-7xl md:text-9xl opacity-25 animate-spin-slow">⚛️</div>
        
        {/* সিগমা (Sigma) - হলুদ */}
        <div className="absolute bottom-[40%] left-[2%] text-6xl md:text-8xl text-yellow-500/20 -rotate-12 animate-bounce-slow">∑</div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* কন্টেন্ট অংশ */}
        <div className="z-40 lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-50 rounded-full text-green-600 font-bold mb-6 border border-green-200/50 shadow-sm animate-pulse">
            <span className="text-lg">★</span>
            <span className="tracking-widest text-[12px] uppercase">আধুনিক শিক্ষা ব্যবস্থা</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            শেখার কোনো <br /> <span className="text-green-500">সীমানা নেই</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-md mx-auto lg:mx-0 font-medium">
            সেরা মেন্টরদের সাথে সায়েন্স এবং ম্যাথের কঠিন বিষয়গুলো শিখুন একদম সহজভাবে।
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/courses" className="bg-[#2bb361] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#23924e] hover:scale-105 transition-all duration-300">
              কোর্স শুরু করুন ↗
            </Link>
          </div>
        </div>

        {/* ইমেজ অংশ - আপনার হলুদ কার্ডটি উপরে তোলা হয়েছে */}
        <div className="relative lg:col-span-7 flex justify-center items-end order-1 lg:order-2 h-[500px] md:h-[700px]">
          <div className="relative w-full h-full flex items-end justify-center">
            
            <div className="absolute bottom-0 right-[-5%] w-[55%] h-[85%] z-10 flex justify-center items-end transform transition-transform hover:scale-105 duration-500">
               <div className="absolute bottom-[15%] left-[10%] w-[90%] h-[75%] bg-[#fff9e5] rounded-[40px] -z-10 shadow-2xl border border-yellow-100/30" />
               <div className="relative w-full h-full transform scale-110 origin-bottom">
                  <Image src="/images/woman.png" alt="Student" fill className="object-contain" priority />
               </div>
            </div>

            <div className="relative z-20 w-[65%] h-full flex justify-center items-end transform translate-x-[-20%] transition-transform hover:scale-105 duration-500">
              <div className="absolute top-10 w-[85%] h-[85%] bg-[#e9f7e4] rounded-[40px] -z-10 shadow-2xl border border-green-100/30" />
              <div className="relative w-full h-[95%] transform scale-105 origin-bottom">
                <Image src="/images/man.png" alt="Student" fill className="object-contain" priority />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;