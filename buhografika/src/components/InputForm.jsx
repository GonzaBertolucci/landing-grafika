import React from 'react';

export default function InputForm({ label, placeholder, name }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-2 font-semibold">{label} <span className="text-red-500">*</span></label>
      <input 
        type="text" 
        name={name}
        required
        className="bg-transparent border-2 border-red-600 rounded-xl p-3 text-sm focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.8)]"
        placeholder={placeholder}
      />
    </div>
  );
}