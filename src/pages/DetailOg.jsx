import React, { useState } from "react";
import { items } from "../data";
import { motion } from "framer-motion";

const Details = () => {
  const transition = { duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div className="grid grid-cols-[40rem_auto] h-[100vh]">
      <motion.div className="h-[100vh] flex items-center justify-center">
        <motion.div
          initial={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "350px",
            height: "380px",
            borderRadius: ".75rem",
            scale: 1.2,
          }}
          animate={{
            height: "100vh",
            width: "100%",
            borderRadius: 0,
            scale: 1,
          }}
          className="overflow-hidden"
          transition={transition}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={items[1].img}
            alt=" T-shirt"
          />
        </motion.div>
      </motion.div>
      <div>
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.5, staggerChildren: 1, ...transition }}
          className="text-center p-8 flex flex-col gap-4"
        >
          <motion.div className="text-6xl font-montserrat font-semibold uppercase">
            T-Shirt
          </motion.div>
          <motion.div className="text-xl font-medium uppercase">
            $49.95
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
