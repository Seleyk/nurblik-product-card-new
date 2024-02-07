import React from "react";
import FirstSlide from "../components/sliderItems/FirstSlide";
import SecondSlide from "../components/sliderItems/SecondSlide";
import ThirdSlide from "../components/sliderItems/ThirdSlide";
import FourthSlide from "../components/sliderItems/FourthSlide";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Link } from "react-router-dom";

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
      opacity: 0.33,
    }),
  };

  return (
    <div className="relative overflow-hidden">
      <button
        onClick={() => swipeToImage(-1)}
        className="uppercase text-base font-normal h-12 absolute max-md:left-4 left-[13rem] top-[85%] flex justify-center items-center z-40"
      >
        Prev
      </button>
      <div className="h-[110vh]">
        <AnimatePresence initial={false} custom={direction}>
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
        </AnimatePresence>
      </div>
      <button
        onClick={() => swipeToImage(1)}
        className="uppercase text-base font-normal h-12 absolute max-md:right-4 right-[13rem] top-[85%] flex justify-center items-center z-40"
      >
        Next
      </button>
      {/* <button className="uppercase text-sm font-medium h-12 absolute right-[115px] bottom-[15px] flex justify-center items-center z-50">
        Shop now
      </button> */}
      <Link className="absolute right-[80px] bottom-[15px] flex justify-center items-center z-40" to={"/cards"}>
          <button class="btn-1 max-w-[180px]">
            <span className="flex items-center justify-center gap-2.5">
              <div className="">SHOP NOW </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                className="arrow"
              >
                <path
                  d="M7.793 0.799012C7.98053 0.611541 8.23484 0.506226 8.5 0.506226C8.76516 0.506226 9.01947 0.611541 9.207 0.799012L13.707 5.29901C13.8945 5.48654 13.9998 5.74085 13.9998 6.00601C13.9998 6.27118 13.8945 6.52548 13.707 6.71301L9.207 11.213C9.0184 11.3952 8.7658 11.496 8.5036 11.4937C8.2414 11.4914 7.99059 11.3862 7.80518 11.2008C7.61977 11.0154 7.5146 10.7646 7.51233 10.5024C7.51005 10.2402 7.61084 9.98761 7.793 9.79901L10.5 7.00601H1C0.734784 7.00601 0.48043 6.90065 0.292893 6.71312C0.105357 6.52558 0 6.27123 0 6.00601C0 5.7408 0.105357 5.48644 0.292893 5.29891C0.48043 5.11137 0.734784 5.00601 1 5.00601H10.5L7.793 2.21301C7.60553 2.02548 7.50021 1.77118 7.50021 1.50601C7.50021 1.24085 7.60553 0.98654 7.793 0.799012Z"
                  fill="black"
                />
              </svg>{" "}
            </span>
          </button>
        </Link>
    </div>
  );
};

export default Slideshow;
