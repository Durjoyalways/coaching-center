"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, collection, getDocs, deleteDoc, setDoc, serverTimestamp, getDoc, addDoc, query, orderBy } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Users, UserCheck, Search, Plus, Trash2, X, Menu, Camera, 
  Loader2, Sparkles, LogOut, Megaphone, Send, Home
} from "lucide-react";

const AdminDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("admissions");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [logins, setLogins] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "", roll: "", class: "", phone: "", birthReg: "", role: "student", imageUrl: ""
  });
  const [noticeData, setNoticeData] = useState({ title: "", description: "" });

  // নেভবার হাইড করার কোডটি সরিয়ে ফেলা হয়েছে যাতে নেভবার দেখা যায়

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "admin") {
          fetchAllData();
          fetchNotices();
        } else {
          router.push("/");
        }
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allUsers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(allUsers.filter((u: any) => u.roll && u.role !== "admin"));
      setLogins(allUsers.filter((u: any) => !u.roll && u.role !== "admin"));
      setLoading(false);
    } catch (error) { console.error(error); setLoading(false); }
  };

  const fetchNotices = async () => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "shikkhar_alo_preset");
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dzmdvq3hs/image/upload`, { method: "POST", body: data });
      const fileData = await res.json();
      if (fileData.secure_url) setFormData(prev => ({ ...prev, imageUrl: fileData.secure_url }));
    } catch (error) { alert("Upload Failed"); } finally { setUploading(false); }
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.imageUrl) return alert("ছবি আপলোড করুন");
    try {
      await setDoc(doc(db, "users", `std_${formData.roll}_${Date.now()}`), { ...formData, createdAt: serverTimestamp() });
      setIsModalOpen(false);
      fetchAllData();
      setFormData({ name: "", roll: "", class: "", phone: "", birthReg: "", role: "student", imageUrl: "" });
    } catch (error) { alert("Error saving data"); }
  };

  const handleAddNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "notices"), { ...noticeData, createdAt: serverTimestamp() });
      setNoticeData({ title: "", description: "" });
      fetchNotices();
      alert("নোটিশ পাবলিশ হয়েছে!");
    } catch (error) { alert("Error"); }
  };

  const handleDelete = async (col: string, id: string) => {
    if (confirm("আপনি কি নিশ্চিত?")) {
      await deleteDoc(doc(db, col, id));
      col === "users" ? fetchAllData() : fetchNotices();
    }
  };

  const filteredData = (activeTab === "admissions" ? students : logins).filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || item.roll?.includes(searchTerm)
  );

  return (
    // mt-[85px] নিশ্চিত করবে এটি নেভবারের নিচ থেকে শুরু হবে
    <div className="min-h-screen bg-[#0a192f] flex font-sans text-white mt-[85px]">
      
      {/* 🌿 Sidebar - Fixed Position below Navbar */}
      <aside className={`fixed lg:sticky top-[85px] left-0 z-[90] h-[calc(100vh-85px)] bg-[#0d213b] flex flex-col p-8 border-r border-white/5 transition-all duration-500 w-72 shrink-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-[#0a192f] font-black text-sm">শ</div>
              <h2 className="font-black text-lg text-white">ADMIN <span className="text-emerald-400">PANEL</span></h2>
            </div>
            <button className="lg:hidden p-2 text-slate-400" onClick={() => setIsSidebarOpen(false)}><X /></button>
        </div>

        <nav className="space-y-2 flex-1">
            <button onClick={() => {setActiveTab("admissions"); setIsSidebarOpen(false)}} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === "admissions" ? "bg-emerald-500 text-[#0a192f]" : "text-slate-400 hover:bg-white/5"}`}>
                <UserCheck size={18} /> ভর্তি লিস্ট
            </button>
            <button onClick={() => {setActiveTab("logins"); setIsSidebarOpen(false)}} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === "logins" ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-white/5"}`}>
                <Users size={18} /> ইউজার লগইন
            </button>
            <button onClick={() => {setActiveTab("notices"); setIsSidebarOpen(false)}} className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === "notices" ? "bg-purple-500 text-white" : "text-slate-400 hover:bg-white/5"}`}>
                <Megaphone size={18} /> নোটিশ বোর্ড
            </button>
        </nav>

        <button onClick={() => auth.signOut()} className="mt-auto flex items-center gap-3 px-6 py-4 text-red-400 font-bold hover:bg-red-500/5 rounded-2xl transition-all">
          <LogOut size={18} /> লগআউট
        </button>
      </aside>

      {/* 🚀 Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        
        {/* Mobile Toggle Button (Visible only on small screens) */}
        <div className="lg:hidden p-4">
            <button onClick={() => setIsSidebarOpen(true)} className="p-3 bg-emerald-500 text-[#0a192f] rounded-xl shadow-lg"><Menu size={20}/></button>
        </div>

        <div className="p-6 md:p-10 max-w-7xl mx-auto">
          
          <header className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <h1 className="text-3xl font-black text-white italic">
                {activeTab === "admissions" ? "ভর্তি" : activeTab === "logins" ? "ইউজার" : "স্কুল"} <span className="text-emerald-400">তালিকা</span>
              </h1>
              <p className="text-slate-500 text-[10px] font-black mt-1 uppercase tracking-widest">মোট ডাটা: {filteredData.length}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                <input type="text" placeholder="খুঁজুন..." className="w-full pl-11 pr-4 py-3.5 bg-[#0d213b] border border-white/10 rounded-2xl text-white outline-none focus:border-emerald-500/50" onChange={(e)=>setSearchTerm(e.target.value)} />
              </div>
              {activeTab === "admissions" && (
                <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 text-[#0a192f] px-6 py-3.5 rounded-2xl font-black flex items-center justify-center gap-2 active:scale-95 transition-all">
                  <Plus size={18} /> নতুন ভর্তি
                </button>
              )}
            </div>
          </header>

          {activeTab === "notices" ? (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <form onSubmit={handleAddNotice} className="lg:col-span-1 bg-[#0d213b] p-6 rounded-[32px] border border-white/10 space-y-4 h-fit">
                   <h3 className="font-bold text-white mb-2">📢 নোটিশ লিখুন</h3>
                   <input className="w-full bg-white/5 p-4 rounded-xl border border-white/5 outline-none focus:border-purple-500 text-white text-sm" placeholder="শিরোনাম" required value={noticeData.title} onChange={e=>setNoticeData({...noticeData, title: e.target.value})} />
                   <textarea className="w-full bg-white/5 p-4 rounded-xl border border-white/5 outline-none focus:border-purple-500 text-white h-32 text-sm" placeholder="বিস্তারিত..." required value={noticeData.description} onChange={e=>setNoticeData({...noticeData, description: e.target.value})} />
                   <button className="w-full bg-purple-500 text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2">পাবলিশ</button>
                </form>
                <div className="lg:col-span-2 space-y-4">
                   {notices.map(n => (
                     <div key={n.id} className="bg-[#0d213b] p-5 rounded-2xl border border-white/5 flex justify-between items-center group">
                        <div><h4 className="font-bold text-white">{n.title}</h4><p className="text-slate-500 text-xs mt-1">{n.description.substring(0, 80)}...</p></div>
                        <button onClick={()=>handleDelete("notices", n.id)} className="text-slate-600 hover:text-red-500 p-2"><Trash2 size={18}/></button>
                     </div>
                   ))}
                </div>
             </div>
          ) : (
            <div className="bg-[#0d213b] rounded-[35px] border border-white/5 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[800px]">
                  <thead className="text-emerald-400 text-[10px] font-black uppercase tracking-widest bg-white/5">
                    <tr>
                      <th className="px-8 py-6">শিক্ষার্থী</th>
                      <th className="px-8 py-6">শ্রেণী ও রোল</th>
                      <th className="px-8 py-6 text-right">অ্যাকশন</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredData.map((item) => (
                      <tr key={item.id} className="hover:bg-white/5 transition-all">
                        <td className="px-8 py-5 flex items-center gap-4">
                          <img src={item.imageUrl || `https://ui-avatars.com/api/?name=${item.name}&background=10b981&color=fff`} className="w-12 h-12 rounded-xl object-cover" alt="" />
                          <div><p className="font-bold text-white">{item.name}</p><p className="text-[10px] text-slate-500">{item.phone}</p></div>
                        </td>
                        <td className="px-8 py-5">
                           {item.roll ? <p className="font-bold text-blue-400 text-sm">Class {item.class} | Roll {item.roll}</p> : <span className="text-slate-600 text-xs italic">User</span>}
                        </td>
                        <td className="px-8 py-5 text-right">
                          <button onClick={() => handleDelete("users", item.id)} className="text-slate-600 hover:text-red-500 p-2"><Trash2 size={18}/></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 📝 New Student Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-[#0a192f]/90 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#0d213b] w-full max-w-xl rounded-[40px] relative z-10 border border-white/10 overflow-hidden">
              <div className="bg-emerald-500 p-8 text-[#0a192f] font-black text-xl">নতুন শিক্ষার্থী ভর্তি</div>
              <form onSubmit={handleAddStudent} className="p-8 space-y-5">
                <div className="flex justify-center mb-4">
                   <label className="cursor-pointer">
                     <div className="w-24 h-24 rounded-2xl bg-white/5 border-2 border-dashed border-white/20 flex items-center justify-center overflow-hidden">
                        {uploading ? <Loader2 className="animate-spin text-emerald-500" /> : 
                         formData.imageUrl ? <img src={formData.imageUrl} className="w-full h-full object-cover" /> : 
                         <Camera className="text-slate-600" />}
                     </div>
                     <input type="file" className="hidden" accept="image/*" onChange={e=>e.target.files?.[0] && uploadImage(e.target.files[0])} />
                   </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm" placeholder="নাম" required onChange={e=>setFormData({...formData, name: e.target.value})} />
                  <input className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm" placeholder="রোল" required onChange={e=>setFormData({...formData, roll: e.target.value})} />
                  <input className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm" placeholder="শ্রেণী" required onChange={e=>setFormData({...formData, class: e.target.value})} />
                  <input className="bg-white/5 p-4 rounded-xl border border-white/5 text-sm" placeholder="মোবাইল" required onChange={e=>setFormData({...formData, phone: e.target.value})} />
                </div>
                <button className="w-full bg-emerald-500 text-[#0a192f] py-4 rounded-xl font-black text-lg">সাবমিট করুন</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;