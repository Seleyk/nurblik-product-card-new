import React from "react";
import { motion } from "framer-motion";

const FirstSlide = () => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      exit={{ x: 100 }}
      
      className="h-full relative bg-neutral-200 overflow-hidden"
    >
      <img
        className="absolute bottom-0 right-[397px]"
        src="/assets/photo-1532332248682-206cc786359f (1).png"
        alt=""
      />
      <div className="w-[633px] left-40 bottom-48 h-[298px] absolute text-black text-[80px] font-bold tracking-[8px]">
        SHOP
        <br />
        THE FALL COLLECTION
      </div>
    </motion.div>
  );
};

export default FirstSlide;
