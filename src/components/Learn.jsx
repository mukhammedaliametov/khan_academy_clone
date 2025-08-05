import React from "react";
import LearnImg1 from "../assets/learn_img1.png";
import LearnImg2 from "../assets/learn_img2.png";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Learn = () => {
  return (
    <div className="container min-h-[100vh] py-[60px]">
      <div className="w-full">
        <div className="text-center w-[90%] mx-auto">
          <h1 className="section-title text-[54px] mb-[15px] mx-[20px]">
            Kam vaqtda <span>ko‘proq o‘rganish</span>
          </h1>
          <p className='text-[#8A90A5] text-[17px] lg:text-[20px] mb-[40px]'>
            Khan akademiyasida juda qisqa muddatda istalgan dasturlash sohasida
            Junior darajasiga chiqa olasiz
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-[80%] mx-auto lg:border-1 border-[#8A90A5] rounded-[8px]">
          <div className="relative w-[330px] lg:w-[670px] flex justify-center items-center">
            <img src={LearnImg1} alt="learn_img1" className="w-full rounded-[10px] lg:rounded-none" />
            <div className="absolute text-[40px] text-white p-[25px] cursor-pointer rounded-full bg-[#6D7581]">
              <TbPlayerPlayFilled />
            </div>
          </div>
          <div className="mx-auto ml-[-8px]">
            <div className="w-[330px] lg:w-[320px] relative shadow-xl p-[20px] rounded-[10px] mt-[30px]">
              <img src={LearnImg2} alt="learn_img2" className="w-full" />
              <div className="flex items-center gap-[10px] text-[#1D72D2]">
                <p className="py-[6px] px-[14px] text-[12px] my-[5px] bg-[#EFF2F7]">PLUS</p>
                <p className="py-[6px] px-[4px] text-[12px] font-semibold">VERIFIED</p>
                <p className="py-[6px] px-[4px] text-[12px] font-semibold">CAPE TOWN</p>
              </div>
              <h3 className="text-[20px] my-[10px] text-[#323A56] font-semibold">Modern, Chic Penthouse</h3>
              <p className="font-semibold text-[#313647]">$119/night</p>
              <div className="flex items-center justify-end mt-[30px]">
                <div className="flex gap-[5px] mx-[15px] text-[#F8C100]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-[#1D72D2]"><span className="font-semibold">4.5</span> (190)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
