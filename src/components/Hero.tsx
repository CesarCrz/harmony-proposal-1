import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-[#FFF5F0] overflow-hidden">
      <div className="max-w-[1296px] mx-auto px-6 pt-28 md:pt-36 lg:pt-[191px] pb-12 md:pb-16 lg:pb-[120px] flex flex-col lg:flex-row items-start gap-12">
        {/* Decorative shapes */}
        <div className="absolute top-[139px] left-[70px] w-[50px] h-[100px] rotate-90 hidden xl:block">
          <Image src="/images/shape-green.svg" alt="" width={100} height={50} />
        </div>
        <div className="absolute bottom-[100px] left-[52%] w-[200px] h-[100px] hidden xl:block">
          <Image src="/images/shape-orange.svg" alt="" width={200} height={100} />
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-[746px]">
          <h1 className="font-jakarta font-bold text-[56px] md:text-[72px] lg:text-[90px] leading-[1.1] text-[#2D1A2E] mb-6">
            Tu estilo, nuestro arte
          </h1>
          <p className="font-inter text-[20px] md:text-[26px] lg:text-[30px] leading-[1.4] text-[#5A4A5C] tracking-[-1px] max-w-[697px] mb-10">
            Diseños personalizados de uñas y pestañas con 17 años de experiencia combinada. Cada visita es una experiencia única.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="#"
              className="bg-[#E91E8C] text-white font-inter font-semibold text-[16px] px-8 py-4 rounded-[5px] hover:bg-[#d4177d] transition-colors"
            >
              Agendar Cita
            </Link>
            <Link
              href="#servicios"
              className="bg-white border-2 border-[#2D1A2E] text-[#2D1A2E] font-inter font-semibold text-[16px] px-8 py-4 rounded-[5px] hover:bg-[#FDE8EF] transition-colors"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="#D4A853">
                  <path d="M8 0l2.47 5.01L16 5.81l-4 3.9.94 5.49L8 12.6l-4.94 2.6.94-5.49-4-3.9 5.53-.8z" />
                </svg>
              ))}
            </div>
            <span className="font-inter text-[16px] text-[#5A4A5C]">
              +500 clientas satisfechas
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-shrink-0 relative">
          <div className="w-[350px] md:w-[450px] lg:w-[549px] h-[400px] md:h-[520px] lg:h-[630px] rounded-t-[330px] overflow-hidden">
            <Image
              src="/images/hero-image.svg"
              alt="Harmony Nails & Lashes"
              width={549}
              height={630}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-4 w-[160px] md:w-[209px] h-[160px] md:h-[209px]">
            <Image src="/images/hero-image-2.svg" alt="" width={209} height={209} />
          </div>
        </div>
      </div>
    </section>
  );
}
