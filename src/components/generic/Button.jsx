import React from "react";

const Button = ({ text, icon, className = "" }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-[#00AA6C] text-white py-3 px-4 rounded-lg font-semibold text-sm ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button; 