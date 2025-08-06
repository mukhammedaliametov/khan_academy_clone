import React from "react";
import { FaDiscord } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1D72D2]">
        <div className="container flex items-center justify-between">
          <div>
            <FaDiscord />
            <div>
              <h3>Biz bilan bog’lanish</h3>
              <p>
                Feel free to ask questions, reports, issues and meet new people
              </p>
            </div>
          </div>
          <button>
            <span>#KhanAcademy</span>ga qoshiling
          </button>
        </div>
      </div>
      <div>
        <div>
          <img src={Logo} alt="logo" />
          <p>
            Istiklal street, Tashkent, <br /> Uzbekistan, 200136
          </p>
          <div className="flex justify-center items-end card-linear absolute top-0 left-0 w-full h-full p-[20px] gap-[10px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
            <a
              href="javascript:void(0)"
              className="border-1 border-white p-[10px] rounded-full hover:bg-white hover:text-[#1D72D2] transition duration-300"
            >
              <BsTelegram />
            </a>
            <a
              href="javascript:void(0)"
              className="border-1 border-white p-[10px] rounded-full hover:bg-white hover:text-[#1D72D2] transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="javascript:void(0)"
              className="border-1 border-white p-[10px] rounded-full hover:bg-white hover:text-[#1D72D2] transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="javascript:void(0)"
              className="border-1 border-white p-[10px] rounded-full hover:bg-white hover:text-[#1D72D2] transition duration-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <a href="javascript:void(0)">Support</a>
          <a href="javascript:void(0)">Team</a>
          <a href="javascript:void(0)">Careers</a>
          <a href="javascript:void(0)">Blog</a>
          <a href="javascript:void(0)">Security</a>
        </div>
        <div>
          <a href="javascript:void(0)">Support</a>
          <a href="javascript:void(0)">Team</a>
          <a href="javascript:void(0)">Careers</a>
          <a href="javascript:void(0)">Blog</a>
          <a href="javascript:void(0)">Security</a>
        </div>
        <div>
          <a href="javascript:void(0)">Support</a>
          <a href="javascript:void(0)">Team</a>
          <a href="javascript:void(0)">Careers</a>
          <a href="javascript:void(0)">Blog</a>
          <a href="javascript:void(0)">Security</a>
        </div>
        <div>
          <a href="javascript:void(0)">Subscribe</a>
          <p>Subscribe to get the latest news from us</p>
          <div>
            <input type="text" placeholder="email@example.com" />
            <button>
              <FaTelegramPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
