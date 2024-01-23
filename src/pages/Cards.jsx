import React, { useEffect, useState } from "react";
import { items } from "../data";
import Card from "../components/Card";
// import Filter from '../components/Filter';
import { motion } from "framer-motion";

const Cards = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [sort, setSort] = useState(`newest`);

  const [colorOpen, setColorOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    setFilteredItems(items);
  }, []);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredItems((prev) => [...prev].sort((a, b) => a.id - b.id));
    } else if (sort === "asc") {
      setFilteredItems((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredItems((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

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

  return (
    <div className="p-10">
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-center text-3xl font-medium uppercase">Apparel</h1>
        <h1 className="text-center text-md font-[300] uppercase">
          Our best collection of Lorem ipsum yet! with a new dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Consectetur a erat nam at lectus urna
          duis. Diam phasellus vestibulum lorem sed risus ultricies tristique
          nulla aliquet. Integer enim neque volutpat ac tincidunt vitae semper.
          Urna porttitor rhoncus dolor purus non. Lorem mollis aliquam ut
          porttitor leo a diam sollicitudin. Est
        </h1>
      </div>
      <div className="mb-24">
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
              className="capitalize"
            >
              {sort}
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
              <motion.li
                onClick={(e) => setSort("asc")}
                variants={itemVariants}
              >
                Price: Low to High
              </motion.li>
              <motion.li
                onClick={(e) => setSort("newest")}
                variants={itemVariants}
              >
                Price: High to Low
              </motion.li>
            </motion.ul>
          </motion.nav>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            className="flex items-start justify-center"
          >
            <Card item={item} sort={sort} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
