import React from "react";

const Statistics: React.FC = () => {
  // আপনার কোচিং সেন্টারের অর্জিত মাইলফলকসমূহ
  const stats = [
    { 
        label: "বর্তমান শিক্ষার্থী", 
        value: "৫০০+", 
        bg: "bg-[#f0ffea]", // হালকা সবুজ
        text: "text-green-600",
        icon: "🎓" 
    },
    { 
        label: "অভিজ্ঞ শিক্ষক", 
        value: "১০+", 
        bg: "bg-[#fff9e5]", // হালকা হলুদ
        text: "text-yellow-700",
        icon: "👨‍🏫" 
    },
    { 
        label: "সাফল্যের হার", 
        value: "৯৮%", 
        bg: "bg-[#f0ffea]", 
        text: "text-green-600",
        icon: "📈" 
    },
    { 
        label: "বছরের অভিজ্ঞতা", 
        value: "১৫+", 
        bg: "bg-[#fff9e5]", 
        text: "text-yellow-700",
        icon: "🏆" 
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: `radial-gradient(#2bb361 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bg} p-8 lg:p-10 rounded-[40px] text-center border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group`}
            >
              {/* আইকন অংশ */}
              <div className="text-3xl lg:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* সংখ্যা অংশ */}
              <h2 className={`text-4xl lg:text-5xl font-black ${stat.text} mb-3 tracking-tighter`}>
                {stat.value}
              </h2>

              {/* লেবেল অংশ */}
              <p className="text-slate-500 font-extrabold text-xs lg:text-sm uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;