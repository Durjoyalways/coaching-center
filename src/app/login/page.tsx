"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; 
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        router.push("/"); 
      } else {
        alert("ইউজার ডাটা খুঁজে পাওয়া যায়নি!");
      }
    } catch (error: any) {
      console.error(error);
      alert("লগইন ব্যর্থ: ইমেইল বা পাসওয়ার্ড সঠিক নয়।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* 📚 Background Educational Floating Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.15]">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-10 left-[10%] text-7xl">🎓</motion.div>
        <motion.div animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-40 right-[15%] text-6xl">🔬</motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-20 left-[15%] text-8xl">⚛️</motion.div>
        <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-40 right-[10%] text-7xl">📚</motion.div>
        <div className="absolute top-1/2 left-10 text-5xl">📐</div>
        <div className="absolute top-1/4 right-20 text-5xl">🎨</div>
        <div className="absolute bottom-1/4 left-1/2 text-6xl">🧠</div>
      </div>

      {/* 🟢 Glowing Background Blob (Form এর পেছনে গ্লো দেওয়ার জন্য) */}
      <div className="absolute w-[500px] h-[500px] bg-green-200/30 rounded-full blur-[120px] z-0"></div>

      {/* 💎 Glowing Login Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-[50px] p-10 lg:p-14 border border-green-100 shadow-[0_20px_60px_rgba(34,197,94,0.12)] relative z-10 hover:shadow-[0_20px_80px_rgba(34,197,94,0.2)] transition-shadow duration-500"
      >
        {/* Neon Top Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full shadow-[0_0_15px_#4ade80]"></div>

        {/* লোগো আইকন */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center text-white shadow-[0_10px_25px_rgba(34,197,94,0.4)] transform hover:rotate-6 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">লগইন</h1>
          <p className="text-green-600 font-black text-[10px] uppercase tracking-[0.4em]">শিক্ষার আলো কোচিং সেন্টার</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Email</label>
            <input 
              type="email" 
              placeholder="আপনার ইমেইল"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          <div className="relative group">
            <label className="block text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-4 group-focus-within:text-green-500 transition-colors">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-8 py-5 rounded-[25px] bg-slate-50 border border-transparent focus:border-green-400 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-inner"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full relative group overflow-hidden bg-slate-900 text-white py-5 rounded-[28px] font-black text-lg transition-all duration-500 shadow-xl active:scale-95 disabled:opacity-50"
          >
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              {loading ? "লোডিং..." : "প্রবেশ করুন"}
            </span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <Link 
            href="/register" 
            className="text-slate-400 font-black text-[11px] uppercase tracking-widest hover:text-green-600 transition-colors"
          >
            নতুন অ্যাকাউন্ট তৈরি করুন →
          </Link>
        </div>
      </motion.div>

      {/* 💡 Extra Glowing Decorative Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-pulse blur-sm"></div>
    </div>
  );
};

export default LoginPage;