import React from "react";

interface IMenu {
    menu: boolean;
    handleMenu: () => void;
}
const MobileMenu = ({ menu, handleMenu }: IMenu) => {
  return (
    <div className="bg-[#030E12] text-white fixed top-20 w-full pt-[27px] h-[547px] md:hidden transition-all ease-out duration-[3s]">
      {/* <div className="flex items-center justify-between">
        <div>
          <img src={headerIcon} alt="" />
        </div>
        <div
          className="flex flex-col gap-y-1 md:hidden cursor-pointer"
          onClick={handleMenu}
        >
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "rotate-45"
            }`}
          />
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "opacity-0"
            }`}
          />
          <span
            className={`inline-block  bg-[#14142B] border-solid border-2 w-6 border-[#14142B] origin-left ease-in transition-all duration-[2s] ${
              menu && "-rotate-45"
            }`}
          />
        </div>
      </div> */}
      <ul className="flex flex-col gap-y-[58px] pt-[37px]" onClick={handleMenu}>
        <li className="capitalize text-base leading-4 ">
          <a href="#about">About me</a>
        </li>
        <li className="capitalize text-base leading-4">
          <a href="#portfolio">portfolio</a>
        </li>
        <li className="capitalize text-base leading-4">
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
