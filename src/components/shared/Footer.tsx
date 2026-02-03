import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* লোগো ও বর্ণনা */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">আ</div>
            <span className="text-xl font-black text-white">শিক্ষার আলো</span>
          </Link>
          <p className="text-sm leading-relaxed">
            আমরা মানসম্মত শিক্ষা এবং নৈতিক চরিত্র গঠনের মাধ্যমে প্রতিটি শিক্ষার্থীকে ভবিষ্যতের চ্যালেঞ্জের জন্য প্রস্তুত করি।
          </p>
        </div>

        {/* লিঙ্কসমূহ */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">প্রয়োজনীয় লিঙ্ক</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-green-400 transition">কোর্সসমূহ</Link></li>
            <li><Link href="/teachers" className="hover:text-green-400 transition">শিক্ষক মণ্ডলী</Link></li>
            <li><Link href="/about" className="hover:text-green-400 transition">আমাদের সম্পর্কে</Link></li>
          </ul>
        </div>

        {/* যোগাযোগ */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">যোগাযোগ করুন</h3>
          <p className="text-sm">ঠিকানা: আপনার কোচিং সেন্টারের ঠিকানা এখানে লিখুন</p>
          <p className="text-sm mt-2 font-bold text-green-500">ফোন: +৮৮০ ১৭০০-০০০০০০</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © ২০২৬ শিক্ষার আলো কোচিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}