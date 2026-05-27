import type { Metadata } from "next";
import LayananList from "@/components/LayananList";

export const metadata: Metadata = {
  title: "Layanan Kami - CUCIJU Surabaya",
  description:
    "Berbagai jasa cuci sepatu, deep cleaning, repaint, dan reparasi koper profesional dari CUCIJU Surabaya.",
};

export default function LayananPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-cu-dark to-cu-primary relative overflow-hidden">
        {/* Decorative ambient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-cu-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-3 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cu-accent" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Layanan Terbaik
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Layanan Kami
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto text-base md:text-lg">
            Kami menyediakan solusi perawatan sepatu &amp; perbaikan koper premium dengan harga terjangkau dan proses pengerjaan yang profesional.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-cu-white w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <LayananList />
        </div>
      </section>
    </>
  );
}
