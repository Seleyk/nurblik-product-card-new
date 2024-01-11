import React from "react";
import { motion } from "framer-motion";

const FirstSlide = () => {
  const transition = { duration: 4 , ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div className="h-full relative bg-neutral-200 overflow-hidden">
      <img
        className="absolute bottom-0 right-[397px]"
        src="/assets/photo-1532332248682-206cc786359f (1).png"
        alt=""
      />
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={transition}
        className="w-[633px] left-40 bottom-48 h-[298px] absolute text-black text-[80px] font-bold tracking-[8px]"
      >
        SHOP
        <br />
        THE FALL COLLECTION
      </motion.div>
    </motion.div>
  );
};

export default FirstSlide;
