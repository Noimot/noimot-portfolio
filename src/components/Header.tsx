import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((state) => !state);
  };
  return (
    <div className="flex items-center justify-between h-20 px-4">
      {/* <div><p className='font-satisfy font-bold text-white'>NOY</p></div> */}
      <div>
        <a href="/">
          <img src="/logo.svg" alt="" />
        </a>
      </div>
      <ul className="hidden md:flex items-center gap-8 capitalize text-[#C3D1D6]">
        <li>
          <a href="#about" className="hover:text-[#8E07CD] hover:text-opacity-90 transition duration-300 ease-in-out transform hover:scale-110">about</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#8E07CD] hover:text-opacity-90 transition duration-300 ease-in-out transform hover:scale-110">portfolio</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#8E07CD] hover:text-opacity-90 transition duration-300 ease-in-out transform hover:scale-110">contact</a>
        </li>
      </ul>
      <div />
      <div
        className="flex flex-col gap-y-1 md:hidden cursor-pointer"
        onClick={handleMenu}
      >
        <span
          className={`inline-block bg-[#C3D1D6] border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
            menu && "rotate-45"
          }`}
        />
        <span
          className={`inline-block  bg-[#C3D1D6] border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
            menu && "opacity-0"
          }`}
        />
        <span
          className={`inline-block  bg-[#C3D1D6] border-solid border-2 w-6 origin-left ease-in transition-all duration-[1s] ${
            menu && "-rotate-45"
          }`}
        />
      </div>
      {menu && <MobileMenu menu={menu} handleMenu={handleMenu} />}
    </div>
  );
};

export default Header;
