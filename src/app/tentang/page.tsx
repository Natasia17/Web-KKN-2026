import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami - CUCIJU Surabaya",
  description:
    "Kenali lebih dekat CUCIJU - program pemberdayaan masyarakat jasa cuci sepatu dan reparasi koper dari KKN Universitas Widya Kartika 2026.",
};

const teamMembers = [
  // {
  //   name: "Yafet N.",
  //   role: "Ketua Kelompok KKN",
  //   desc: "Mengoordinasi seluruh divisi program kerja CUCIJU.",
  //   initials: "YN",
  // },
  {
    name: "Natasya U.",
    role: "Hubungan Masyarakat & Sosialisasi",
    desc: "Menghubungkan program dengan komunitas warga sekitar.",
    initials: "NU",
  },
  // {
  //   name: "Christian D.",
  //   role: "Operasional & Teknisi Sepatu",
  //   desc: "Bertanggung jawab atas kualitas pencucian sepatu.",
  //   initials: "CD",
  // },
  // {
  //   name: "Gabriella M.",
  //   role: "Operasional & Teknisi Koper",
  //   desc: "Ahli perbaikan roda, handle, dan ritsleting koper.",
  //   initials: "GM",
  // },
];

const processSteps = [
  {
    step: "01",
    title: "Konsultasi",
    desc: "Hubungi kami via WhatsApp untuk konsultasi jenis layanan yang sesuai dengan kebutuhan Anda.",
  },
  {
    step: "02",
    title: "Drop-off / Pick-up",
    desc: "Antarkan barang Anda ke lokasi kami atau gunakan layanan antar jemput area Surabaya.",
  },
  {
    step: "03",
    title: "Pengerjaan",
    desc: "Tim kami mengerjakan dengan teliti menggunakan bahan premium dan teknik profesional.",
  },
  {
    step: "04",
    title: "Selesai & Siap",
    desc: "Barang Anda kembali bersih dan terawat. Garansi pengerjaan ulang jika belum puas.",
  },
];

