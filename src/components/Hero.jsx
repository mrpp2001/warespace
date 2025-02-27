import React from "react";
import WareHouseBg from "../assets/warehouse-bg.png";
import Img1 from "./icons/Img1";
import Img2 from "./icons/Img2";
import Img3 from "./icons/Img3";
import CalendarIcon from "./icons/CalendarIcon";
import TrollyIcon from "./icons/TrollyIcon";
import KeyIcon from "./icons/KeyIcon";
import Features from "./generic/Features";
import GoogleRating from "./icons/GoogleRating";

const Hero = () => {
  return (
    <div className="bg-[#E6F4EB] pb-5">
      <div className="relative">
        <img src={WareHouseBg} alt="warehouse-image" />
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex justify-between gap-1">
          <Img1 width={86} height={71} />
          <Img2 width={86} height={71} />
          <Img3 width={86} height={71} />
        </div>
      </div>

      <div className="mx-6 mt-10 flex flex-col gap-5">
<GoogleRating/>

        <p className="text-2xl font-semibold leading-none">
          Small warehouse space for rent in{" "}
          <span className="text-[#00AA6C]">Upper West Side, Atlanta, GA</span>
        </p>

        <div className="flex flex-col gap-5">
          <Features
            icon={<CalendarIcon />}
            title={"Flexible spaces & leases"}
            body={"Leases as short as 6 months. Upscale or downscale anytime!"}
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
      </div>
    </div>
  );
};

export default Hero;
