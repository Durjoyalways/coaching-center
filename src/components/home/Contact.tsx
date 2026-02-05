"use client";

import React from "react";

const Contact: React.FC = () => {
  // আপনার হোয়াটসঅ্যাপ নম্বর (country code সহ, যেমন: 88017XXXXXXXX)
  const whatsappNumber = "88017XXXXXXXX"; 
  const message = "আসসালামু আলাইকুম, আমি আপনাদের কোচিং সেন্টারে ভর্তি সম্পর্কে জানতে চাই।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#f0ffea] border border-green-100 rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row items-center">
            
            {/* বাম পাশ: আকর্ষণীয় টেক্সট */}
            <div className="lg:w-1/2 p-8 lg:p-16">
              <div className="inline-block px-4 py-1 bg-yellow-200 text-yellow-800 font-bold text-[10px] uppercase tracking-[0.2em] mb-6 rounded-full">
                সরাসরি যোগাযোগ
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.2]">
                ভর্তির যেকোনো তথ্যের জন্য <br /> <span className="text-green-600">হোয়াটসঅ্যাপ করুন</span>
              </h2>
              <p className="text-slate-600 font-medium mb-8 text-sm lg:text-base leading-relaxed">
                আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য যেকোনো প্রশ্ন সরাসরি আমাদের হোয়াটসঅ্যাপে করুন। আমরা খুব দ্রুত আপনার উত্তর দেওয়ার চেষ্টা করব।
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                  <p className="text-slate-700 font-bold">সকাল ১০টা থেকে রাত ৮টা পর্যন্ত অনলাইন</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                  <p className="text-slate-700 font-bold">ভর্তির নিয়মাবলী ও ফি সম্পর্কে জানুন</p>
                </div>
              </div>
            </div>

            {/* ডান পাশ: WhatsApp বাটন কার্ড */}
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col items-center justify-center bg-[#fff9e5] w-full">
              <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-green-900/5 text-center w-full max-w-sm border border-yellow-100">
                <div className="w-20 h-20 bg-[#25D366] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200 animate-bounce">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" height="40" 
                    fill="white" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.987-.51-5.742-1.47l-6.334 1.689zm6.086-5.309l.345.204c1.447.86 3.123 1.314 4.858 1.314 4.817 0 8.735-3.918 8.735-8.735 0-2.333-.909-4.524-2.56-6.175-1.651-1.652-3.846-2.561-6.175-2.561-4.817 0-8.735 3.918-8.735 8.735 0 1.68.47 3.32 1.358 4.767l.223.364-.951 3.475 3.562-.951z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-2">সরাসরি কথা বলুন</h3>
                <p className="text-slate-500 text-sm mb-8 font-medium">হোয়াটসঅ্যাপে মেসেজ দিতে নিচের বাটনে ক্লিক করুন</p>
                
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] text-white font-black py-5 rounded-2xl hover:bg-green-600 transition-all shadow-xl shadow-green-200 active:scale-95 text-lg"
                >
                  WhatsApp চ্যাট শুরু করুন
                </a>
                
                <p className="mt-6 text-xs text-slate-400 font-bold uppercase tracking-tighter">অফিস: +৮৮০ ১৭১২-৩৪৫৬৭৮</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;