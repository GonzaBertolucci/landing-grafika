import React from 'react';
import InputForm from './InputForm';

export default function ContactForm() {
  const glowShadow = "shadow-[0_0_15px_rgba(255,0,0,0.5)]";
  const glowBorder = "border-2 border-red-600";

  return (
    <div className={`bg-[#1e1e1e] rounded-3xl p-8 ${glowBorder} ${glowShadow}`}>
      <form
        action="mailto:buhografika@gmail.com"
        method="POST"
        encType="text/plain"
        className="space-y-6 flex flex-col h-full justify-between"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm label="Nombre" placeholder="Tu nombre" />
          <InputForm label="Telefono" placeholder="Tu numero de telefono" />
        </div>

        <InputForm label="Email" placeholder="Tu direccion de correo" />

        <div className="flex flex-col flex-grow">
          <label className="text-sm mb-2 font-semibold">Tu consulta <span className="text-red-500">*</span></label>
          <textarea
            className={`bg-transparent ${glowBorder} rounded-xl p-3 text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.8)] h-32 resize-none`}
            placeholder="Dejanos aca tu consulta!"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full bg-gradient-to-r from-red-900 to-red-700 text-white font-bold py-3 rounded-xl ${glowShadow} hover:scale-[1.02] transition-transform`}
        >
          ENVIAR TU CONSULTA
        </button>
      </form>
    </div>
  );
}