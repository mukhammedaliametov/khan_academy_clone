import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import FutureImg1 from "../assets/future1.png";
import FutureImg2 from "../assets/future2.png";
import FutureImg3 from "../assets/future3.png";
import { FaRegHeart } from "react-icons/fa";

const Future = () => {
  return (
    <div className="container py-[40px]">
      <div className="flex items-center justify-center mx-auto flex-col">
        <h2 className="section-title text-[54px] mb-[15px] w-[75%]">
          Kelajagingizni <span>Khan Academy bilan</span> quring
        </h2>
        <p className="text-[#8A90A5] text-[20px] w-[320px] lg:w-[600px] mx-auto mb-[40px] text-center">
          A collection of websites and projects built with Webbrain UI
        </p>
        <button className="flex items-center justify-center gap-[10px] w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px]">
          Ko'piroq ko'rish <FaArrowRightLong />
        </button>
      </div>
      <div className="mt-[60px] flex flex-col lg:grid grid-cols-2 gap-[20px] w-[70%] mx-auto lg:ml-[75px] ml-[27px]">
        <div className="w-[335px] lg:w-[400px] relative rounded-[10px] overflow-hidden group transition-all duration-300 cursor-pointer">
          <img src={FutureImg1} alt="future1" className="w-full" />
          <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full text-white card-linear flex items-end justify-between h-full p-[20px] transition-all duration-300">
            <h3 className="font-semibold">Project Name</h3>
            <FaRegHeart />
          </div>
        </div>
        <div className="row-span-2 w-[335px] lg:w-[570px] rounded-[10px] ml-0 relative overflow-hidden group transition-all duration-300 cursor-pointer" >
          <img src={FutureImg3} alt="future3" className="w-full" />
          <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full text-white card-linear flex items-end justify-between h-full p-[20px] transition-all duration-300">
            <h3 className="font-semibold">Project Name</h3>
            <FaRegHeart />
          </div>
        </div>
        <div className="w-[335px] lg:w-[400px] relative rounded-[10px] overflow-hidden group transition-all duration-300 cursor-pointer">
          <img src={FutureImg2} alt="future2" className="w-full" />
          <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full text-white card-linear flex items-end justify-between h-full p-[20px] transition-all duration-300">
            <h3 className="font-semibold">Project Name</h3>
            <FaRegHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
