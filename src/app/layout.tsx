import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/footer/footer";

export const metadata: Metadata = {
  title: "CodetMat",
  description: "Your web solution",
  icons: {
    icon: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen bg-[#240D3E]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
