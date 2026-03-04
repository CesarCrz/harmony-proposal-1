"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF5F0]/96 backdrop-blur-sm shadow-sm"
          : "bg-[#FFF5F0]"
      }`}
    >
      <div className="max-w-[1296px] mx-auto px-6 flex items-center justify-between h-[64px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-jakarta font-bold text-[22px] text-[#2D1A2E]">
            Harmony
          </span>
          <span className="font-inter text-[12px] text-[#5A4A5C] tracking-wide">
            Nails & Lashes
          </span>
        </Link>

        {/* Navigation — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-[#2D1A2E] font-inter hover:text-[#E91E8C] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            className="bg-[#E91E8C] text-white text-[15px] font-semibold font-inter px-5 py-2.5 rounded-[3px] hover:bg-[#d4177d] transition-colors"
          >
            Agendar Cita
          </Link>
        </div>

        {/* Hamburger → X — mobile */}
        <button
          className="md:hidden relative w-9 h-9 flex items-center justify-center"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-[14px]">
            {/* Bar top */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-[#2D1A2E] block transition-all duration-300 ${
                isOpen ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            {/* Bar middle */}
            <span
              className={`absolute left-0 top-[7px] w-6 h-0.5 bg-[#2D1A2E] block transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            {/* Bar bottom */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-[#2D1A2E] block transition-all duration-300 ${
                isOpen ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu — smooth CSS height transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionDuration: "320ms" }}
      >
        <nav className="bg-[#FFF5F0] border-t border-[#F9C6D9]/60 px-6 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={close}
              className="font-inter font-semibold text-[17px] text-[#2D1A2E] py-3 border-b border-[#F9C6D9]/50 hover:text-[#E91E8C] transition-colors block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            onClick={close}
            className="mt-4 block bg-[#E91E8C] text-white text-[16px] font-semibold font-inter px-5 py-3.5 rounded-[3px] hover:bg-[#d4177d] transition-colors text-center"
          >
            Agendar Cita
          </Link>
        </nav>
      </div>
    </header>
  );
}
