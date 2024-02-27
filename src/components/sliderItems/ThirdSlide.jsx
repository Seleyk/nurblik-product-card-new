import React from "react";
import { motion } from "framer-motion";

const ThirdSlide = () => {
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div className="h-full relative bg-[#564A47] overflow-hidden">
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={transition}
        className=" z-20 w-[596px] absolute bottom-0 right-[397px] max-md:right-1 max-md:w-[393px]"
        src="/assets/Slide3img.png"
        alt=""
      />
      <motion.div
        whileInView={{ opacity: [0, 1], x: [0, 16] }}
        transition={{ delay: 0.75, ...transition }}
        className="z-10 uppercase left-10 max-md:left-1 bottom-96 max-md:bottom-60 h-[298px] absolute text-black text-[80px] max-md:text-3xl font-bold tracking-[8px] max-md:tracking-widest"
      >
        Windbreakers
        <br />
        Jackets
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], x: [0, -40] }}
        transition={{ delay: 0.75, ...transition }}
        className="uppercase right-10 max-md:right-1 bottom-0 max-md:bottom-0 max-md:z-30 h-[298px] max-md:h-[240px] absolute text-black text-[80px] max-md:text-3xl font-bold tracking-[8px] max-md:tracking-widest"
      >
        50% off
      </motion.div>
    </motion.div>
  );
};

export default ThirdSlide;
