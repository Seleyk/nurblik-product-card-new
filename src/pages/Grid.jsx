import { useMediaQuery } from "@mui/material";
import React from "react";

const Grid = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return isNonMobileScreen ? (
    <div className="px-32 pb-5 bg-[#F8F7F4]">
      <div className="pt-20 self-center w-full flex items-center justify-center uppercase text-[32px] font-semibold tracking-[3.20px]">
        popular collections
      </div>
      <div className="w-full h-[40rem] mt-9 grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-rows-2 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black cursor-pointer"></div>
            <div className="bg-black cursor-pointer"></div>
          </div>
          <div className="bg-black cursor-pointer"></div>
        </div>
        <div className=" col-span-1 bg-black cursor-pointer"></div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="h-[103dvh] bg-slate-300"></div>
      <div className="h-[103dvh] bg-slate-400"></div>
      <div className="h-[103dvh] bg-slate-500"></div>
    </div>
  );
};

export default Grid;
