"use client";

import { useState } from "react";
import Link from "next/link";
import { galleryItems } from "@/lib/data";
import BeforeAfterCard from "@/components/BeforeAfterCard";

const filters = ["Semua", "Sepatu", "Koper"] as const;

export default function GallerySection() {
  const [active, setActive] = useState<string>("Semua");

  const filtered =
    active === "Semua"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === active.toLowerCase()
        );

  return (
    // <section className="bg-[#f8f9fa] w-full flex flex-col items-center pb-24">
    <section className="bg-cu-white pt-32 pb-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
      {/* Dark Header Banner
      <div className="w-full bg-[#2a2a2a] py-24 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Portofolio Hasil Kerja
        </h2>
        <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          Lihat langsung transformasi sebelum & sesudah dari layanan perawatan sepatu dan koper kami.
        </p>
        <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-orange-500 mt-8 rounded-full" />
      </div> */}

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 -mt-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cu-accent" />
            <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
              Portofolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-cu-black">
            Hasil Kerja Kami
          </h2>
          <p className="text-gray-400 mt-3 text-center w-full block">
            Lihat langsung transformasi sebelum &amp; sesudah dari layanan kami
          </p>
        </div>
        
        {/* Spacer / DIVIDER */}
        <div className="w-full h-5 md:h-7"></div>
        {/* Filter tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === f
                  // ? "bg-[#d90000] text-white shadow-md border border-[#d90000]"
                  // : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-sm"
                  ? "bg-cu-dark text-white shadow-sm"
                  : "bg-white border border-cu-light text-gray-500 hover:border-cu-primary/30 hover:text-cu-dark"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        {/* Spacer / DIVIDER */}
        <div className="w-full h-3 md:h-4"></div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <BeforeAfterCard
              key={item.id}
              title={item.title}
              category={item.category}
              beforeSrc={item.beforeImage}
              afterSrc={item.afterImage}
              description={item.description}
            />
          ))}
        </div>
        
        {/* Spacer / DIVIDER */}
        <div className="w-full h-3 md:h-4"></div>
        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/galeri"
            prefetch={false}
            className="inline-block bg-[#333333] hover:bg-[#222222] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Lihat Semua Galeri &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
