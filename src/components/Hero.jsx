import React from "react";
import WareHouseBg from "../assets/warehouse-bg-1.png";
import CalendarIcon from "./icons/CalendarIcon";
import TrollyIcon from "./icons/TrollyIcon";
import KeyIcon from "./icons/KeyIcon";
import Features from "./generic/Features";
import Button from "./generic/Button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import FormSection from "./generic/FormSection";
import GoogleRating from "./icons/GoogleRating";
import Img1 from "../assets/img-1.png";
import Img2 from "../assets/img-2.png";
import Img3 from "../assets/img-3.png";
import Img4 from "../assets/img-4.png";

const Hero = () => {
  return (
    <div className="bg-[#E6F4EB] pb-5 md:flex md:justify-between md:h-screen">
      <img
        src={WareHouseBg}
        alt="warehouse-image"
        className="hidden md:flex md:w-full"
      />
      <div className="relative">
        <img src={WareHouseBg} alt="warehouse-image" className="md:hidden" />
        <IoIosArrowBack className="md:hidden cursor-pointer absolute top-1/2 left-1.5 bg-white rounded-full p-1 text-2xl" />
        <IoIosArrowForward className="md:hidden cursor-pointer absolute top-1/2 right-1.5 bg-white rounded-full p-1 text-2xl" />

        <div className="md:hidden absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2">
          <img
            src={Img1}
            alt="Feature 1"
            className="w-[86px] h-[71px] rounded-xl"
          />
          <img
            src={Img2}
            alt="Feature 1"
            className="w-[86px] h-[71px] rounded-xl"
          />
          <img
            src={Img3}
            alt="Feature 1"
            className="w-[86px] h-[71px] rounded-xl"
          />
        </div>
      </div>

      <div className="md:absolute md:flex bg-[#E6F4EB] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-5xl md:rounded-2xl md:px-5 md:py-3">
        <div className="md:w-1/2 mx-6 mt-10 md:mt-5 flex flex-col gap-5">
          <GoogleRating />

          <p className="text-2xl md:text-4xl font-semibold leading-none">
            Small warehouse space for rent in{" "}
            <span className="text-[#00AA6C]">Upper West Side, Atlanta, GA</span>
          </p>

          <div className="flex flex-col gap-5">
            <Features
              icon={<CalendarIcon />}
              title={"Flexible spaces & leases"}
              body={
                "Leases as short as 6 months. Upscale or downscale anytime!"
              }
            />
            <Features
              icon={<TrollyIcon />}
              title="All-inclusive warehousing"
              body="Rental includes racking, equipment, loading docks & more"
            />
            <Features
              icon={<KeyIcon />}
              title="Immediate availability"
              body="Move in today!"
            />
          </div>

          <Button
            text="Ask about a space"
            icon={<IoIosArrowForward className="text-xl" />}
            className="md:hidden"
          />

          <div className="hidden md:flex gap-2">
            <img
              src={Img1}
              alt="Feature 1"
              className="w-[106px] h-[88px] rounded-xl"
            />
            <img
              src={Img2}
              alt="Feature 1"
              className="w-[106px] h-[88px] rounded-xl"
            />
            <img
              src={Img3}
              alt="Feature 1"
              className="w-[106px] h-[88px] rounded-xl"
            />
            <img
              src={Img4}
              alt="Feature 1"
              className="w-[106px] h-[88px] rounded-xl"
            />
          </div>

          <p className="text-lg md:text-sm font-semibold text-[#00AA6C] leading-tight">
            200-2,000 sq ft starting as low as $625/month
          </p>
        </div>

        <div className="md:w-1/2">
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
