import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#fcfcfc] overflow-hidden py-10 lg:py-24 px-6 md:px-12">
      {/* ব্যাকগ্রাউন্ডে হালকা ডেকোরেটিভ সার্কেল (আকর্ষণ বাড়ানোর জন্য) */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-green-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* বাম পাশ: কন্টেন্ট */}
        <div className="z-40 lg:col-span-5 order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-600 font-bold mb-6 border border-green-100/50 shadow-sm animate-pulse">
            <span className="text-lg">★</span>
            <span className="tracking-widest text-[12px] uppercase">আপনার স্বপ্ন পূরণের যাত্রা</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.2] mb-6">
            সীমানা ছাড়িয়ে <br /> শিখুন, <span className="text-green-500 font-extrabold drop-shadow-sm">সফল হন</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
            শিক্ষার এক নতুন যুগে আপনাকে স্বাগতম! আপনার সুপ্ত মেধা বিকশিত করতে অভিজ্ঞ মেন্টরদের সাথে আজই যাত্রা শুরু করুন।
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link 
              href="/courses" 
              className="bg-[#63f5a1] text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-green-200/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              বিস্তারিত দেখুন <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <Link 
              href="/contact" 
              className="bg-white border-2 border-slate-100 text-slate-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-200 transition-all duration-300"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>

        {/* ডান পাশ: ইমেজ এবং পজিশনড কার্ড */}
        <div className="relative lg:col-span-7 flex justify-center items-end order-1 lg:order-2 h-[600px] md:h-[750px]">
          
          <div className="relative w-full h-full flex items-end justify-center">
            
            {/* ১. স্টুডেন্ট ওম্যান ও তার কার্ড (একেবারে পেছনে এবং আরও ডানে সরানো হয়েছে) */}
            <div className="absolute bottom-0 right-[-10%] lg:right-[-5%] w-[52%] h-[85%] z-10 flex justify-center items-end transition-all duration-500 hover:translate-y-[-10px]">
               {/* হলুদ কার্ড - পজিশন আরও ডানে সরানো হয়েছে */}
               <div className="absolute bottom-0 left-[10%] w-[95%] h-[85%] bg-[#fff9e5] rounded-[30px] -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-yellow-100/50" />
               
               <div className="relative w-full h-full transform scale-115 origin-bottom">
                <Image
                  src="/images/woman.png" 
                  alt="ছাত্রীর ছবি"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                />
              </div>
            </div>

            {/* ২. স্টুডেন্ট ম্যান ও তার কার্ড (সামনে এবং একটু বামে) */}
            <div className="relative z-20 w-[60%] h-full flex justify-center items-end transform translate-x-[-15%] lg:translate-x-[-25%] transition-all duration-500 hover:translate-y-[-10px]">
              {/* সবুজ কার্ড */}
              <div className="absolute top-12 w-[88%] h-[85%] bg-[#e9f7e4] rounded-[30px] -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-green-100/50" />
              
              <div className="relative w-full h-[98%] transform scale-105 origin-bottom">
                <Image
                  src="/images/man.png" 
                  alt="ছাত্রের ছবি"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
                />
              </div>
              
              {/* স্টুডেন্ট ব্যাজ - আরও উজ্জ্বল */}
              <div className="absolute bottom-24 -left-8 z-50 bg-[#2bb361] text-white p-5 rounded-full w-24 h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(43,179,97,0.3)] border-[8px] border-white animate-bounce">
                <span className="text-xl lg:text-3xl font-black italic leading-none">৩.৬k+</span>
                <span className="text-[10px] lg:text-[12px] font-bold uppercase">শিক্ষার্থী</span>
              </div>
            </div>

            {/* ৩. ফ্লোটিং মেম্বার কার্ড - Glass Effect */}
            <div className="absolute top-10 right-0 z-50 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-4 animate-float">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-left leading-tight">
                <p className="text-sm font-black text-slate-800">১k+ কোর্স</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">সক্রিয় শিখুন</p>
              </div>
            </div>

            {/* ৪. ভিডিও প্লে বাটন - আরও গ্লসি */}
            <div className="absolute top-[40%] left-[-8%] lg:left-[-2%] z-50 bg-yellow-400 p-6 rounded-full border-[8px] border-white shadow-2xl hover:scale-125 transition-all duration-300 cursor-pointer group">
               <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-white border-b-[12px] border-b-transparent ml-1" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;