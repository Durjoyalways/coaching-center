import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcfcfc] overflow-hidden py-10 lg:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* বাম পাশ: টেক্সট কন্টেন্ট */}
        <div className="z-30 lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-600 font-bold mb-6 border border-green-100/50">
            <span className="text-lg">★</span>
            <span className="tracking-widest text-[10px] uppercase">Empower Your Journey</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Learn Beyond <br /> Limits, <span className="text-green-500">Succee</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
            Welcome to a new era of education! Unleash your potential, learn from experts, and grow with us.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link 
              href="/courses" 
              className="bg-[#63f5a1] text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-green-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Explore More <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white border-2 border-slate-100 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ডান পাশ: প্রফেশনাল ইমেজ কম্পোজিশন */}
        <div className="relative lg:col-span-7 flex justify-center items-center order-1 lg:order-2 h-[550px] md:h-[700px]">
          
          {/* ব্যাকগ্রাউন্ড কালার ব্লক (আপনার স্ক্রিনশটের মতো) */}
          <div className="absolute top-0 right-[20%] w-[50%] h-[80%] bg-[#f0ffea] rounded-2xl -z-10" />
          <div className="absolute bottom-10 right-0 w-[45%] h-[55%] bg-[#fff9e5] rounded-2xl -z-10" />

          {/* প্রধান ইমেজ কন্টেইনার */}
          <div className="relative w-full h-full flex justify-center items-end">
            
            {/* ১. স্টুডেন্ট ম্যান (বড় ইমেজ) */}
            <div className="relative z-20 w-[65%] h-[90%] transform -translate-x-10">
              <Image
                src="/images/man.png" // আপনার ম্যান ইমেজ (Background removed)
                alt="Student Man"
                fill
                priority
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
              />
              
              {/* সাকসেস ব্যাজ (3.6k+) */}
              <div className="absolute bottom-12 -right-10 z-50 bg-[#2bb361] text-white p-6 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl border-[6px] border-white">
                <span className="text-2xl font-black leading-none italic">3.6k+</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Students</span>
              </div>
            </div>

            {/* ২. স্টুডেন্ট ওম্যান (ছোট ইমেজ) */}
            <div className="absolute bottom-0 right-0 w-[48%] h-[70%] z-30">
              <Image
                src="/images/woman.png" // আপনার ওম্যান ইমেজ (Background removed)
                alt="Student Woman"
                fill
                className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* ৩. ফ্লোটিং মেম্বার ব্যাজ (1k+ Courses) */}
            <div className="absolute top-10 right-[5%] z-40 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+</div>
              </div>
              <div className="text-left">
                <p className="text-sm font-black text-slate-800 leading-none">1k+</p>
                <p className="text-[9px] font-bold text-slate-400 uppercase">Courses</p>
              </div>
            </div>

            {/* ৪. ভিডিও প্লে বাটন */}
            <div className="absolute top-[45%] left-[-5%] lg:left-0 z-40 bg-yellow-400 p-5 rounded-full border-[6px] border-white shadow-2xl hover:scale-110 transition-transform cursor-pointer group">
               <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-[#2bb361] border-b-[10px] border-b-transparent ml-1" />
            </div>

            {/* ৫. ছোট ডেকোরেটিভ আইকন (ব্যাজ) */}
            <div className="absolute bottom-[20%] right-[-5%] z-40 bg-[#fcc011] p-4 rounded-full border-4 border-white shadow-xl animate-pulse">
               <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;