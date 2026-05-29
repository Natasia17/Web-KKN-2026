import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GaleriGrid from "@/components/GaleriGrid";

export const metadata: Metadata = {
  title: "Galeri Portofolio - CUCIJU Surabaya",
  description:
    "Lihat hasil before & after cuci sepatu dan reparasi koper dari CUCIJU Surabaya. Bukti nyata kualitas pengerjaan tim kami.",
};

export default function GaleriPage() {
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
            src="/gallery/gallery-hero.png"
            alt="CUCIJU Gallery Collection"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,15,30,0.55) 0%, rgba(27,63,160,0.75) 100%)",
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
            Galeri Kerja
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
              Portofolio Before & After
            </span>
          </div>
        </div>
      </section>

      {/* ====== STATS BAR — Quick glance metrics ====== */}
      <section
        style={{
          background: "linear-gradient(135deg, #1B3FA0 0%, #2979D4 100%)",
          padding: "0",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}
        >
          {[
            { number: "6+", label: "Proyek Selesai", icon: "✅" },
            { number: "100%", label: "Kepuasan Pelanggan", icon: "⭐" },
            { number: "2", label: "Kategori Layanan", icon: "🏷️" },
            { number: "17+", label: "Dokumentasi Foto", icon: "📸" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "28px 24px",
                textAlign: "center",
                borderRight:
                  i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-white/5"
            >
              <div style={{ fontSize: "1.25rem", marginBottom: "6px" }}>
                {stat.icon}
              </div>
              <div
                className="font-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "rgba(200,230,250,0.7)",
                  fontWeight: 500,
                  marginTop: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== BEFORE / AFTER GALLERY — Main Portfolio ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#F0F8FF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#29B6F6",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#2979D4",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Transformasi Premium
              </span>
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: "#0A0F1E",
                marginBottom: "12px",
              }}
            >
              Lihat Hasil Kerja Kami
            </h2>
            <p
              style={{
                color: "#6B7280",
                fontSize: "0.9375rem",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Perbandingan detail sebelum dan sesudah pengerjaan cuci sepatu,
              unyellowing, repaint, dan reparasi koper.
            </p>
          </div>

          {/* Gallery Grid with filters */}
          <GaleriGrid />
        </div>
      </section>

      {/* ====== DOKUMENTASI PELANGGAN — Photo Grid ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#29B6F6",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "#2979D4",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Dokumentasi & Bukti Chat
              </span>
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 900,
                color: "#0A0F1E",
                marginBottom: "12px",
              }}
            >
              Galeri Pelanggan
            </h2>
            <p
              style={{
                color: "#6B7280",
                fontSize: "0.9375rem",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Beragam hasil kerja dan testimoni asli pelanggan kami yang
              diabadikan langsung.
            </p>
          </div>

          {/* Masonry-ish Photo Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {Array.from({ length: 17 }).map((_, i) => {
              // Vary heights for masonry effect
              const isLarge = i === 0 || i === 5 || i === 10 || i === 14;
              return (
                <div
                  key={i}
                  className="group"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: isLarge ? "3/4" : "4/5",
                    overflow: "hidden",
                    borderRadius: "16px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    border: "1px solid #F3F4F6",
                    transition: "all 0.5s ease",
                  }}
                >
                  {/* Hover overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)",
                      opacity: 0,
                      transition: "opacity 0.5s ease",
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                    className="group-hover:!opacity-100"
                  />
                  <Image
                    src={`/gallery/docs/doc-${i + 1}.jpeg`}
                    alt={`Dokumentasi Pelanggan ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Hover label */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                      zIndex: 11,
                      opacity: 0,
                      transform: "translateY(8px)",
                      transition: "all 0.4s ease 0.1s",
                    }}
                    className="group-hover:!opacity-100 group-hover:!translate-y-0"
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                        color: "#0A0F1E",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        padding: "6px 12px",
                        borderRadius: "8px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Foto #{i + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, #1B3FA0 0%, #2979D4 50%, #1B3FA0 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            backgroundColor: "rgba(41,182,246,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#29B6F6",
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#C8E6FA",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Tertarik?
            </span>
          </div>
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.25,
            }}
          >
            Ingin Hasil yang Sama?
          </h2>
          <p
            style={{
              color: "rgba(200,230,250,0.85)",
              fontSize: "0.9375rem",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto 36px",
            }}
          >
            Percayakan sepatu dan koper kesayangan Anda kepada CUCIJU. 
            Hubungi kami sekarang atau jelajahi layanan lengkap kami.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              justifyContent: "center",
            }}
          >
            <Link
              href="/layanan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#ffffff",
                color: "#1B3FA0",
                fontWeight: 800,
                padding: "16px 36px",
                borderRadius: "9999px",
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:shadow-xl"
            >
              Lihat Layanan
              <svg
                style={{ width: "18px", height: "18px" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <a
              href="https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontWeight: 800,
                padding: "16px 36px",
                borderRadius: "9999px",
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:bg-white/10 hover:border-white/60"
            >
              <svg
                style={{ width: "18px", height: "18px" }}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
