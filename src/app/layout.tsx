import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SplashCursor from "./components/ui/SplashCursor";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
  variable: '--font-poppins', // 👈 This makes the CSS variable available
});


export const metadata: Metadata = {
  title: "My App",
  description: "Awesome app using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${poppins.className} font-sans`}>
        <SplashCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
