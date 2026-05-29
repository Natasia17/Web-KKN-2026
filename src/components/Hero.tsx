"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Sepatu Dicuci" },
  { value: "200+", label: "Koper Direparasi" },
  { value: "⭐ 4.9", label: "Rating" },
];

const marqueeText1 =
  "CUCI SEPATU ★ DEEP CLEANING ★ REPARASI KOPER ★ REPAINT ★ UNYELLOWING ★ WATERPROOFING ★ REPARASI SOL ★ ";
const marqueeText2 =
  "CUCIJU.SBY ★ PREMIUM CARE ★ SERVICE BERGARANSI ★ AMAN & CEPAT ★ LAUNDRY SEPATU ★ REPARASI KOPER ★ ";

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 md:pt-28">
        {/* ===== BACKGROUND GRADIENT BLOB — like Sneakeri warm circle ===== */}
        {/* Main large blob behind shoe area */}
        <div
          className="absolute top-[10%] right-[-5%] w-[700px] h-[700px] md:w-[800px] md:h-[800px] lg:w-[900px] lg:h-[900px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(41,182,246,0.35) 0%, rgba(41,121,212,0.25) 40%, rgba(200,230,250,0.15) 70%, transparent 100%)",
          }}
        />
        {/* Secondary smaller blob */}
        <div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(41,182,246,0.4) 0%, rgba(200,230,250,0.2) 60%, transparent 100%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 md:px-16 lg:px-20 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* ---- LEFT COLUMN ---- */}
          <div className="flex flex-col gap-6 max-w-xl">
            {/* Badge — like Sneakeri "★ UNPARALLELED SERVICE" */}
            <div className="flex items-center gap-2.5">
              <span className="text-cu-accent text-lg">★</span>
              <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
                Professional Shoe Care
              </span>
            </div>

            {/* Heading — massive like Sneakeri */}
            <h1 className="text-[3.2rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5.2rem] font-black leading-[1.05] tracking-tight text-cu-black">
              Jasa Cuci
              <br />
              Sepatu &amp;
              <br />
              Kop
              <span className="relative inline-block">
                e
                {/* Circular accent on letter — like Sneakeri "e" in Store */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cu-accent" />
                </span>
              </span>
              r{" "}
              <span className="text-cu-accent">!</span>
            </h1>

            {/* Subtext */}
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Layanan profesional cuci sepatu, deep cleaning, repaint &amp;
              reparasi koper di Surabaya. Hasil terpercaya, harga terjangkau.
            </p>

            {/* Stats */}
            <div className="flex gap-10 py-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-black text-2xl md:text-3xl text-cu-black">
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons — like Sneakeri "Product Details" + "Shop Now" */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 bg-cu-dark text-white font-bold px-8 py-4 rounded-full hover:bg-cu-primary hover:shadow-xl hover:shadow-cu-primary/20 transition-all duration-300 text-sm"
              >
                <span>✦</span> Lihat Layanan
              </Link>
              <a
                href="https://wa.me/6281256580808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cu-black font-semibold text-sm hover:text-cu-primary transition-colors duration-200"
              >
                <span>✓</span> WhatsApp Kami
              </a>
            </div>
          </div>

          {/* ---- RIGHT COLUMN — Shoe overlapping the gradient blob ---- */}
          <div className="relative flex items-center justify-center lg:justify-end min-h-[350px] md:min-h-[450px] lg:min-h-[550px]">
            {/* Plus icons scattered — like Sneakeri */}
            <div className="absolute top-4 right-16 md:top-8 md:right-24 w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm z-20 bg-white/60 backdrop-blur-sm">
              +
            </div>
            <div className="absolute bottom-16 left-0 md:bottom-20 md:left-4 w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 text-sm z-20 bg-white/60 backdrop-blur-sm">
              +
            </div>
            <div className="absolute top-[45%] right-0 w-9 h-9 rounded-full border-2 border-cu-accent/40 flex items-center justify-center text-cu-accent/60 text-sm z-20 bg-white/60 backdrop-blur-sm">
              +
            </div>

            {/* Shoe image — large, overlapping with float & hover animations separate */}
            <div className="relative z-10 animate-float">
              <div className="transition-all duration-700 ease-out hover:scale-105 hover:-rotate-[6deg] hover:drop-shadow-[0_35px_60px_rgba(41,121,212,0.28)] drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)] cursor-pointer">
                <Image
                  src="/gallery/hero-shoe-transparent.png"
                  alt="Sepatu bersih CUCIJU"
                  width={580}
                  height={580}
                  className="w-[320px] sm:w-[400px] md:w-[480px] lg:w-[560px] h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- DOUBLE ROTATED MARQUEE STRIPS ---- */}
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[240px] bg-white overflow-hidden flex items-center justify-center z-20 -mt-8 md:-mt-12">
        {/* Strip 1: Dark Ribbon sloping down (rotated -2.5deg) */}
        <div className="absolute w-[140vw] min-w-[2000px] -rotate-2.5 bg-cu-black py-4 md:py-5 shadow-lg z-10 transform origin-center border-y border-white/10 overflow-hidden">
          <div className="flex shrink-0 w-max animate-marquee whitespace-nowrap">
            <span className="text-white font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-widest select-none shrink-0">
              {marqueeText1.repeat(6)}
            </span>
            <span className="text-white font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-widest select-none shrink-0">
              {marqueeText1.repeat(6)}
            </span>
          </div>
        </div>

        {/* Strip 2: White Ribbon sloping up (rotated 1.5deg) */}
        <div className="absolute w-[140vw] min-w-[2000px] rotate-1.5 bg-white py-4 md:py-5 shadow-2xl z-20 transform origin-center border-y-2 border-cu-black overflow-hidden">
          <div className="flex shrink-0 w-max animate-marquee-reverse whitespace-nowrap">
            <span className="text-cu-black font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-widest select-none shrink-0">
              {marqueeText2.repeat(6)}
            </span>
            <span className="text-cu-black font-heading font-black text-sm sm:text-base md:text-lg uppercase tracking-widest select-none shrink-0">
              {marqueeText2.repeat(6)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
