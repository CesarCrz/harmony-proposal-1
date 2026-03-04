import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF5F0] pt-0 pb-0">
      {/* CTA Card */}
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="relative bg-[#2D1A2E] rounded-[10px] py-10 md:py-16 px-8 text-center overflow-hidden">
          {/* Decorative shape */}
          <div className="absolute right-8 bottom-8 w-[50px] h-[100px] -rotate-90 hidden md:block">
            <Image src="/images/footer-shape.svg" alt="" width={100} height={50} />
          </div>

          <h2 className="font-jakarta font-bold text-2xl md:text-[40px] lg:text-[46px] leading-[1.3] text-white max-w-[856px] mx-auto mb-4">
            Agenda tu cita y vive la experiencia Harmony
          </h2>
          <p className="font-inter text-[16px] md:text-[18px] leading-[30px] text-white max-w-[636px] mx-auto mb-8">
            Diseños personalizados, calidez y 17 años de experiencia combinada. Tu próximo look te espera.
          </p>
          <Link
            href="#"
            className="inline-block bg-[#E91E8C] text-white font-jakarta font-bold text-[16px] px-8 py-4 rounded-[5px] hover:bg-[#d4177d] transition-colors"
          >
            Agendar Cita
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FFF5F0] mt-12 pb-8">
        <div className="max-w-[1296px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[16px] leading-[26px] text-[#2D1A2E]">
            &copy; 2026 Harmony Nails & Lashes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.instagram.com/harmonynailslashes"
              target="_blank"
              className="font-inter font-medium text-[16px] leading-[24px] text-[#2D1A2E] hover:text-[#E91E8C] transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.tiktok.com/@harmonynailslashes"
              target="_blank"
              className="font-inter font-medium text-[16px] leading-[24px] text-[#2D1A2E] hover:text-[#E91E8C] transition-colors"
            >
              TikTok
            </Link>
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="font-inter font-medium text-[16px] leading-[24px] text-[#2D1A2E] hover:text-[#E91E8C] transition-colors"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
