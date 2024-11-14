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
  children: React.ReactNode; // Using a more concise type definition
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
