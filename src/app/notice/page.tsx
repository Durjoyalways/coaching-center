"use client";

import React, { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function NoticeBoard() {
  const [notices, setNotices] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

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

  const handleDelete = async (id: string) => {
    if (window.confirm("আপনি কি নিশ্চিত যে এই নোটিশটি মুছে ফেলতে চান?")) {
      try {
        await deleteDoc(doc(db, "notices", id));
        alert("নোটিশটি মুছে ফেলা হয়েছে।");
      } catch (error) {
        alert("মুছে ফেলতে সমস্যা হয়েছে।");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4fcf0] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-center text-slate-900 mb-12">নোটিশ <span className="text-green-600">বোর্ড</span></h1>
        
        <div className="grid gap-6">
          {notices.map((n) => (
            <div key={n.id} className="bg-white/80 backdrop-blur-md p-8 rounded-[35px] border border-white shadow-sm relative group">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-[11px] font-black uppercase">
                  {n.dateString}
                </span>
                
                {/* অ্যাডমিন ডিলিট বাটন */}
                {isAdmin && (
                  <button 
                    onClick={() => handleDelete(n.id)}
                    className="text-red-400 hover:text-red-600 p-2 transition-colors"
                    title="মুছে ফেলুন"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-1.806c0-1.146-.908-2.112-2.055-2.144-.442-.012-.89-.012-1.335 0-1.147.032-2.055 1.03-2.055 2.144v1.806M15.75 9h-7.5" />
                    </svg>
                  </button>
                )}
              </div>

              <p className="text-lg font-bold text-gray-800 whitespace-pre-wrap leading-relaxed mb-6">
                {n.content}
              </p>

              {/* পিডিএফ ডাউনলোড বাটন */}
              {n.pdfUrl && (
                <a 
                  href={n.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-black hover:bg-green-600 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  ডাউনলোড পিডিএফ
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}