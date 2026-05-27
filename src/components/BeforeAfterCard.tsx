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
    <div className="rounded-2xl overflow-hidden shadow-lg border border-cu-light hover:-translate-y-1 transition-all duration-300 bg-white group">
      {/* ---- Image comparison ---- */}
      <div className="relative flex h-48">
        {/* Before */}
        <div className="relative w-1/2 overflow-hidden">
          <Image
            src={beforeSrc}
            alt={`Sebelum - ${title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute left-0 bottom-0 bg-red-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-tr-md z-10">
            SEBELUM
          </span>
        </div>

        {/* After */}
        <div className="relative w-1/2 overflow-hidden">
          <Image
            src={afterSrc}
            alt={`Sesudah - ${title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute right-0 bottom-0 bg-green-500/80 text-white text-xs font-bold px-2 py-0.5 rounded-tl-md z-10">
            SESUDAH
          </span>
        </div>

        {/* Center divider */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-white/80 z-10" />

        {/* Center icon */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-cu-primary text-xs font-bold z-20 shadow-md">
          ✦
        </div>
      </div>

      {/* ---- Info ---- */}
      <div className="p-4">
        <span className="inline-block bg-cu-light text-cu-dark text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
          {category}
        </span>
        <h3 className="font-semibold text-cu-black text-base mt-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
