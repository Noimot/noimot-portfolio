import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleMenu = () => {
    setMenu((state) => !state);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition duration-300 ease-in-out transform hover:scale-110 ${
      isActive
        ? "text-[#8E07CD]"
        : "hover:text-[#8E07CD] hover:text-opacity-90"
    }`;

  return (
    <section className="w-full">
      <div className="flex items-center justify-between h-20 px-10 lg:px-28 xl:px-32 fixed top-0 bg-[#F5F7FA] dark:bg-[#030E12] w-full z-50">
        <div>
          <Link to="/">
            <img src="/logo.svg" alt="" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-8 capitalize text-[#1A1A2E] dark:text-[#C3D1D6]">
          <li>
            <NavLink to="/about" className={navLinkClass}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={navLinkClass}>
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              contact
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C3D1D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <div
            className="flex flex-col gap-y-1 md:hidden cursor-pointer"
            onClick={handleMenu}
          >
            <span
              className={`inline-block bg-[#1A1A2E] dark:bg-[#C3D1D6] border-solid border-2 border-[#1A1A2E] dark:border-[#C3D1D6] w-6 origin-left ease-in transition-all duration-[1s] ${
                menu && "rotate-45"
              }`}
            />
            <span
              className={`inline-block bg-[#1A1A2E] dark:bg-[#C3D1D6] border-solid border-2 border-[#1A1A2E] dark:border-[#C3D1D6] w-6 origin-left ease-in transition-all duration-[1s] ${
                menu && "opacity-0"
              }`}
            />
            <span
              className={`inline-block bg-[#1A1A2E] dark:bg-[#C3D1D6] border-solid border-2 border-[#1A1A2E] dark:border-[#C3D1D6] w-6 origin-left ease-in transition-all duration-[1s] ${
                menu && "-rotate-45"
              }`}
            />
          </div>
        </div>
        {menu && <MobileMenu menu={menu} handleMenu={handleMenu} />}
      </div>
    </section>
  );
};

export default Header;
