import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = ["Home", "About", "Services", "Porfolio", "Contact"];

  return (
    <nav className="z-999">
      <div className="flex px-5 md:px-10 lg:px-40 py-2 items-center justify-between">
        <span className="text-[var(--color-primary)]">
          <h1 className="text-[24px] lg:text-[28px] font-semibold">
            Limuel Landscaping
          </h1>
        </span>
        <ul
          className="lg:flex hidden font-semibold
         flex items-center gap-x-10"
        >
          {navLinks.map((navLink, id) => (
            <li
              className="text-[16px] text-[var(--color-primary)] cursor-pointer "
              key={id}
            >
              {navLink}
            </li>
          ))}
        </ul>
        <span className="text-2xl lg:hidden flex cursor-pointer">
          <FaBars />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
