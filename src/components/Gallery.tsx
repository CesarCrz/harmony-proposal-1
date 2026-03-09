"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Uñas Acrílicas",
    description: "Diseños personalizados y únicos para cada clienta con la mejor calidad.",
    category: "Servicio Principal",
    image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772662721/IMG_8156_avafem_yepz8q.jpg",
  },
  {
    title: "Pestañas",
    description: "Aplicación profesional de pestañas que realzan tu mirada natural.",
    category: "Belleza",
    image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772661771/IMG_9206_u4qak0_eiwm3e.jpg",
  },
  {
    title: "Manicure Spa",
    description: "Consentimiento completo para tus manos con productos de primera calidad.",
    category: "Spa",
    image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772658568/IMG_2174_snbzve_njkmao.jpg",
  },
  {
    title: "Pedicure Spa",
    description: "Relajación y cuidado profesional para tus pies en un ambiente cálido.",
    category: "Spa",
    image: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772660972/IMG_9362_pniyle_edufst.jpg",
  },
];

const viewport = { once: false, amount: 0.2 as const };

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section id="galeria" className="bg-[#2D1A2E] py-12 md:py-16 lg:py-[120px]">
        <div className="max-w-[1296px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7 }}
            className="font-jakarta font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-[58px] text-white text-center max-w-[636px] mx-auto mb-16"
          >
            Nuestro Portafolio
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-zoom-in"
                onClick={() => setLightbox({ src: project.image, alt: project.title })}
              >
                {/* Image */}
                <div className="w-full h-[280px] md:h-[350px] rounded-t-[300px] overflow-hidden mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={306}
                    height={350}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-inter font-bold text-[20px] md:text-[24px] leading-[34px] text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-[16px] md:text-[18px] leading-[30px] text-white opacity-80 mb-3">
                    {project.description}
                  </p>
                  <p className="font-inter text-[18px] md:text-[20px] leading-[32px] text-[#D4A853] tracking-[-0.5px]">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/20" />
        </div>
      </section>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}
