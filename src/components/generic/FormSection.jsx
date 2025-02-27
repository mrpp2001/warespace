import React from "react";
import User1 from "../icons/User1";
import User2 from "../icons/User2";
import Input from "./Input";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";

const FormSection = () => {
  return (
    <div className="flex flex-col item-center bg-white rounded-xl m-3.5 p-3">
      <p className="text-2xl font-semibold leading-tight">
        Visit for an in-person tour
      </p>

      <div className="relative w-24 h-24 -space-x-4 p-2 self-center">
        <User2 className="absolute w-12 h-12 rounded-full translate-x-9" />
        <User1 className="absolute w-12 h-12 rounded-full" />
      </div>

      <p className="text-sm leading-tight text-center">
        Cashana or Khadijah will answer your questions and find you a space that
        meets your needs. No commitment necessary!
      </p>

<div>

      <div className="flex flex-col gap-2 my-5">
        <Input placeholder={"First name here"} />
        <Input placeholder={"Last name here"}/>
        <Input placeholder={"Email here"} type="email"/>
        <div className="flex flex-col gap-0.5">

        <Input placeholder={"Phone number"} type="number"/>
        <p className="text-xs font-light text-gray-500 italic">(Just so we can remind you of your appt)</p>
        </div>
      </div>

<div className="flex flex-col gap-2">

      <Button text="Step 2: Find a time that works" icon={<IoIosArrowForward className="text-xl"/>} />

      <p className="text-sm">Questions? Give us a call: <a href="#" className="text-[#00AA6C]">415-985-0940</a></p>

      <div className="bg-[#E6F4EB] p-2 px-5 rounded-full w-fit mt-6">
        <p className="text-sm">Looking for a job? <a href="#" className="underline">Click here</a></p>
      </div>
</div>
      </div>
    </div>
  );
};

export default FormSection;
