import React from "react";
import PhoneIcon from "./icons/PhoneIcon";
import MobileNavIcon from "./icons/MobileNavIcon";
import Logo from "./icons/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-6 my-2">
      <Logo />

      <div className="flex gap-4 items-center">
        <div className="flex gap-0.5 items-center">
          <PhoneIcon width={22} height={22} />
          <p className="font-bold">470-518-5965</p>
        </div>
        <MobileNavIcon />
      </div>
    </div>
  );
};

export default Navbar;
