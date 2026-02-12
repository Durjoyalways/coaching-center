"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, collection, getDocs, deleteDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  UserCheck, 
  Search, 
  Plus, 
  Trash2, 
  GraduationCap, 
  Phone, 
  X,
  Menu,
  Camera,
  Fingerprint,
  Loader2,
  ChevronRight,
  Sparkles 
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("admissions");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [logins, setLogins] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "", roll: "", class: "", phone: "", birthReg: "", role: "student", imageUrl: ""
  });

  useEffect(() => { fetchAllData(); }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const allUsers = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(allUsers.filter((u: any) => u.roll && u.role !== "admin"));
      setLogins(allUsers.filter((u: any) => !u.roll && u.role !== "admin"));
      setLoading(false);
    } catch (error) { console.error(error); }
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    const cloudName = "dzmdvq3hs"; 
    const uploadPreset = "shikkhar_alo_preset"; 

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: data,
      });
      const fileData = await res.json();
      if (fileData.secure_url) {
        setFormData(prev => ({ ...prev, imageUrl: fileData.secure_url }));
      } else {
        alert("আপলোড ব্যর্থ হয়েছে!");
      }
    } catch (error) {
      console.error(error);
      alert("ইমেজ আপলোডে সমস্যা হয়েছে!");
    } finally {
      setUploading(false);
    }
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uploading) return;
    if (!formData.imageUrl) return alert("দয়া করে ছবি আপলোড করুন");

    try {
      const customDocId = `std_${formData.roll}_${Date.now()}`;
      await setDoc(doc(db, "users", customDocId), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setIsModalOpen(false);
      fetchAllData();
      setFormData({ name: "", roll: "", class: "", phone: "", birthReg: "", role: "student", imageUrl: "" });
    } catch (error) { alert("সেভ করতে সমস্যা হয়েছে!"); }
  };

  const handleDelete = async (id: string) => {
    if (confirm("আপনি কি নিশ্চিতভাবে ডিলিট করতে চান?")) {
      await deleteDoc(doc(db, "users", id));
      fetchAllData();
    }
  };

  const filteredData = (activeTab === "admissions" ? students : logins).filter(item => 
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) || item.roll?.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-[#4F6F52] selection:text-white">
      
      {/* 🌿 Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-[160] h-screen bg-white flex flex-col p-8 border-r border-slate-100 transition-all duration-500 w-80 
        ${isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4F6F52] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#4F6F52]/20">
                <GraduationCap size={24} />
              </div>
              <h2 className="font-black text-xl text-[#4F6F52] tracking-tighter uppercase">ADMIN</h2>
            </div>
            <button className="lg:hidden p-2 text-slate-400" onClick={() => setIsSidebarOpen(false)}><X /></button>
        </div>

        <nav className="space-y-2">
            <button onClick={() => {setActiveTab("admissions"); setIsSidebarOpen(false)}} className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === "admissions" ? "bg-[#4F6F52] text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}>
                <div className="flex items-center gap-3"><UserCheck size={20} /> ভর্তি লিস্ট</div>
                <ChevronRight size={16} />
            </button>
            <button onClick={() => {setActiveTab("logins"); setIsSidebarOpen(false)}} className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all ${activeTab === "logins" ? "bg-[#C5A059] text-white shadow-lg" : "text-slate-400 hover:bg-slate-50"}`}>
                <div className="flex items-center gap-3"><Users size={20} /> ইউজার লগইন</div>
                <ChevronRight size={16} />
            </button>
        </nav>
      </aside>

      {/* 🚀 Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        <div className="lg:hidden p-4 bg-white border-b flex justify-between items-center sticky top-0 z-50">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-slate-50 rounded-xl text-[#4F6F52] border border-slate-100"><Menu size={24}/></button>
            <span className="font-black text-[#4F6F52] tracking-widest text-sm">শিক্ষা আলো</span>
        </div>

        <div className="p-6 md:p-12 max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">শিক্ষার্থী <span className="text-[#4F6F52] italic">তালিকা</span></h1>
              <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest">মোট শিক্ষার্থী: {filteredData.length}</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input type="text" placeholder="রোল বা নাম খুঁজুন..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-[#4F6F52]/5 transition-all" onChange={(e)=>setSearchTerm(e.target.value)} />
              </div>
              {activeTab === "admissions" && (
                <button onClick={() => setIsModalOpen(true)} className="bg-[#4F6F52] text-white px-8 py-3.5 rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-[#4F6F52]/20 active:scale-95 transition-all shrink-0">
                  <Plus size={20} /> ভর্তি
                </button>
              )}
            </div>
          </header>

          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto p-2">
              <table className="w-full text-left min-w-[800px]">
                <thead className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-8 py-6">শিক্ষার্থী</th>
                    <th className="px-8 py-6">ক্লাস ও রোল</th>
                    <th className="px-8 py-6">জন্ম নিবন্ধন</th>
                    <th className="px-8 py-6 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 group transition-all">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl border-2 border-white shadow-md overflow-hidden bg-slate-100">
                             <img src={item.imageUrl || "https://via.placeholder.com/150"} className="w-full h-full object-cover" alt={item.name} />
                          </div>
                          <div>
                            <p className="font-black text-slate-700 text-base">{item.name}</p>
                            <p className="text-xs font-bold text-slate-400 flex items-center gap-1 mt-0.5"><Phone size={12} className="text-[#4F6F52]"/> {item.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 font-bold text-sm text-slate-600">
                        <div className="flex flex-col gap-1">
                          <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-[10px] w-fit">শ্রেণী: {item.class}</span>
                          <span className="text-[#C5A059] ml-2 font-black">রোল: {item.roll}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                           <Fingerprint size={16} className="text-[#4F6F52]/40"/>
                           {item.birthReg || "নেই"}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button onClick={() => handleDelete(item.id)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={20}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* 📝 Modal Section */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} className="bg-white w-full max-w-2xl rounded-[40px] overflow-hidden relative z-10 shadow-2xl overflow-y-auto max-h-[90vh] border border-white">
              <div className="bg-[#4F6F52] p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-black tracking-tight">নতুন ভর্তি</h2>
                  <p className="text-white/60 font-bold text-xs uppercase tracking-widest mt-1">শিক্ষার্থীর তথ্য প্রদান করুন</p>
                </div>
                <Sparkles className="absolute -top-4 -right-4 text-white/10" size={120} />
              </div>

              <form onSubmit={handleAddStudent} className="p-10 space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <label className="relative group cursor-pointer">
                    <div className="w-28 h-28 rounded-[35px] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-[#4F6F52] transition-all duration-500 shadow-inner">
                      {uploading ? <Loader2 className="animate-spin text-[#4F6F52]" size={32} /> : 
                       formData.imageUrl ? <img src={formData.imageUrl} className="w-full h-full object-cover" /> : 
                       <Camera className="text-slate-300 group-hover:scale-110 transition-transform" size={32} />}
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={(e)=>e.target.files?.[0] && uploadImage(e.target.files[0])} />
                    <div className="absolute -bottom-1 -right-1 bg-[#4F6F52] text-white p-2 rounded-xl shadow-lg border-2 border-white">
                        <Plus size={16} />
                    </div>
                  </label>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">শিক্ষার্থীর ছবি</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input className="w-full bg-slate-50 p-4 rounded-2xl border border-transparent focus:border-[#4F6F52] outline-none font-bold text-sm shadow-inner" placeholder="শিক্ষার্থীর নাম" required onChange={e=>setFormData({...formData, name: e.target.value})} />
                  <input className="w-full bg-slate-50 p-4 rounded-2xl border border-transparent focus:border-[#4F6F52] outline-none font-bold text-sm shadow-inner" placeholder="রোল নম্বর" required onChange={e=>setFormData({...formData, roll: e.target.value})} />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <input className="w-full bg-slate-50 p-4 rounded-2xl border border-transparent focus:border-[#4F6F52] outline-none font-bold text-sm shadow-inner" placeholder="শ্রেণী" required onChange={e=>setFormData({...formData, class: e.target.value})} />
                  <input className="w-full bg-slate-50 p-4 rounded-2xl border border-transparent focus:border-[#4F6F52] outline-none font-bold text-sm shadow-inner" placeholder="মোবাইল নম্বর" required onChange={e=>setFormData({...formData, phone: e.target.value})} />
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <input className="w-full bg-slate-50 p-4 rounded-2xl border border-transparent focus:border-[#4F6F52] outline-none font-bold text-sm shadow-inner" placeholder="জন্ম নিবন্ধন নম্বর (১৭ ডিজিট)" onChange={e=>setFormData({...formData, birthReg: e.target.value})} />
                </div>

                <button disabled={uploading} className="w-full bg-[#4F6F52] text-white p-6 rounded-[28px] font-black text-lg shadow-2xl shadow-[#4F6F52]/30 hover:bg-[#3d5740] disabled:opacity-50 active:scale-95 transition-all mt-4">
                  {uploading ? "ছবি প্রসেস হচ্ছে..." : "ভর্তি নিশ্চিত করুন"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;