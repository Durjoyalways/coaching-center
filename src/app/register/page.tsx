"use client";

import React, { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, Phone } from "lucide-react";

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ফায়ারস্টোরে ইউজার ডাটা সেভ করা
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phone,
        role: "student", // ডিফল্ট রোল
        createdAt: new Date().toISOString(),
      });

      router.push("/");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMsg("এই ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে।");
      } else {
        setErrorMsg("অ্যাকাউন্ট তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* 🌌 ব্যাকগ্রাউন্ড গ্রেডিয়েন্ট */}
      <div className="fixed inset-0 bg-[#0a192f] z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-900/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-emerald-900/30 blur-[150px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[480px]"
      >
        {/* মেইন ডার্ক কার্ড */}
        <div className="bg-[#051120] rounded-none border-[10px] md:border-[12px] border-[#132337] shadow-2xl p-6 md:p-10 pt-16 relative">
          
          {/* প্রোফাইল আইকন (ইমেজের স্টাইলে) */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-28 h-28 md:w-32 md:h-32 bg-[#3e7263] rounded-full border-[6px] border-[#0a192f] flex items-center justify-center shadow-xl">
            <User size={55} className="text-white/80" strokeWidth={1} />
          </div>

          <div className="mt-4 space-y-6">
            <h2 className="text-white text-xl md:text-2xl font-bold text-center tracking-wide mb-2">নতুন অ্যাকাউন্ট তৈরি</h2>

            <AnimatePresence>
              {errorMsg && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-red-400 text-[11px] text-center font-bold bg-red-400/10 py-2 rounded"
                >
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>

            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* নাম ইনপুট */}
              <div className="flex overflow-hidden group">
                <div className="bg-[#e8ecef] p-3.5 flex items-center justify-center border-r border-slate-300">
                  <User size={18} className="text-slate-600" />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 outline-none text-slate-800 font-bold placeholder:text-slate-400 text-sm"
                  placeholder="আপনার নাম"
                  required
                />
              </div>

              {/* ইমেইল ইনপুট */}
              <div className="flex overflow-hidden">
                <div className="bg-[#e8ecef] p-3.5 flex items-center justify-center border-r border-slate-300">
                  <Mail size={18} className="text-slate-600" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 outline-none text-slate-800 font-bold placeholder:text-slate-400 text-sm"
                  placeholder="ইমেইল এড্রেস"
                  required
                />
              </div>

              {/* ফোন নম্বর ইনপুট */}
              <div className="flex overflow-hidden">
                <div className="bg-[#e8ecef] p-3.5 flex items-center justify-center border-r border-slate-300">
                  <Phone size={18} className="text-slate-600" />
                </div>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 outline-none text-slate-800 font-bold placeholder:text-slate-400 text-sm"
                  placeholder="ফোন নম্বর"
                  required
                />
              </div>

              {/* পাসওয়ার্ড ইনপুট */}
              <div className="flex overflow-hidden">
                <div className="bg-[#e8ecef] p-3.5 flex items-center justify-center border-r border-slate-300">
                  <Lock size={18} className="text-slate-600" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white px-4 py-2.5 outline-none text-slate-800 font-bold placeholder:text-slate-400 text-sm"
                  placeholder="পাসওয়ার্ড"
                  required
                />
              </div>

              {/* রেজিস্টার বাটন */}
              <button 
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-[#3e7263] hover:bg-[#4a8a77] text-white font-bold text-sm tracking-[0.2em] transition-all uppercase mt-4 flex items-center justify-center shadow-lg"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  "অ্যাকাউন্ট তৈরি করুন"
                )}
              </button>

              {/* লগইন লিঙ্ক */}
              <div className="text-center pt-4">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                  ইতিমধ্যে অ্যাকাউন্ট আছে? 
                  <Link href="/login" className="text-emerald-400 ml-2 font-black hover:underline transition-all">
                    লগইন করুন
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {/* ফুটার ব্র্যান্ডিং */}
      <div className="fixed bottom-6 text-[#1b2b41] text-[10px] uppercase tracking-[0.5em] font-black pointer-events-none">
        শিক্ষার আলো ডিজিটাল ক্যাম্পাস
      </div>
    </div>
  );
};

export default RegisterPage;