"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "./Lightbox";
import { motion } from "framer-motion";

const viewport = { once: false, amount: 0.2 as const };

export default function Hero() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-[746px]"
          >
            <h1 className="font-jakarta font-bold text-[56px] md:text-[72px] lg:text-[90px] leading-[1.1] text-[#2D1A2E] mb-6">
              Tu estilo, nuestro arte
            </h1>
            <p className="font-inter text-[20px] md:text-[26px] lg:text-[30px] leading-[1.4] text-[#5A4A5C] tracking-[-1px] max-w-[697px] mb-10">
              Diseños personalizados de uñas y pestañas con 17 años de experiencia combinada. Cada visita es una experiencia única.
            </p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-10"
            >
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
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4"
            >
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
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative"
          >
            <div
              className="w-[350px] md:w-[450px] lg:w-[549px] h-[400px] md:h-[520px] lg:h-[630px] rounded-t-[330px] overflow-hidden cursor-zoom-in"
              onClick={() => setLightbox({ src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772659453/IMG_9644_iij76j_gtdnxa.jpg", alt: "Harmony Nails & Lashes" })}
            >
              <Image
                src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1772659453/IMG_9644_iij76j_gtdnxa.jpg"
                alt="Harmony Nails & Lashes"
                width={549}
                height={630}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-2 -right-4 w-[160px] md:w-[209px] h-[160px] md:h-[209px]">
              <Image src="/images/hero-image-2.svg" alt="" width={209} height={209} />
            </div>
          </motion.div>
        </div>
      </section>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
