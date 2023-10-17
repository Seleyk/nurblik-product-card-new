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
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="container">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
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
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Red </motion.li>
          <motion.li variants={itemVariants}>Orange </motion.li>
          <motion.li variants={itemVariants}> Green </motion.li>
          <motion.li variants={itemVariants}>Black </motion.li>
          <motion.li variants={itemVariants}> Grey </motion.li>
        </motion.ul>
      </motion.nav>
      <div className="."></div>
    </div>
  );
};

export default Filter;