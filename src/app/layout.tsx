import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/navbar/navbar";
import Footer from "./components/shared/footer/footer";
import Script from "next/script";

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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M6567X8VR1"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M6567X8VR1');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <div className="min-h-screen bg-[#240D3E]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
