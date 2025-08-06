import React from "react";
import Sponsor from "../assets/sponsor.png";
import Avatar1 from "../assets/avatar1.svg";
import Avatar2 from "../assets/avatar2.svg";
import Avatar3 from "../assets/avatar3.svg";
import Avatar4 from "../assets/avatar4.svg";
import Avatar5 from "../assets/avatar5.svg";
import Avatar6 from "../assets/avatar6.svg";
import Google from '../assets/google.svg';

const Collabrite = () => {
  return (
    <div className="bg-[#1D72D2]">
      <div className="container pt-[30px] pb-[40px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="section-title text-[54px] mb-[10px] lg:w-[65%] ">
            <p className="text-white">Hamkorlik qilishga tayyormisiz?</p>
          </h2>
          <p className="text-[18px] w-[320px] lg:w-[600px] mx-auto mb-[20px] text-center text-[#E8E8E8]">
            Our maintainers devote their time, effort, and heart to ensure
            Webbrain UI keeps getting better. Support us by donating to our
            collective
          </p>
        </div>
        <div className="w-full px-[20px] lg:px-auto lg:w-[50%] mx-auto mt-[30px]">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-[30px] py-[20px] rounded-[10px]">
            <div className="flex items-center">
              <img src={Sponsor} alt="sponsor" className="mr-[20px]" />
              <div>
                <h3 className="font-semibold text-[18px]">Open Collective</h3>
                <p className="text-[16px] text-[#888EA2]">
                  Sponsor the Webbrain UI maintainers
                </p>
              </div>
            </div>
            <button className="bg-[#1D71D0] w-full md:w-auto text-white px-[20px] py-[8px] text-[16px] cursor-pointer shadow-md rounded-md mt-0 lg:mt-[20px]">
              Sponsor
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between bg-white px-[30px] py-[20px] rounded-[10px] mt-[30px]">
            <div className="flex items-center">
              <img src={Sponsor} alt="sponsor" className="mr-[20px]" />
              <div>
                <h3 className="font-semibold text-[18px]">Open Collective</h3>
                <p className="text-[16px] text-[#888EA2]">
                  Sponsor the Webbrain UI maintainers
                </p>
              </div>
            </div>
            <button className="bg-[#1D71D0] w-full md:w-auto text-white px-[20px] py-[8px] text-[16px] cursor-pointer shadow-md rounded-md mt-0 lg:mt-[20px]">
              Sponsor
            </button>
          </div>
          <div className="flex items-center justify-center flex-col mt-[40px]">
            <p className='text-white tracking-[2px]'>ORGANIZATION SPONSORS</p>
            <div className="flex items-center mt-[20px] overflow-scroll lg:overflow-hidden">
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Google} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col mt-[40px]">
            <p className='text-white tracking-[2px]'>INDIVIDUAL SPONSORS</p>
            <div className="flex items-center mt-[20px] overflow-scroll lg:overflow-hidden">
                <img src={Avatar1} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Avatar2} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Avatar3} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Avatar4} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Avatar5} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
                <img src={Avatar6} alt="google-logo" className="w-[25%] lg:w-[16%] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabrite;
