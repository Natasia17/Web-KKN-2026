import type { Service } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";
import Link from "next/link";

export default function ServiceCard({ service }: { service: Service }) {
  // Determine if it is a popular item to add top accent bar
  return (
    <div
      className={`group flex flex-col justify-between h-full bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cu-primary/5 hover:border-cu-primary/40 relative overflow-hidden ${
        service.popular
          ? "border-cu-accent/40 shadow-md shadow-cu-primary/5 bg-gradient-to-b from-white to-cu-white/10"
          : "border-gray-100 shadow-sm"
      }`}
    >
      {/* Top accent bar for popular services */}
      {service.popular && (
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cu-primary to-cu-accent" />
      )}

      {/* Card Header: Icon and Popular Badge */}
      <div className="flex items-start justify-between mb-4">
        <Link href={`/layanan?cat=${service.category}`} className="block transition-transform duration-200 hover:scale-105">
          <ServiceIcon id={service.id} className="w-12 h-12" />
        </Link>
        {service.popular && (
          <span className="inline-flex items-center bg-gradient-to-r from-cu-primary to-[#0091e6] text-white text-[9px] md:text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm shadow-[#185fa4]/20 border border-white/10 select-none">
            <svg className="w-2.5 h-2.5 text-yellow-300 fill-current mr-1 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            POPULER
          </span>
        )}
      </div>

      {/* Card Body: Title and Description */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <Link href={`/layanan?cat=${service.category}`} className="block group/title">
            <h3 className="font-heading font-extrabold text-base md:text-lg text-cu-black tracking-tight group-hover/title:text-cu-primary transition-colors duration-200 hover:underline decoration-cu-primary/30 decoration-2 underline-offset-4">
              {service.title}
            </h3>
          </Link>
          <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Card Footer: Price and Order CTA */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-end justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Harga</p>
            </div>
            <p className="font-bold text-[13px] md:text-sm text-gray-900 group-hover:text-cu-primary transition-colors duration-300 pl-5">
              {service.price}
            </p>
          </div>
          <a
            href={`https://wa.me/6281256580808?text=Halo%20CUCIJU%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center justify-center gap-2 border border-cu-primary/20 bg-cu-primary/5 text-cu-primary hover:bg-cu-primary hover:text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 mr-[4cm]"
          >
            <span>Pesan</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

