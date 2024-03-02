import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "../data";
import CardSkeleton from "../components/Skeletons/CardSkeleton";

const SingleCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <motion.div
          className="flex flex-col gap-1"
          exit={{ opacity: 0 }}
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ delay: 0.72, ...transition }}
        >
          <Link to={"/details"}>
            <div className="h-[380px] w-[350px] overflow-hidden rounded-xl cursor-pointer">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-full h-30vh object-cover rounded-xl"
                src={items[0].img}
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
            <p className="mr-auto font-medium">{items[1].title}</p>{" "}
            <p>${`${items[1].price / 100}`}</p>
          </motion.span>
        </motion.div>
      )}
    </div>
  );
};

export default SingleCard;
