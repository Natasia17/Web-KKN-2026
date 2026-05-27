"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavSubLink {
  href: string;
  label: string;
}

interface NavLink {
  href: string;
  label: string;
  dropdown?: NavSubLink[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Beranda" },
  { 
    href: "/layanan", 
    label: "Layanan",
    dropdown: [
      { href: "/layanan?cat=sepatu", label: "Perawatan Sepatu" },
      { href: "/layanan?cat=koper", label: "Perbaikan Koper" },
      { href: "/layanan", label: "Semua Layanan" },
    ]
  },
  { href: "/galeri", label: "Galeri" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100/50"
            : "bg-white border-b border-gray-100"
        }`}
      >
        {/* ===== TOP BAR — Info contact panel ===== */}
        <div
          className={`bg-cu-dark text-white transition-all duration-300 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-3 text-white/70 font-medium">
              <span>Shoe Care</span>
              <span className="w-1 h-1 rounded-full bg-cu-accent" />
              <span>Luggage Repair</span>
            </div>
            <div className="flex items-center gap-4 text-white/60 font-medium">
              <span className="hidden sm:inline-flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5 text-cu-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Surabaya, Jawa Timur
              </span>
            </div>
          </div>
        </div>

        {/* ===== MAIN NAV ===== */}
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="relative flex items-center justify-between h-16 md:h-[72px]">
            
            {/* Brand Logo */}
            <div className="flex-1 flex justify-start z-10">
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 group"
              >
                <div className="relative overflow-hidden w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <Image
                    src="/logo-cuciju.png"
                    alt="CUCIJU Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center leading-none">
                  <span className="font-heading font-extrabold text-base md:text-lg text-cu-dark tracking-tight transition-colors duration-200 leading-tight">
                    CUCIJU<span className="text-cu-primary group-hover:text-cu-accent transition-colors duration-200">.sby</span>
                  </span>
                  {/* Spacer / DIVIDER */}
                  <div className="w-full h-0.5 md:h-1.2"></div>
                  <span className="text-[7.5px] md:text-[8.5px] font-extrabold text-gray-400 tracking-wider uppercase mt-0.5 whitespace-nowrap">
                    KKN UNIVERSITAS WIDYA KARTIKA 2026
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav Links (Centered in viewport with dropdowns - High z-20 to be clickable) */}
            <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full z-20">
              <ul className="flex items-center gap-6 lg:gap-10">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  const hasDropdown = !!link.dropdown;
                  return (
                    <li key={link.href} className="relative group/nav-item py-4">
                      <Link
                        href={link.href}
                        className={`relative text-[15px] font-medium py-2 transition-all duration-200 flex items-center gap-1.5 ${
                          active
                            ? "text-cu-primary"
                            : "text-cu-dark hover:text-cu-primary"
                        }`}
                      >
                        <span>{link.label}</span>
                        {hasDropdown && (
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${active ? "text-cu-primary" : "text-cu-dark group-hover/nav-item:text-cu-primary"} group-hover/nav-item:rotate-180`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        )}
                        {active && !hasDropdown && (
                          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cu-primary rounded-full" />
                        )}
                      </Link>
                      {/* {active && !hasDropdown && (
                        <span className="absolute bottom-[8px] left-4 right-4 h-0.5 bg-cu-primary rounded-full" />
                      )} */} {/* JANGAN DIHAPUS DI COMMAND SEMEENTARA */}

                      {/* Dropdown Menu on Hover */}
                      {hasDropdown && (
                        <div className="absolute top-full left-0 mt-0 w-52 bg-white border border-gray-200 shadow-sm opacity-0 translate-y-2 pointer-events-none group-hover/nav-item:opacity-100 group-hover/nav-item:translate-y-0 group-hover/nav-item:pointer-events-auto transition-all duration-300 z-50 rounded-none">
                          <ul className="flex flex-col">
                            {link.dropdown?.map((sub, idx) => (
                              <li key={sub.href} className={idx !== link.dropdown!.length - 1 ? "border-b border-gray-200" : ""}>
                                <Link
                                  href={sub.href}
                                  className="text-[13px] font-semibold px-5 py-3.5 text-cu-dark hover:text-cu-primary hover:bg-gray-50 block transition-colors"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="ml-3 flex-1 flex justify-end items-center gap-3 z-10">
              <Link
                // href="/kontak"
                href="https://wa.me/6281238050202?text=Halo, saya ingin menanyakan tentang layanan jasa cleaning sepatu dan koper di CUCIJU.sby. Apakah bisa membantu saya?"
                className="hidden md:inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#185fa4] to-[#0091e6] text-white font-semibold text-[13px] tracking-wide py-4.5 px-10 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#185fa4]/30 hover:scale-[1.03] active:scale-95"
              >
                <svg
                  className="w-[18px] h-[18px] fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Hubungi Kami</span>
              </Link>

              {/* <Link
              href="https://wa.me/6281238050202?text=Halo, saya ingin menanyakan tentang layanan jasa cleaning sepatu dan koper di CUCIJU.sby. Apakah bisa membantu saya?"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-[#0091e6] text-white font-semibold text-[13px] tracking-wide py-2 px-5 rounded-lg transition-all duration-300 hover:bg-[#185fa4] hover:shadow-md active:scale-95"
            >
              <svg
                className="w-[16px] h-[16px] fill-current flex-shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Hubungi Kami</span>
            </Link>

              {/* Blue Circle Hamburger Button */}
              <button
                type="button"
                className="flex flex-col justify-center items-center gap-[4px] w-10 h-10 rounded-full bg-[#185fa4] text-white hover:bg-[#0091e6] transition-all duration-300 shadow-md shadow-[#185fa4]/20 group/ham cursor-pointer"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <span className="block w-5 h-[2px] bg-white rounded transition-transform duration-300 group-hover/ham:translate-y-[1px]" />
                <span className="block w-5 h-[2px] bg-white rounded transition-opacity duration-300" />
                <span className="block w-5 h-[2px] bg-white rounded transition-transform duration-300 group-hover/ham:-translate-y-[1px]" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ===== SIDEBAR DRAWER OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-cu-black/60 backdrop-blur-sm z-[90] transition-opacity duration-500 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ===== SIDEBAR DRAWER CONTAINER ===== */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] sm:w-[380px] bg-white shadow-2xl z-[100] transition-transform duration-500 ease-in-out transform flex flex-col justify-between p-6 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header of Drawer (Fixed) */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden w-8 h-8 flex-shrink-0">
              <Image
                src="/logo-cuciju.png"
                alt="CUCIJU Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-sm text-cu-dark tracking-tight">
                CUCIJU<span className="text-cu-primary">.sby</span>
              </span>
              <span className="text-[7.5px] font-extrabold text-gray-400 tracking-wider uppercase mt-0.5">
                KKN UWIKA SURABAYA 2026
              </span>
            </div>
          </div>
          {/* Close Button */}
          <button
            type="button"
            className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-cu-black hover:border-gray-200 transition-colors cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Container for Drawer Content */}
        <div className="flex-grow overflow-y-auto my-4 pr-1 space-y-8 scrollbar-thin select-none">
          
          {/* Navigation Links inside Drawer (Only shown on mobile/tablet for usability) */}
          <nav className="md:hidden flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <div key={link.href} className="flex flex-col">
                  <Link
                    href={link.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`text-base font-black tracking-tight py-2.5 px-4 rounded-xl transition-all duration-200 ${
                      active
                        ? "text-cu-primary bg-cu-light/25 pl-6"
                        : "text-cu-black hover:text-cu-primary hover:bg-gray-50 hover:pl-6"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {/* Sublinks in sidebar */}
                  {link.dropdown && (
                    <div className="pl-8 flex flex-col gap-2 mt-1 border-l border-gray-100 ml-6">
                      {link.dropdown?.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setSidebarOpen(false)}
                          className="text-xs font-bold text-gray-400 hover:text-cu-primary transition-colors py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Brand Info & Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", paddingBottom: "24px" }} className="hidden md:flex">
            
            {/* Header & Logo */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div className="relative overflow-hidden w-20 h-20 rounded-2xl bg-white shadow-lg shadow-cu-primary/10 border border-gray-100 flex items-center justify-center">
                <Image
                  src="/logo-cuciju.png"
                  alt="CUCIJU Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 text-center leading-relaxed font-medium px-2">
                Jasa cuci sepatu dan reparasi koper profesional di Surabaya, mengutamakan kualitas, kecepatan, dan kepuasan Anda.
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ height: "1px", flex: 1, backgroundColor: "#f3f4f6" }}></div>
                <p className="font-extrabold uppercase text-[10px] text-cu-primary tracking-widest text-center">Hasil Perawatan Kami</p>
                <div style={{ height: "1px", flex: 1, backgroundColor: "#f3f4f6" }}></div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                {[
                  "/gallery/after-sepatu-1.png",
                  "/gallery/after-sepatu-2.png",
                  "/gallery/after-sepatu-3.png",
                  "/gallery/after-koper-1.png",
                  "/gallery/after-koper-2.png",
                  "/gallery/after-koper-3.png"
                ].map((src, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-cu-accent transition-all duration-300 cursor-pointer group">
                    <Image
                      src={src}
                      alt={`Gallery thumbnail ${idx}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-cu-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address Info Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="font-extrabold uppercase text-[10px] text-cu-primary tracking-widest border-l-2 border-cu-accent pl-2">Alamat & Lokasi</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }} className="text-[13px] text-gray-500 font-medium">
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <svg className="w-4 h-4 text-cu-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <p><span className="font-bold text-cu-dark">Address:</span> Dharmahusada, Gubeng</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <svg className="w-4 h-4 text-cu-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                  <p><span className="font-bold text-cu-dark">City:</span> Surabaya, Jawa Timur</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <svg className="w-4 h-4 text-cu-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <p><span className="font-bold text-cu-dark">Country:</span> Indonesia</p>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="font-extrabold uppercase text-[10px] text-cu-primary tracking-widest border-l-2 border-cu-accent pl-2">Kontak Info</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }} className="text-[13px] text-gray-500 font-medium">
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <svg className="w-4 h-4 text-cu-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <p><span className="font-bold text-cu-dark">Email:</span> cuciju.sby@gmail.com</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <svg className="w-4 h-4 text-cu-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <p><span className="font-bold text-cu-dark">Phone:</span> +62 813-3646-6614</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer of Drawer (Fixed) */}
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-4 flex-shrink-0">
          <div className="flex items-center justify-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-cu-primary hover:text-white flex items-center justify-center text-gray-400 transition-colors duration-250">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-pink-600 hover:text-white flex items-center justify-center text-gray-400 transition-colors duration-250">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/6281336466614" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-green-600 hover:text-white flex items-center justify-center text-gray-400 transition-colors duration-250">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.34 11.895-11.953 11.895-2.007 0-3.982-.505-5.754-1.47L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.376 0 9.738-4.364 9.742-9.742.002-2.624-1.018-5.09-2.873-6.947C16.29 2.058 13.82 1.037 11.998 1.036 6.622 1.036 2.26 5.4 2.256 10.78c0 1.543.468 3.056 1.353 4.394l-.99 3.614 3.738-.98c.002 0 .002 0 0 0z"/>
              </svg>
            </a>
          </div>
          <div className="text-[9px] text-gray-400 text-center leading-normal">
            &copy; {new Date().getFullYear()} CUCIJU.sby · KKN Universitas Widya Kartika Surabaya.
          </div>
        </div>
      </div>
    </>
  );
}
