import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className=" flex items-center justify-center h-[380px] w-[350px] overflow-hidden rounded-xl bg-[#6f6f6f] animate-pulse">
        <img src="/assets/nklogo.png" alt="Loading..." className="h-64  w-64" />
      </div>
      <Skeleton baseColor="#6f6f6f" />
      <Skeleton baseColor="#6f6f6f" height={10} />
    </div>
  );
};

export default CardSkeleton;
