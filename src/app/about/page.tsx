"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const features = [
    {
      title: "অভিজ্ঞ শিক্ষক",
      desc: "নামকরা বিশ্ববিদ্যালয় থেকে আসা দক্ষ মেন্টরদের মাধ্যমে প্রতিটি বিষয় সহজভাবে উপস্থাপন করা হয়।",
      icon: "🎓",
      glow: "rgba(34, 197, 94, 0.4)",
    },
    {
      title: "আধুনিক কারিকুলাম",
      desc: "নতুন শিক্ষা পদ্ধতির সাথে তাল মিলিয়ে আমরা সৃজনশীল ও বাস্তবমুখী শিক্ষাদান নিশ্চিত করি।",
      icon: "📚",
      glow: "rgba(59, 130, 246, 0.4)",
    },
    {
      title: "সাপ্তাহিক মূল্যায়ন",
      desc: "প্রতি সপ্তাহে বিষয়ভিত্তিক পরীক্ষার মাধ্যমে শিক্ষার্থীদের অগ্রগতির নিয়মিত তদারকি করা হয়।",
      icon: "🧪",
      glow: "rgba(245, 158, 11, 0.4)",
    },
    {
      title: "ব্যক্তিগত যত্ন",
      desc: "দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত কেয়ার এবং ওয়ান-টু-ওয়ান কাউন্সিলিং সেশন প্রদান করা হয়।",
      icon: "🧠",
      glow: "rgba(236, 72, 153, 0.4)",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 font-sans relative overflow-hidden">
      
      {/* 🌌 Floating Science Background Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-[5%] text-8xl animate-pulse" style={{ filter: 'drop-shadow(0 0 20px #22c55e)' }}>⚛️</div>
        <div className="absolute top-[40%] right-[8%] text-7xl animate-bounce" style={{ filter: 'drop-shadow(0 0 20px #3b82f6)' }}>🔬</div>
        <div className="absolute bottom-[15%] left-[10%] text-9xl animate-float" style={{ filter: 'drop-shadow(0 0 30px #f59e0b)' }}>💡</div>
        <div className="absolute bottom-[10%] right-[15%] text-8xl" style={{ filter: 'drop-shadow(0 0 20px #ec4899)' }}>🚀</div>
        
        {/* Soft Background Globs */}
        <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- ১. ইন্ট্রোডাকশন সেকশন --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-green-100 rounded-full text-green-700 font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-sm">
               <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
               আমাদের গল্প ও মিশন
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              আমরা শুধু পাঠদান করি না, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">ভবিষ্যৎ গড়ি</span>
            </h1>
            <p className="text-slate-500 font-bold text-lg leading-relaxed mb-10">
              "শিক্ষার আলো" কোচিং সেন্টারের যাত্রা শুরু হয়েছিল এক উজ্জ্বল স্বপ্ন নিয়ে—যেন প্রতিটি শিক্ষার্থী মুখস্থ বিদ্যার বাইরে গিয়ে শিখতে পারে। আমরা বিশ্বাস করি প্রতিটি শিশুর ভেতর অসীম সম্ভাবনা লুকিয়ে থাকে।
            </p>
            
            <div className="grid grid-cols-3 gap-8 p-10 bg-white/50 backdrop-blur-xl border border-white rounded-[40px] shadow-xl shadow-slate-200/50">
              <div className="text-center">
                <p className="text-4xl font-black text-slate-900">৫+</p>
                <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mt-1">অভিজ্ঞতা</p>
              </div>
              <div className="text-center border-x border-slate-100">
                <p className="text-4xl font-black text-slate-900">৫০০+</p>
                <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mt-1">শিক্ষার্থী</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-slate-900">৯৮%</p>
                <p className="text-green-600 font-black text-[10px] uppercase tracking-widest mt-1">সাফল্য</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[70px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.1)] transform lg:rotate-3 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg" 
                alt="Our Classroom" 
                className="w-full h-[600px] object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating Award Tag */}
            <div className="absolute -bottom-10 -right-6 bg-slate-900 text-white p-10 rounded-[45px] shadow-2xl border-4 border-white animate-bounce-slow">
               <p className="text-green-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2">Recognized</p>
               <p className="text-white font-black leading-tight text-sm uppercase">বেস্ট টিচিং <br /> অ্যাওয়ার্ড ২০২৪</p>
            </div>
          </motion.div>
        </div>

        {/* --- ২. আওয়ার ভিশন ও মিশন (Glass-morphism) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40">
          <div className="group bg-white/70 backdrop-blur-2xl p-14 rounded-[60px] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:-translate-y-4 transition-all duration-500">
            <div className="w-20 h-20 bg-green-50 rounded-3xl flex items-center justify-center text-4xl mb-10 shadow-inner group-hover:rotate-12 transition-transform">🔭</div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">আমাদের লক্ষ্য</h3>
            <p className="text-slate-600 font-bold leading-relaxed text-xl italic opacity-80">
              "আমাদের লক্ষ্য হলো এমন একটি শিক্ষিত সমাজ গড়ে তোলা যেখানে জ্ঞান শুধু পরীক্ষার খাতার জন্য নয়, বরং বাস্তব জীবনে প্রয়োগের জন্য হবে।"
            </p>
          </div>

          <div className="group bg-slate-900 p-14 rounded-[60px] border border-slate-800 shadow-2xl hover:-translate-y-4 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-4xl mb-10 shadow-inner group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-4xl font-black text-white mb-6 tracking-tight">আমাদের উদ্দেশ্য</h3>
            <p className="text-slate-300 font-bold leading-relaxed text-xl opacity-90">
              সহজ ও কার্যকর আধুনিক প্রযুক্তির মাধ্যমে পাঠদান নিশ্চিত করা এবং প্রতিটি শিক্ষার্থীর ব্যক্তিগত উন্নতির ওপর সর্বোচ্চ গুরুত্ব দেওয়া।
            </p>
          </div>
        </div>

        {/* --- ৩. আমাদের বিশেষত্ব (Neon Cards) --- */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">কেন আমরাই <span className="text-green-500">সেরা?</span></h2>
            <p className="text-slate-500 font-bold text-lg max-w-xl mx-auto leading-relaxed">আমাদের বিশেষ কিছু বৈশিষ্ট্য যা আমাদের সাধারণের চেয়ে আলাদা করে তোলে।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-slate-50 p-12 rounded-[55px] shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-4 transition-all duration-500 overflow-hidden"
              >
                {/* Internal Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                  style={{ backgroundColor: item.glow }}
                />
                
                <div 
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl border border-slate-50 group-hover:rotate-12 transition-transform"
                  style={{ filter: `drop-shadow(0 10px 15px ${item.glow})` }}
                >
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ৪. লোকেশন সেকশন (Premium CTA) --- */}
        <div className="relative group">
          <div className="absolute inset-0 bg-green-400 opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity" />
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-[80px] p-16 lg:p-24 border border-white shadow-[0_40px_100px_rgba(0,0,0,0.05)] text-center overflow-hidden">
            <div className="absolute -top-10 -right-10 text-9xl opacity-5">📍</div>
            <p className="text-green-500 font-black mb-6 uppercase tracking-[0.4em] text-xs">আমাদের ঠিকানা</p>
            <h3 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">সরাসরি দেখা করতে চলে আসুন <br /> আমাদের ক্যাম্পাসে</h3>
            <p className="text-slate-500 font-bold text-xl mb-12 max-w-2xl mx-auto">হাউজ #১২, রোড #০৫, ধানমন্ডি, ঢাকা - ১২০৯</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-slate-900 text-white px-12 py-6 rounded-[30px] font-black text-lg hover:bg-green-600 transition-all shadow-2xl active:scale-95">গুগল ম্যাপে দেখুন</button>
               <button className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-6 rounded-[30px] font-black text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95">সরাসরি কল করুন</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;