"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  // অ্যানিমেশন ভ্যারিয়েন্ট - প্রতিবার স্ক্রল করলে কাজ করার জন্য
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <footer className="relative pt-8 lg:pt-20 pb-4 lg:pb-10 bg-[#fcfcfc] overflow-hidden">
      
      {/* 🌌 ব্যাকগ্রাউন্ড এলিমেন্টস - ফ্লোটিং অ্যানিমেশন */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[5%] left-[5%] text-2xl lg:text-7xl opacity-5"
        >
          🧪
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[5%] text-3xl lg:text-8xl opacity-5"
        >
          ⚛️
        </motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        // ⚡ এটিই মূল পরিবর্তন: 'once: false' মানে প্রতিবার স্ক্রল করলেই অ্যানিমেশন হবে
        viewport={{ once: false, amount: 0.2 }} 
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10"
      >
        
        <div className="relative group">
          {/* গ্লো ইফেক্ট অ্যানিমেশন */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-1 bg-gradient-to-r from-[#10ac84]/20 via-green-200/20 to-emerald-400/20 rounded-[25px] lg:rounded-[60px] blur-lg"
          ></motion.div>

          <div className="relative backdrop-blur-2xl bg-[#f0fdf4]/90 border border-[#10ac84]/20 rounded-[25px] lg:rounded-[60px] p-6 lg:p-16 shadow-[0_10px_30px_rgba(16,172,132,0.05)] transition-all duration-500 group-hover:border-[#10ac84]/40">
            
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 text-left"
            >
              {/* ১. ব্র্যান্ড সেকশন */}
              <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-3 lg:mb-8">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-8 h-8 lg:w-12 lg:h-12 bg-[#10ac84] rounded-lg lg:rounded-2xl flex items-center justify-center text-white font-black text-sm lg:text-xl shadow-md -rotate-3 cursor-pointer"
                  >
                    শ
                  </motion.div>
                  <h3 className="text-lg lg:text-2xl font-black text-slate-800 tracking-tight">
                    শিক্ষার <span className="text-[#10ac84]">আলো</span>
                  </h3>
                </div>
                <p className="text-slate-600 text-[10px] lg:text-sm font-bold leading-relaxed mb-4 max-w-xs">
                  সঠিক দিকনির্দেশনাই সাফল্যের মূল চাবিকাঠি।
                </p>
                <div className="flex gap-2">
                  {["FB", "YT", "LI"].map((social) => (
                    <motion.div 
                      key={social} 
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 lg:w-11 lg:h-11 rounded-lg bg-white border border-[#10ac84]/10 flex items-center justify-center shadow-sm font-black text-[8px] text-slate-400 hover:text-[#10ac84] hover:border-[#10ac84] transition-all cursor-pointer"
                    >
                      {social}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ২. লিঙ্কসমূহ */}
              <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-1">
                <h4 className="text-[11px] lg:text-lg font-black text-slate-800 mb-3 lg:mb-8 flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-[#10ac84] rounded-full"></span>
                  লিঙ্ক
                </h4>
                <ul className="space-y-2 text-slate-600 text-[10px] lg:text-sm font-bold">
                  {["হোম", "কোর্স", "আমাদের সম্পর্কে"].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5, color: "#10ac84" }}>
                      <Link href="#" className="transition-colors">{item}</Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* ৩. ব্যাচ সেকশন */}
              <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-1">
                <h4 className="text-[11px] lg:text-lg font-black text-slate-800 mb-3 lg:mb-8 flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-yellow-400 rounded-full"></span>
                  ব্যাচ
                </h4>
                <ul className="space-y-2 text-slate-600 text-[10px] lg:text-sm font-bold">
                  {["৬ষ্ঠ - ৮ম", "এসএসসি", "মডেল টেস্ট"].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }} className="italic cursor-default">
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* ৪. যোগাযোগ */}
              <motion.div variants={fadeInUp} className="col-span-2 lg:col-span-1">
                <h4 className="text-[11px] lg:text-lg font-black text-slate-800 mb-3 lg:mb-8 flex items-center gap-1.5">
                  <span className="w-1 h-3 bg-emerald-500 rounded-full"></span>
                  যোগাযোগ
                </h4>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/60 backdrop-blur-sm p-3 lg:p-5 rounded-xl lg:rounded-[25px] border border-[#10ac84]/10 shadow-sm"
                >
                  <p className="text-slate-700 text-[9px] lg:text-sm font-black mb-1">মেইন রোড, ঢাকা।</p>
                  <p className="text-[#10ac84] text-[11px] lg:text-base font-black italic">
                    📞 +৮৮০ ১৭১২-৩৪৫
                  </p>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* কপিরাইট */}
            <motion.div 
              variants={fadeInUp}
              className="mt-8 lg:mt-16 pt-5 border-t border-[#10ac84]/10 flex flex-row items-center justify-between gap-4"
            >
              <p className="text-slate-500 text-[8px] lg:text-[10px] font-black uppercase tracking-wider">
                © {new Date().getFullYear()} শিক্ষার আলো
              </p>
              
              <motion.button 
                whileHover={{ y: -5, backgroundColor: "#10ac84", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
                className="w-8 h-8 lg:w-12 lg:h-12 bg-white text-[#10ac84] rounded-lg lg:rounded-xl flex items-center justify-center text-sm shadow-sm border border-[#10ac84]/10 transition-all"
              >
                ↑
              </motion.button>
            </motion.div>
          </div>
        </div>

      </motion.div>
    </footer>
  );  
};

export default Footer;