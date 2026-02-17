"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      title: "অভিজ্ঞ শিক্ষক",
      desc: "নামকরা বিশ্ববিদ্যালয় থেকে আসা দক্ষ মেন্টরদের মাধ্যমে প্রতিটি বিষয় সহজভাবে উপস্থাপন করা হয়।",
      icon: "🎓",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      title: "আধুনিক কারিকুলাম",
      desc: "নতুন শিক্ষা পদ্ধতির সাথে তাল মিলিয়ে আমরা সৃজনশীল ও বাস্তবমুখী শিক্ষাদান নিশ্চিত করি।",
      icon: "📚",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "সাপ্তাহিক মূল্যায়ন",
      desc: "প্রতি সপ্তাহে বিষয়ভিত্তিক পরীক্ষার মাধ্যমে শিক্ষার্থীদের অগ্রগতির নিয়মিত তদারকি করা হয়।",
      icon: "🧪",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
    },
    {
      title: "ব্যক্তিগত যত্ন",
      desc: "দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত কেয়ার এবং ওয়ান-টু-ওয়ান কাউন্সিলিং সেশন প্রদান করা হয়।",
      icon: "🧠",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 md:pt-32 pb-20 font-sans relative overflow-hidden text-center">
      
      {/* 🌌 Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20">
        <div className="absolute top-[5%] left-[5%] text-6xl md:text-8xl animate-pulse">⚛️</div>
        <div className="absolute top-[40%] right-[5%] text-5xl md:text-7xl animate-bounce">🔬</div>
        <div className="absolute bottom-[10%] left-[5%] text-7xl md:text-9xl animate-float">💡</div>
        <div className="absolute top-0 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-green-100/40 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        
        {/* --- ১. ইন্ট্রোডাকশন সেকশন --- */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-28 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-green-100 rounded-full text-green-700 font-black text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
               আমাদের গল্প ও মিশন
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
              আমরা শুধু পাঠদান করি না, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">ভবিষ্যৎ গড়ি</span>
            </h1>
            <p className="text-slate-500 font-bold text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              "শিক্ষার আলো" কোচিং সেন্টারের যাত্রা শুরু হয়েছিল প্রতিটি শিক্ষার্থীর সম্ভাবনাকে বাস্তবে রূপ দেওয়ার স্বপ্ন নিয়ে। মুখস্থ বিদ্যার বদলে আমরা সৃজনশীল শিক্ষায় বিশ্বাসী।
            </p>
            
            <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:p-10 bg-white/70 backdrop-blur-xl border border-white rounded-[40px] shadow-xl">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-black text-slate-900">৫+</p>
                <p className="text-green-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest mt-1">অভিজ্ঞতা</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="text-2xl md:text-4xl font-black text-slate-900">৫০০+</p>
                <p className="text-green-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest mt-1">শিক্ষার্থী</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-black text-slate-900">৯৮%</p>
                <p className="text-green-600 font-black text-[9px] md:text-[10px] uppercase tracking-widest mt-1">সাফল্য</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative w-full"
          >
            <div className="relative rounded-[40px] md:rounded-[70px] overflow-hidden border-[6px] md:border-[12px] border-white shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg" 
                alt="Our Classroom" 
                className="w-full h-[350px] md:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 bg-slate-900 text-white p-5 md:p-8 rounded-[30px] md:rounded-[45px] shadow-2xl border-4 border-white text-left">
               <p className="text-green-400 font-black text-[8px] md:text-[10px] uppercase tracking-widest mb-1">Winner</p>
               <p className="text-white font-black leading-tight text-xs md:text-sm uppercase">বেস্ট টিচিং <br /> অ্যাওয়ার্ড ২০২৪</p>
            </div>
          </motion.div>
        </div>

        {/* --- ২. কেন আমরাই সেরা? (Grid Section) --- */}
        <div className="mb-28 md:mb-40 px-2 md:px-0">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tighter">কেন আমরাই <span className="text-green-500">সেরা?</span></h2>
            <p className="text-slate-500 font-bold text-base md:text-lg max-w-xl mx-auto">আমাদের বিশেষ কিছু বৈশিষ্ট্য যা আমাদের সাধারণের চেয়ে আলাদা করে তোলে।</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`group relative ${item.bgColor} p-8 md:p-12 rounded-[40px] md:rounded-[55px] border border-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 ${item.iconBg} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-md`}>
                  {item.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-black text-slate-800 mb-3 md:mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-600 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ৩. ক্যাম্পাস ইমেজ সেকশন (গুগল ম্যাপের বিকল্প) --- */}
        <div className="mb-28 md:mb-40 px-2">
           <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden border-[8px] md:border-[15px] border-white shadow-2xl h-[350px] md:h-[550px] group">
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" 
                alt="Digital Campus" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex items-end justify-center pb-12 px-6">
                 <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-10 rounded-[30px] md:rounded-[40px] max-w-3xl w-full">
                    <div className="flex items-center justify-center gap-4 mb-4">
                       <span className="w-12 h-[2px] bg-green-500"></span>
                       <span className="text-white font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">আমাদের আঙিনা</span>
                       <span className="w-12 h-[2px] bg-green-500"></span>
                    </div>
                    <h3 className="text-white text-2xl md:text-4xl font-black tracking-tighter mb-2">শেখার জন্য একটি আদর্শ পরিবেশ</h3>
                    <p className="text-slate-300 font-medium text-sm md:text-base">আমরা নিশ্চিত করি মনোরম ও শান্ত পরিবেশ, যা শিক্ষার্থীদের মননশীলতায় সাহায্য করে।</p>
                 </div>
              </div>
              {/* Floating Location Icon Tag */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-green-500 text-white px-6 py-3 rounded-full font-black text-xs md:text-sm shadow-xl flex items-center gap-2">
                 <span className="text-xl">📍</span> শভল লোকেশন
              </div>
           </div>
        </div>

        {/* --- ৪. লোকেশন ও কন্ট্যাক্ট কার্ড --- */}
        <div className="relative group px-2 md:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-600/20 blur-[100px] rounded-full" />
          
          <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-[50px] md:rounded-[80px] p-10 md:p-24 border border-green-100 shadow-2xl overflow-hidden">
            
            <div className="absolute -top-10 -right-10 text-9xl opacity-10 pointer-events-none">📍</div>
            
            <p className="text-emerald-600 font-black mb-4 uppercase tracking-[0.3em] text-[10px] md:text-xs">আমাদের ঠিকানা</p>
            
            <h3 className="text-3xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">
              সরাসরি দেখা করতে চলে আসুন <br className="hidden md:block" /> আমাদের ক্যাম্পাসে
            </h3>
            
            <p className="text-slate-600 font-bold text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              হাউজ #১২, রোড #০৫, ধানমন্ডি, ঢাকা - ১২০৯
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 relative z-10">
               <button className="w-full md:w-auto bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 md:py-6 rounded-[25px] md:rounded-[30px] font-black text-base md:text-lg hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all">
                 বিস্তারিত জানতে ইনবক্স করুন
               </button>
               
               <a href="tel:+880123456789" className="w-full md:w-auto bg-white text-emerald-700 border-2 border-emerald-100 px-10 py-5 md:py-6 rounded-[25px] md:rounded-[30px] font-black text-base md:text-lg hover:bg-emerald-50 transition-all shadow-sm">
                 সরাসরি কল করুন
               </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;