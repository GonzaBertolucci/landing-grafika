import React, { useState } from 'react';
import InputForm from './InputForm';

export default function ContactForm() {
  const glowShadow = "shadow-[0_0_15px_rgba(255,0,0,0.5)]";
  const glowBorder = "border-2 border-red-600";
  
  const [resultado, setResultado] = useState("");

  const enviarFormulario = async (event) => {
    event.preventDefault();
    setResultado("Enviando...");

    const formData = new FormData(event.target);
    
    //                                     ACCESS KEY
    formData.append("access_key", "0adbd2f2-1db2-48b0-91b8-cdce4bd1f6c5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResultado("✅ ¡Mensaje enviado con éxito!");
        event.target.reset();
      } else {
        setResultado("❌ Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setResultado("❌ Error de conexión.");
    }
  };

  return (
    <div className={`bg-[#1e1e1e] rounded-3xl p-8 ${glowBorder} ${glowShadow}`}>
      <form 
        onSubmit={enviarFormulario} 
        className="space-y-6 flex flex-col h-full justify-between"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputForm name="nombre" label="Nombre" placeholder="Tu nombre" />
          <InputForm name="telefono" label="Telefono" placeholder="Tu numero de telefono" />
        </div>

        <InputForm name="email" label="Email" placeholder="Tu direccion de correo" />

        <div className="flex flex-col flex-grow">
          <label className="text-sm mb-2 font-semibold">Tu consulta <span className="text-red-500">*</span></label>
          <textarea
            name="mensaje"
            required
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

        {resultado && (
          <p className="text-center text-sm font-medium text-gray-300 mt-2">
            {resultado}
          </p>
        )}
      </form>
    </div>
  );
}