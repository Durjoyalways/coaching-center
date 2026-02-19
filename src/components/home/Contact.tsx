"use client";

import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  // আপনার হোয়াটসঅ্যাপ নম্বর (country code সহ)
  const whatsappNumber = "88017XXXXXXXX"; 
  const message = "আসসালামু আলাইকুম, আমি আপনাদের কোচিং সেন্টারে ভর্তি সম্পর্কে জানতে চাই।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-[#0a192f] overflow-hidden border-t border-white/5">
      
      {/* 🌌 Luxury Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[15%] right-[5%] text-7xl lg:text-9xl animate-spin-slow opacity-5">⚛️</div>
        <div className="absolute bottom-[10%] left-[5%] text-6xl lg:text-8xl animate-float opacity-5">🧪</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* মেইন কন্টেইনার কার্ড (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl"
        >
          
          {/* কার্ডের ভেতরে হোভার শাইন ইফেক্ট */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* বাম পাশ: কন্টেন্ট */}
            <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center text-center lg:text-left relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center self-center lg:self-start gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-[10px] lg:text-xs uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                   সরাসরি যোগাযোগ
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  ভর্তির তথ্যের জন্য <br className="hidden lg:block" /> 
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic relative">
                    হোয়াটসঅ্যাপ
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/30 rounded-full"></span>
                  </span> করুন
                </h2>
                
                <p className="text-slate-400 font-medium mb-10 text-base lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                  আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য যেকোনো প্রশ্ন সরাসরি আমাদের মেন্টরদের করুন। আমরা দ্রুত উত্তর দেওয়ার চেষ্টা করব।
                </p>

                <div className="space-y-5 hidden lg:block">
                  {[
                      "সকাল ১০টা থেকে রাত ৮টা পর্যন্ত অনলাইন",
                      "ভর্তির নিয়মাবলী ও ফি সম্পর্কে জানুন"
                  ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                          <div className="w-8 h-8 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center text-sm font-black border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                              ✓
                          </div>
                          <p className="text-slate-300 font-bold text-base">{text}</p>
                      </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ডান পাশ: WhatsApp কার্ড */}
            <div className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center bg-white/[0.01] border-t lg:border-t-0 lg:border-l border-white/5 relative overflow-hidden">
              
              <div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full -translate-y-1/2" />

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative group w-full max-w-sm"
              >
                {/* কার্ড গ্লো */}
                <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-[50px]" />
                
                <div className="relative bg-white/[0.03] backdrop-blur-3xl p-10 lg:p-14 rounded-[50px] border border-white/10 group-hover:border-emerald-500/50 text-center transition-all duration-500 group-hover:-translate-y-2 shadow-2xl">
                  
                  {/* WhatsApp Icon */}
                  <div className="w-20 h-20 bg-[#25D366] rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-[0_15px_35px_rgba(37,211,102,0.3)] group-hover:rotate-12 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-white animate-ping opacity-20 rounded-[28px]" />
                    <svg className="w-10 h-10 relative z-10" fill="white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.402 0 6.556-5.332 11.891-11.891 11.891-2.01 0-3.987-.51-5.742-1.47l-6.334 1.689zm6.086-5.309l.345.204c1.447.86 3.123 1.314 4.858 1.314 4.817 0 8.735-3.918 8.735-8.735 0-2.333-.909-4.524-2.56-6.175-1.651-1.652-3.846-2.561-6.175-2.561-4.817 0-8.735 3.918-8.735 8.735 0 1.68.47 3.32 1.358 4.767l.223.364-.951 3.475 3.562-.951z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 tracking-tight">সরাসরি কথা বলুন</h3>
                  <p className="text-slate-400 font-bold text-xs lg:text-sm mb-10 tracking-wider">মেসেজ দিতে নিচের বাটনে ক্লিক করুন</p>
                  
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-black py-5 rounded-2xl transition-all shadow-xl hover:shadow-[#25D366]/20 active:scale-95 text-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                        WhatsApp চ্যাট
                        <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                  </a>
                  
                  <div className="mt-8 pt-8 border-t border-white/5">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2">অফিস হেল্পলাইন</p>
                    <p className="text-emerald-400 font-black text-xl lg:text-2xl">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x { animation: bounce-x 1s infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Contact;