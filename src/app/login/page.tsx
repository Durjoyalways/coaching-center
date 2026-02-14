"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; 
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ১. অটো-রিডাইরেক্ট লজিক (লগইন থাকলে সরাসরি ড্যাশবোর্ডে যাবে)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const role = userDoc.data().role;
          if (role === "admin") {
            router.push("/admin");
          } else {
            router.push("/");
          }
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

  // ২. লগইন সাবমিট হ্যান্ডলার
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        setErrorMsg("দুঃখিত, আপনার প্রোফাইলটি খুঁজে পাওয়া যায়নি!");
      }
    } catch (error: any) {
      setErrorMsg("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 lg:p-10 font-sans selection:bg-[#10ac84]/20">
      
      {/* 🌌 ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#10ac84]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-slate-200/50 blur-[120px] rounded-full animate-pulse" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-5xl bg-white rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row min-h-[600px] z-10 border border-slate-100"
      >
        
        {/* 🎨 বাম পাশ: ইলাস্ট্রেশন সেকশন (রঙ: #10ac84) */}
        <div className="lg:w-1/2 bg-[#10ac84] p-10 lg:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-52 h-52 lg:w-72 lg:h-72 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 mb-8 relative shadow-2xl">
              <span className="text-[110px] lg:text-[140px] drop-shadow-2xl animate-float">💃</span>
              <span className="absolute bottom-2 -left-4 text-6xl opacity-60">🌿</span>
              <span className="absolute bottom-2 -right-4 text-6xl opacity-60">🌱</span>
            </div>
            
            <p className="text-white text-lg lg:text-xl leading-relaxed max-w-xs font-bold">
              শিক্ষার আলো কোচিং সেন্টার
            </p>
            <p className="text-white/80 text-xs lg:text-sm mt-2 italic">
              "আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ আমাদের লক্ষ্য।"
            </p>
          </motion.div>

          {/* ডেকোরেটিভ এলিমেন্টস */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-[-5%] left-[-5%] w-48 h-48 border-4 border-white rounded-full" />
             <div className="absolute bottom-[-10%] right-[10%] w-64 h-64 bg-white rounded-full" />
          </div>
        </div>

        {/* 🔐 ডান পাশ: লগইন ফর্ম (সাদা ব্যাকগ্রাউন্ড) */}
        <div className="lg:w-1/2 bg-white p-8 lg:p-20 flex flex-col justify-center relative">
          
          {/* Welcome back ট্যাব */}
          <div className="absolute top-0 right-10 lg:right-20">
             <div className="bg-[#10ac84] text-white px-8 py-3 rounded-b-[20px] font-bold text-xs lg:text-sm shadow-lg tracking-wide uppercase">
                স্বাগতম
             </div>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <header className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">অ্যাকাউন্টে লগইন করুন</h2>
            </header>

            {/* এরর মেসেজ প্রদর্শন */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-bold mb-6 border border-red-100"
                >
                  ⚠ {errorMsg}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleLogin} className="space-y-8">
              
              {/* ইমেইল ইনপুট */}
              <div className="relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  ইমেইল এড্রেস
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200 placeholder:font-normal"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              {/* পাসওয়ার্ড ইনপুট */}
              <div className="relative group border-b-2 border-slate-100 focus-within:border-[#10ac84] transition-all py-1">
                <label className="block text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1 group-focus-within:text-[#10ac84]">
                  পাসওয়ার্ড
                </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-700 font-bold py-1 placeholder:text-slate-200"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* লগইন বাটন */}
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
                  "প্রবেশ করুন"
                )}
              </motion.button>

              <div className="flex flex-col items-center gap-4 mt-8">
                <Link href="/register" className="text-xs font-black text-slate-400 hover:text-[#10ac84] transition-colors uppercase tracking-widest">
                    নতুন অ্যাকাউন্ট তৈরি করুন
                </Link>
                <button type="button" className="text-xs font-black text-slate-300 hover:text-red-400 transition-colors uppercase tracking-widest">
                    পাসওয়ার্ড ভুলে গেছেন?
                </button>
              </div>
            </form>
          </div>
        </div>

      </motion.div>

      {/* ফুটার ব্র্যান্ডিং */}
      <div className="fixed bottom-6 text-slate-300 text-[10px] uppercase tracking-[0.5em] font-black z-0">
        ডিজাইন করেছেন <span className="text-slate-400">শিক্ষার আলো টিম</span>
      </div>
    </div>
  );
};

export default LoginPage;