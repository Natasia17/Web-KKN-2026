import Image from "next/image";

interface BeforeAfterCardProps {
  title: string;
  category: "sepatu" | "koper";
  beforeSrc: string;
  afterSrc: string;
  description?: string;
}

export default function BeforeAfterCard({
  title,
  category,
  beforeSrc,
  afterSrc,
  description,
}: BeforeAfterCardProps) {
  const categoryColor = category === "sepatu" ? "#2979D4" : "#F59E0B";
  const categoryBg =
    category === "sepatu"
      ? "rgba(41,121,212,0.1)"
      : "rgba(245,158,11,0.1)";
  const categoryLabel = category === "sepatu" ? "👟 Sepatu" : "🧳 Koper";

  return (
    <div
      className="group"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        border: "1px solid #E5E7EB",
        transition: "all 0.4s ease",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* ---- Image comparison ---- */}
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "220px",
          overflow: "hidden",
        }}
      >
        {/* Before */}
        <div
          style={{
            position: "relative",
            width: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={beforeSrc}
            alt={`Sebelum - ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.08)",
              transition: "background-color 0.3s",
            }}
            className="group-hover:!bg-transparent"
          />
          <span
            style={{
              position: "absolute",
              left: "10px",
              bottom: "10px",
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.5625rem",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "6px",
              letterSpacing: "0.1em",
              zIndex: 10,
              textTransform: "uppercase",
            }}
          >
            Sebelum
          </span>
        </div>

        {/* After */}
        <div
          style={{
            position: "relative",
            width: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={afterSrc}
            alt={`Sesudah - ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              backgroundColor: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.5625rem",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "6px",
              letterSpacing: "0.1em",
              zIndex: 10,
              textTransform: "uppercase",
            }}
          >
            Sesudah
          </span>
        </div>

        {/* Center divider line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "2px",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.5)",
            zIndex: 10,
          }}
        />

        {/* Center comparison icon */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "32px",
            height: "32px",
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255,255,255,0.8)",
          }}
        >
          <svg
            style={{ width: "14px", height: "14px", color: "#2979D4" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M8 7h8M8 12h8m-8 5h8"
            />
          </svg>
        </div>

        {/* Category Badge (Top Left) */}
        <div style={{ position: "absolute", top: "12px", left: "12px", zIndex: 30 }}>
          <span
            style={{
              backgroundColor: categoryBg,
              color: categoryColor,
              fontSize: "0.625rem",
              fontWeight: 700,
              padding: "5px 12px",
              borderRadius: "9999px",
              backdropFilter: "blur(8px)",
              letterSpacing: "0.03em",
            }}
          >
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* ---- Info ---- */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          transition: "background-color 0.3s",
        }}
        className="group-hover:bg-gray-50/50"
      >
        <h3
          className="font-heading group-hover:text-cu-primary transition-colors duration-300"
          style={{
            fontWeight: 900,
            color: "#0A0F1E",
            fontSize: "1.0625rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {description && (
          <div
            style={{
              marginTop: "12px",
              paddingLeft: "12px",
              borderLeft: "2px solid rgba(41,182,246,0.5)",
              flexGrow: 1,
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#6B7280",
                lineHeight: 1.7,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          </div>
        )}

        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid #F3F4F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: "0.6875rem",
              color: "#9CA3AF",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Tanya Admin
          </p>
          <a
            href={`https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20tentang%20hasil%20kerja%20${encodeURIComponent(title)}`}
            target="_blank"
            rel="noreferrer"
            className="group/link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#2979D4",
              backgroundColor: "rgba(41,121,212,0.06)",
              padding: "10px 20px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              gap: "6px",
            }}
          >
            Lihat Detail
            <svg
              style={{
                width: "14px",
                height: "14px",
                transition: "transform 0.3s",
              }}
              className="group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
