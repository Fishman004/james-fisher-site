import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import DevNavbar from "@/components/dev/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function DevLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <DevNavbar />
      {children}
    </div>
  )
}