import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = () => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <motion.div className="flex flex-col gap-1" exit={{ x: -450 }} transition={{delay: .72, ...transition}}>
        <Link to={"/details"}>
          <div className="h-[40vh] w-[40vh] overflow-hidden rounded-xl cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="w-full h-30vh object-cover rounded-xl"
              src="https://media.istockphoto.com/id/1180368138/photo/visualization-of-a-blank-t-shirt-on-a-body-without-a-man-with-shadows-on-white-background.jpg?s=612x612&w=0&k=20&c=fK4-v_piYs75-FOT4HFCwdILkH__df43g3Lh6EkorxU="
              alt=" T-shirt"
              transition={transition}
            />
          </div>
        </Link>

        <motion.span
          exit={{ opacity: 0 }}
          transition={transition}
          className="flex flex-row px-2"
        >
          <p className="mr-auto">Steven Seley</p> <p>T-Shirt</p>
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Card