import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak Kami - CUCIJU Surabaya",
  description:
    "Hubungi CUCIJU untuk jasa cuci sepatu dan reparasi koper di Surabaya. Via WhatsApp, email, atau kunjungi lokasi kami.",
};

const contactItems = [
  {
    label: "Alamat",
    value: "Surabaya, Jawa Timur, Indonesia",
    href: "",
    gradient: "linear-gradient(135deg, #2979D4 0%, #1B3FA0 100%)",
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+62 812-5658-0808",
    href: "https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20tertarik%20dengan%20layanan%20Anda",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "cuciju.sby@gmail.com",
    href: "mailto:cuciju.sby@gmail.com",
    gradient: "linear-gradient(135deg, #29B6F6 0%, #2979D4 100%)",
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

const infoCards = [
  {
    title: "Jam Operasional",
    gradient: "linear-gradient(135deg, #2979D4 0%, #1B3FA0 100%)",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px", borderBottom: "1px solid #F3F4F6" }}>
          <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>Senin – Sabtu</span>
          <span style={{ fontSize: "0.8125rem", color: "#2979D4", fontWeight: 700 }}>09:00 – 17:00</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.8125rem", color: "#6B7280" }}>Minggu / Hari Besar</span>
          <span style={{ fontSize: "0.8125rem", color: "#EF4444", fontWeight: 700 }}>Tutup</span>
        </div>
      </div>
    ),
  },
  {
    title: "Layanan Antar-Jemput",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-5.25M6 10.5h.008v.008H6V10.5Z" />
      </svg>
    ),
    content: (
      <p style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.7 }}>
        Tidak sempat mengantar? Kami menyediakan layanan pickup &amp; delivery khusus area Surabaya. Hubungi kami via WhatsApp.
      </p>
    ),
  },
  {
    title: "Garansi Kepuasan",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    content: (
      <p style={{ fontSize: "0.8125rem", color: "#6B7280", lineHeight: 1.7 }}>
        Setiap item dirawat dengan standar quality check ketat. Jika belum puas, kami berikan garansi pengerjaan ulang gratis.
      </p>
    ),
  },
];

export default function KontakPage() {
  return (
    <>
      {/* ====== HERO BANNER — Full-bleed (Same pattern as /tentang & /galeri) ====== */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ marginTop: "-64px", paddingTop: "0" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/contact-hero.png"
            alt="CUCIJU Contact"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: "linear-gradient(180deg, rgba(27,63,160,0.70) 0%, rgba(10,15,30,0.80) 100%)" 
            }} 
          />
        </div>

        <div 
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{ 
            paddingTop: "160px", 
            paddingBottom: "80px",
            minHeight: "380px"
          }}
        >
          <h1 
            className="font-heading font-black text-white tracking-tight"
            style={{ 
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
              marginBottom: "16px",
              lineHeight: "1.1"
            }}
          >
            Hubungi Kami
          </h1>
          <div className="flex items-center justify-center" style={{ gap: "10px" }}>
            <span 
              className="rounded-full" 
              style={{ 
                width: "8px", 
                height: "8px", 
                backgroundColor: "#29B6F6",
                display: "inline-block"
              }} 
            />
            <span 
              className="font-semibold uppercase text-white"
              style={{ 
                fontSize: "0.75rem", 
                letterSpacing: "0.2em",
                opacity: 0.85
              }}
            >
              Siap Melayani Kebutuhan Anda
            </span>
          </div>
        </div>
      </section>

      {/* ====== CONTACT DETAILS & MAP ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
              <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Informasi Kontak
              </span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E", marginBottom: "12px" }}>
              Mari Terhubung dengan CUCIJU
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Jangan ragu untuk menghubungi kami. Tim kami siap menjawab pertanyaan dan membantu kebutuhan pencucian sepatu serta reparasi koper Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "32px", alignItems: "stretch" }}>
            
            {/* Left: Contact Info Card */}
            <div className="lg:col-span-5" style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "40px 32px",
                  border: "1px solid rgba(200,230,250,0.6)",
                  boxShadow: "0 10px 30px rgba(41,121,212,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  flex: 1,
                }}
              >
                {/* Contact Items */}
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "16px",
                      background: item.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      flexShrink: 0,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    }}>
                      {item.icon}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <h4 className="font-heading" style={{ fontWeight: 800, fontSize: "0.9375rem", color: "#0A0F1E" }}>
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          style={{ color: "#2979D4", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", transition: "color 0.2s" }}
                          className="hover:text-cu-dark"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6 }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Divider */}
                <div style={{ height: "1px", backgroundColor: "#F3F4F6" }} />

                {/* CTA Button */}
                <a
                  href="https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20layanan%20cuci%20sepatu%20atau%20reparasi%20koper"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    color: "#ffffff",
                    fontWeight: 800,
                    padding: "16px 28px",
                    borderRadius: "16px",
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(16,185,129,0.25)",
                    transition: "all 0.3s ease",
                    width: "100%",
                  }}
                  className="hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                >
                  <svg style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "12px",
                  border: "1px solid rgba(200,230,250,0.6)",
                  boxShadow: "0 10px 30px rgba(41,121,212,0.05)",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "450px",
                }}
              >
                <div style={{ 
                  width: "100%", 
                  flex: 1, 
                  borderRadius: "16px", 
                  overflow: "hidden", 
                  position: "relative", 
                  border: "1px solid #E5E7EB" 
                }}>
                  <iframe
                    id="google-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295064!2d112.55806045!3d-7.2756141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1"
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", minHeight: "420px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi CUCIJU di Surabaya"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====== INFO CARDS — Bento Grid ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#F0F8FF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
              <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Info Tambahan
              </span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E", marginBottom: "12px" }}>
              Yang Perlu Anda Ketahui
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Informasi penting tentang operasional, layanan, dan komitmen kami kepada Anda.
            </p>
          </div>

          {/* Bento Cards */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "24px" 
          }}>
            {infoCards.map((card, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "20px",
                  padding: "32px",
                  border: "1px solid rgba(200,230,250,0.6)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                className="hover:-translate-y-1 hover:shadow-lg hover:shadow-cu-primary/8"
              >
                {/* Decorative corner */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background: card.gradient,
                  opacity: 0.04,
                  borderRadius: "0 20px 0 100%",
                }} />

                {/* Icon */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: card.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "20px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                }}>
                  {card.icon}
                </div>

                <h3 className="font-heading" style={{ fontWeight: 800, fontSize: "1.125rem", color: "#0A0F1E", marginBottom: "12px" }}>
                  {card.title}
                </h3>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION — Same as /galeri & /tentang ====== */}
      <section style={{ 
        padding: "80px 0", 
        background: "linear-gradient(135deg, #1B3FA0 0%, #2979D4 50%, #1B3FA0 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative */}
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "350px", height: "350px", borderRadius: "50%", backgroundColor: "rgba(41,182,246,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "280px", height: "280px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
            <span style={{ color: "#C8E6FA", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Siap Memulai?
            </span>
          </div>
          <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#ffffff", marginBottom: "16px", lineHeight: 1.25 }}>
            Percayakan Sepatu &amp; Koper<br />Kesayangan Anda kepada CUCIJU
          </h2>
          <p style={{ color: "rgba(200,230,250,0.85)", fontSize: "0.9375rem", lineHeight: 1.8, maxWidth: "540px", margin: "0 auto 36px" }}>
            Dari cuci sepatu reguler hingga deep cleaning premium dan reparasi koper — kami punya solusi lengkap untuk Anda.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
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
              <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="currentColor">
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
