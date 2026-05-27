"use client";

import { useState } from "react";
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

type FilterType = "semua" | "sepatu" | "koper";

export default function LayananList() {
  const [filter, setFilter] = useState<FilterType>("semua");

  const filteredServices = services.filter((s) => {
    if (filter === "semua") return true;
    return s.category === filter;
  });

  const categories: { value: FilterType; label: string }[] = [
    { value: "semua", label: "Semua Layanan" },
    { value: "sepatu", label: "Cuci & Perawatan Sepatu" },
    { value: "koper", label: "Reparasi & Servis Koper" },
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredServices.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  );
}
