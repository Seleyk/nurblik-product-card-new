import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const UserMenu = ({ user }) => {
  const [isMenu, setIsMenu] = useState(false);

  const menuRef = useRef();

  //   useEffect(() => {
  //     let getClickOutside = (e) => {
  //       if (!!!menuRef.current.contains(e.target)) {
  //         setIsMenu(false);
  //       }
  //     };
  //     document.addEventListener("click", getClickOutside);
  //     return () => {
  //       document.removeEventListener("click", getClickOutside);
  //     };
  //   }, [menuRef]);

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <li className="user-menu-container">
      <div
        className={isMenu ? "user-data active" : "user-data"}
        onClick={() => setIsMenu(!isMenu)}
      >
        {/* <img src={user.image} alt="user" className="rounded-image" /> */}
        <div className="bg-black rounded-full h-8 w-8"></div>
        <AnimatePresence>
          {isMenu && (
            <>
              <motion.ul
                initial={{ opacity: 0, y: "-10%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{
                  opacity: 0,
                  y: "-10%",
                  transition: { duration: "0.35" },
                }}
                transition={transition}
                className="user-menu"
                ref={menuRef}
              >
                <div className="my-4">
                  <div className=" text-lg flex items-center justify-center">
                    Hello, {user[0].firstName}!
                  </div>
                  <div className="text-gray-500 text-sm w-full flex items-center justify-center">
                    {user[0].email}
                  </div>
                </div>
                <li className="flex items-center"> <span className="mx-2"><img src="/assets/user.svg" width={20} alt="Profile" /></span> Account</li>
                <li className="flex items-center"> <span className="mx-2"><img src="/assets/heart.svg" width={20} alt="Profile" /></span> Help & Support</li>
                <li className="flex items-center"> <span className="mx-2"><img src="/assets/settings.svg" width={20} alt="Profile" /></span> Settings</li>
                <li className="flex items-center"> <span className="mx-2"><img src="/assets/logout.svg" width={20} alt="Profile" /></span> Logout</li>
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default UserMenu;
