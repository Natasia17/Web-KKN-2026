"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer 
      className="bg-[#050505] text-white w-full flex justify-center relative"
      style={{ paddingTop: "80px", paddingBottom: "48px" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16" style={{ marginTop: "16px" }}>
          
          {/* Brand & Contact Information (Span 5) */}
          <div className="lg:col-span-5 space-y-6 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden">
                <Image
                  src="/logo-cuciju.png"
                  alt="CUCIJU Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                CUCIJU<span className="text-cu-accent">.sby</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Jasa profesional cuci sepatu, deep cleaning, repaint, dan reparasi koper di Surabaya dengan hasil bersih maksimal dan terpercaya.
            </p>

            <ul className="space-y-3 text-sm text-gray-400 pt-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Surabaya, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="https://wa.me/6281256580808" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +62 812-5658-0808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:cuciju.sby@gmail.com" className="hover:text-white transition-colors">
                  cuciju.sby@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-7">
            <div style={{ marginBottom: "28px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Tautan Cepat
              </h4>
              <div style={{ width: "32px", height: "3px", backgroundColor: "#2979D4", borderRadius: "2px" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }} className="text-sm">
              {[
                { href: "/", label: "Beranda" },
                { href: "/layanan", label: "Layanan" },
                { href: "/galeri", label: "Galeri" },
                { href: "/tentang", label: "Tentang" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="lg:col-span-2">
            <div style={{ marginBottom: "28px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Sosial Media
              </h4>
              <div style={{ width: "32px", height: "3px", backgroundColor: "#2979D4", borderRadius: "2px" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }} className="text-sm">
              {[
                { href: "#", label: "Instagram" },
                { href: "https://wa.me/6281256580808", label: "WhatsApp" },
                { href: "#", label: "TikTok" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="lg:col-span-2">
            <div style={{ marginBottom: "28px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-heading), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  color: "#ffffff",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Legal
              </h4>
              <div style={{ width: "32px", height: "3px", backgroundColor: "#2979D4", borderRadius: "2px" }} />
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }} className="text-sm">
              {[
                { href: "#", label: "Syarat & Ketentuan" },
                { href: "#", label: "Kebijakan Privasi" },
                { href: "#", label: "Kebijakan Cookie" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} CUCIJU Surabaya. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] tracking-wider text-gray-400">
              🎓 KKN UNIV. WIDYA KARTIKA
            </span>
            <p>
              Dibuat oleh Natasia Utama&#128591;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
