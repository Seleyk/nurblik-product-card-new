import React, { useState } from 'react';
import { motion } from "framer-motion";

// import './Menu.css';

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
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
  
const listVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
};

const Filter = () => {
  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  
  return (
    <div className="container">
      <div className="flex flex-col gap-2">
        <motion.nav
          initial={false}
          animate={colorOpen ? "open" : "closed"}
          className="menu"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setColorOpen(!colorOpen)}
          >
            Color
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
            <motion.li variants={itemVariants}>Red </motion.li>
            <motion.li variants={itemVariants}>Orange </motion.li>
            <motion.li variants={itemVariants}> Green </motion.li>
            <motion.li variants={itemVariants}>Black </motion.li>
            <motion.li variants={itemVariants}> Grey </motion.li>
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
          >
            Size
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
            <motion.li variants={itemVariants}>Small </motion.li>
            <motion.li variants={itemVariants}>medium </motion.li>
            <motion.li variants={itemVariants}> large </motion.li>
            <motion.li variants={itemVariants}>X-Large</motion.li>
            <motion.li variants={itemVariants}> 2X-Large</motion.li>
          </motion.ul>
        </motion.nav>
      </div>
      <motion.nav
        initial={false}
        animate={sortOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setSortOpen(!sortOpen)}
        >
          Sort
          <motion.div variants={menuVariants} style={{ originY: 0.55 }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          variants={listVariants}
          style={{ pointerEvents: sortOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Price: Low to High</motion.li>
          <motion.li variants={itemVariants}>Price: High to Low</motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Filter;