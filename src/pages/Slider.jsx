import { useState } from "react";
import { motion } from "framer-motion";
import { items } from "../data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    handleClick(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const handleBack = () => {
    handleClick(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="relative w-full flex items-center max-w-[1500px]">
        <div className="absolute left-2 flex right-2 justify-between z-20">
          <button onClick={handleBack}>
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </button>
          <button onClick={handleNext}>
            <img src="/assets/rightArrow.svg" height={48} width={56} alt="" />
          </button>
        </div>
        <motion.div
          className="flex gap-4 flex-nowrap"
          animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex}rem)` }}
          transition={transition}
        >
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.img}
              alt={item.img}
              className="objecct-cover aspect-[16/9]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
