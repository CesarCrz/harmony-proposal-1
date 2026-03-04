"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    name: "Uñas Acrílicas / Polygel",
    image: "/images/content-image-1.png",
    hasWarranty: true,
    description:
      "Uñas acrílicas o polygel en técnica escultural, mani express y gel de color liso. Diseños personalizados con materiales de la más alta calidad para un acabado perfecto y duradero.",
    faqs: [
      {
        question: "¿Cada cuánto debo hacer mantenimiento?",
        answer:
          "Lo recomendable para asegurar una excelente calidad y cuidado de tus uñas es de 15 a 20 días máximo. Esto aplica en acrílico, polygel, rubber gel, sistema híbrido y gel semi permanente.",
      },
      {
        question: "¿Qué cubre la garantía de 3 días?",
        answer:
          "Aplica para levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Solo contáctanos y lo corregimos sin costo.",
      },
      {
        question: "¿Qué cuidados debo tener?",
        answer:
          "Evita exponer las uñas a productos químicos agresivos y usa guantes al lavar. No las uses como herramienta y aplica aceite de cutícula regularmente.",
      },
    ],
  },
  {
    name: "Extensiones de Pestañas",
    image: "/images/content-image-2.png",
    hasWarranty: false,
    description:
      "Extensión de pestañas en técnica clásica, híbrida, tecnológica/volumen y mega volumen artesanal. Realza tu mirada de forma natural con el estilo que más te favorezca.",
    faqs: [
      {
        question: "¿Qué técnicas manejan?",
        answer:
          "Trabajamos técnica clásica (1:1), híbrida, tecnológica/volumen y mega volumen artesanal. En consulta te orientamos sobre cuál es la ideal para ti.",
      },
      {
        question: "¿Qué cuidados debo seguir?",
        answer:
          "Evita mojar las pestañas las primeras 24–48 horas. No las frotes ni uses productos con aceite, y duerme boca arriba en lo posible.",
      },
    ],
  },
  {
    name: "Nivelación Rubber Gel",
    image: "/images/content-image-1.png",
    hasWarranty: true,
    description:
      "Nivelación en uña natural con rubber gel, mani express y gel color liso. Ideal para proteger y fortalecer la uña natural dándole un acabado impecable.",
    faqs: [
      {
        question: "¿Qué es el rubber gel?",
        answer:
          "Es una base de gel flexible que protege y nivela la uña natural, sirve como base ideal para cualquier diseño y ayuda a prevenir roturas.",
      },
      {
        question: "¿Cada cuánto debo hacer mantenimiento?",
        answer:
          "Lo recomendable es de 15 a 20 días máximo para mantener la uña protegida y con buen acabado.",
      },
      {
        question: "¿Qué cubre la garantía de 3 días?",
        answer:
          "Aplica para levantamiento prematuro de gel durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Gel Semi Permanente",
    image: "/images/content-image-2.png",
    hasWarranty: true,
    description:
      "Gel de color liso sobre uña natural. Un servicio sencillo y elegante que aporta brillo y color duradero sin necesidad de extensiones.",
    faqs: [
      {
        question: "¿Cuánto dura el gel semi permanente?",
        answer:
          "Con los cuidados adecuados dura de 2 a 3 semanas. El mantenimiento recomendado es entre los 15 y 20 días.",
      },
      {
        question: "¿Se aplica sobre uña natural?",
        answer:
          "Sí, el gel semi permanente se aplica directamente sobre la uña natural sin necesidad de extensión o acrílico.",
      },
      {
        question: "¿Qué cubre la garantía de 3 días?",
        answer:
          "Aplica para levantamiento prematuro de gel durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Sistema Híbrido",
    image: "/images/content-image-1.png",
    hasWarranty: true,
    description:
      "Plataforma de polygel en técnica escultural o sobre uña natural, nivelación de rubber gel, mani express y gel de color liso. Lo mejor de varios sistemas en uno.",
    faqs: [
      {
        question: "¿Qué es el sistema híbrido?",
        answer:
          "Combina polygel (escultural o sobre uña natural) con nivelación de rubber gel y gel de color. Ofrece mayor resistencia y flexibilidad que los sistemas tradicionales.",
      },
      {
        question: "¿Cada cuánto se hace el mantenimiento?",
        answer:
          "Entre 15 y 20 días máximo, igual que el resto de sistemas de uñas.",
      },
      {
        question: "¿Qué cubre la garantía de 3 días?",
        answer:
          "Aplica para levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Contáctanos y lo corregimos sin costo.",
      },
    ],
  },
  {
    name: "Manicura Rusa",
    image: "/images/content-image-2.png",
    hasWarranty: false,
    description:
      "Limpieza de cutícula profunda en seco y gel de color liso. Una técnica de precisión que deja la cutícula perfectamente definida y un acabado ultra limpio.",
    faqs: [
      {
        question: "¿Qué diferencia a la manicura rusa de la tradicional?",
        answer:
          "La manicura rusa se realiza en seco, con fresa eléctrica. Permite una limpieza de cutícula mucho más profunda y precisa que la manicura convencional.",
      },
      {
        question: "¿Cada cuánto se recomienda?",
        answer:
          "Cada 3 a 4 semanas para mantener la cutícula siempre bien definida y la uña con buen aspecto.",
      },
    ],
  },
  {
    name: "Manicura Spa & Pedicure Spa",
    image: "/images/content-image-1.png",
    hasWarranty: false,
    description:
      "Manicura Spa: sales, exfoliante, mascarilla, limpieza de cutícula, corte, cuadratura y gel de color liso. Pedicure Spa: sales, exfoliante, mascarilla, limpieza de canales, cutícula, callosidades y gel de color liso.",
    faqs: [
      {
        question: "¿Qué incluye el Manicure Spa?",
        answer:
          "Sales, exfoliante, mascarilla, limpieza de cutícula, corte, cuadratura y aplicación de gel de color liso.",
      },
      {
        question: "¿Qué incluye el Pedicure Spa?",
        answer:
          "Sales, exfoliante, mascarilla, limpieza de canales, limpieza de cutícula, limpieza de callosidades y gel de color liso.",
      },
    ],
  },
  {
    name: "Lash Lifting",
    image: "/images/content-image-2.png",
    hasWarranty: false,
    description:
      "Rizado de pestañas naturales. Un tratamiento que levanta y ondula tu pestaña propia dándole volumen y apertura a la mirada sin necesidad de extensiones.",
    faqs: [
      {
        question: "¿Cuánto dura el lash lifting?",
        answer:
          "El efecto dura entre 6 y 8 semanas, dependiendo del ciclo natural de crecimiento de tus pestañas.",
      },
      {
        question: "¿Se puede combinar con tinte?",
        answer:
          "Sí. Puedes combinar el lash lifting con tinte de pestañas en la misma sesión para un efecto más llamativo y definido.",
      },
    ],
  },
  {
    name: "Diseño de Ceja",
    image: "/images/content-image-1.png",
    hasWarranty: false,
    description:
      "Diseño con visagismo de tus cejas, contorno de hilos con pigmento, depilación de ceja y laminado. Realzamos tu mirada con la forma perfecta para tu rostro.",
    faqs: [
      {
        question: "¿Qué incluye el servicio?",
        answer:
          "Incluye diseño con visagismo (análisis de la forma de tu rostro), contorno con hilo y pigmento, depilación y opción de laminado de ceja.",
      },
      {
        question: "¿Cada cuánto se recomienda el mantenimiento?",
        answer:
          "Aproximadamente cada 3 a 4 semanas para mantener el diseño y la definición de la ceja.",
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="bg-[#FFF5F0] pb-12 md:pb-16 lg:pb-[120px]">
      <div className="max-w-[1076px] mx-auto px-6">
        <h2 className="font-jakarta font-bold text-2xl md:text-[40px] lg:text-[46px] leading-[1.3] text-[#2D1A2E] text-center mb-12">
          Nuestros Servicios
        </h2>

        <div className="rounded-[10px] overflow-hidden">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const isFirst = index === 0;
            const isLast = index === services.length - 1;

            return (
              <div
                key={index}
                className={`border border-[#F9C6D9] ${
                  isOpen ? "bg-[#FDE8EF]" : "bg-[#FFF5F0]"
                } ${isFirst ? "rounded-t-[10px]" : ""} ${
                  isLast ? "rounded-b-[10px]" : ""
                }`}
              >
                {/* Service Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between px-6 md:px-10 py-6 text-left"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="font-inter font-semibold text-[16px] md:text-[20px] leading-[28px] text-[#2D1A2E]">
                      {service.name}
                    </span>
                    {service.hasWarranty && (
                      <span
                        className="relative group inline-flex items-center justify-center w-6 h-6 bg-[#E91E8C] text-white text-[10px] font-bold rounded-full cursor-help flex-shrink-0"
                        title="Este servicio cuenta con garantía de 3 días"
                      >
                        G
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#2D1A2E] text-white text-[12px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Este servicio cuenta con garantía de 3 días
                        </span>
                      </span>
                    )}
                  </div>
                  <Image
                    src={isOpen ? "/images/faq-minus.svg" : "/images/faq-plus.svg"}
                    alt={isOpen ? "Cerrar" : "Abrir"}
                    width={15}
                    height={15}
                    className="flex-shrink-0"
                  />
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="px-6 md:px-10 pb-6">
                    {/* Service Image */}
                    <div className="w-full h-[200px] md:h-[300px] rounded-[10px] overflow-hidden mb-6">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={900}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Service Description */}
                    <p className="font-inter text-[16px] md:text-[18px] leading-[30px] text-[#5A4A5C] max-w-[896px] mb-6">
                      {service.description}
                    </p>

                    {/* Service FAQs */}
                    <div className="space-y-2">
                      <p className="font-inter font-semibold text-[14px] text-[#2D1A2E] uppercase tracking-wider mb-3">
                        Preguntas Frecuentes
                      </p>
                      {service.faqs.map((faq, faqIdx) => {
                        const faqKey = index * 10 + faqIdx;
                        const isFaqOpen = openFaqIndex === faqKey;

                        return (
                          <div
                            key={faqIdx}
                            className="bg-white/60 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenFaqIndex(isFaqOpen ? null : faqKey);
                              }}
                              className="w-full flex items-center justify-between px-4 py-3 text-left"
                            >
                              <span className="font-inter text-[14px] md:text-[16px] text-[#2D1A2E] pr-4">
                                {faq.question}
                              </span>
                              <span className="text-[#E91E8C] font-bold text-[18px] flex-shrink-0">
                                {isFaqOpen ? "−" : "+"}
                              </span>
                            </button>
                            {isFaqOpen && (
                              <div className="px-4 pb-3">
                                <p className="font-inter text-[14px] md:text-[15px] leading-[24px] text-[#5A4A5C]">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
