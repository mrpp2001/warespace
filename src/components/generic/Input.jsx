import React from "react";

const Input = ({ type = "text", placeholder, name, value, onChange, className = "", error }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border-2 rounded focus:outline-none focus:ring-2 focus:ring-[#00AA6C] ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}
    />
  );
};

export default Input; 