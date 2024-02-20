import React from "react";
import { motion } from "framer-motion";

const SecondSlide = () => {
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div className="relative h-[110vh] bg-gray-500">
      <div className="w-full absolute bottom-10 max-md:bottom-0 flex justify-center max-md:w-full">
        <img
          className=" w-[566px] max-md:bottom-0 z-20"
          src="/assets/51a4dd4c4714e997f5c9e8402ed04e56.png"
          alt=""
        />
      </div>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={transition}
        className="absolute w-[705px] max-md:w-full text-center text-stone-100 text-[80px] max-md:text-5xl max-md:text-black max-md:z-10 font-bold tracking-[6.40px] right-1/4 max-md:right-0 bottom-[10%] max-md:bottom-[540px] max-md: z-40"
      >
        THE TECHWEAR COLLECTION IS HERE
      </motion.div>
    </motion.div>
  );
};

export default SecondSlide;
