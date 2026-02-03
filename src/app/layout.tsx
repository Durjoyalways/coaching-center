import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-hind-siliguri',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-sans antialiased bg-[#fcfcfc] pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}