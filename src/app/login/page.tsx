"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase"; 
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // যদি ইউজার অলরেডি লগইন থাকে, তবে তাকে অটোমেটিক হোম পেজে পাঠিয়ে দিবে
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
      // ১. Firebase Auth দিয়ে লগইন করা
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ২. Firestore থেকে ডাটা চেক করা (নিশ্চিত হওয়ার জন্য যে ইউজার ডাটাবেজে আছে)
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        // ৩. সফল লগইন হলে সরাসরি হোম পেজে (/) রিডাইরেক্ট
        router.push("/"); 
      } else {
        // যদি Auth-এ থাকে কিন্তু Firestore-এ ডাটা না থাকে
        alert("ইউজার ডাটা খুঁজে পাওয়া যায়নি!");
      }
    } catch (error: any) {
      console.error(error);
      // পাসওয়ার্ড বা ইমেইল ভুল হলে মেসেজ দেখানো
      alert("লগইন ব্যর্থ: ইমেইল বা পাসওয়ার্ড সঠিক নয়।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f4fcf0] min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (ববলস) */}
      <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] bg-green-200 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] opacity-50"></div>

      <div className="w-full max-w-md bg-white/40 backdrop-blur-3xl rounded-[60px] p-10 lg:p-14 border border-white/60 shadow-[0_40px_100px_rgba(22,101,52,0.08)] relative z-10 transition-all">
        
        {/* লোগো আইকন */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-[22px] flex items-center justify-center text-white shadow-xl">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2">লগইন</h1>
          <p className="text-green-800/70 font-bold text-xs uppercase tracking-[0.2em]">স্বাগতম শিক্ষার আলোয়</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-3 ml-2">Email</label>
            <input 
              type="email" 
              placeholder="আপনার ইমেইল"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          <div>
            <label className="block text-slate-800 font-black text-[10px] uppercase tracking-[0.2em] mb-3 ml-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-7 py-4 rounded-3xl bg-white/80 border border-green-100 focus:border-green-500 focus:bg-white outline-none transition-all font-bold text-slate-700 shadow-sm"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-green-600 text-white py-5 rounded-[28px] font-black text-lg shadow-xl shadow-green-900/10 hover:bg-[#fffdf5] hover:text-green-700 hover:border-2 hover:border-yellow-200 transition-all duration-500 transform active:scale-95 disabled:opacity-50"
          >
            {loading ? "লোডিং..." : "লগইন করুন"}
          </button>
        </form>

        <div className="mt-12 text-center">
          <Link 
            href="/register" 
            className="text-green-700 font-black text-xs uppercase tracking-widest hover:underline"
          >
            নতুন অ্যাকাউন্ট তৈরি করুন →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;