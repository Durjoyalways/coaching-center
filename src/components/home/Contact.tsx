"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  // আপনার হোয়াটসঅ্যাপ নম্বর (country code সহ)
  const whatsappNumber = "88017XXXXXXXX"; 
  const message = "আসসালামু আলাইকুম, আমি আপনাদের কোচিং সেন্টারে ভর্তি সম্পর্কে জানতে চাই।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="relative py-12 lg:py-36 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] text-5xl lg:text-8xl opacity-10 lg:opacity-30 animate-spin-slow">⚛️</div>
        <div className="absolute bottom-[5%] right-[5%] text-6xl lg:text-9xl opacity-10 lg:opacity-30 animate-float">🧪</div>
        <div className="absolute top-[20%] right-[2%] text-4xl lg:text-7xl font-black text-green-50/5 -rotate-12">HELP?</div>
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-6 relative z-10">
        
        {/* মেইন কন্টেইনার কার্ড */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/70 backdrop-blur-xl border-2 border-green-100 rounded-[40px] lg:rounded-[80px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:border-green-200 transition-colors duration-500"
        >
          
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* বাম পাশ: কন্টেন্ট */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="inline-flex items-center self-center lg:self-start gap-2 px-4 py-1.5 bg-yellow-50 border border-yellow-100 rounded-full text-yellow-700 font-bold text-[9px] lg:text-[10px] uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                  সরাসরি যোগাযোগ
              </div>
              
              <h2 className="text-3xl lg:text-6xl font-black text-slate-900 mb-6 lg:mb-8 leading-tight">
                ভর্তির তথ্যের জন্য <br className="hidden lg:block" /> 
                <span className="text-green-500 underline decoration-green-100 underline-offset-4 lg:underline-offset-8">হোয়াটসঅ্যাপ</span> করুন
              </h2>
              
              <p className="text-slate-500 font-medium mb-8 text-sm lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য যেকোনো প্রশ্ন সরাসরি আমাদের মেন্টরদের করুন। আমরা দ্রুত উত্তর দেওয়ার চেষ্টা করব।
              </p>

              <div className="space-y-4 lg:space-y-6 hidden lg:block">
                {[
                    "সকাল ১০টা থেকে রাত ৮টা পর্যন্ত অনলাইন",
                    "ভর্তির নিয়মাবলী ও ফি সম্পর্কে জানুন"
                ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                      className="flex items-center gap-4 group"
                    >
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-50 text-green-600 rounded-lg lg:rounded-xl flex items-center justify-center text-xs lg:text-sm font-black shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300 border border-green-100">
                            ✓
                        </div>
                        <p className="text-slate-700 font-extrabold text-xs lg:text-base">{text}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ডান পাশ: WhatsApp কার্ড */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-gradient-to-br from-green-50/50 to-yellow-50/50 border-t lg:border-t-0 lg:border-l border-green-100"
            >
              <div className="relative group w-full max-w-sm">
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-[30px] lg:rounded-[50px]" />
                
                <div className="relative bg-white/90 p-8 lg:p-12 rounded-[30px] lg:rounded-[50px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border-2 border-green-200 group-hover:border-green-500 text-center transition-all duration-500 group-hover:-translate-y-2">
                  
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#25D366] rounded-2xl lg:rounded-[25px] flex items-center justify-center mx-auto mb-6 shadow-[0_10px_25px_rgba(37,211,102,0.3)] group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.987-.51-5.742-1.47l-6.334 1.689zm6.086-5.309l.345.204c1.447.86 3.123 1.314 4.858 1.314 4.817 0 8.735-3.918 8.735-8.735 0-2.333-.909-4.524-2.56-6.175-1.651-1.652-3.846-2.561-6.175-2.561-4.817 0-8.735 3.918-8.735 8.735 0 1.68.47 3.32 1.358 4.767l.223.364-.951 3.475 3.562-.951z" />
                    </svg>
                  </div>

                  <h3 className="text-xl lg:text-3xl font-black text-slate-800 mb-2">সরাসরি কথা বলুন</h3>
                  <p className="text-slate-400 font-bold text-[11px] lg:text-sm mb-8 tracking-tight">মেসেজ দিতে নিচের বাটনে ক্লিক করুন</p>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 lg:gap-3 w-full bg-[#25D366] text-white font-black py-4 lg:py-5 rounded-xl lg:rounded-[20px] hover:bg-[#1eb954] transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)] active:scale-95 text-base lg:text-lg"
                  >
                    WhatsApp চ্যাট
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">অফিস হেল্পলাইন</p>
                    <p className="text-slate-800 font-black text-base lg:text-lg mt-1">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;