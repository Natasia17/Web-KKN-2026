import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CUCIJU | Jasa Cuci & Reparasi Sepatu & Koper Surabaya",
  description:
    "CUCIJU adalah jasa profesional cuci sepatu, deep cleaning, repaint, dan reparasi koper di Surabaya. Hasil terpercaya, harga terjangkau. Hubungi kami sekarang!",
  keywords: [
    "cuci sepatu surabaya",
    "shoe cleaning surabaya",
    "reparasi koper surabaya",
    "jasa cuci sepatu",
    "cuciju",
  ],
  openGraph: {
    title: "CUCIJU | Jasa Cuci & Reparasi Sepatu & Koper Surabaya",
    description:
      "CUCIJU adalah jasa profesional cuci sepatu, deep cleaning, repaint, dan reparasi koper di Surabaya. Hasil terpercaya, harga terjangkau. Hubungi kami sekarang!",
    url: "https://cuciju.vercel.app",
    siteName: "CUCIJU",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-body antialiased flex flex-col min-h-screen bg-cu-white w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full pt-16 md:pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
