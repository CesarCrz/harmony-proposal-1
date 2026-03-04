import Image from "next/image";

const projects = [
  {
    title: "Uñas Acrílicas",
    description:
      "Diseños personalizados y únicos para cada clienta con la mejor calidad.",
    category: "Servicio Principal",
    image: "/images/content-image-1.png",
  },
  {
    title: "Pestañas",
    description:
      "Aplicación profesional de pestañas que realzan tu mirada natural.",
    category: "Belleza",
    image: "/images/content-image-2.png",
  },
  {
    title: "Manicure Spa",
    description:
      "Consentimiento completo para tus manos con productos de primera calidad.",
    category: "Spa",
    image: "/images/content-image-1.png",
  },
  {
    title: "Pedicure Spa",
    description:
      "Relajación y cuidado profesional para tus pies en un ambiente cálido.",
    category: "Spa",
    image: "/images/content-image-2.png",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#2D1A2E] py-12 md:py-16 lg:py-[120px]">
      <div className="max-w-[1296px] mx-auto px-6">
        <h2 className="font-jakarta font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-[58px] text-white text-center max-w-[636px] mx-auto mb-16">
          Nuestro Portafolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
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
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20" />
      </div>
    </section>
  );
}
