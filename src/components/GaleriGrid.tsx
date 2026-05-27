"use client";

import { useState } from "react";
import { galleryItems } from "@/lib/data";
import BeforeAfterCard from "./BeforeAfterCard";

type CategoryType = "semua" | "sepatu" | "koper";

export default function GaleriGrid() {
  const [filter, setFilter] = useState<CategoryType>("semua");

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "semua") return true;
    return item.category === filter;
  });

  const categories: { value: CategoryType; label: string }[] = [
    { value: "semua", label: "Semua Hasil Kerja" },
    { value: "sepatu", label: "Perawatan Sepatu" },
    { value: "koper", label: "Reparasi Koper" },
  ];

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
              filter === cat.value
                ? "bg-cu-primary text-white border-cu-primary shadow-lg shadow-cu-primary/20 scale-105"
                : "bg-white text-gray-600 border-cu-light hover:bg-cu-light/20 hover:text-cu-dark hover:border-cu-primary/30"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
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
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-cu-light/50 p-8">
          <p className="text-gray-400 text-base">Tidak ada portofolio dalam kategori ini.</p>
        </div>
      )}
    </div>
  );
}
