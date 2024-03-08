import React from "react";

const Success = () => {
  return (
    <div className="w-full relative ">
      <video
        className="w-full h-full object-cover absolute -z-10"
        src="/assets/loginvid.mp4"
        autoPlay
        muted
        loop
      />
      <div className="md:py-20 h-full w-full px-32 max-md:w-full max-md:p-0 flex items-center justify-center">
        <div className="bg-[#F8F7F4] bg-opacity-95 flex max-md:flex-col gap-6 w-[992px] h-[642px] p-8 max-md:h-full max-md:w-full max-md:rounded-[0] max-md:pt-20 rounded-3xl">
            <div className="flex-1">.flex.</div>
            <div className="flex-1">.</div>
        </div>
      </div>
    </div>
  );
};

export default Success;
