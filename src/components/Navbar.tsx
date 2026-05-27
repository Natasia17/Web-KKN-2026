"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/layanan", label: "Layanan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
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
              onClick={handleLinkClick}
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
                <span className="text-[7.5px] md:text-[8.5px] font-extrabold text-gray-400 tracking-wider uppercase mt-0.5 whitespace-nowrap">
                  KKN UNIVERSITAS WIDYA KARTIKA 2026
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links (Centered in viewport) */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 h-full z-0">
            <ul className="flex items-center gap-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 block ${
                        active
                          ? "text-cu-primary bg-cu-light/30"
                          : "text-gray-600 hover:text-cu-dark hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {active && (
                      <span className="absolute bottom-[-1px] left-4 right-4 h-0.5 bg-cu-primary rounded-full" />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA & Hamburger */}
          <div className="flex-1 flex justify-end items-center gap-3 z-10">
            <Link
              href="/kontak"
              className="hidden md:inline-flex items-center gap-2 bg-cu-dark text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-full hover:bg-cu-primary hover:shadow-md hover:shadow-cu-primary/20 hover:-translate-y-[1px] active:translate-y-0 transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-cu-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              Hubungi Kami
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2.5 w-10 h-10 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5.5 h-[2px] bg-cu-dark rounded transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5.5 h-[2px] bg-cu-dark rounded transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5.5 h-[2px] bg-cu-dark rounded transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1.5 shadow-inner">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-base font-semibold py-3 px-4 rounded-xl transition-all duration-200 block ${
                  active
                    ? "text-cu-primary bg-cu-light/20"
                    : "text-gray-700 hover:bg-gray-50 hover:text-cu-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontak"
            onClick={handleLinkClick}
            className="mt-3 flex items-center justify-center gap-2 bg-cu-dark text-white font-bold text-base py-3.5 rounded-xl hover:bg-cu-primary transition-colors duration-200"
          >
            <svg
              className="w-4.5 h-4.5 text-cu-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}

