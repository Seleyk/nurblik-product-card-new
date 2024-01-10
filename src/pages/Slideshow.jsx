import React from "react";
import FirstSlide from "../components/sliderItems/FirstSlide";
import SecondSlide from "../components/sliderItems/SecondSlide";
import ThirdSlide from "../components/sliderItems/ThirdSlide";
import FourthSlide from "../components/sliderItems/FourthSlide";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const sliderItems = [
    <FirstSlide />,
    <SecondSlide />,
    <ThirdSlide />,
    <FourthSlide />,
  ];

  const nextSlide = () => {
    if (currentIndex === sliderItems.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(sliderItems.length - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const sliderVariants = {
    incoming: (prevSlide) => ({
      x: prevSlide > 0 ? "100%" : "-100%",
      scale: 1,
      opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (nextSlide) => ({
      x: nextSlide > 0 ? "-100%" : "100%",
      scale: 1,
      opacity: 0.2,
    }),
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="uppercase text-base font-normal h-12 absolute left-[13rem] top-[85%] flex justify-center items-center z-50"
      >
        Prev
      </button>
      <AnimatePresence>
        <motion.div
          key={sliderItems}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          // initial={{ x: nextSlide ? 100 : -100 }}
          // animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex}rem)` }}
          // exit={{ x: nextSlide ? -100 : 100 }}
          transition={transition}
          className="h-[110vh]"
        >
          {sliderItems[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={nextSlide}
        className="uppercase text-base font-normal h-12 absolute right-[13rem] top-[85%] flex justify-center items-center z-50"
      >
        Next
      </button>
      <button className="uppercase text-sm font-medium h-12 absolute right-[115px] bottom-[15px] flex justify-center items-center z-50">
        Shop now
      </button>
    </div>
  );
};

export default Slideshow;
