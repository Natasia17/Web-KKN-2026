import type { Metadata } from "next";
import Image from "next/image";
import GaleriGrid from "@/components/GaleriGrid";

export const metadata: Metadata = {
  title: "Galeri Portofolio - CUCIJU Surabaya",
  description:
    "Lihat hasil before & after cuci sepatu dan reparasi koper dari CUCIJU Surabaya. Bukti nyata kualitas pengerjaan tim kami.",
};

export default function GaleriPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-cu-dark to-cu-primary relative overflow-hidden">
        {/* Decorative ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-cu-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cu-accent" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Portofolio Kami
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Galeri Kerja
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto text-base md:text-lg">
            Dokumentasi perbandingan sebelum dan sesudah pengerjaan cuci sepatu, unyellowing, repaint, dan perbaikan koper oleh CUCIJU.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-cu-white w-full flex justify-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-cu-black mb-2">Transformasi Premium</h2>
            <p className="text-gray-500">Perbandingan detail sebelum dan sesudah pengerjaan kami.</p>
          </div>
          <GaleriGrid />
        </div>
      </section>

      {/* New WhatsApp Documentation & Testimonials Section */}
      <section className="py-20 md:py-28 bg-gray-50/50 w-full flex justify-center relative">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1591DC]" />
              <span className="text-[#2C5EAD] text-xs font-bold tracking-wider uppercase">
                Dokumentasi & Bukti Chat
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-cu-black mb-4">Galeri Pelanggan</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Beragam hasil kerja dan testimoni asli pelanggan kami yang diabadikan langsung melalui WhatsApp.
            </p>
          </div>

          {/* Aesthetic CSS Grid / Masonry-ish Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 17 }).map((_, i) => (
              <div 
                key={i} 
                className="group relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#1591DC]/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image 
                  src={`/gallery/docs/doc-${i + 1}.jpeg`}
                  alt={`Dokumentasi Pelanggan ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
