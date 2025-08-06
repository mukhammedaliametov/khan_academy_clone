import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { FaDiscord } from "react-icons/fa6";

const Growth = () => {
  return (
    <div className="bg-[#1D72D2]">
      <div className="container pt-[30px] pb-[40px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="section-title text-[54px] mb-[10px] lg:w-[65%] ">
            <p className="text-white">Shiddat bilan o‘sayotgan Khan Academy</p>
          </h2>
          <p className="text-[20px] w-[320px] lg:w-[800px] mx-auto mb-[20px] text-center text-white">
            We’re dedicated to improving the experience and perfomance of
            Webbrain UI
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:justify-between gap-[20px] py-[30px]">
          <div className="lg:border-l pl-[20px] text-white">
            <h3 className="text-[80px] mb-[-15px]">1.2M</h3>
            <p className="flex items-center gap-[5px]">
              <MdOutlineFileDownload />
              Download per month
            </p>
          </div>
          <div className="lg:border-l pl-[20px] text-white">
            <h3 className="text-[80px] mb-[-15px]">25.1K</h3>
            <p className="flex items-center gap-[5px]">
              <FiGithub />
              GitHub stars
            </p>
          </div>
          <div className="lg:border-l pl-[20px] text-white">
            <h3 className="text-[80px] mb-[-15px]">14</h3>
            <p className="flex items-center gap-[5px]">
              <GoPeople />
              Core contributors
            </p>
          </div>
          <div className="lg:border-l pl-[20px] text-white">
            <h3 className="text-[80px] mb-[-15px]">6.2K</h3>
            <p className="flex items-center gap-[5px]">
              <FaDiscord />
              Discord members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
