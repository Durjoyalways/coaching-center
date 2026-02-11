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
    // অ্যাডমিন চেক
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          setIsAdmin(true);
        }
      }
    });

    // নোটিশ লোড
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribeNotices = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubscribeAuth();
      unsubscribeNotices();
    };
  }, []);

  return (
    <div className="bg-[#fcfcfc] py-20 overflow-hidden font-sans relative">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-10 left-[10%] text-7xl animate-pulse">📢</div>
         <div className="absolute bottom-10 right-[10%] text-7xl animate-bounce">🧪</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 rounded-full text-green-700 font-black text-[10px] uppercase tracking-[0.3em] mb-4 shadow-sm">
           <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
           Latest Updates
        </div>
        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter">
          নোটিশ <span className="text-green-500">বোর্ড</span>
        </h2>
      </div>

      {/* 🏃‍♂️ Moving Notice Bar */}
      <div className="relative py-10 bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.1)] group cursor-pointer">
        {/* Glossy Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] items-center">
            {notices.length > 0 ? (
              [...notices, ...notices].map((n, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedNotice(n)}
                  className="flex items-center px-12 group/item transition-all"
                >
                  <span className="text-3xl mr-6 transform group-hover/item:scale-125 transition-transform" style={{ filter: 'drop-shadow(0 0 10px #22c55e)' }}>🔔</span>
                  <span className="text-white text-xl lg:text-2xl font-bold tracking-wide group-hover/item:text-green-400 transition-colors">
                    <span className="text-green-500 mr-4 font-black">[{n.dateString}]</span>
                    {n.content.substring(0, 80)}{n.content.length > 80 ? "..." : ""}
                    <span className="ml-4 text-[10px] bg-green-500 text-white px-3 py-1 rounded-full uppercase tracking-tighter">Click to View</span>
                  </span>
                  <span className="mx-16 text-slate-700 text-5xl font-light opacity-30">•</span>
                </div>
              ))
            ) : (
              <span className="text-slate-500 font-bold px-10 text-2xl tracking-widest uppercase">কোনো নতুন নোটিশ নেই...</span>
            )}
          </div>
        </div>
      </div>

      {/* 📝 Details Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNotice(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-2xl p-10 lg:p-14 rounded-[60px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white"
            >
              <button 
                onClick={() => setSelectedNotice(null)}
                className="absolute top-10 right-10 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl hover:bg-red-50 hover:text-red-500 transition-all"
              >✕</button>

              <div className="mb-8">
                <span className="bg-green-100 text-green-700 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest">
                  Published: {selectedNotice.dateString}
                </span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight border-l-8 border-green-500 pl-6">
                নোটিশের বিস্তারিত
              </h3>

              <div className="bg-slate-50 p-8 rounded-[40px] mb-10 max-h-[400px] overflow-y-auto custom-scrollbar">
                <p className="text-slate-700 font-bold text-lg leading-relaxed whitespace-pre-wrap">
                  {selectedNotice.content}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {selectedNotice.pdfUrl && (
                  <a 
                    href={selectedNotice.pdfUrl} 
                    target="_blank"
                    className="flex-1 bg-slate-900 text-white py-5 rounded-[25px] font-black text-center hover:bg-green-600 transition-all shadow-xl"
                  >
                    📄 PDF ফাইল ডাউনলোড
                  </a>
                )}
                <button 
                  onClick={() => setSelectedNotice(null)}
                  className="flex-1 bg-green-100 text-green-700 py-5 rounded-[25px] font-black hover:bg-green-200 transition-all"
                >
                  বন্ধ করুন
                </button>
              </div>

              {isAdmin && (
                <button 
                  onClick={async () => {
                    if(confirm("মুছে ফেলবেন?")) {
                      await deleteDoc(doc(db, "notices", selectedNotice.id));
                      setSelectedNotice(null);
                    }
                  }}
                  className="mt-6 text-red-400 font-black text-xs uppercase tracking-widest hover:text-red-600 w-full text-center"
                >
                  Delete This Notice (Admin Only)
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tailwind Custom Styles (Inline Tip) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}