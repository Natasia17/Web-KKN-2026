// ============================================
// CUCIJU - Type Definitions & Data
// ============================================

// --- Types ---

export type ServiceCategory = "sepatu" | "koper";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  category: ServiceCategory;
  popular: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ServiceCategory;
  beforeImage: string;
  afterImage: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  service: string;
  date: string;
}

// --- Services ---

export const services: Service[] = [
  // Sepatu
  {
    id: "cuci-regular",
    title: "Cuci Regular",
    description:
      "Pembersihan standar bagian luar dan dalam sepatu. Cocok untuk perawatan rutin agar sepatu tetap bersih dan wangi.",
    icon: "👟",
    price: "Rp 25.000 – 45.000",
    category: "sepatu",
    popular: true,
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning Premium",
    description:
      "Pembersihan menyeluruh hingga ke sela-sela terkecil menggunakan cairan khusus. Termasuk sanitasi dan deodorizing.",
    icon: "✨",
    price: "Rp 65.000 – 95.000",
    category: "sepatu",
    popular: true,
  },
  {
    id: "repaint-restore",
    title: "Repaint & Restore",
    description:
      "Pewarnaan ulang dan restorasi sepatu yang pudar atau tergores. Mengembalikan tampilan seperti baru.",
    icon: "🎨",
    price: "Rp 85.000 – 150.000",
    category: "sepatu",
    popular: false,
  },
  {
    id: "reparasi-sol",
    title: "Reparasi Sol",
    description:
      "Penggantian atau pengeleman ulang sol sepatu yang lepas, aus, atau rusak. Menggunakan lem dan material berkualitas.",
    icon: "🔧",
    price: "Rp 35.000 – 75.000",
    category: "sepatu",
    popular: false,
  },
  {
    id: "unyellowing",
    title: "Unyellowing",
    description:
      "Proses pemutihan sol sepatu yang menguning akibat oksidasi. Mengembalikan warna putih cerah pada midsole.",
    icon: "💎",
    price: "Rp 45.000 – 65.000",
    category: "sepatu",
    popular: true,
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description:
      "Pelapisan anti air pada permukaan sepatu untuk melindungi dari hujan dan cipratan. Tahan hingga beberapa bulan.",
    icon: "💧",
    price: "Rp 30.000 – 50.000",
    category: "sepatu",
    popular: false,
  },

  // Koper
  {
    id: "cleaning-koper",
    title: "Cleaning Koper",
    description:
      "Pembersihan menyeluruh bagian luar dan dalam koper. Menghilangkan noda, debu, dan bau tidak sedap.",
    icon: "🧳",
    price: "Rp 55.000 – 85.000",
    category: "koper",
    popular: true,
  },
  {
    id: "reparasi-handle",
    title: "Reparasi Handle",
    description:
      "Perbaikan atau penggantian pegangan koper yang patah, longgar, atau rusak. Tersedia berbagai tipe handle.",
    icon: "🛠️",
    price: "Rp 75.000 – 150.000",
    category: "koper",
    popular: false,
  },
  {
    id: "reparasi-roda",
    title: "Reparasi Roda",
    description:
      "Penggantian atau perbaikan roda koper yang macet, aus, atau patah. Roda baru berkualitas agar koper kembali lancar.",
    icon: "⚙️",
    price: "Rp 55.000 – 100.000",
    category: "koper",
    popular: true,
  },
  {
    id: "reparasi-ritsleting",
    title: "Reparasi Ritsleting",
    description:
      "Perbaikan atau penggantian ritsleting koper yang rusak, macet, atau giginya patah. Hasil rapi dan tahan lama.",
    icon: "🪡",
    price: "Rp 45.000 – 85.000",
    category: "koper",
    popular: false,
  },
];