const values = [
  {
    title: "Kualitas Terjamin",
    desc: "Setiap pengerjaan melalui quality check ketat. Garansi 100% pengerjaan ulang jika hasil belum memuaskan.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #2979D4 0%, #1B3FA0 100%)",
  },
  {
    title: "Harga Terjangkau",
    desc: "Layanan profesional dengan harga yang bersahabat. Program KKN memastikan akses layanan untuk semua kalangan.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #29B6F6 0%, #2979D4 100%)",
  },
  {
    title: "Ramah Lingkungan",
    desc: "Menggunakan produk pembersih yang eco-friendly dan aman untuk semua jenis material sepatu maupun koper.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
  {
    title: "Pengerjaan Cepat",
    desc: "Estimasi waktu pengerjaan yang jelas dan transparan. Sepatu & koper cepat kembali ke tangan Anda.",
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* ====== HERO BANNER — Full-bleed ====== */}
      <section 
        className="relative w-full overflow-hidden"
        style={{ marginTop: "-64px", paddingTop: "0" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/about-hero.png"
            alt="CUCIJU Shoe Cleaning Service"
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
            Tentang Kami
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
              KKN Universitas Widya Kartika 2026
            </span>
          </div>
        </div>
      </section>

      {/* ====== STORY SECTION ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: "48px", alignItems: "center" }}>
            
            {/* Left Column — Logo Card */}
            <div className="lg:col-span-5" style={{ position: "relative" }}>
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(135deg, #2979D4, #29B6F6)", 
                borderRadius: "24px", 
                transform: "rotate(2deg)", 
                opacity: 0.10 
              }} />
              <div style={{ 
                aspectRatio: "4/3", 
                width: "100%", 
                backgroundColor: "rgba(200,230,250,0.2)", 
                border: "1px solid #C8E6FA", 
                borderRadius: "24px", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: "32px", 
                position: "relative", 
                zIndex: 10, 
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(41,121,212,0.05)"
              }}>
                <div style={{ width: "80px", height: "80px", position: "relative", marginBottom: "16px" }}>
                  <Image
                    src="/logo-cuciju.png"
                    alt="CUCIJU Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading" style={{ fontWeight: 800, fontSize: "1.25rem", color: "#1B3FA0" }}>
                  KKN UWIKA 2026
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#6B7280", marginTop: "8px", maxWidth: "280px" }}>
                  Program Kuliah Kerja Nyata pemberdayaan ekonomi kreatif masyarakat Surabaya.
                </p>
              </div>
            </div>

            {/* Right Column — Text */}
            <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "32px", height: "2px", backgroundColor: "#29B6F6" }} />
                <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Latar Belakang
                </span>
              </div>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)", fontWeight: 900, color: "#0A0F1E", lineHeight: 1.3 }}>
                Berawal Dari Kepedulian Terhadap Barang Kesayangan Anda
              </h2>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75 }}>
                CUCIJU didirikan sebagai bagian dari program Kuliah Kerja Nyata (KKN) mahasiswa Universitas Widya Kartika Surabaya pada tahun 2026. Lahir dari pemikiran sederhana bahwa sepatu dan koper adalah barang-barang penunjang mobilitas tinggi yang sering diabaikan perawatannya sampai terjadi kerusakan berat.
              </p>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75 }}>
                Kami hadir untuk memberikan solusi pembersihan sepatu yang higienis serta perbaikan koper (roda, ritsleting, pegangan) secara praktis dan ekonomis tanpa mengabaikan standar kualitas pengerjaan. Melalui bimbingan dosen dan kolaborasi mahasiswa lintas program studi, kami mengaplikasikan metode kerja yang presisi untuk menjaga usia pakai barang-barang Anda.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "16px", borderTop: "1px solid #F3F4F6" }}>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#2979D4", fontSize: "1.25rem" }}>100%</h4>
                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "4px" }}>Garansi Pengerjaan Ulang</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#2979D4", fontSize: "1.25rem" }}>Surabaya</h4>
                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "4px" }}>Area Fokus Layanan</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====== MISI & NILAI — Bento Grid ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#F0F8FF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
              <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Komitmen Kami
              </span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E", marginBottom: "12px" }}>
              Misi & Nilai CUCIJU
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Kami berkomitmen memberikan layanan terbaik yang mengedepankan kualitas, keterjangkauan, dan kepuasan pelanggan.
            </p>
          </div>

          {/* Bento Grid — 2x2 */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "24px" 
          }}>
            {values.map((item, i) => (
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
                {/* Subtle accent corner */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background: item.gradient,
                  opacity: 0.04,
                  borderRadius: "0 20px 0 100%",
                }} />

                {/* Icon */}
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: item.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "20px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                }}>
                  {item.icon}
                </div>

                <h3 className="font-heading" style={{ fontWeight: 800, fontSize: "1.125rem", color: "#0A0F1E", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ALUR LAYANAN — Process Timeline ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
              <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Cara Kerja
              </span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E", marginBottom: "12px" }}>
              Alur Layanan Kami
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.9375rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Proses yang mudah dan transparan dari awal hingga barang Anda kembali bersih dan terawat.
            </p>
          </div>

          {/* Process Steps */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
            gap: "32px",
            position: "relative" 
          }}>
            {processSteps.map((item, i) => (
              <div key={i} style={{ position: "relative", textAlign: "center" }}>
                
                {/* Step Number Circle */}
                <div style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: i === processSteps.length - 1 
                    ? "linear-gradient(135deg, #29B6F6 0%, #2979D4 100%)" 
                    : "linear-gradient(135deg, #2979D4 0%, #1B3FA0 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  boxShadow: "0 8px 24px rgba(41,121,212,0.25)",
                  position: "relative",
                  zIndex: 2,
                }}>
                  <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "1.25rem", fontFamily: "var(--font-heading)" }}>
                    {item.step}
                  </span>
                </div>

                {/* Connector line (not on last item) */}
                {i < processSteps.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: "36px",
                    left: "calc(50% + 44px)",
                    width: "calc(100% - 88px)",
                    height: "2px",
                    background: "linear-gradient(90deg, #2979D4 0%, #C8E6FA 100%)",
                    zIndex: 1,
                    display: "none", // hidden on mobile
                  }} className="lg:!block" />
                )}

                <h3 className="font-heading" style={{ fontWeight: 800, fontSize: "1.0625rem", color: "#0A0F1E", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.8125rem", lineHeight: 1.7, maxWidth: "240px", margin: "0 auto" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MENGAPA CUCIJU — Full-width Feature Strip ====== */}
      <section style={{ 
        padding: "80px 0", 
        background: "linear-gradient(135deg, #1B3FA0 0%, #2979D4 50%, #1B3FA0 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", backgroundColor: "rgba(29,182,246,0.08)" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "250px", height: "250px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.04)" }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "48px", alignItems: "center" }}>
            
            {/* Left — Text */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
                <span style={{ color: "#C8E6FA", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Mengapa Kami
                </span>
              </div>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.3, marginBottom: "16px" }}>
                Kenapa Harus Memilih CUCIJU?
              </h2>
              <p style={{ color: "rgba(200,230,250,0.85)", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "28px" }}>
                Kami bukan sekadar jasa cuci biasa. CUCIJU lahir dari program akademis yang memadukan ketelitian ilmiah dengan semangat pengabdian masyarakat. Setiap pasang sepatu dan setiap koper ditangani dengan standar profesional yang tinggi.
              </p>
              
              {/* Highlight points */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Dikerjakan oleh tim terlatih dari mahasiswa KKN UWIKA",
                  "Menggunakan produk pembersih premium & ramah lingkungan",
                  "Garansi kepuasan 100% — pengerjaan ulang gratis",
                  "Layanan antar jemput di area Surabaya",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(41,182,246,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}>
                      <svg style={{ width: "12px", height: "12px", color: "#29B6F6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Stats Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { number: "100%", label: "Kepuasan Pelanggan", icon: "⭐" },
                { number: "2026", label: "Tahun Berdiri", icon: "📅" },
                { number: "24jam", label: "Estimasi Pengerjaan", icon: "⚡" },
                { number: "SBY", label: "Area Surabaya", icon: "📍" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    padding: "28px 20px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-white/15"
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "8px" }}>{stat.icon}</div>
                  <div className="font-heading" style={{ fontSize: "1.5rem", fontWeight: 900, color: "#ffffff", marginBottom: "4px" }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(200,230,250,0.7)", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA — Direct to /layanan ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#F0F8FF", position: "relative", overflow: "hidden" }}>
        {/* Decorative background shapes */}
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          width: "600px", 
          height: "600px", 
          borderRadius: "50%", 
          background: "radial-gradient(circle, rgba(41,182,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
            <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Layanan Kami
            </span>
          </div>
          <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E", marginBottom: "16px", lineHeight: 1.25 }}>
            Siap Memberikan yang Terbaik<br />untuk Barang Kesayangan Anda
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.9375rem", lineHeight: 1.8, marginBottom: "36px", maxWidth: "600px", margin: "0 auto 36px" }}>
            Dari cuci sepatu reguler hingga deep cleaning premium, repaint warna, dan reparasi koper — kami punya solusi lengkap untuk kebutuhan Anda.
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link
              href="/layanan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #2979D4 0%, #1B3FA0 100%)",
                color: "#ffffff",
                fontWeight: 800,
                padding: "16px 36px",
                borderRadius: "9999px",
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(41,121,212,0.3)",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:shadow-xl"
            >
              Lihat Semua Layanan
              <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a
              href="https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20soal%20layanan"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#ffffff",
                color: "#2979D4",
                fontWeight: 800,
                padding: "16px 36px",
                borderRadius: "9999px",
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: "2px solid #C8E6FA",
                transition: "all 0.3s ease",
              }}
              className="hover:scale-105 hover:border-cu-primary hover:shadow-lg"
            >
              <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ====== TEAM SECTION ====== */}
      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "12px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#29B6F6", display: "inline-block" }} />
              <span style={{ color: "#2979D4", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                PEMBUAT & PERANCANG PROGRAM
              </span>
            </div>
            <h2 className="font-heading" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0A0F1E" }}>
              KKN Universitas Widya Kartika
            </h2>
            <p style={{ 
              color: "#9CA3AF", 
              fontSize: "0.875rem", 
              textAlign: "center", 
              margin: "12px auto 0 auto", 
              maxWidth: "512px", 
              display: "block" 
            }}>
              Mahasiswa Universitas Widya Kartika Surabaya angkatan 2026 yang mendedikasikan diri untuk melayani komunitas.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                style={{
                  width: "280px",
                  backgroundColor: "#ffffff",
                  padding: "32px 24px",
                  borderRadius: "20px",
                  border: "1px solid rgba(200,230,250,0.6)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                className="hover:-translate-y-1 hover:shadow-lg hover:shadow-cu-primary/5"
              >
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2979D4, #29B6F6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  marginBottom: "16px",
                  boxShadow: "0 4px 14px rgba(41,121,212,0.2)",
                }}>
                  {member.initials}
                </div>
                <h4 className="font-heading" style={{ fontWeight: 700, color: "#0A0F1E", fontSize: "1rem" }}>{member.name}</h4>
                <p style={{
                  fontSize: "0.75rem",
                  color: "#2979D4",
                  fontWeight: 600,
                  marginTop: "6px",
                  backgroundColor: "rgba(200,230,250,0.35)",
                  padding: "3px 12px",
                  borderRadius: "9999px",
                }}>
                  {member.role}
                </p>
                <p style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: "12px", lineHeight: 1.6 }}>
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
