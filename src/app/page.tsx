import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import GallerySection from "@/components/GallerySection";
import { services, testimonials } from "@/lib/data";

const advantages = [
  {
    icon: (
      <svg className="w-9 h-9 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Bahan Premium",
    desc: "Menggunakan cairan pembersih dan peralatan berkualitas tinggi yang aman untuk semua jenis material.",
    bgClass: "from-cu-primary to-blue-600 shadow-blue-500/30",
  },
  {
    icon: (
      <svg className="w-9 h-9 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pengerjaan Cepat",
    desc: "Proses pengerjaan efisien dengan estimasi waktu yang jelas. Sepatu & koper cepat kembali ke tanganmu.",
    bgClass: "from-cu-accent to-cyan-500 shadow-cyan-500/30",
  },
  {
    icon: (
      <svg className="w-9 h-9 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Hasil Terjamin",
    desc: "Garansi kepuasan pelanggan. Jika hasil belum memuaskan, kami siap mengerjakan ulang tanpa biaya tambahan.",
    bgClass: "from-green-400 to-emerald-600 shadow-emerald-500/30",
  },
  {
    icon: (
      <svg className="w-9 h-9 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0M5 17H3V6a2 2 0 012-2h9v11m0 0h2m0-11l4 4v7h-2M14 5h4" />
      </svg>
    ),
    title: "Bisa Antar Jemput",
    desc: "Tidak sempat datang? Tenang, kami menyediakan layanan pick-up & delivery di area Surabaya dan sekitarnya.",
    bgClass: "from-orange-400 to-amber-600 shadow-amber-500/30",
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
      <section className="bg-white pt-20 pb-20 px-6 md:px-16 lg:px-24 w-full flex justify-center relative overflow-hidden">
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

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((s) => (
              <div key={s.id} className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
          
          {/* Spacer pemisah yang dijamin bekerja untuk memberi jarak ekstra di bawah kartu terakhir */}
          <div className="w-full h-24 md:h-40"></div>
        </div>

        {/* Bottom organic curve transition to the next section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none select-none">
          <svg className="relative block w-full h-[60px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C150,90 350,120 600,100 C850,80 1050,90 1200,40 L1200,120 L0,120 Z" fill="#F0F8FF"></path>
          </svg>
        </div>
      </section>

      {/* 3 ── GALERI (client component) */}
      <GallerySection />

      {/* Spacer pemisah / DIVIDER */}
      <div className="w-full h-8 md:h-12 bg-cu-white"></div>

      {/* 4 ── KENAPA CUCIJU? */}
      <section className="bg-cu-white pt-10 pb-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
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
          
          {/* Spacer / DIVIDER */}
          <div className="w-full h-3 md:h-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-cu-light/50 hover:border-transparent transition-all duration-300"
              >
                {/* Subtle gradient border and shadow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cu-light/40 to-white -z-10 group-hover:shadow-2xl group-hover:shadow-cu-primary/5 transition-all duration-500" />
                <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-cu-primary/10 transition-all duration-300 pointer-events-none" />
                
                {/* Icon Container */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${a.bgClass} shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {a.icon}
                </div>
                
                <h3 className="font-extrabold text-lg text-cu-black mb-3">{a.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer / DIVIDER */}
      <div className="w-full h-10 md:h-12"></div> {/*  bg-white */}

      <div className="w-full bg-white h-5 md:h-8"></div>

      {/* 5 ── TESTIMONI */}
      <section className="bg-white pb-20 px-6 md:px-16 lg:px-24 w-full flex justify-center">
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
              <div className="w-full h-3 md:h-1"></div>
            <p className="text-gray-400 mt-3 text-center w-full block">
              Testimoni langsung dari pelanggan setia CUCIJU
            </p>
          </div>

          {/* Spacer / DIVIDER */}
          <div className="w-full h-3 md:h-4"></div>
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
          {/* Spacer / DIVIDER */}
          <div className="w-full h-3 md:h-10"></div>
        </div>
      </section>

      {/* 6 ── CTA BOTTOM */}
      <section className="relative bg-cu-dark py-20 px-6 md:px-16 lg:px-24 overflow-hidden w-full flex justify-center">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cu-primary/20 blur-[100px]" />
        
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cu-accent/15 blur-[80px]" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center w-full">
                  
        {/* Spacer / DIVIDER */}
          {/* <div className="w-full h-3 md:h-3"></div> */}
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight text-center">
            Siap Bersihkan
            <br />
            Sepatumu<span className="text-cu-accent"> ?</span>
          </h2>
          <p className="text-blue-200/70 mt-4 text-lg max-w-md text-center" style={{ textAlign: 'center' }}>
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
            <div className="w-full h-3 md:h-3"></div>
        </div>
      </section>
    </>
  );
}