// --- Gallery Items ---

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Deep Cleaning Sneakers Putih",
    category: "sepatu",
    beforeImage: "/gallery/before-sepatu-1.png",
    afterImage: "/gallery/after-sepatu-1.png",
    description:
      "Sneakers putih yang sangat kotor dan menguning berhasil dikembalikan ke warna aslinya setelah deep cleaning premium.",
    date: "2026-05-10",
  },
  {
    id: "gallery-2",
    title: "Repaint Sepatu Kulit",
    category: "sepatu",
    beforeImage: "/gallery/before-sepatu-2-v2.png",
    afterImage: "/gallery/after-sepatu-2-v2.png",
    description:
      "Sepatu kulit formal yang pudar dan tergores di-repaint ulang sehingga tampil elegan seperti baru.",
    date: "2026-05-15",
  },
  {
    id: "gallery-3",
    title: "Unyellowing Sol Sepatu",
    category: "sepatu",
    beforeImage: "/gallery/before-sepatu-3-v2.png",
    afterImage: "/gallery/after-sepatu-3-v2.png",
    description:
      "Sol sepatu yang kuning akibat oksidasi berhasil diputihkan kembali melalui proses unyellowing profesional.",
    date: "2026-05-20",
  },
  {
    id: "gallery-4",
    title: "Cleaning Koper Hardcase",
    category: "koper",
    beforeImage: "/gallery/before-koper-1.png",
    afterImage: "/gallery/after-koper-1.png",
    description:
      "Koper hardcase yang penuh goresan dan noda dibersihkan menyeluruh, tampilan kembali mulus.",
    date: "2026-05-08",
  },
  {
    id: "gallery-5",
    title: "Reparasi Roda Koper",
    category: "koper",
    beforeImage: "/gallery/before-koper-2-v2.png",
    afterImage: "/gallery/after-koper-2-v2.png",
    description:
      "Roda koper yang macet dan aus diganti dengan roda baru berkualitas. Koper kembali mulus digunakan traveling.",
    date: "2026-05-12",
  },
  {
    id: "gallery-6",
    title: "Reparasi Ritsleting Koper",
    category: "koper",
    beforeImage: "/gallery/before-koper-3-v2.png",
    afterImage: "/gallery/after-koper-3-v2.png",
    description:
      "Ritsleting koper yang giginya patah diganti baru. Hasil rapi, koper bisa dibuka-tutup dengan lancar.",
    date: "2026-05-18",
  },
];

// --- Testimonials ---

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Rina Wulandari",
    city: "Surabaya",
    rating: 5,
    comment:
      "Sepatu putih saya udah kusam banget, kirain harus beli baru. Setelah deep cleaning di CUCIJU hasilnya bersih banget kayak baru lagi! Harganya juga ramah di kantong. Recommended!",
    service: "Deep Cleaning Premium",
    date: "2026-05-11",
  },
  {
    id: "testi-2",
    name: "Bayu Prasetyo",
    city: "Sidoarjo",
    rating: 5,
    comment:
      "Koper saya rodanya udah rusak semua mau berangkat traveling. Untung nemu CUCIJU, dibenerin cepet dan hasilnya rapi. Roda barunya smooth banget. Terima kasih CUCIJU!",
    service: "Reparasi Roda",
    date: "2026-05-14",
  },
  {
    id: "testi-3",
    name: "Dian Safitri",
    city: "Surabaya",
    rating: 4,
    comment:
      "Pertama kali coba cuci sepatu di CUCIJU. Prosesnya cepat, hasilnya juga oke. Sol yang tadinya kuning sekarang putih lagi. Cuma agak antri aja karena rame, tapi worth it!",
    service: "Unyellowing",
    date: "2026-05-19",
  },
  {
    id: "testi-4",
    name: "Farhan Maulana",
    city: "Surabaya",
    rating: 5,
    comment:
      "Sepatu kulit kesayangan saya warnanya udah pudar parah. Setelah di-repaint di CUCIJU warnanya rata dan bagus banget, nggak nyangka bisa sebagus ini. Pasti bakal balik lagi!",
    service: "Repaint & Restore",
    date: "2026-05-22",
  },
];
