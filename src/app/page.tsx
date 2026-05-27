import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import GallerySection from "@/components/GallerySection";
import { services, testimonials } from "@/lib/data";

const advantages = [
  {
    icon: "🧹",
    title: "Bahan Premium",
    desc: "Menggunakan cairan pembersih dan peralatan berkualitas tinggi yang aman untuk semua jenis material.",
  },
  {
    icon: "⚡",
    title: "Pengerjaan Cepat",
    desc: "Proses pengerjaan efisien dengan estimasi waktu yang jelas. Sepatu & koper cepat kembali ke tanganmu.",
  },
  {
    icon: "✅",
    title: "Hasil Terjamin",
    desc: "Garansi kepuasan pelanggan. Jika hasil belum memuaskan, kami siap mengerjakan ulang tanpa biaya tambahan.",
  },
  {
    icon: "🚚",
    title: "Bisa Antar Jemput",
    desc: "Tidak sempat datang? Tenang, kami menyediakan layanan pick-up & delivery di area Surabaya dan sekitarnya.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-yellow-400 text-sm tracking-wider">
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1 ── HERO + MARQUEE */}
      <Hero />

      {/* 2 ── LAYANAN KAMI */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cu-accent" />
              <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
                Apa yang Kami Tawarkan
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-cu-black">
              Layanan Kami
            </h2>
            <p className="text-gray-400 mt-3 text-center w-full block">
              Solusi lengkap perawatan sepatu &amp; reparasi koper profesional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 ── GALERI (client component) */}
      <GallerySection />

      {/* 4 ── KENAPA CUCIJU? */}
      <section className="bg-cu-white py-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cu-accent" />
              <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
                Keunggulan
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-cu-black">
              Kenapa CUCIJU?
            </h2>
            <p className="text-gray-400 mt-3 text-center w-full block">
              Alasan pelanggan mempercayakan sepatu &amp; koper mereka kepada
              kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="text-center p-8 rounded-2xl bg-white border border-cu-light/80 hover:border-cu-primary/30 hover:shadow-lg hover:shadow-cu-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-5">{a.icon}</div>
                <h3 className="font-bold text-lg text-cu-black">{a.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── TESTIMONI */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cu-accent" />
              <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
                Testimoni
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-cu-black">
              Apa Kata Mereka?
            </h2>
            <p className="text-gray-400 mt-3 text-center w-full block">
              Testimoni langsung dari pelanggan setia CUCIJU
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-cu-white rounded-2xl p-6 border border-cu-light hover:-translate-y-1 hover:shadow-lg hover:shadow-cu-primary/5 transition-all duration-300"
              >
                <p className="text-3xl text-cu-accent leading-none mb-3 font-serif">
                  &ldquo;
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t.comment}
                </p>
                <div className="mt-5 pt-4 border-t border-cu-light">
                  <Stars count={t.rating} />
                  <p className="font-bold text-cu-black text-sm mt-1.5">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t.city} · {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── CTA BOTTOM */}
      <section className="relative bg-cu-dark py-20 px-6 md:px-16 lg:px-24 overflow-hidden w-full flex justify-center">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cu-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cu-accent/15 blur-[80px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center w-full">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Siap Bersihkan
            <br />
            Sepatumu<span className="text-cu-accent"> ?</span>
          </h2>
          <p className="text-blue-200/70 mt-4 text-lg max-w-md mx-auto">
            Hubungi kami sekarang via WhatsApp dan dapatkan penawaran terbaik.
          </p>
          <a
            href="https://wa.me/6281336466614?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20soal%20layanan%20cuci%20sepatu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-8 bg-green-500 text-white font-bold px-10 py-4 rounded-full text-base hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </>
  );
}
