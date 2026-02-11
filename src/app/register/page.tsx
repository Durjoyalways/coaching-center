"use client";

import React, { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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

      alert("অভিনন্দন! আপনার একাউন্ট তৈরি হয়েছে।");
      router.push("/login"); 

    } catch (error: any) {
      console.error(error);
      alert("রেজিস্ট্রেশন ব্যর্থ: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* 📚 Background Educational Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.15]">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 right-[10%] text-7xl">🎓</motion.div>
        <motion.div animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-[5%] text-6xl">🔬</motion.div>
        <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 right-[15%] text-8xl">⚛️</motion.div>
        <motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-1/4 left-[20%] text-7xl">🧪</motion.div>
        <div className="absolute bottom-1/4 left-10 text-5xl">📖</div>
        <div className="absolute top-1/3 right-1/4 text-5xl">🧠</div>
      </div>

      {/* 🟢 Glowing Background Blob */}
      <div className="absolute w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[130px] z-0"></div>

      {/* 💎 Glowing Register Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-[55px] p-8 lg:p-14 border border-green-50 shadow-[0_25px_70px_rgba(34,197,94,0.1)] relative z-10 hover:shadow-[0_25px_90px_rgba(34,197,94,0.18)] transition-all duration-500 my-10"
      >
        {/* Neon Glow Line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_#4ade80]"></div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-3xl text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)] mb-6 transform hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 018.625 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">রেজিস্ট্রেশন</h1>
          <p className="text-green-600 font-black text-[10px] uppercase tracking-[0.4em]">শিক্ষার আলোয় আপনাকে স্বাগতম</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* নাম */}
          <div className="md:col-span-2 group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Full Name</label>
            <input 
              name="name"
              type="text" 
              placeholder="আপনার পূর্ণ নাম"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-[22px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          {/* ইমেইল */}
          <div className="group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Email</label>
            <input 
              name="email"
              type="email" 
              placeholder="ইমেইল দিন"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-[22px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          {/* ফোন */}
          <div className="group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Phone</label>
            <input 
              name="phone"
              type="tel" 
              placeholder="01XXXXXXXXX"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-[22px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          {/* পাসওয়ার্ড */}
          <div className="md:col-span-2 group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Set Password</label>
            <input 
              name="password"
              type="password" 
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-[22px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          {/* সাবমিট বাটন */}
          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full relative group overflow-hidden bg-slate-900 text-white py-5 rounded-[25px] font-black text-lg transition-all duration-500 shadow-xl active:scale-95 disabled:opacity-50"
            >
              <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "অপেক্ষা করুন..." : "একাউন্ট তৈরি করুন"}
                {!loading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>}
              </span>
            </button>
          </div>
        </form>

        <div className="mt-10 text-center border-t border-slate-50 pt-8">
          <p className="text-slate-400 font-bold text-sm">
            ইতিমধ্যেই একাউন্ট আছে? {" "}
            <Link href="/login" className="text-green-600 font-black hover:text-green-700 transition-colors">
              লগইন করুন →
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Decorative Dots */}
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse blur-sm"></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default RegisterPage;