"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // ফায়ারস্টোর থেকে ইউজারের ডাটা আনা
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
        // লগইন না থাকলে লগইন পেজে পাঠিয়ে দাও
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4fcf0]">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4fcf0] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-xl mx-auto">
        {/* প্রোফাইল কার্ড */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white overflow-hidden">
          
          {/* প্রোফাইল হেডার */}
          <div className="bg-green-600 h-32 relative">
            <div className="absolute -bottom-12 left-10">
              <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-4xl font-black text-green-600 border-4 border-white">
                {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
              </div>
            </div>
          </div>

          {/* প্রোফাইল ডিটেইলস */}
          <div className="pt-16 pb-10 px-10">
            <h1 className="text-3xl font-black text-slate-900 mb-1 leading-tight">
              {userData?.name || "ব্যবহারকারী"}
            </h1>
            <p className="text-green-600 font-bold uppercase tracking-widest text-xs mb-8">
              {userData?.role || "Student"} Account
            </p>

            <div className="space-y-6">
              {/* ইমেইল তথ্য */}
              <div className="flex items-center gap-4 bg-green-50/50 p-5 rounded-2xl border border-green-100">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ইমেইল ঠিকানা</p>
                  <p className="text-sm font-bold text-gray-700">{auth.currentUser?.email}</p>
                </div>
              </div>

              {/* মেম্বারশিপ আইডি বা রোল তথ্য */}
              <div className="flex items-center gap-4 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ইউজার রোল</p>
                  <p className="text-sm font-bold text-gray-700 capitalize">{userData?.role || "শিক্ষার্থী"}</p>
                </div>
              </div>

              {/* জয়েনিং ডেট (যদি Firestore এ থাকে) */}
              <div className="flex items-center gap-4 bg-orange-50/50 p-5 rounded-2xl border border-orange-100">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-orange-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">অ্যাকাউন্ট স্ট্যাটাস</p>
                  <p className="text-sm font-bold text-gray-700">সক্রিয় (Active)</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => router.push("/")}
              className="w-full mt-10 bg-slate-900 text-white py-4 rounded-2xl font-black text-sm hover:bg-green-600 transition-all shadow-xl shadow-slate-200"
            >
              হোম পেজে ফিরে যান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}