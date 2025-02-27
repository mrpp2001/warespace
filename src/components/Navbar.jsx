import React from "react";
import PhoneIcon from "./icons/PhoneIcon";
import MobileNavIcon from "./icons/MobileNavIcon";
import Logo from "./icons/Logo";
import Button from "./generic/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-6 my-2">
      <Logo className="md:hidden" />
      <Logo width={196} height={30} className="hidden md:block" />

      <div className="flex gap-4 items-center">
        <div className="flex gap-0.5 items-center">
          <PhoneIcon width={22} height={22} />
          <p className="font-bold text-sm md:text-lg">470-518-5965</p>
        </div>

        <div className="flex md:hidden">

        <MobileNavIcon />
        </div>

        <Button text={"Book a Tour Today"} className="hidden md:flex"/>
      </div>
    </div>
  );
};

export default Navbar;
