import React from "react";
import Team1 from "../assets/team1.png";
import Team2 from "../assets/team2.png";
import Team3 from "../assets/team3.png";
import Team4 from "../assets/team4.png";
import { BsTelegram } from "react-icons/bs";
import { FaArrowRightLong, FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  const teamItems = [
    { img: Team1, name: "Cameron Williamson", post: "Backend Developer" },
    { img: Team2, name: "Brooklyn Simmons", post: "Fronted Developer" },
    { img: Team3, name: "Savannah Nguyen", post: "UX/UI Designer" },
    { img: Team4, name: "Darlene Robertson", post: "Copywriter" },
  ];
  return (
    <div className="container py-[40px]">
      <div className="flex items-center justify-center flex-col">
        <h2 className="section-title text-[54px] mb-[15px]">
          Bizning professional <span>jamoamiz</span>
        </h2>
        <p className="text-[#8A90A5] text-[20px] w-[320px] lg:w-[483px] mx-auto text-center">
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </p>
        <button className="flex items-center justify-center gap-[10px] w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px] mb-[40px] mt-[15px]">
          Ko'piroq ko'rish <FaArrowRightLong />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[20px]">
        {teamItems.map((item, index) => {
          return (
            <div
              key={index}
              className="text-center shadow-md w-[290px] rounded-xl group"
            >
              <div className="relative">
                <img src={item.img} alt={item.name} className="w-full" />
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
              <h3 className="mt-[15px] font-semibold text-[18px] text-[#323A56]">
                {item.name}
              </h3>
              <p className="mb-[20px] text-[16px] text-[#8A90A5] mt-[5px]">
                {item.post}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
