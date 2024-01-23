import React from "react";
import FirstSlide from "../components/sliderItems/FirstSlide";
import SecondSlide from "../components/sliderItems/SecondSlide";
import ThirdSlide from "../components/sliderItems/ThirdSlide";
import FourthSlide from "../components/sliderItems/FourthSlide";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const sliderItems = [
  <FirstSlide />,
  <SecondSlide />,
  <ThirdSlide />,
  <FourthSlide />,
];

const Slideshow = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, sliderItems.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  const sliderVariants = {
    incoming: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      scale: 1,
      opacity: 0,
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      scale: 1,
      opacity: 0.2,
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={() => swipeToImage(-1)}
        className="uppercase text-base font-normal h-12 absolute left-[13rem] top-[85%] flex justify-center items-center z-50"
      >
        Prev
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <div className="h-[110vh]">
          <motion.div
            key={imageCount}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={transition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
            className="image overflow-hidden hover:cursor-default"
          >
            {sliderItems[activeImageIndex]}
          </motion.div>
        </div>
      </AnimatePresence>
      <button
        onClick={() => swipeToImage(1)}
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
