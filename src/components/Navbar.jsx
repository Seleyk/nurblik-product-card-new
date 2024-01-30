import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { navLinks } from "../Constants";

const Navbar = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

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
        {isNonMobileScreen && (
          <NavLink to={`/profile`}>
            <img
              src="/assets/user.svg"
              alt="notifications"
              width={24}
              height={24}
            />
          </NavLink>
        )}
        <NavLink to={`/cart`}>
        <img
          src="/assets/cart.svg"
          alt="notifications"
          width={24}
          height={24}
        />
        </NavLink>
        {!isNonMobileScreen ? (
          <img
            src="/assets/menu.svg"
            alt="notifications"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
