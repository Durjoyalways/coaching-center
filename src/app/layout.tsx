import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"; // নতুন ইম্পোর্ট

const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-hind-siliguri',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-sans antialiased bg-[#fcfcfc] flex flex-col min-h-screen pt-20">
        <Navbar />
        {/* মেইন কন্টেন্ট যেন পুরো জায়গা নেয় তাই flex-grow ব্যবহার করা হয়েছে */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}