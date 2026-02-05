import Hero from "@/components/home/Hero";
import FeatureSlider from "@/components/home/FeatureSlider";
import Statistics from "@/components/home/Statistics";
import Programs from "@/components/home/Programs";
import Teachers from "@/components/home/Teachers";
import Contact from "@/components/home/Contact";
// নিচের পাথটি ঠিক করুন (যদি Footer ফাইলটি src/components/shared/Footer.tsx এ থাকে)
import Footer from "@/components/shared/Footer"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <FeatureSlider />
      <Statistics />
      <Programs />
      <Teachers />
      <Contact />
     
    </main>
  );
}