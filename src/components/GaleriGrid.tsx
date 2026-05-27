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

  const categories: { value: CategoryType; label: string; icon: string }[] = [
    { value: "semua", label: "Semua Hasil", icon: "🎯" },
    { value: "sepatu", label: "Perawatan Sepatu", icon: "👟" },
    { value: "koper", label: "Reparasi Koper", icon: "🧳" },
  ];

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

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
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
        <div
          style={{
            textAlign: "center",
            padding: "64px 32px",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(200,230,250,0.5)",
          }}
        >
          <p style={{ color: "#9CA3AF", fontSize: "1rem" }}>
            Tidak ada portofolio dalam kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
