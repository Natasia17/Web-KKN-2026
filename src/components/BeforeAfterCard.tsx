import Image from "next/image";

interface BeforeAfterCardProps {
  title: string;
  category: "sepatu" | "koper";
  beforeSrc: string;
  afterSrc: string;
  description?: string;
}

export default function BeforeAfterCard({
  title,
  category,
  beforeSrc,
  afterSrc,
  description,
}: BeforeAfterCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-shadow duration-300 bg-white group flex flex-col h-full relative">
      {/* Badge Category (Top Left) */}
      <div className="absolute top-4 left-4 z-30">
        <span className="bg-[#d90000] text-white text-[10px] font-bold px-3 py-1 rounded-full capitalize tracking-wide shadow-sm">
          {category}
        </span>
      </div>

      {/* ---- Image comparison ---- */}
      <div className="relative flex h-52">
        {/* Before */}
        <div className="relative w-1/2 overflow-hidden">
          <Image
            src={beforeSrc}
            alt={`Sebelum - ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
          <span className="absolute left-2 bottom-2 bg-black/60 backdrop-blur-sm text-white/90 text-[9px] font-bold px-2 py-1 rounded tracking-widest z-10">
            SEBELUM
          </span>
        </div>

        {/* After */}
        <div className="relative w-1/2 overflow-hidden">
          <Image
            src={afterSrc}
            alt={`Sesudah - ${title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute right-2 bottom-2 bg-black/60 backdrop-blur-sm text-white/90 text-[9px] font-bold px-2 py-1 rounded tracking-widest z-10">
            SESUDAH
          </span>
        </div>

        {/* Center divider */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/50 z-10" />

        {/* Center icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full w-7 h-7 flex items-center justify-center text-gray-500 text-[10px] z-20 shadow-sm border border-gray-100">
          ▶◁
        </div>
      </div>

      {/* ---- Info ---- */}
      <div className="p-6 flex flex-col flex-grow bg-white group-hover:bg-gray-50/50 transition-colors duration-300">
        <h3 className="font-black text-gray-900 text-lg leading-tight group-hover:text-cu-primary transition-colors duration-300">
          {title}
        </h3>
        
        {description && (
          <div className="mt-3 pl-3 border-l-2 border-cu-accent/50 flex-grow">
            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>
        )}
        
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">
            Tanya Admin
          </p>
          <a 
            href={`https://wa.me/6281336466614?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20tentang%20hasil%20kerja%20${encodeURIComponent(title)}`} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-xs font-bold text-cu-primary hover:text-cu-dark transition-colors group/link bg-cu-primary/5 hover:bg-cu-primary/10 rounded-full"
            style={{ padding: '12px 24px' }}
            // Settingan  layout button agar lebih sesuai
          >
            Lihat Detail 
            <svg 
              className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
