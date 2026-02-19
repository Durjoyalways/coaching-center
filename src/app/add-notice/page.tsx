"use client";

import React, { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AddNotice() {
  const [notice, setNotice] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const CLOUD_NAME = "dzmdvq3hs"; 
  const UPLOAD_PRESET = "notice_preset"; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        } else {
          router.push("/");
        }
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notice.trim()) return;

    setLoading(true);
    let uploadedPdfUrl = "";

    try {
      if (pdfFile) {
        const formData = new FormData();
        formData.append("file", pdfFile);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
          { method: "POST", body: formData }
        );
        
        const fileData = await res.json();
        if (fileData.secure_url) {
          uploadedPdfUrl = fileData.secure_url;
        } else {
          throw new Error("Upload failed");
        }
      }

      await addDoc(collection(db, "notices"), {
        content: notice,
        pdfUrl: uploadedPdfUrl,
        createdAt: serverTimestamp(),
        dateString: new Date().toLocaleDateString('bn-BD', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }),
      });

      alert("সফলভাবে পাবলিশ হয়েছে!");
      router.push("/notice");
    } catch (error) {
      console.error(error);
      alert("সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) return null;

  return (
    // সরাসরি স্টাইল দিয়ে ডার্ক ব্যাকগ্রাউন্ড ফিক্স করা হলো
    <div 
      style={{ backgroundColor: "#0a192f", color: "white" }} 
      className="min-h-screen pt-32 pb-12 px-6 font-sans relative overflow-hidden"
    >
      
      {/* 🌌 Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", backdropFilter: "blur(24px)" }}
        className="max-w-2xl mx-auto p-8 md:p-12 rounded-[45px] shadow-2xl border border-white/10 relative z-10"
      >
        <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-emerald-400 font-black text-[9px] uppercase tracking-[0.3em] mb-4">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                Admin Panel
            </div>
            <h1 className="text-4xl font-black text-white leading-tight tracking-tighter">নতুন নোটিশ <span className="text-emerald-400">পাবলিশ</span></h1>
            <p className="text-slate-400 font-medium mt-2">তথ্যগুলো ডার্ক মোডে আপডেট হচ্ছে।</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 text-left">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-2 text-left">নোটিশের বিষয়বস্তু</label>
            <textarea
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              placeholder="এখানে লিখুন..."
              style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              className="w-full h-48 p-6 rounded-[30px] border border-white/10 focus:border-emerald-500/50 outline-none transition-all font-bold text-slate-100 placeholder:text-slate-600 resize-none"
              required
            />
          </div>

          <div 
            style={{ backgroundColor: "rgba(52, 211, 153, 0.05)" }}
            className="p-6 rounded-[35px] border border-dashed border-emerald-500/20"
          >
            <label className="block text-[10px] font-black text-emerald-400 mb-3 ml-2 uppercase tracking-widest italic text-left">PDF ফাইল (ঐচ্ছিক)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
              className="block w-full text-xs text-slate-500 file:mr-6 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:bg-emerald-500 file:text-[#0a192f] hover:file:bg-white cursor-pointer transition-all"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-white text-[#0a192f] py-5 rounded-[22px] font-black text-lg transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-emerald-500/10"
          >
            {loading ? "পাবলিশ হচ্ছে..." : "পাবলিশ করুন"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}