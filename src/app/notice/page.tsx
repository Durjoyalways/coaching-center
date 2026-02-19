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
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      }
    });

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
    <div className="bg-[#0a192f] min-h-screen font-sans relative overflow-hidden">
      
      {/* 🌌 Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* --- রানিং নোটিশ বার (Neon Style) --- */}
      {latestNotice && (
        <div className="bg-emerald-500/10 border-y border-emerald-500/20 py-4 relative overflow-hidden flex items-center backdrop-blur-md z-20">
          <div className="absolute left-0 top-0 bottom-0 bg-emerald-500 px-6 flex items-center z-30 font-black text-[#0a192f] text-[10px] uppercase italic tracking-tighter">
            ব্রেকিং নিউজ
          </div>
          <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-emerald-400 mx-10 text-sm font-bold tracking-wide">
                  📢 {latestNotice.content}
                </span>
              ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <header className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-emerald-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4"
          >
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            নোটিশ বোর্ড
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            সকল <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">নোটিশ</span>
          </h2>
          <p className="text-slate-400 mt-4 text-lg font-medium max-w-xl">প্রতিষ্ঠানের সাম্প্রতিক সকল গুরুত্বপূর্ণ আপডেট এবং তথ্যাবলী নিচে তালিকাভুক্ত করা হয়েছে।</p>
        </header>

        {/* --- নোটিশ লিস্ট (Line by Line Glass Design) --- */}
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white/10 overflow-hidden">
          {notices.length > 0 ? (
            <div className="divide-y divide-white/5">
              {notices.map((n, index) => (
                <motion.div 
                  key={n.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-7 transition-all hover:bg-emerald-500/5 group`}
                >
                  <div className="flex items-start gap-5 flex-1">
                    <div className="mt-1.5 w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-[#0a192f] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-500 group-hover:text-emerald-400 uppercase tracking-widest block mb-1.5 transition-colors">
                        {n.dateString}
                      </span>
                      <h4 
                        onClick={() => setSelectedNotice(n)}
                        className="text-slate-200 font-bold text-lg md:text-xl cursor-pointer hover:text-white transition-colors line-clamp-1"
                      >
                        {n.content}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6 md:mt-0 md:ml-8">
                    <button 
                      onClick={() => setSelectedNotice(n)}
                      className="px-6 py-3 bg-white/5 text-slate-300 text-[11px] font-black uppercase rounded-2xl border border-white/5 hover:bg-emerald-500 hover:text-[#0a192f] hover:border-emerald-500 transition-all shadow-xl shadow-black/20"
                    >
                      বিস্তারিত দেখুন
                    </button>

                    {isAdmin && (
                      <div className="flex items-center gap-2 border-l pl-4 border-white/10">
                        <button 
                          className="p-3 text-blue-400 bg-blue-500/10 hover:bg-blue-500 hover:text-white rounded-xl transition-all"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                        </button>
                        <button 
                          onClick={async () => {
                            if(confirm("নিশ্চিত মুছে ফেলবেন?")) {
                              await deleteDoc(doc(db, "notices", n.id));
                            }
                          }}
                          className="p-3 text-red-400 bg-red-500/10 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-32 text-center">
              <div className="text-6xl mb-6 opacity-20">📂</div>
              <p className="text-slate-500 font-black uppercase tracking-[0.3em]">কোনো নোটিশ খুঁজে পাওয়া যায়নি</p>
            </div>
          )}
        </div>
      </div>

      {/* --- বিস্তারিত মডাল (Ultra Glassmorphism) --- */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="absolute inset-0 bg-[#0a192f]/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#0d213b] w-full max-w-xl p-10 rounded-[50px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden"
            >
              {/* Modal Background Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10" />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full uppercase tracking-widest border border-emerald-500/20">
                    নোটিশের বিবরণ
                  </span>
                  <button onClick={() => setSelectedNotice(null)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-red-500/20 transition-all">✕</button>
                </div>

                <div className="mb-8">
                   <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest mb-2">প্রকাশের তারিখ: {selectedNotice.dateString}</p>
                   <div className="h-1.5 w-16 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 p-8 rounded-[35px] mb-10">
                  <p className="text-slate-200 font-bold text-xl leading-relaxed whitespace-pre-wrap">
                    {selectedNotice.content}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedNotice.pdfUrl && (
                    <a 
                      href={getDownloadUrl(selectedNotice.pdfUrl)} 
                      className="flex-1 bg-emerald-500 text-[#0a192f] py-5 rounded-2xl font-black text-center text-sm hover:bg-white transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                      PDF ডাউনলোড করুন
                    </a>
                  )}
                  <button onClick={() => setSelectedNotice(null)}
                    className="flex-1 bg-white/5 border border-white/10 text-slate-300 py-5 rounded-2xl font-black text-sm hover:bg-white/10 transition-all"
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}