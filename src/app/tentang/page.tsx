import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tentang Kami - CUCIJU Surabaya",
  description:
    "Kenali lebih dekat CUCIJU - program pemberdayaan masyarakat jasa cuci sepatu dan reparasi koper dari KKN Universitas Widya Kartika 2026.",
};

const teamMembers = [
  {
    name: "Yafet N.",
    role: "Ketua Kelompok KKN",
    desc: "Mengoordinasi seluruh divisi program kerja CUCIJU.",
    initials: "YN",
  },
  {
    name: "Natasya U.",
    role: "Hubungan Masyarakat & Sosialisasi",
    desc: "Menghubungkan program dengan komunitas warga sekitar.",
    initials: "NU",
  },
  {
    name: "Christian D.",
    role: "Operasional & Teknisi Sepatu",
    desc: "Bertanggung jawab atas kualitas pencucian sepatu.",
    initials: "CD",
  },
  {
    name: "Gabriella M.",
    role: "Operasional & Teknisi Koper",
    desc: "Ahli perbaikan roda, handle, dan ritsleting koper.",
    initials: "GM",
  },
];

export default function TentangPage() {
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
              Cerita Kami
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Tentang CUCIJU
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto text-base md:text-lg">
            Inisiatif pengabdian masyarakat oleh mahasiswa Universitas Widya Kartika untuk memberikan solusi perawatan alas kaki dan barang bawaan secara profesional.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Image Container (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cu-primary to-cu-accent rounded-3xl rotate-2 opacity-10" />
              <div className="aspect-[4/3] w-full bg-cu-light/20 border border-cu-light rounded-3xl flex flex-col items-center justify-center p-8 relative z-10 text-center shadow-lg shadow-cu-primary/5">
                <div className="w-20 h-20 relative mb-4">
                  <Image
                    src="/logo-cuciju.png"
                    alt="CUCIJU Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-cu-dark">
                  KKN UWIKA 2026
                </h3>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">
                  Program Kuliah Kerja Nyata pemberdayaan ekonomi kreatif masyarakat Surabaya.
                </p>
              </div>
            </div>

            {/* Right Column - Text Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-cu-accent" />
                <span className="text-cu-primary font-bold text-xs tracking-wider uppercase">
                  Latar Belakang
                </span>
              </div>
              <h2 className="text-3xl font-black text-cu-black leading-tight">
                Berawal Dari Kepedulian Terhadap Barang Kesayangan Anda
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                CUCIJU didirikan sebagai bagian dari program Kuliah Kerja Nyata (KKN) mahasiswa Universitas Widya Kartika Surabaya pada tahun 2026. Lahir dari pemikiran sederhana bahwa sepatu dan koper adalah barang-barang penunjang mobilitas tinggi yang sering diabaikan perawatannya sampai terjadi kerusakan berat.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Kami hadir untuk memberikan solusi pembersihan sepatu yang higienis serta perbaikan koper (roda, ritsleting, pegangan) secara praktis dan ekonomis tanpa mengabaikan standar kualitas pengerjaan. Melalui bimbingan dosen dan kolaborasi mahasiswa lintas program studi, kami mengaplikasikan metode kerja yang presisi untuk menjaga usia pakai barang-barang Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div>
                  <h4 className="font-bold text-cu-primary text-xl">100%</h4>
                  <p className="text-xs text-gray-400 mt-1">Garansi Pengerjaan Ulang</p>
                </div>
                <div>
                  <h4 className="font-bold text-cu-primary text-xl">Surabaya</h4>
                  <p className="text-xs text-gray-400 mt-1">Area Fokus Layanan</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-cu-white w-full flex justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cu-accent" />
              <span className="text-cu-primary font-bold text-xs tracking-[0.2em] uppercase">
                Tim Penggerak
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-cu-black">
              KKN UWIKA Kelompok 2
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">
              Mahasiswa Universitas Widya Kartika Surabaya angkatan 2026 yang mendedikasikan diri untuk melayani komunitas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-2xl border border-cu-light/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cu-primary/5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cu-primary to-cu-accent flex items-center justify-center text-white font-extrabold text-lg mb-4 shadow shadow-cu-primary/20">
                  {member.initials}
                </div>
                <h4 className="font-bold text-cu-black text-base">{member.name}</h4>
                <p className="text-xs text-cu-primary font-semibold mt-1 bg-cu-light/35 px-2.5 py-0.5 rounded-full">
                  {member.role}
                </p>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
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
