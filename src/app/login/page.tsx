"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // লিঙ্ক ব্যবহারের জন্য ইমপোর্ট
import { auth, db } from "@/lib/firebase"; 
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Lock } from "lucide-react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState(""); 

  // পাসওয়ার্ড রিসেট হ্যান্ডলার
  const handleResetPassword = async () => {
    if (!email) {
      setErrorMsg("পাসওয়ার্ড রিসেট করতে আগে আপনার ইমেইলটি লিখুন।");
      setSuccessMsg("");
      return;
    }
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setSuccessMsg("আপনার ইমেইলে পাসওয়ার্ড রিসেট লিঙ্ক পাঠানো হয়েছে!");
      setErrorMsg("");
    } catch (error: any) {
      setErrorMsg("পাসওয়ার্ড রিসেট লিঙ্ক পাঠানো সম্ভব হয়নি। ইমেইলটি সঠিক কিনা দেখুন।");
      setSuccessMsg("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const role = userDoc.data().role;
          if (role === "admin") router.push("/admin");
          else router.push("/");
        }
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === "admin") router.push("/admin");
        else router.push("/");
      } else {
        setErrorMsg("প্রোফাইলটি খুঁজে পাওয়া যায়নি!");
      }
    } catch (error: any) {
      setErrorMsg("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* 🌌 ব্যাকগ্রাউন্ড */}
      <div className="fixed inset-0 bg-[#0a192f] z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-900/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-emerald-900/30 blur-[150px] rounded-full" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-[450px]">
        <div className="bg-[#051120] rounded-none border-[12px] border-[#132337] shadow-2xl p-8 pt-16 relative">
          
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#3e7263] rounded-full border-[6px] border-[#0a192f] flex items-center justify-center shadow-xl">
            <User size={60} className="text-white/80" />
          </div>

          <div className="mt-8 space-y-6">
            <AnimatePresence>
              {errorMsg && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs text-center font-bold">{errorMsg}</motion.p>}
              {successMsg && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 text-xs text-center font-bold">{successMsg}</motion.p>}
            </AnimatePresence>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="flex overflow-hidden">
                <div className="bg-[#e8ecef] p-4 flex items-center justify-center border-r border-slate-300">
                  <User size={20} className="text-slate-600" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white px-4 py-3 outline-none text-slate-800 font-medium"
                  placeholder="ব্যবহারকারীর ইমেইল"
                  required
                />
              </div>

              <div className="flex overflow-hidden">
                <div className="bg-[#e8ecef] p-4 flex items-center justify-center border-r border-slate-300">
                  <Lock size={20} className="text-slate-600" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white px-4 py-3 outline-none text-slate-800 font-medium"
                  placeholder="পাসওয়ার্ড"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-[12px] text-slate-400 font-medium px-1">
                <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                  <input type="checkbox" className="accent-emerald-600" /> মনে রাখুন
                </label>
                <button 
                  type="button" 
                  onClick={handleResetPassword}
                  className="italic hover:text-white transition-colors underline underline-offset-4"
                >
                  পাসওয়ার্ড ভুলে গেছেন?
                </button>
              </div>

              <button disabled={loading} type="submit" className="w-full py-4 bg-[#3e7263] hover:bg-[#4a8a77] text-white font-bold text-sm tracking-[0.2em] transition-all uppercase flex items-center justify-center">
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  "প্রবেশ করুন"
                )}
              </button>

              {/* নতুন অ্যাকাউন্ট যুক্ত করার লিঙ্ক */}
              <div className="text-center pt-4 border-t border-[#132337] mt-4">
                <p className="text-[12px] text-slate-500 font-medium">
                  আপনি কি নতুন?{" "}
                  <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-bold uppercase tracking-widest transition-all">
                    নতুন অ্যাকাউন্ট তৈরি করুন
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      
      {/* ফুটার ব্র্যান্ডিং */}
      <div className="fixed bottom-6 text-[#1b2b41] text-[10px] uppercase tracking-[0.5em] font-black pointer-events-none">
        শিক্ষার আলো কোচিং সেন্টার
      </div>
    </div>
  );
};
  
export default LoginPage;