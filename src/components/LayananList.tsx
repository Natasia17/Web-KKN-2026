"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/data";
import ServiceCard from "./ServiceCard";

type FilterType = "semua" | "sepatu" | "koper";

export default function LayananList() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") as FilterType | null;
  const [filter, setFilter] = useState<FilterType>("semua");

  useEffect(() => {
    if (catParam && (catParam === "semua" || catParam === "sepatu" || catParam === "koper")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilter(catParam);
    }
  }, [catParam]);

  const filteredServices = services.filter((s) => {
    if (filter === "semua") return true;
    return s.category === filter;
  });

  const categories: { value: FilterType; label: string; icon: string }[] = [
    { value: "semua", label: "Semua Layanan", icon: "📋" },
    { value: "sepatu", label: "Cuci & Perawatan Sepatu", icon: "👟" },
    { value: "koper", label: "Reparasi & Servis Koper", icon: "🧳" },
  ];

  // const count = filteredServices.length; // Unused

  return (
    <div>
      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "48px",
        }}
      >
        {categories.map((cat) => {
          const isActive = filter === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              style={{
                padding: "12px 28px",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                fontWeight: 700,
                border: isActive
                  ? "2px solid #2979D4"
                  : "2px solid #C8E6FA",
                backgroundColor: isActive ? "#2979D4" : "#ffffff",
                color: isActive ? "#ffffff" : "#6B7280",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: isActive
                  ? "0 4px 16px rgba(41,121,212,0.25)"
                  : "none",
                transform: isActive ? "scale(1.05)" : "scale(1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "1rem" }}>{cat.icon}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Services Flexbox */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {filteredServices.map((s) => (
          <div key={s.id} className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
            <ServiceCard service={s} />
          </div>
        ))}
      </div>
    </div>

    
  );
}
