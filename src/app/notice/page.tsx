"use client";

import React, { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion";

export default function NoticeBoard() {
  const [notices, setNotices] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<any>(null);

  useEffect(() => {
    // ১. অ্যাডমিন চেক
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      }
    });

    // ২. নোটিশ লোড করা
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribeNotices = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeAuth();
      unsubscribeNotices();
    };
  }, []);

  const getDownloadUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("cloudinary.com")) {
      return url.replace("/upload/", "/upload/fl_attachment/");
    }
    return url;
  };

  const latestNotice = notices.length > 0 ? notices[0] : null;

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans">
      
      {/* --- রানিং নোটিশ বার --- */}
      {latestNotice && (
        <div className="bg-slate-900 py-3 relative overflow-hidden flex items-center shadow-md">
          <div className="absolute left-0 top-0 bottom-0 bg-green-500 px-4 flex items-center z-30 font-bold text-white text-[10px] uppercase italic">
            ব্রেকিং
          </div>
          <div className="flex whitespace-nowrap animate-marquee">
             {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white mx-10 text-sm font-medium">
                  📢 {latestNotice.content}
                </span>
             ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-16">
        <header className="mb-10 text-center md:text-left">
          <h2 className="text-4xl font-black text-slate-800 tracking-tight">
            সকল <span className="text-green-500">নোটিশ</span>
          </h2>
          <p className="text-slate-500 mt-2">প্রতিষ্ঠানের সাম্প্রতিক সকল আপডেট নিচে তালিকাভুক্ত করা হয়েছে।</p>
        </header>

        {/* --- নোটিশ লিস্ট (লাইন বাই লাইন) --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {notices.length > 0 ? (
            <div className="divide-y divide-slate-50">
              {notices.map((n, index) => (
                <div 
                  key={n.id}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-5 transition-all hover:bg-green-50/50 group ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1 text-green-500 opacity-60 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                        {n.dateString}
                      </span>
                      <h4 
                        onClick={() => setSelectedNotice(n)}
                        className="text-slate-700 font-bold text-base md:text-lg cursor-pointer hover:text-green-600 transition-colors line-clamp-1"
                      >
                        {n.content}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4 md:mt-0 md:ml-6">
                    <button 
                      onClick={() => setSelectedNotice(n)}
                      className="px-4 py-2 bg-slate-100 text-slate-600 text-[11px] font-black uppercase rounded-xl hover:bg-green-500 hover:text-white transition-all"
                    >
                      বিস্তারিত
                    </button>

                    {/* অ্যাডমিন কন্ট্রোল বাটন */}
                    {isAdmin && (
                      <div className="flex items-center gap-2 border-l pl-3 border-slate-200">
                        <button 
                          onClick={() => {/* এডিট লজিক এখানে হবে */}}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                        </button>
                        <button 
                          onClick={async () => {
                            if(confirm("নিশ্চিত মুছে ফেলবেন?")) {
                              await deleteDoc(doc(db, "notices", n.id));
                            }
                          }}
                          className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-20 text-center text-slate-400 font-bold uppercase tracking-widest">
              কোনো নোটিশ খুঁজে পাওয়া যায়নি
            </div>
          )}
        </div>
      </div>

      {/* --- বিস্তারিত মডাল --- */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-xl p-8 rounded-[40px] shadow-2xl overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase tracking-widest">
                    Notice Details
                  </span>
                  <button onClick={() => setSelectedNotice(null)} className="text-slate-400 hover:text-red-500 transition-colors">✕</button>
                </div>

                <div className="mb-6">
                   <p className="text-slate-400 text-xs font-bold uppercase mb-1">প্রকাশের তারিখ: {selectedNotice.dateString}</p>
                   <div className="h-1 w-12 bg-green-500 rounded-full"></div>
                </div>

                <div className="bg-slate-50 p-6 rounded-3xl mb-8">
                  <p className="text-slate-700 font-bold text-lg leading-relaxed whitespace-pre-wrap">
                    {selectedNotice.content}
                  </p>
                </div>

                <div className="flex gap-3">
                  {selectedNotice.pdfUrl && (
                    <a 
                      href={getDownloadUrl(selectedNotice.pdfUrl)} 
                      className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-center text-sm hover:bg-green-600 transition-all"
                    >
                      📄 ডাউনলোড PDF
                    </a>
                  )}
                  <button onClick={() => setSelectedNotice(null)}
                    className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-black text-sm"
                  >
                    বন্ধ করুন
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}