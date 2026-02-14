"use client";

import React, { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const RegisterPage = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: "user", 
        createdAt: new Date().toISOString(),
      });

      router.push("/login"); 

    } catch (error: any) {
      console.error(error);
      setErrorMsg("রেজিস্ট্রেশন ব্যর্থ: ইমেইলটি ইতিমধ্যে ব্যবহৃত বা তথ্য ভুল।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-10 font-sans selection:bg-[#10ac84]/20">
      
      {/* 🌌 ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#10ac84]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-slate-200/50 blur-[120px] rounded-full animate-pulse" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-6xl bg-white rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[700px] z-10 border border-slate-100"
      >
        
        {/* 🎨 বাম পাশ: ইলাস্ট্রেশন সেকশন (রঙ: #10ac84) */}
        <div className="lg:w-5/12 bg-[#10ac84] p-10 lg:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 mb-8 relative shadow-2xl">
              <span className="text-[100px] lg:text-[120px] drop-shadow-2xl animate-float">📖</span>
              <span className="absolute bottom-2 -left-4 text-5xl opacity-60">✍️</span>
              <span className="absolute bottom-2 -right-4 text-5xl opacity-60">🎓</span>
            </div>
            
            <p className="text-white text-xl lg:text-2xl font-black mb-2">নতুন যাত্রা শুরু হোক!</p>
            <p className="text-white/80 text-xs lg:text-sm italic px-4">
              "শিক্ষার আলো কোচিং সেন্টারে যোগ দিয়ে আপনার মেধার বিকাশ ঘটান। আমরা আছি আপনার প্রতিটি পদক্ষেপে।"
            </p>
          </motion.div>

          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-[-5%] left-[-5%] w-48 h-48 border-4 border-white rounded-full" />
             <div className="absolute bottom-[-10%] right-[10%] w-64 h-64 bg-white rounded-full" />
          </div>
        </div>

        {/* 🔐 ডান পাশ: রেজিস্ট্রেশন ফর্ম */}
        <div className="lg:w-7/12 bg-white p-8 lg:p-16 flex flex-col justify-center relative">
          
          <div className="absolute top-0 right-10 lg:right-20">
             <div className="bg-[#10ac84] text-white px-8 py-3 rounded-b-[20px] font-bold text-xs lg:text-sm shadow-lg">
                রেজিস্ট্রেশন
             </div>
          </div>

          <div className="w-full max-w-lg mx-auto">
            <header className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">নতুন অ্যাকাউন্ট তৈরি করুন</h2>
              <p className="text-slate-400 font-bold text-sm mt-2">তথ্যগুলো দিয়ে ফরমটি পূরণ করুন</p>
            </header>

            <AnimatePresence>
              {errorMsg && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold mb-6 border border-red-100 flex items-center gap-2"
                >
                  <span>⚠</span> {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* নাম */}
              <div className="md:col-span-2 relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  পূর্ণ নাম
                </label>
                <input 
                  name="name"
                  type="text" 
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200 placeholder:font-normal"
                  placeholder="আপনার নাম লিখুন"
                  required
                />
              </div>

              {/* ইমেইল */}
              <div className="relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  ইমেইল এড্রেস
                </label>
                <input 
                  name="email"
                  type="email" 
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200 placeholder:font-normal"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              {/* ফোন */}
              <div className="relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  ফোন নম্বর
                </label>
                <input 
                  name="phone"
                  type="tel" 
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200 placeholder:font-normal"
                  placeholder="017XXXXXXXX"
                  required
                />
              </div>

              {/* পাসওয়ার্ড */}
              <div className="md:col-span-2 relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  পাসওয়ার্ড সেট করুন
                </label>
                <input 
                  name="password"
                  type="password" 
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* বাটন */}
              <div className="md:col-span-2 mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#0e916f" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-[#10ac84] text-white rounded-full font-black text-lg shadow-[0_10px_25px_rgba(16,172,132,0.3)] transition-all flex items-center justify-center gap-2 tracking-wide"
                >
                  {loading ? (
                    <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    "অ্যাকাউন্ট তৈরি করুন"
                  )}
                </motion.button>
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <p className="text-slate-400 font-bold text-sm">
                  ইতিমধ্যেই অ্যাকাউন্ট আছে? {" "}
                  <Link href="/login" className="text-[#10ac84] hover:underline decoration-2 underline-offset-4">
                    লগইন করুন
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

      </motion.div>

      {/* ব্র্যান্ডিং */}
      <div className="fixed bottom-6 text-slate-300 text-[10px] uppercase tracking-[0.5em] font-black">
        শিক্ষার আলো <span className="text-slate-400">কোচিং সেন্টার</span>
      </div>
    </div>
  );
};

export default RegisterPage;