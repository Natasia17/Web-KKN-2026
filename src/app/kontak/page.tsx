import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami - CUCIJU Surabaya",
  description:
    "Hubungi CUCIJU untuk jasa cuci sepatu dan reparasi koper di Surabaya. Via WhatsApp, email, atau kunjungi lokasi kami.",
};

export default function KontakPage() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-cu-accent animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Hubungi Kami
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Hubungi CUCIJU
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto text-base md:text-lg">
            Kami siap melayani kebutuhan pencucian sepatu dan perbaikan koper Anda. Hubungi tim kami atau kunjungi kami.
          </p>
        </div>
      </section>

      {/* Contact Details & Map */}
      <section className="py-16 md:py-24 bg-cu-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left: Contact Info (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-cu-primary/5 border border-cu-light/45">
              <div>
                <h2 className="text-2xl font-black text-cu-black mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-sm text-gray-400 mb-8">
                  Punya pertanyaan seputar layanan kami? Jangan ragu untuk menghubungi kami melalui media komunikasi berikut.
                </p>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cu-light/40 flex items-center justify-center flex-shrink-0 text-cu-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-cu-black mb-0.5 text-base">Alamat</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Surabaya, Jawa Timur, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-.927.426-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-cu-black mb-0.5 text-base">WhatsApp</h4>
                      <a
                        href="https://wa.me/6281336466614?text=Halo%20CUCIJU%2C%20saya%20tertarik%20dengan%20layanan%20Anda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-500 text-sm font-semibold transition-colors duration-200"
                      >
                        +62 812-3456-7890
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cu-light/40 flex items-center justify-center flex-shrink-0 text-cu-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25 2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-cu-black mb-0.5 text-base">Email</h4>
                      <a
                        href="mailto:cuciju.sby@gmail.com"
                        className="text-cu-primary hover:text-cu-dark text-sm font-semibold transition-colors duration-200"
                      >
                        cuciju.sby@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Action button */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <a
                  href="https://wa.me/6281336466614?text=Halo%20CUCIJU%2C%20saya%20mau%20tanya%20layanan%20cuci%20sepatu%20atau%20reparasi%20koper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-4 rounded-2xl transition-all duration-300 shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 active:translate-y-0 text-base"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat WhatsApp Sekarang
                </a>
              </div>
            </div>

            {/* Right: Map (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-lg shadow-cu-primary/5 border border-cu-light/45 flex flex-col justify-stretch min-h-[400px] lg:min-h-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden relative border border-gray-150">
                <iframe
                  id="google-maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295064!2d112.55806045!3d-7.2756141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 w-full h-full border-0 min-h-[350px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi CUCIJU di Surabaya"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
