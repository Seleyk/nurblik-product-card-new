import React from "react";
import { motion } from "framer-motion";

const FourthSlide = () => {
  const transition = { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div className=" relative h-[110vh] bg-[#505647]">
      <div className="w-full z-30 absolute bottom-0 flex justify-center max-md:w-full">
        <img
          className="absolute bottom-0 right-[487px] max-md:left-1 max-md:w-[393px]"
          src="/assets/sliderimg4.png"
          alt=""
        />
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [70, 0] }}
        transition={{ delay: 0.6, ...transition }}
        className=" text-center max-md:w-full uppercase w-full max-md:left-0 bottom-[450px] max-md:bottom-48 h-[298px] absolute text-black text-[60px] max-md:text-3xl font-bold tracking-[8px] max-md:tracking-widest"
      >
        ski-masks
        <br />
        back in stock
      </motion.div>
    </motion.div>
  );
};

export default FourthSlide;
