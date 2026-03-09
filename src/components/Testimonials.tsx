"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      '"Siempre salgo encantada de Harmony. El ambiente es súper cálido y me siento como en casa. Mis uñas quedan perfectas cada vez, los diseños son únicos y justo lo que quiero."',
    name: "Clienta Placeholder",
    role: "Clienta frecuente",
    avatar: "/images/testimonial-avatar-1.svg",
  },
  {
    quote:
      '"Lo que más me gusta de Harmony es que realmente te escuchan. Llegué sin saber qué quería y Kath me ayudó a encontrar el diseño perfecto. La calidad y la rapidez son increíbles."',
    name: "Clienta Placeholder",
    role: "Clienta frecuente",
    avatar: "/images/testimonial-avatar-1.svg",
  },
  {
    quote:
      '"Llevo más de un año viniendo a Harmony y no lo cambio por nada. Victoria y Kathya son las mejores, el lugar es hermoso y siempre me atienden con mucho amor. 100% recomendado."',
    name: "Clienta Placeholder",
    role: "Clienta frecuente",
    avatar: "/images/testimonial-avatar-3.svg",
  },
];

const viewport = { once: false, amount: 0.2 as const };

export default function Testimonials() {
  return (
    <section className="bg-[#FFF5F0] pt-12 md:pt-16 lg:pt-[120px] pb-16">
      <div className="max-w-[1296px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <h2 className="font-jakarta font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-[58px] text-[#2D1A2E] max-w-[636px] mb-6 md:mb-0">
            Lo que dicen nuestras clientas
          </h2>
          <Link
            href="https://www.instagram.com/harmonynailslashes"
            target="_blank"
            className="border-2 border-[#2D1A2E] text-[#2D1A2E] font-inter font-semibold text-[16px] px-6 py-4 rounded-[3px] hover:bg-[#E91E8C] hover:text-white hover:border-[#E91E8C] transition-colors self-start"
          >
            Ver más en Instagram
          </Link>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col justify-between"
            >
              <p className="font-inter font-semibold text-[16px] md:text-[18px] leading-[30px] text-[#2D1A2E] mb-8">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] rounded-full overflow-hidden bg-[#FDE8EF] flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-inter font-bold text-[18px] leading-[26px] text-[#2D1A2E]">
                    {testimonial.name}
                  </p>
                  <p className="font-inter text-[14px] leading-[20px] text-[#5A4A5C]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-[#2D1A2E]/20" />
      </div>
    </section>
  );
}
