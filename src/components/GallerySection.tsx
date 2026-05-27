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
    <section className="bg-cu-white pt-32 pb-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
      <div className="max-w-7xl mx-auto w-full">
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

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-cu-dark text-white shadow-sm"
                  : "bg-white border border-cu-light text-gray-500 hover:border-cu-primary/30 hover:text-cu-dark"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

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

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/galeri"
            className="inline-block bg-cu-dark text-white font-bold px-8 py-3 rounded-full hover:bg-cu-primary hover:shadow-lg transition-all duration-300 text-sm"
          >
            Lihat Semua Galeri →
          </Link>
        </div>
      </div>
    </section>
  );
}
