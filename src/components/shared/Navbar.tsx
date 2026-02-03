import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-700">CoachingPro</div>
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/exams">Exams</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
        ভর্তি হন
      </button>
    </nav>
  );
}