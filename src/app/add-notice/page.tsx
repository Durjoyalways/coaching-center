"use client";

import React, { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase"; 
import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AddNotice() {
  const [notice, setNotice] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // আপনার দেওয়া সঠিক তথ্য এখানে বসানো হয়েছে
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
      // ১. Cloudinary-তে সরাসরি আপলোড
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
          throw new Error("ফাইল আপলোড ব্যর্থ হয়েছে।");
        }
      }

      // ২. ফায়ারবেস ফায়ারস্টোরে ডাটা সেভ
      await addDoc(collection(db, "notices"), {
        content: notice,
        pdfUrl: uploadedPdfUrl,
        createdAt: serverTimestamp(),
        dateString: new Date().toLocaleDateString('bn-BD', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }),
      });

      alert("নোটিশ ও পিডিএফ সফলভাবে পাবলিশ হয়েছে!");
      router.push("/notice");
    } catch (error) {
      console.error(error);
      alert("সমস্যা হয়েছে! নিশ্চিত করুন Cloudinary Preset টি 'Unsigned' করা আছে।");
    } finally {
      setLoading(false);
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-[#f4fcf0] pt-32 pb-12 px-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl border border-white">
        <h1 className="text-3xl font-black text-slate-900 mb-2">নতুন নোটিশ <span className="text-green-600">পাবলিশ</span></h1>
        <p className="text-gray-500 font-bold mb-8 text-[10px] uppercase tracking-widest italic">শিক্ষার আলো অ্যাডমিন প্যানেল</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-gray-400 mb-3 ml-2">নোটিশের বিষয়বস্তু</label>
            <textarea
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              placeholder="আজকের নোটিশটি এখানে লিখুন..."
              className="w-full h-48 p-6 rounded-[30px] border-2 border-green-50 focus:border-green-500 outline-none transition-all font-bold text-gray-700 bg-white/50"
              required
            />
          </div>

          <div className="bg-green-50/50 p-6 rounded-[30px] border-2 border-dashed border-green-200">
            <label className="block text-[11px] font-black text-green-600 mb-3 ml-2 uppercase tracking-tighter italic">ডিভাইস থেকে PDF ফাইল (ঐচ্ছিক)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-black file:bg-green-600 file:text-white hover:file:bg-black cursor-pointer transition-all"
            />
            {pdfFile && <p className="mt-3 text-xs font-bold text-gray-400 italic ml-2 leading-none">সিলেক্ট করা ফাইল: {pdfFile.name}</p>}
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-100 hover:bg-slate-900 transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? "আপলোড ও পাবলিশ হচ্ছে..." : "পাবলিশ করুন"}
          </button>
        </form>
      </div>
    </div>
  );
}