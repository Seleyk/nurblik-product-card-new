import React, { useState } from "react";
import { items } from "../data";
import { motion } from "framer-motion";

const SliderNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextClick = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const transition = { duration: .8, ease: [0.43, 0.23, 0.23, .98] };

  return (
    <div className="h-[130vh] relative flex flex-col items-center place-content-center justify-center p-24 gap-0 overflow-hidden">
      <div className="relative w-full items-center h-[700px] max-w-[1500px]">
        <div className="absolute top-[calc(50%_-_300px)] left-[calc(50%_-_400px)] h-[600px] w-[800px]">
          <motion.div
            className=" flex gap-4"
            animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex}rem)` }}
            transition={transition}
          > 
            {items.map((item, idx) => (
              <motion.img
                key={idx}
                className="object-fill min-w-[800px] h-[600px]"
                src={item.img}
                animate={{
                  opacity: idx === currentIndex ? 1 : 0.25,
                  scale: idx === currentIndex ? 1 : 0.92,
                }}
                transition={transition}
                alt=" T-shirt"
              />
            ))}
          </motion.div>
          <div className="absolute inset-0 flex justify-between z-10 items-center">
            <button className="h-12" onClick={prevClick}>
              <img src="/assets/leftArrow.svg" height={48} width={56} alt="" />
            </button>
            <button className="h-12" onClick={nextClick}>
              <img src="/assets/rightArrow.svg" height={48} width={56} alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center flex-row absolute left-5 z-30 top-0 w-min h-min gap-3 mix-blend-exclusion">
          <div className="flex flex-col justify-start relative z-10">
            <div className="text-black text-[80px] font-bold font-Roboto tracking-[8px] uppercase">new</div>
          </div>
        </div>
        <div className="flex items-center flex-row absolute right-5 z-30 bottom-0 w-min h-min gap-3 mix-blend-exclusion">
          <div className="flex flex-col justify-start relative z-10">
            <div className="text-black text-[80px] font-bold font-Roboto tracking-[8px] uppercase">arrivals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderNew;
