import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { items } from "../data";

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

const menuVariants = {
  open: { rotate: 180, transition: { duration: 0.2 } },
  closed: { rotate: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const listVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const sliderTransition = { duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] };

const CardDetails = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [size, setSize] = useState("Size");
  const [color, setColor] = useState("Color");

  const activeImageIndex = wrap(0, items.length, imageCount);

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

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <div className="bg-[#FAF9F6] h-[100vh]">
      <div className="details-container">
        <div className="slider-container-parent">
          <div className="thumbnails">
            {items.map((image, idx) => (
              <div
                key={image.id}
                onClick={() => skipToImage(idx)}
                className="thumbnail-container"
              >
                <img src={image.img} alt="Musician" />
                <div
                  className={`active-indicator ${
                    idx === activeImageIndex ? "active" : null
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="slider-container">
            <div className="slider">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={imageCount}
                  style={{
                    backgroundImage: `url(${items[activeImageIndex].img})`,
                  }}
                  custom={direction}
                  variants={sliderVariants}
                  initial="incoming"
                  animate="active"
                  exit="exit"
                  transition={sliderTransition}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                  className="image"
                />
              </AnimatePresence>
            </div>

            <div className="buttons">
              <button onClick={() => swipeToImage(-1)}>PREV</button>
              <button onClick={() => swipeToImage(1)}>NEXT</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <div class="text-black text-6xl font-bold font-['Roboto'] tracking-widest">
              “OFF-WHITE” X AIR-JORDAN 1
            </div>
            <div class=" text-neutral-500 text-lg font-medium font-['Roboto'] tracking-widest">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              rutrum tellus pellentesque eu. Arcu dui vivamus arcu felis
              bibendum ut tristique et egestas. Nisi vitae suscipit tellus
              mauris a diam maecenas sed enim.
            </div>
          </div>
          <div className="">
            <div className="item-select-container flex w-full gap-4">
              <motion.nav
                initial={false}
                animate={colorOpen ? "open" : "closed"}
                className="menu"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setColorOpen(!colorOpen)}
                >
                  {color}
                  <motion.div variants={menuVariants} style={{ originY: 0.55 }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.ul
                  variants={listVariants}
                  style={{ pointerEvents: colorOpen ? "auto" : "none" }}
                >
                  <motion.li
                    onClick={() => setColor("Red")}
                    variants={itemVariants}
                  >
                    Red
                  </motion.li>
                  <motion.li
                    onClick={() => setColor("Orange")}
                    variants={itemVariants}
                  >
                    Orange
                  </motion.li>
                  <motion.li
                    onClick={() => setColor("Green")}
                    variants={itemVariants}
                  >
                    Green
                  </motion.li>
                  <motion.li
                    onClick={() => setColor("Black")}
                    variants={itemVariants}
                  >
                    Black
                  </motion.li>
                  <motion.li
                    onClick={() => setColor("Grey")}
                    variants={itemVariants}
                  >
                    Grey
                  </motion.li>
                </motion.ul>
              </motion.nav>
              <motion.nav
                initial={false}
                animate={sizeOpen ? "open" : "closed"}
                className="menu"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSizeOpen(!sizeOpen)}
                  className=".container-button"
                >
                  {size}
                  <motion.div variants={menuVariants} style={{ originY: 0.55 }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.ul
                  variants={listVariants}
                  style={{ pointerEvents: sizeOpen ? "auto" : "none" }}
                >
                  <motion.li
                    onClick={() => setSize("Small")}
                    variants={itemVariants}
                  >
                    Small
                  </motion.li>
                  <motion.li
                    onClick={() => setSize("Medium")}
                    variants={itemVariants}
                  >
                    medium
                  </motion.li>
                  <motion.li
                    onClick={() => setSize("Large")}
                    variants={itemVariants}
                  >
                    large
                  </motion.li>
                  <motion.li
                    onClick={() => setSize("XL")}
                    variants={itemVariants}
                  >
                    X-Large
                  </motion.li>
                  <motion.li
                    onClick={() => setSize("XXL")}
                    variants={itemVariants}
                  >
                    2X-Large
                  </motion.li>
                </motion.ul>
              </motion.nav>
            </div>
            <div class="">
              <button class="btn-1">
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
