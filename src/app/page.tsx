import Hero from "@/components/home/Hero";
import FeatureSlider from "@/components/home/FeatureSlider";
import Statistics from "@/components/home/Statistics";
import Programs from "@/components/home/Programs";
import Teachers from "@/components/home/Teachers";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    /** * ১. 'bg-white' সরিয়ে ফেলা হয়েছে যাতে globals.css এর থিম কাজ করে।
     * ২. 'dark:bg-slate-950' যোগ করা হয়েছে ডার্ক মোডের জন্য।
     * ৩. 'transition-colors' যোগ করা হয়েছে যাতে কালার চেঞ্জ স্মুথ হয়।
     */
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Hero />
      <FeatureSlider />
      <Statistics />
      <Programs />
      <Teachers />
      <Contact />
    </main>
  );
}