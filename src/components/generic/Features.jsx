import React from "react";

const Features = ({ icon, title, body }) => {
  return (
    <div className="flex gap-4 w-full items-start">
      <div className="w-1/12 h-10 bg-white flex flex-col items-center justify-center rounded-xl">
        {icon}
      </div>

      <div className="flex flex-col w-5/6">
        <p className="text-lg font-semibold leading-tight">{title}</p>
        <p className="text-base md:text-sm leading-tight">{body}</p>
      </div>
    </div>
  );
};

export default Features;
