import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { navLinks } from "../Constants";
import { userList } from "../data";
import UserMenu from "./UserMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const [open, setOpen] = useState(false);

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const user = userList[0];

  console.log(user);

  return (
    <div className="w-full absolute z-50 h-20 px-8 justify-between items-center inline-flex">
      <NavLink
        to="/"
        className="text-secondary-700 max-lg:text-[24px] max-lg:tracking-[2.20px] text-[32px] font-bold font-['Roboto'] tracking-[3.20px]"
      >
        NURBLIK KOUTURE
      </NavLink>
      {isNonMobileScreen && (
        <div className="justify-center items-center gap-9 flex">
          {navLinks.map((link) => (
            <NavLink
              to={link.route}
              key={link.label}
              className="text-secondary-700 uppercase text-xs font-medium font-['Roboto'] tracking-wide"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
      <div className="justify-center items-center gap-8 flex max-lg:pl-8 pl-52">
        {isNonMobileScreen && user ? (
          <UserMenu user={userList} />
        ) : !isNonMobileScreen && !user ? (
          <NavLink to={`/login`}>
            <img
              src="/assets/user.svg"
              alt="notifications"
              width={24}
              height={24}
            />
          </NavLink>
        ) : null}
        <NavLink to={`/cart`}>
          <img
            src="/assets/cart.svg"
            alt="notifications"
            width={24}
            height={24}
          />
        </NavLink>
        {!isNonMobileScreen && (
          <div className="relative" onClick={toggleMenu}>
            <div
              className={`nav-icon1 ${
                open ? "open" : ""
              } cursor-pointer sticky top-0 z-50`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-40 fixed left-0 top-0 w-full h-screen origin-top bg-[#F8F7F4] text-black p-10 overflow-hidden no-scrollbar"
          >
            <div className="flex h-full flex-col">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link) => {
                  return (
                    <motion.div
                      // whileInView={{ opacity: [0, 1] }}
                      initial={{ y: "20px", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                        delay: 0.95,
                        ...transition,
                      }}
                      className="overflow-hidden hover:text-4xl text-3xl font-medium cursor-pointer ease-in-out duration-[.25s]"
                    >
                      <motion.a href={link.route}>{link.label}</motion.a>
                    </motion.div>
                  );
                })}
                <motion.a
                  initial={{ y: "20px", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                    delay: 0.95,
                    ...transition,
                  }}
                  href={"/profile"}
                  className="overflow-hidden hover:text-4xl text-3xl font-medium cursor-pointer ease-in-out duration-[.25s]"
                >
                  Account
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
