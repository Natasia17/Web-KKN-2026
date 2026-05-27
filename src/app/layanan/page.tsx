import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import LayananList from "@/components/LayananList";

export const metadata: Metadata = {
  title: "Layanan Kami - CUCIJU Surabaya",
  description:
    "Berbagai jasa cuci sepatu, deep cleaning, repaint, dan reparasi koper profesional dari CUCIJU Surabaya.",
};

export default function LayananPage() {
  return (
    <>
      {/* ====== HERO BANNER — Full-bleed ====== */}
      <section
        className="relative w-full overflow-hidden"
        style={{ marginTop: "-64px", paddingTop: "0" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/layanan-hero.png"
            alt="CUCIJU Layanan Profesional"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(27,63,160,0.70) 0%, rgba(10,15,30,0.80) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{
            paddingTop: "160px",
            paddingBottom: "80px",
            minHeight: "380px",
          }}
        >
          <h1
            className="font-heading font-black text-white tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Layanan Kami
          </h1>
          <div
            className="flex items-center justify-center"
            style={{ gap: "10px" }}
          >
            <span
              className="rounded-full"
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#29B6F6",
                display: "inline-block",
              }}
            />
            <span
              className="font-semibold uppercase text-white"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                opacity: 0.85,
              }}
            >
              Solusi Premium untuk Sepatu & Koper Anda
            </span>
          </div>
        </div>
      </section>
      
      <div className="w-full h-3 md:h-8"></div>
      {/* Services Grid Section */}
      <section 
        style={{
          paddingTop: "64px",
          paddingBottom: "120px",
          backgroundColor: "#ffffff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-cu-primary"></div>
            </div>
            
          }>
            <LayananList />
          </Suspense>
        </div>
      </section>
    </>
  );
}
