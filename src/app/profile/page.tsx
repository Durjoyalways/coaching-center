"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Mail, ShieldCheck, Calendar, LogOut, ArrowLeft } from "lucide-react";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // ফায়ারস্টোর থেকে ইউজারের অতিরিক্ত ডাটা (যেমন: রোল) আনা
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        // লগইন না থাকলে লগইন পেজে পাঠিয়ে দেওয়া
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a192f]">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
        className="relative z-10 w-full max-w-[500px]"
      >
        {/* মেইন ডার্ক কার্ড */}
        <div className="bg-[#051120] rounded-none border-[12px] border-[#132337] shadow-2xl p-6 md:p-10 pt-20 relative overflow-visible">
          
          {/* প্রোফাইল ইমেজ সেকশন (গুগল ফটো লজিকসহ) */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#3e7263] rounded-full border-[6px] border-[#0a192f] flex items-center justify-center shadow-xl overflow-hidden shadow-emerald-900/20">
             {auth.currentUser?.photoURL ? (
               <img 
                 src={auth.currentUser.photoURL} 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
             ) : (
               <span className="text-5xl font-black text-white/90">
                  {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
               </span>
             )}
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {userData?.name || auth.currentUser?.displayName || "ব্যবহারকারী"}
            </h1>
            <p className="text-emerald-400 text-[10px] uppercase tracking-[0.3em] font-black mt-2">
              {userData?.role || "STUDENT"} ACCOUNT
            </p>
          </div>

          <div className="space-y-4">
            {/* ইমেইল কার্ড */}
            <div className="flex overflow-hidden group">
              <div className="bg-[#e8ecef] p-4 flex items-center justify-center border-r border-slate-300">
                <Mail size={20} className="text-slate-600" />
              </div>
              <div className="w-full bg-white px-5 py-3 flex flex-col justify-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ইমেইল ঠিকানা</p>
                <p className="text-sm font-bold text-slate-800 truncate">{auth.currentUser?.email}</p>
              </div>
            </div>

            {/* ইউজার রোল কার্ড */}
            <div className="flex overflow-hidden">
              <div className="bg-[#e8ecef] p-4 flex items-center justify-center border-r border-slate-300">
                <ShieldCheck size={20} className="text-slate-600" />
              </div>
              <div className="w-full bg-white px-5 py-3 flex flex-col justify-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">অ্যাকাউন্ট টাইপ</p>
                <p className="text-sm font-bold text-slate-800 capitalize">{userData?.role || "শিক্ষার্থী"}</p>
              </div>
            </div>

            {/* স্ট্যাটাস কার্ড */}
            <div className="flex overflow-hidden">
              <div className="bg-[#e8ecef] p-4 flex items-center justify-center border-r border-slate-300">
                <Calendar size={20} className="text-slate-600" />
              </div>
              <div className="w-full bg-white px-5 py-3 flex flex-col justify-center">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">অ্যাকাউন্ট স্ট্যাটাস</p>
                <p className="text-sm font-bold text-emerald-600 font-black">সক্রিয় (Active)</p>
              </div>
            </div>
          </div>

          {/* বাটন গ্রুপ */}
          <div className="grid grid-cols-1 gap-4 mt-10">
            <button 
              onClick={() => router.push("/")}
              className="w-full py-4 bg-[#3e7263] hover:bg-[#4a8a77] text-white font-bold text-xs tracking-[0.2em] transition-all uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <ArrowLeft size={16} /> হোম পেজে ফিরে যান
            </button>
            
            <button 
              onClick={handleLogout}
              className="w-full py-3 border-2 border-red-500/20 hover:border-red-500/50 hover:bg-red-500/5 text-red-500 font-black text-[10px] tracking-[0.3em] transition-all uppercase flex items-center justify-center gap-2 active:scale-95"
            >
              <LogOut size={16} /> লগ-আউট করুন
            </button>
          </div>
        </div>
      </motion.div>

      {/* ফুটার ব্র্যান্ডিং */}
      <div className="fixed bottom-6 text-[#1b2b41] text-[10px] uppercase tracking-[0.5em] font-black pointer-events-none">
        শিক্ষার আলো ডিজিটাল ক্যাম্পাস
      </div>
    </div>
  );
}