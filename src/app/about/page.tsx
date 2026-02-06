"use client";

import React from "react";

const AboutPage = () => {
  const features = [
    {
      title: "অভিজ্ঞ শিক্ষক",
      desc: "নামকরা বিশ্ববিদ্যালয় থেকে আসা দক্ষ মেন্টরদের মাধ্যমে প্রতিটি বিষয় সহজভাবে উপস্থাপন করা হয়।",
      icon: "🎓",
      // কালার পরিবর্তন: আইকন বক্স এখন লাইট ইয়েলো
      color: "bg-[#fffdf5] text-green-600 border border-yellow-200",
    },
    {
      title: "আধুনিক কারিকুলাম",
      desc: "নতুন শিক্ষা পদ্ধতির সাথে তাল মিলিয়ে আমরা সৃজনশীল ও বাস্তবমুখী শিক্ষাদান নিশ্চিত করি।",
      icon: "📚",
      color: "bg-[#fffdf5] text-green-600 border border-yellow-200",
    },
    {
      title: "সাপ্তাহিক মূল্যায়ন",
      desc: "প্রতি সপ্তাহে বিষয়ভিত্তিক পরীক্ষার মাধ্যমে শিক্ষার্থীদের অগ্রগতির নিয়মিত তদারকি করা হয়।",
      icon: "📝",
      color: "bg-[#fffdf5] text-green-600 border border-yellow-200",
    },
    {
      title: "ব্যক্তিগত যত্ন",
      desc: "দুর্বল শিক্ষার্থীদের জন্য অতিরিক্ত কেয়ার এবং ওয়ান-টু-ওয়ান কাউন্সিলিং সেশন প্রদান করা হয়।",
      icon: "🤝",
      color: "bg-[#fffdf5] text-green-600 border border-yellow-200",
    },
  ];

  return (
    <div className="bg-[#f4fcf0] min-h-screen pt-32 pb-20 font-sans">
      
      {/* --- ১. ইন্ট্রোডাকশন সেকশন --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative">
          {/* গ্লো ইফেক্ট হালকা সবুজ করা হয়েছে */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-green-600 font-black text-sm uppercase tracking-[0.3em] mb-4 border-b-2 border-yellow-200 inline-block">আমাদের গল্প</h2>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">
              আমরা শুধু পাঠদান করি না, <br />
              <span className="text-green-600">ভবিষ্যৎ গড়ি</span>
            </h1>
            <p className="text-slate-600 font-bold text-lg leading-relaxed mb-8">
              "শিক্ষার আলো" কোচিং সেন্টারের যাত্রা শুরু হয়েছিল এক উজ্জ্বল স্বপ্ন নিয়ে—যেন প্রতিটি শিক্ষার্থী মুখস্থ বিদ্যার বাইরে গিয়ে শিখতে পারে। আমরা বিশ্বাস করি প্রতিটি শিশুর ভেতর অসীম সম্ভাবনা লুকিয়ে থাকে।
            </p>
            <div className="flex gap-10 border-t border-yellow-200 pt-8">
              <div>
                <p className="text-3xl font-black text-slate-900">৫+</p>
                <p className="text-slate-500 font-bold text-sm">অভিজ্ঞতা</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">৫০০+</p>
                <p className="text-slate-500 font-bold text-sm">শিক্ষার্থী</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900">৯৮%</p>
                <p className="text-slate-500 font-bold text-sm">সাফল্য</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* ইমেজ বর্ডার এখন লাইট ইয়েলো */}
          <div className="relative rounded-[60px] overflow-hidden border-8 border-[#fffdf5] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg" 
              alt="Our Classroom" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-100 p-8 rounded-[40px] shadow-xl hidden md:block border-4 border-white">
             <p className="text-slate-900 font-black text-center leading-tight uppercase text-xs">বেস্ট টিচিং <br /> অ্যাওয়ার্ড ২০২৪</p>
          </div>
        </div>
      </div>

      {/* --- ২. আওয়ার ভিশন ও মিশন --- */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fffdf5] p-12 rounded-[50px] border border-yellow-200 shadow-sm">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm border border-yellow-100">🔭</div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">আমাদের লক্ষ্য</h3>
            <p className="text-slate-600 font-bold leading-relaxed text-lg italic">
              "আমাদের লক্ষ্য হলো এমন একটি শিক্ষিত সমাজ গড়ে তোলা যেখানে জ্ঞান বাস্তব জীবনে প্রয়োগের জন্য হবে।"
            </p>
          </div>
          {/* মিশন কার্ডটি এখন ডার্ক স্লেটের বদলে লাইট গ্রিন থিমে করা হয়েছে */}
          <div className="bg-white p-12 rounded-[50px] border border-green-200 shadow-sm relative overflow-hidden">
            <div className="w-16 h-16 bg-[#f4fcf0] rounded-2xl flex items-center justify-center text-3xl mb-8 border border-green-100">🚀</div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">আমাদের উদ্দেশ্য</h3>
            <p className="text-slate-600 font-bold leading-relaxed text-lg">
              সহজ ও কার্যকর আধুনিক প্রযুক্তির মাধ্যমে পাঠদান নিশ্চিত করা এবং প্রতিটি শিক্ষার্থীর উন্নতির ওপর সর্বোচ্চ গুরুত্ব দেওয়া।
            </p>
          </div>
        </div>
      </div>

      {/* --- ৩. আমাদের বিশেষত্ব --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">কেন আমরাই <span className="text-green-600">সেরা?</span></h2>
          <p className="text-slate-500 font-bold">আমাদের বিশেষ কিছু বৈশিষ্ট্য যা আমাদের আলাদা করে।</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-[#fffdf5] p-10 rounded-[45px] border border-yellow-200 shadow-sm hover:border-green-400 hover:-translate-y-2 transition-all duration-500">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl mb-6 font-bold`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-4">{item.title}</h4>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- ৪. লোকেশন সেকশন --- */}
      <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <div className="bg-[#fffdf5] rounded-[60px] p-12 border border-yellow-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-green-600 font-black mb-4 uppercase tracking-widest text-xs">যোগাযোগের ঠিকানা</p>
            <h3 className="text-3xl font-black text-slate-900 mb-6">সরাসরি দেখা করতে চলে আসুন আমাদের অফিসে</h3>
            <p className="text-slate-600 font-bold text-lg mb-8">হাউজ #১২, রোড #০৫, ধানমন্ডি, ঢাকা - ১২০৯</p>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="bg-green-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-slate-900 transition-all shadow-lg shadow-green-100">গুগল ম্যাপে দেখুন</button>
               <button className="bg-white text-green-700 border border-green-200 px-10 py-4 rounded-2xl font-black hover:bg-green-50 transition-all">সরাসরি কল করুন</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;