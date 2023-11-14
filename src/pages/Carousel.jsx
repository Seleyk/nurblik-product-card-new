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

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    // TO DO: ADD PAGINATION

    <div className="mt-40 ">
      <motion.div
        ref={carousel}
        className="carousel ml-40 cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              className="flex flex-col gap-1)"
              exit={{ x: -450, position: 'absolute' }}
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
                <p className="mr-auto font-medium">{item.title}</p>{" "}
                <p>${`${item.price / 100}`}</p>
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
