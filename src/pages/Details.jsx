import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { items } from "../data";
import { IconButton, useMediaQuery } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
  const [quantity, setQuantity] = useState(1);
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  const activeImageIndex = wrap(0, items.length, imageCount);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

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
    <div className="bg-[#F8F7F4] mb-20">
      <div className="details-container">
        <div className="slider-container-parent">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 3,
              delayChildren: 0.3,
              staggerChildren: 0.05,
              ...sliderTransition,
            }}
            className="thumbnails max-md:hidden"
          >
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
          </motion.div>
          <div className="slider-container">
            <motion.div
              initial={{
                opacity: 0,
                borderRadius: ".75rem",
              }}
              animate={{
                opacity: 1,
                borderRadius: 0,
              }}
              transition={sliderTransition}
              className="slider"
            >
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
            </motion.div>

            <div className="buttons">
              <button onClick={() => swipeToImage(-1)}>PREV</button>
              <button onClick={() => swipeToImage(1)}>NEXT</button>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, ...sliderTransition }}
          className="flex flex-col gap-16 max-md:w-full max-md:px-6 max-md:pt-6 max-md:bg-[#F8F7F4] max-md:bg-opacity-85 max-md:rounded-tl-3xl max-md:rounded-tr-3xl max-md:overflow-x-hidden max-md:overflow-y-auto max-md:bottom-1 max-md:absolute max-md:opacity-60"
        >
          <div className="flex flex-col gap-6">
            <div className=" flex flex-col gap-3 max-md:gap-[6px] max-md:flex-col-reverse text-xs">
              <motion.div
                initial={
                  isNonMobileScreen
                    ? { y: 50, opacity: 0 }
                    : { y: -25, opacity: 0 }
                }
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, ...sliderTransition }}
                className="flex items-center gap-1 uppercase text-zinc-600 text-sm font-medium font-['Roboto'] tracking-wide max-md:text-zinc-600 max-md:text-xs max-md:font-medium max-md:font-['Roboto'] max-md:tracking-wide"
              >
                {["shoes", "sneakers"].map((item) => (
                  <div className="flex gap-[2px] items-center">
                    <div className="text-black">&#9679; </div>
                    <a
                      className="hover:underline"
                      href={`collections/${item}`}
                    >{`${item} `}</a>
                  </div>
                ))}
              </motion.div>
              <div className="flex flex-col gap-6 max-md:flex-row max-md:justify-between justify-center max-md:items-center">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, ...sliderTransition }}
                  class="uppercase text-black text-5xl font-bold max-md:text-lg max-md:font-semibold font-['Roboto'] tracking-widest"
                >
                  “OFF-WHITE” X AIR-JORDAN 1
                </motion.div>
                <motion.div
                  initial={
                    isNonMobileScreen
                      ? { y: -20, opacity: 0 }
                      : { x: -20, opacity: 0 }
                  }
                  animate={
                    isNonMobileScreen
                      ? { y: 0, opacity: 1 }
                      : { x: 0, opacity: 1 }
                  }
                  transition={{ delay: 1.6, ...sliderTransition }}
                  className="text-[#636363] text-2xl font-medium font-['Roboto'] tracking-widest max-md:text-sm max-md:font-medium max-md:tracking-wide"
                >
                  ${15999 / 100}
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
                staggerChildren: 1,
                ...sliderTransition,
              }}
              className="flex flex-col gap-2"
            >
              <div className="text-black text-2xl font-medium font-['Roboto'] tracking-widest max-md:text-sm max-md:font-bold ">
                Description
              </div>
              <div class=" text-neutral-500 text-lg font-medium max-md:text-zinc-600 max-md:text-xs max-md:font-medium font-['Roboto'] tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tellus rutrum tellus pellentesque eu. Arcu dui vivamus arcu
                felis bibendum ut tristique et egestas. Nisi vitae suscipit
                tellus mauris a diam maecenas sed enim.
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, ...sliderTransition }}
            className=""
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-row gap-2 items-center">
                <IconButton
                  variant="secondary"
                  onClick={() => handleQuantity("dec")}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
                <div className="">{quantity}</div>
                <IconButton
                  variant="standard"
                  onClick={() => handleQuantity("inc")}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </div>
              <button className="">
                <img width={25} src="/assets/heart.svg" alt="H" />
              </button>
            </div>
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
            <div>
              <button className="cta">
                <span className="cta-txt">Add to Cart</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardDetails;
