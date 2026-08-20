import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function CtaFinal() {
  const numeroWhatsApp = "549116747401899";
  const mensajePredeterminado = "¡Hola Buhografika! Vengo de su página web y me gustaría pedir un presupuesto.";

  return (
    <section className="relative py-24 text-white font-sans text-center border-t border-[#1e1e1e] overflow-hidden">
      
      {/* Fondo gradiente y luz (Heredado de Services) */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Contenido original (agregamos relative z-10 para que quede sobre el fondo) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          ¿Listo para <span className="text-red-600">destacar</span> tu negocio?
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-2xl">
          Contanos tu idea y te armamos una propuesta a medida. Hacé que tu marca llame la atención desde el primer segundo.
        </p>
        
        <a 
          href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePredeterminado)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#22bf5b] text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all hover:scale-105 duration-300"
        >
          <FaWhatsapp className="text-3xl" />
          Pedí tu presupuesto sin cargo
        </a>
        
      </div>
    </section>
  );
}