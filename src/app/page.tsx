import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* ফিচার সেকশন */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="অভিজ্ঞ শিক্ষক" desc="বুয়েট ও ঢাকা বিশ্ববিদ্যালয়ের মেধাবী শিক্ষক মণ্ডলী।" icon="👨‍🏫" />
          <FeatureCard title="সাপ্তাহিক পরীক্ষা" desc="প্রতি সপ্তাহের শেষে মডেল টেস্ট ও রেজাল্ট বিশ্লেষণ।" icon="📝" />
          <FeatureCard title="ডিজিটাল শিট" desc="প্রতিটি অধ্যায়ের ওপর স্পেশাল হ্যান্ডনোট এবং পিডিএফ।" icon="📚" />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="p-8 bg-white shadow-md rounded-2xl text-center border-b-4 border-blue-600">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}