import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div
      layout
      className="flex flex-col gap-1"
      exit={{ opacity: 0 }}
      whileInView={{ y: [50, 0], opacity: [0, 1] }}
      transition={{ delay: 0.72, ...transition }}
    >
      <Link to={"/details"}>
        <div className="h-[380px] max-w-[350px] overflow-hidden rounded-xl cursor-pointer">
          <motion.img
            whileHover={{ scale: 1.2 }}
            className="w-full h-30vh object-cover rounded-xl"
            src={item.img}
            alt=" T-shirt"
            transition={transition}
          />
        </div>
      </Link>
      <motion.span
        exit={{ opacity: 0 }}
        transition={transition}
        className="flex flex-col px-2 max-w-[350px]"
      >
        <p className="mr-auto font-medium">{item.title}</p>
        <p>${`${item.price / 100}`}</p>
      </motion.span>
    </motion.div>
  );
};

export default Card;
