import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // Using a more concise type definition
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
