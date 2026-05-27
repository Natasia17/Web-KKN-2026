import type { Service } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  // Determine if it is a popular item to add top accent bar
  return (
    <div
      className={`group flex flex-col justify-between h-full bg-white rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cu-primary/5 hover:border-cu-primary/40 relative overflow-hidden ${
        service.popular
          ? "border-cu-accent/50 shadow-md shadow-cu-accent/5"
          : "border-gray-100 shadow-sm"
      }`}
    >
      {/* Top accent bar for popular services */}
      {service.popular && (
        <div className="absolute top-0 left-0 w-full h-[4px] bg-cu-accent" />
      )}

      {/* Card Header: Icon and Popular Badge */}
      <div className="flex items-start justify-between mb-4">
        <ServiceIcon id={service.id} className="w-12 h-12" />
        {service.popular && (
          <span className="bg-cu-accent/15 text-cu-dark text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full border border-cu-accent/25">
            POPULER
          </span>
        )}
      </div>

      {/* Card Body: Title and Description */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-extrabold text-base md:text-lg text-cu-black tracking-tight group-hover:text-cu-primary transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Card Footer: Price and Order CTA */}
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Harga</p>
            <p className="font-heading font-black text-xs md:text-sm text-cu-primary mt-0.5">
              {service.price}
            </p>
          </div>
          <a
            href={`https://wa.me/6281336466614?text=Halo%20CUCIJU%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(service.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cu-dark to-cu-primary text-white text-xs font-black px-5 py-3 rounded-xl transition-all duration-300 hover:from-cu-primary hover:to-cu-accent hover:shadow-lg hover:shadow-cu-primary/25 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group/btn"
          >
            {/* Glossy hover streak effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Pesan</span>
              <svg
                className="w-3.5 h-3.5 text-cu-light transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

