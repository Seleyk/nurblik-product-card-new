import { useMediaQuery } from "@mui/material";
import React from "react";

const Grid = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return isNonMobileScreen ? (
    <div className="px-32 pb-5 bg-[#F8F7F4]">
      <div className="pt-20 self-center w-full flex items-center justify-center uppercase text-[32px] font-semibold tracking-[3.20px]">
        popular collections
      </div>
      <div className="w-full h-[45rem] mt-9 grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-rows-2 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="max-h-[350px] overflow-hidden bg-black cursor-pointer">
              <img
                src="https://i.pinimg.com/564x/a3/a7/df/a3a7df081d8ab8ef3ca350d44fa903f2.jpg"
                alt=""
                className="h-full w-full bg-cover bg-no-repeat"
              />
            </div>
            <div className="max-h-[350px] overflow-hidden bg-black cursor-pointer">
              <img
                src="/assets/grid2.png"
                alt=""
                className="h-full w-full bg-cover bg-no-repeat"
              />
            </div>
          </div>
          <div className="max-h-[350px] overflow-hidden bg-black cursor-pointer">
            <img
              src="/assets/grid5.jpg"
              alt=""
              className="h-full w-full bg-cover bg-no-repeat"
            />
          </div>
        </div>
        <div className="max-h-[720px] col-span-1 bg-black cursor-pointer">
          <img
            src="/assets/grid.jpg"
            alt=""
            className="h-full w-full bg-cover bg-no-repeat"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="h-[103dvh] bg-slate-300">
        <img
          src="https://i.pinimg.com/564x/a3/a7/df/a3a7df081d8ab8ef3ca350d44fa903f2.jpg"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] bg-slate-300">
        <img
          src="/assets/grid.jpg"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] bg-slate-300">
        <img
          src="/assets/superstack.png"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] bg-slate-300">
        <img
          src="/assets/Hotpot.png"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default Grid;
