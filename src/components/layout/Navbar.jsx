import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="z-999">
      <div className="flex px-5 md:px-10 xl:px-40 py-2 items-center justify-between">
        {/* Logo */}
        <h1 className="text-primary text-[24px] lg:text-[28px] font-bold flex gap-2 cursor-pointer">
          <span className="flex">
            <span>Lim</span>
            <span className="md:flex hidden">uel</span>
          </span>
          <span className="md:flex hidden">Landscaping</span>
        </h1>

        {/* Desktop Links */}
        <ul className="lg:flex hidden font-semibold items-center gap-x-10">
          {navLinks.map((navLink, id) => (
            <li
              key={id}
              onClick={() => setActiveLink(navLink)}
              className={`text-[16px] cursor-pointer relative group transition-colors duration-300 
                ${
                  activeLink === navLink
                    ? "text-green-600" // active text color
                    : "text-[var(--color-primary)] hover:text-green-500"
                }`}
            >
              {navLink}
              {/* underline effect */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-600 transition-all duration-300
                  ${
                    activeLink === navLink ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <span className="text-2xl lg:hidden flex cursor-pointer">
          <FaBars />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
