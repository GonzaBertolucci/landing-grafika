import React from 'react';

export default function ContactCard({ icon, title, text }) {
  return (
    <div className="relative border-2 border-red-600 rounded-2xl p-6 text-center shadow-[0_0_15px_rgba(255,0,0,0.4)] bg-[#1e1e1e] flex flex-col items-center justify-center mt-6">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#1e1e1e] p-4 rounded-full border-2 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.6)]">
        <span className="text-red-500 text-xl">{icon}</span>
      </div>
      
      <h3 className="text-red-500 font-bold mt-4 mb-2 text-lg">{title}</h3>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}