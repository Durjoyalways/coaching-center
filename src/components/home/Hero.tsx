export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20 px-10 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          সেরা শিক্ষকদের সাথে <br/> আপনার ভবিষ্যৎ গড়ুন
        </h1>
        <p className="mt-6 text-xl text-blue-100">
          আধুনিক ক্লাসরুম, মানসম্মত লেকচার শিট এবং নিয়মিত পরীক্ষার মাধ্যমে পূর্ণাঙ্গ প্রস্তুতি।
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold shadow-lg">ফ্রি ডেমো ক্লাস</button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold">কোর্সসমূহ দেখুন</button>
        </div>
      </div>
    </div>
  );
}