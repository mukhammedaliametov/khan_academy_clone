import React from "react";
import { FaDiscord } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="hidden lg:block">
      <div className="bg-[#1D72D2]">
        <div className="container flex items-center justify-between py-[30px]">
          <div className="flex items-center gap-[10px]">
            <FaDiscord className="text-[50px] text-white" />
            <div className="text-white">
              <h3 className="text-[20px]">Biz bilan bog’lanish</h3>
              <p className="text-[16px] font-light">
                Feel free to ask questions, reports, issues and meet new people
              </p>
            </div>
          </div>
          <button className="bg-white px-[25px] py-[15px] rounded-md cursor-pointer">
            <span className="text-[#1D72D2]">#KhanAcademy</span>ga qoshiling
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#F8FAFC]">
        <div className="container flex items-center justify-between py-[30px] ">
          <div className="flex flex-col gap-[24px]">
            <img src={Logo} alt="logo" className="w-[65%]" />
            <p>
              Istiklal street, Tashkent, <br /> Uzbekistan, 200136
            </p>
            <div className="flex items-center gap-[25px] text-[#1D72D2]">
              <a
                href="javascript:void(0)"
                className="text-[20px] hover:text-[#1D72D2] transition duration-300"
              >
                <BsTelegram />
              </a>
              <a
                href="javascript:void(0)"
                className="text-[20px] hover:text-[#1D72D2] transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="javascript:void(0)"
                className="text-[20px] hover:text-[#1D72D2] transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="javascript:void(0)"
                className="text-[20px] hover:text-[#1D72D2] transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <a href="javascript:void(0)" className='font-semibold'>Support</a>
            <a href="javascript:void(0)">Team</a>
            <a href="javascript:void(0)">Careers</a>
            <a href="javascript:void(0)">Blog</a>
            <a href="javascript:void(0)">Security</a>
          </div>
          <div className="flex flex-col gap-[12px]">
            <a href="javascript:void(0)" className='font-semibold'>Support</a>
            <a href="javascript:void(0)">Team</a>
            <a href="javascript:void(0)">Careers</a>
            <a href="javascript:void(0)">Blog</a>
            <a href="javascript:void(0)">Security</a>
          </div>
          <div className="flex flex-col gap-[12px]">
            <a href="javascript:void(0)" className='font-semibold'>Support</a>
            <a href="javascript:void(0)">Team</a>
            <a href="javascript:void(0)">Careers</a>
            <a href="javascript:void(0)">Blog</a>
            <a href="javascript:void(0)">Security</a>
          </div>
          <div className="flex flex-col gap-[12px]">
            <a href="javascript:void(0)" className="font-semibold">Subscribe</a>
            <p>Subscribe to get the latest news from us</p>
            <div className="bg-white flex items-center justify-between">
              <input type="text" placeholder="email@example.com" />
              <button>
                <FaTelegramPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
