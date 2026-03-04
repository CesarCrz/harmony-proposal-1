import Image from "next/image";

const features = [
  {
    icon: "/images/feature-icon-1.svg",
    iconWidth: 55,
    title: "Diseños Personalizados",
    description:
      "Cada clienta recibe un diseño único y personalizado. Escuchamos lo que quieres y te guiamos hacia el look perfecto para ti.",
  },
  {
    icon: "/images/feature-icon-2.svg",
    iconWidth: 75,
    title: "17 Años de Experiencia",
    description:
      "Kattya con 10 años y Victoria con 7 años de experiencia combinada en el mundo de las uñas y la belleza profesional.",
  },
  {
    icon: "/images/feature-icon-3.svg",
    iconWidth: 75,
    title: "Garantía de 3 Días",
    description:
      "Garantía por levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación. Aplica en uñas y pestañas.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#2D1A2E] py-12 md:py-16 lg:py-[120px]">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-white/20">
          {features.map((feature, index) => (
            <div key={index} className="px-4 md:px-8 first:pl-0 last:pr-0">
              <div className="mb-8">
                <Image
                  src={feature.icon}
                  alt=""
                  width={feature.iconWidth}
                  height={70}
                />
              </div>
              <h3 className="font-inter font-semibold text-[24px] md:text-[30px] leading-[42px] tracking-[-1px] text-white mb-2">
                {feature.title}
              </h3>
              <p className="font-inter text-[16px] md:text-[18px] leading-[30px] text-white opacity-80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
