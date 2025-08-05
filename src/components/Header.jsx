import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import Avatar from "../assets/header_avatar.png";
import { IoIosLogOut } from "react-icons/io";
import { FaHome, FaBook, FaPhone } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";

const Header = () => {
  const [nav, setNav] = useState(0);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(0);

  const navItems = [
    { name: "Asosiy", link: "#", icon: FaHome },
    { name: "Kurslarimiz", link: "#", icon: AiFillAppstore },
    { name: "Blog", link: "#", icon: FaBook },
    { name: "Biz haqimizda", link: "#", icon: BsBuilding },
    { name: "Bog’lanish", link: "#", icon: FaPhone },
  ];

  return (
    <div className="sticky w-full top-0 bg-white shadow-sm px-[30px] lg:px-0 z-999">
      <div className="flex items-center justify-between container py-[20px] gap-[25px]">
        <div
          onClick={handleClick}
          className="lg:hidden text-[30px] text-[#8A90A5]"
        >
          <IoMenu />
        </div>
        <a href="#" className="relative">
          <img src={Logo} alt="logo" />
        </a>
        <div className="hidden lg:flex items-center justify-between gap-[25px]">
          {navItems.map((item, index) => {
            return (
              <a key={index} href={item.link} className="text-[#323A56] transition-all duration-300 hover:text-[#1D72D2]">
                {item.name}
              </a>
            );
          })}
          <div className="hidden lg:flex items-center gap-[25px]">
            <FiSearch className="text-[20px]" />
            <select className="overflow-hidden border-1 border-[#EFF2F7] px-[10px] py-[5px] rounded-[5px] cursor-pointer">
              <option value="eng">En</option>
              <option value="rus">Ru</option>
              <option value="uzb">Uz</option>
            </select>
            <button className="flex items-center bg-[#EFF2F7] py-[8px] px-[16px] rounded-[5px] text-[15.2px] cursor-pointer opacity-80 hover:opacity-100">
              Kirish <FaArrowRightLong className="ml-[10px]" />
            </button>
          </div>
        </div>
        <div className="lg:hidden relative">
          <img src={Avatar} alt="header_avatar" />
          <div className="w-[16px] h-[16px] rounded-full bg-green-500 absolute bottom-0 left-[30px] border-3 border-white"></div>
        </div>
        <div
          className={
            nav
              ? "lg:hidden absolute bg-white shadow-xl w-[350px] left-0 top-[0px] min-h-[100vh] p-[30px] transition-all duration-500"
              : "lg:hidden absolute bg-white shadow-xl w-[350px] left-[-500px] top-[0px] min-h-[100vh] p-[30px] transition-all duration-500"
          }
        >
          <div className="flex items-center justify-between">
            <img src={Logo} alt="logo" className="" />
            <div onClick={closeNav}>
              <IoClose className="w-[40px] text-[30px] text-[#8A90A5]" />
            </div>
          </div>
          <div className="mx-auto w-full flex items-center justify-between px-[20px] py-[10px] rounded-[40px] none border-1 border-[#EFF2F7] my-[40px] rounded-lg/">
            <input
              type="text"
              placeholder="Nima qidiramiz?"
              className="outline-none w-[80%]"
            />
            <FiSearch className=" text-[30px] text-[#8A90A5]" />
          </div>
          <div className="flex flex-col gap-[25px]">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-[20px] text-[20px] text-[#8A90A5] font-poppins"
                >
                  {IconComponent && (
                    <IconComponent className="w-[24px] h-[24px]" />
                  )}
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="flex items-center font-poppins gap-[20px] text-[20px] text-[#8A90A5] border-[#EFF2F7] border-t pt-[20px] mt-[20px]">
            <IoIosLogOut className="w-[24px] h-[24px]" /> Chiqish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
