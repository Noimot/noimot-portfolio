import React from "react";
import { Link } from "react-router-dom";

interface IMenu {
  menu: boolean;
  handleMenu: () => void;
}
const MobileMenu = ({ menu, handleMenu }: IMenu) => {
  return (
    <div className="bg-[#F5F7FA] text-[#1A1A2E] dark:bg-[#030E12] dark:text-white fixed left-0 top-20 px-4 w-full pt-[27px] h-[547px] md:hidden transition-all ease-out duration-[3s]">
      <ul className="flex flex-col gap-y-[58px] pt-[37px]">
        <li className="capitalize text-base leading-4">
          <Link to="/" onClick={handleMenu}>Home</Link>
        </li>
        <li className="capitalize text-base leading-4">
          <Link to="/about" onClick={handleMenu}>About me</Link>
        </li>
        <li className="capitalize text-base leading-4">
          <Link to="/portfolio" onClick={handleMenu}>Portfolio</Link>
        </li>
        <li className="capitalize text-base leading-4">
          <Link to="/contact" onClick={handleMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
