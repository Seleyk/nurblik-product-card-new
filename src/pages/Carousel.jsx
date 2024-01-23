import React, { useEffect, useRef, useState } from "react";
import { items } from "../data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);


  const handleScroll = (direction) => {
    const { current } = carousel;
    const scrollAmount = window.innerHeight > 1800 ? 270*1.75 : 210*1.75;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    // TO DO: ADD PAGINATION

    <div className="pt-20 bg-[#F8F7F4]">
      <div className="text-black text-[32px] font-semibold mb-4 ml-40 tracking-[3.20px]">
        FEATURED ITEMS
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-2 mx-10 h-full flex-col items-center justify-center">
          <motion.div onClick={() => handleScroll("right")} className=" cursor-pointer flex items-center justify-center max-md:w-10 w-20">
            <motion.img src="assets/rightArrow.svg" alt="" />
          </motion.div>
          <motion.div onClick={() => handleScroll("left")} className=" cursor-pointer flex items-center justify-center max-md:w-10 w-20">
            <motion.img src="assets/leftArrow.svg" alt="" />
          </motion.div>
        </div>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            ref={carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="flex flex-col gap-1)"
                exit={{ x: -450, position: "absolute" }}
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ delay: 0.06, ...transition }}
              >
                {/* <Link to={"/details"}> */}
                <div className="h-[380px] w-[350px] overflow-hidden rounded-xl cursor-pointer">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    className="w-full h-30vh object-cover rounded-xl"
                    src={item.img}
                    alt=" T-shirt"
                    transition={transition}
                  />
                </div>
                {/* </Link>  */}

                <motion.span
                  exit={{ opacity: 0 }}
                  transition={transition}
                  className="flex flex-col px-2 max-w-[350px]"
                >
                  <p className="mr-auto font-medium">{item.title}</p>
                  <p>${`${item.price / 100}`}</p>
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="width-full flex justify-end mr-10 pb-16">
        <button className="h-9 justify-center items-center inline-flex">
          <div className="px-4 py-2 rounded justify-start items-center gap-1.5 flex">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="text-black text-sm font-medium uppercase">
                SHOP NOW
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
              >
                <path
                  d="M7.793 0.799012C7.98053 0.611541 8.23484 0.506226 8.5 0.506226C8.76516 0.506226 9.01947 0.611541 9.207 0.799012L13.707 5.29901C13.8945 5.48654 13.9998 5.74085 13.9998 6.00601C13.9998 6.27118 13.8945 6.52548 13.707 6.71301L9.207 11.213C9.0184 11.3952 8.7658 11.496 8.5036 11.4937C8.2414 11.4914 7.99059 11.3862 7.80518 11.2008C7.61977 11.0154 7.5146 10.7646 7.51233 10.5024C7.51005 10.2402 7.61084 9.98761 7.793 9.79901L10.5 7.00601H1C0.734784 7.00601 0.48043 6.90065 0.292893 6.71312C0.105357 6.52558 0 6.27123 0 6.00601C0 5.7408 0.105357 5.48644 0.292893 5.29891C0.48043 5.11137 0.734784 5.00601 1 5.00601H10.5L7.793 2.21301C7.60553 2.02548 7.50021 1.77118 7.50021 1.50601C7.50021 1.24085 7.60553 0.98654 7.793 0.799012Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="py-0.5 flex-col justify-center items-center gap-2.5 inline-flex" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
