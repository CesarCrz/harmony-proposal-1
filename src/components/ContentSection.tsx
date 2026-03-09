"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { motion } from "framer-motion";

const viewport = { once: false, amount: 0.2 as const };

export default function ContentSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section id="nosotros" className="relative bg-[#FFF5F0] py-12 md:py-16 lg:py-[120px] overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[207px] h-[183px] hidden xl:block">
          <Image src="/images/shape-decorative.svg" alt="" width={207} height={183} />
        </div>

        <div className="max-w-[1296px] mx-auto px-6 space-y-12 lg:space-y-24">
          {/* Content Block 1 - Nuestra Historia */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0"
            >
              <div className="absolute -left-16 bottom-12 w-[120px] h-[120px] hidden lg:block">
                <Image src="/images/shape-circle.svg" alt="" width={120} height={120} />
              </div>
              <div
                className="w-[320px] md:w-[430px] lg:w-[526px] h-[380px] md:h-[500px] lg:h-[604px] rounded-t-[317px] overflow-hidden cursor-zoom-in"
                onClick={() => setLightbox({ src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1773016406/IMG_9622_cgltfm_1_udxabt.jpg", alt: "Kathya y Victoria - Fundadoras de Harmony" })}
              >
                <Image
                  src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1773016406/IMG_9622_cgltfm_1_udxabt.jpg"
                  alt="Kathya y Victoria - Fundadoras de Harmony"
                  width={526}
                  height={604}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 max-w-[636px]"
            >
              <h2 className="font-jakarta font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-[1.26] text-[#2D1A2E] mb-4">
                Nuestra Historia
              </h2>
              <p className="font-inter text-[16px] md:text-[18px] lg:text-[20px] leading-[32px] text-[#5A4A5C] tracking-[-0.5px] mb-8">
                Harmony nació de algo espontáneo. Kathya y Victoria se conocieron trabajando en el mismo lugar, pero el ambiente comenzó a pesarles. Fue Kath quien tomó la decisión de salir, y Victoria se sumó sin pensarlo dos veces. Con el apoyo de sus familias y años de experiencia forjados en el gremio, compraron su material, instalaron sus mesas y al día siguiente ya estaban abiertas. Empezaron desde lo más básico, pero con algo que nunca faltó: amor.
              </p>
              <button className="bg-[#E91E8C] text-white font-inter font-semibold text-[16px] px-6 py-4 rounded-[3px] hover:bg-[#d4177d] transition-colors">
                Conoce Más
              </button>
            </motion.div>
          </div>

          {/* Content Block 2 - Harmony Hoy */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 max-w-[636px]"
            >
              <h2 className="font-jakarta font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-[1.26] text-[#2D1A2E] mb-4">
                Harmony Hoy
              </h2>
              <p className="font-inter text-[16px] md:text-[18px] lg:text-[20px] leading-[32px] text-[#5A4A5C] tracking-[-0.5px] mb-10">
                &ldquo;Gracias a ti por apoyar nuestro sueño que se ha construido con mucho amor&rdquo;
              </p>

              {/* List items */}
              <div className="space-y-0">
                {[
                  "Diseños únicos y personalizados",
                  "Ambiente cálido y amistoso",
                  "Pasión y arte como expresión",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between py-5">
                      <span className="font-jakarta font-bold text-[20px] md:text-[24px] lg:text-[26px] leading-[32px] text-[#2D1A2E]">
                        {item}
                      </span>
                      <Image
                        src="/images/arrow-right.svg"
                        alt=""
                        width={18}
                        height={18}
                        className="-rotate-[30deg]"
                      />
                    </div>
                    {index < 2 && (
                      <div className="border-t border-[#2D1A2E]/20" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0"
            >
              <div
                className="w-[320px] md:w-[430px] lg:w-[526px] h-[380px] md:h-[500px] lg:h-[604px] rounded-t-[317px] overflow-hidden cursor-zoom-in"
                onClick={() => setLightbox({ src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772659286/IMG_1510_a5zdh9.png", alt: "Interior de Harmony Nails & Lashes" })}
              >
                <Image
                  src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1772659286/IMG_1510_a5zdh9.png"
                  alt="Interior de Harmony Nails & Lashes"
                  width={526}
                  height={604}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -right-8 bottom-1/3 w-[124px] h-[62px] rotate-180 hidden lg:block">
                <Image src="/images/shape-half-circle.svg" alt="" width={124} height={62} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
