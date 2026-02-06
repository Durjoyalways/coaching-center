"use client";

import React, { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; // আপনার তৈরি করা firebase.js ফাইল
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  
  // ফর্ম ডাটা স্টেট
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // ইনপুট হ্যান্ডলার
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // সাবমিট লজিক
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ১. Firebase Auth দিয়ে ইউজার তৈরি
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;

      // ২. Firestore-এ ইউজারের এক্সট্রা তথ্য (Role সহ) সেভ করা
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: "user", // ডিফল্টভাবে সবাই সাধারণ ইউজার হবে
        createdAt: new Date().toISOString(),
      });

      alert("অভিনন্দন! আপনার একাউন্ট তৈরি হয়েছে।");
      router.push("/login"); // লগইন পেজে পাঠিয়ে দিবে

    } catch (error: any) {
      console.error(error);
      alert("রেজিস্ট্রেশন ব্যর্থ: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f4fcf0] min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* --- ডেকোরেটিভ ব্যাকগ্রাউন্ড এলিমেন্টস --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-200 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] opacity-50"></div>

      {/* --- রেজিস্ট্রেশন কার্ড (Glassmorphism) --- */}
      <div className="w-full max-w-xl bg-white/40 backdrop-blur-3xl rounded-[60px] p-8 lg:p-12 border border-white/60 shadow-[0_40px_100px_rgba(22,101,52,0.08)] relative z-10 my-10 transition-all">
        
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-green-600 rounded-[22px] text-white shadow-xl mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 018.625 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">রেজিস্ট্রেশন</h1>
          <p className="text-green-800/70 font-bold text-xs uppercase tracking-[0.2em]">নতুন মেম্বারশিপের জন্য তথ্য দিন</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* নাম */}
          <div className="md:col-span-2">
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-2">Full Name</label>
            <input 
              name="name"
              type="text" 
              placeholder="আপনার পূর্ণ নাম"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          {/* ইমেইল বা আইডি */}
          <div className="md:col-span-1">
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-2">Email</label>
            <input 
              name="email"
              type="email" 
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          {/* ফোন নম্বর */}
          <div className="md:col-span-1">
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-2">Phone</label>
            <input 
              name="phone"
              type="tel" 
              placeholder="01XXXXXXXXX"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          {/* পাসওয়ার্ড */}
          <div className="md:col-span-2">
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-2 ml-2">Set Password</label>
            <input 
              name="password"
              type="password" 
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          {/* সাবমিট বাটন */}
          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-green-600 text-white py-5 rounded-[28px] font-black text-lg shadow-xl shadow-green-900/10 hover:bg-[#fffdf5] hover:text-green-700 hover:border-2 hover:border-yellow-200 transition-all duration-500 transform active:scale-95 disabled:opacity-50"
            >
              {loading ? "অপেক্ষা করুন..." : "একাউন্ট তৈরি করুন"}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center border-t border-green-100/30 pt-8">
          <p className="text-slate-500 font-bold text-sm">
            ইতিমধ্যেই একাউন্ট আছে? {" "}
            <Link href="/login" className="text-green-700 font-black hover:underline tracking-tight">
              লগইন করুন →
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center opacity-10 pointer-events-none">
        <span className="text-green-900 font-black text-[10vw] leading-none select-none uppercase">Join Us</span>
      </div>
    </div>
  );
};

export default RegisterPage;