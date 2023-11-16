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

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="h-[900px] relative flex flex-col items-center place-content-center justify-center p-0 gap-0 overflow-hidden">
      {/* <div className="flex flex-col items-center justify-between min-h-screen p-24"> */}
      <div className="relative w-full items-center h-[700px]">
        <div className="absolute top-[calc(50%_-_400px)] left-[calc(50%_-_400px)] h-[600px] w-[800px]">
          <motion.div
            className=" flex gap-2"
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
          <div className="absolute left-2 right-2 flex justify-between z-10">
            <button onClick={prevClick}>
              <img src="/assets/leftArrow.svg" height={48} width={56} alt="" />
            </button>
            <button onClick={nextClick}>
              <img src="/assets/rightArrow.svg" height={48} width={56} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderNew;
