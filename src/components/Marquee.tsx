"use client";

import Image from "next/image";

export default function Marquee() {
  return (
    <section className="bg-[#E91E8C] py-6 overflow-hidden border-y border-[#2D1A2E]/10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-jakarta font-extrabold text-[18px] md:text-[28px] lg:text-[36px] leading-[48px] tracking-[2px] md:tracking-[5px] text-white mx-4">
              UÑAS ACRÍLICAS • PESTAÑAS • RUBBER • MANICURE SPA • PEDICURE SPA
            </span>
            <Image
              src="/images/marquee-diamond.svg"
              alt=""
              width={41}
              height={41}
              className="mx-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
