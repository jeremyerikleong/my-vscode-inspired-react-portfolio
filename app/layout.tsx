import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TitleBar from './components/TitleBar';
import SideBar from "./components/SideBar";
import PrimarySideBar from './components/PrimarySideBar';
import Footer from './components/Footer';

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Erik Leong | Portfolio",
  description: "Hello! My name is Jeremy Erik Leong. I’m  a developer & designer that based in Kuala Lumpur. I enjoy building digital experiences for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <TitleBar />

        <div className="flex flex-1 overflow-hidden">
          <SideBar />
          <PrimarySideBar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
