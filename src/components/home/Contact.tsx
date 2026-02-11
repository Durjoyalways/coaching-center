"use client";

import React from "react";

const Contact: React.FC = () => {
  // আপনার হোয়াটসঅ্যাপ নম্বর (country code সহ)
  const whatsappNumber = "88017XXXXXXXX"; 
  const message = "আসসালামু আলাইকুম, আমি আপনাদের কোচিং সেন্টারে ভর্তি সম্পর্কে জানতে চাই।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Glowing Background Icons (Consistent with Hero/Statistics) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[15%] left-[5%] text-8xl opacity-30 animate-spin-slow" 
             style={{ filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' }}>⚛️</div>
        
        <div className="absolute bottom-[10%] right-[5%] text-9xl opacity-30 animate-float"
             style={{ filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.6))' }}>🧪</div>
        
        <div className="absolute top-[40%] right-[2%] text-7xl font-black text-green-500/10 -rotate-12">HELP?</div>

        {/* Soft Background Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[50px] lg:rounded-[80px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.04)]">
          
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* বাম পাশ: কন্টেন্ট */}
            <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 border border-yellow-100 rounded-full text-yellow-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-8 shadow-sm">
                 <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                 সরাসরি যোগাযোগ
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                ভর্তির তথ্যের জন্য <br /> 
                <span className="text-green-500 underline decoration-green-100 underline-offset-8">হোয়াটসঅ্যাপ</span> করুন
              </h2>
              
              <p className="text-slate-500 font-medium mb-10 text-lg leading-relaxed max-w-md">
                আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য যেকোনো প্রশ্ন সরাসরি আমাদের মেন্টরদের করুন। আমরা দ্রুত উত্তর দেওয়ার চেষ্টা করব।
              </p>

              <div className="space-y-6">
                {[
                    "সকাল ১০টা থেকে রাত ৮টা পর্যন্ত অনলাইন",
                    "ভর্তির নিয়মাবলী ও ফি সম্পর্কে জানুন"
                ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-sm font-black shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                            ✓
                        </div>
                        <p className="text-slate-700 font-extrabold text-sm lg:text-base">{text}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* ডান পাশ: WhatsApp কার্ড */}
            <div className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-gradient-to-br from-green-50/50 to-yellow-50/50">
              <div className="relative group w-full max-w-md">
                {/* কার্ডের পেছনের গ্লো */}
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-[50px]" />
                
                <div className="relative bg-white p-10 lg:p-12 rounded-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white text-center transition-all duration-500 group-hover:-translate-y-2">
                  
                  {/* WhatsApp Icon with Animation */}
                  <div className="w-24 h-24 bg-[#25D366] rounded-[30px] flex items-center justify-center mx-auto mb-8 shadow-[0_15px_30px_rgba(37,211,102,0.3)] group-hover:rotate-12 transition-transform duration-500">
                    <svg width="45" height="45" fill="white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.987-.51-5.742-1.47l-6.334 1.689zm6.086-5.309l.345.204c1.447.86 3.123 1.314 4.858 1.314 4.817 0 8.735-3.918 8.735-8.735 0-2.333-.909-4.524-2.56-6.175-1.651-1.652-3.846-2.561-6.175-2.561-4.817 0-8.735 3.918-8.735 8.735 0 1.68.47 3.32 1.358 4.767l.223.364-.951 3.475 3.562-.951z" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-black text-slate-800 mb-3">সরাসরি কথা বলুন</h3>
                  <p className="text-slate-400 font-bold text-sm mb-10 tracking-tight">মেসেজ দিতে নিচের বাটনে ক্লিক করুন</p>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-black py-6 rounded-[25px] hover:bg-[#1eb954] transition-all shadow-[0_15px_30px_rgba(37,211,102,0.25)] active:scale-95 text-lg"
                  >
                    WhatsApp চ্যাট শুরু
                    <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <div className="mt-8 pt-8 border-t border-slate-50">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">অফিস হেল্পলাইন</p>
                    <p className="text-slate-800 font-black text-lg mt-1">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;