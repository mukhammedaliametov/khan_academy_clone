import React from "react";
import { IoIosMoon } from "react-icons/io";
import { IoMdColorPalette } from "react-icons/io";

const Strengths = () => {
  const strengthsItems = [
    { name: "Kuchli Mentorlar", icon: IoIosMoon },
    { name: "Muntazam o’rganish", icon: IoMdColorPalette },
    { name: "Qulay muhit", icon: IoIosMoon },
    { name: "Intensiv Darslar", icon: IoIosMoon },
    { name: "Ahil Jamoa", icon: IoIosMoon },
    { name: "Amaliy darslar", icon: IoIosMoon },
  ];
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container py-[40px]">
        <h2 className="section-title text-[54px] mb-[15px]">Bizning ustun <span>jihatlarimiz</span></h2>
        <p className="text-[#8A90A5] text-[20px] w-[320px] lg:w-[483px] mx-auto mb-[40px] text-center">
          Quyida bizning ustun jihatlarimiz bilan tanishing
        </p>
        <div className="flex flex-col gap-[20px] lg:grid grid-cols-3 lg:gap-[40px]">
          {strengthsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white mx-auto w-[350px] lg:w-[380px] p-[30px] group hover:shadow-md transition-all duration-300 cursor-pointer rounded-[10px]">
                <div className="text-[#1D72D2] w-[40px] p-[10px] h-[40px] rounded-full bg-[#EFF2F7] flex justify-center items-center group-hover:bg-[#1D72D2] group-hover:text-white transition-all duration-300">
                  <IconComponent size={50} />
                </div>
                <h3 className="text-[20px] font-semibold my-[20px]">{item.name}</h3>
                <p className="text-[18px] text-[#8A90A5]">
                  Webbrain UI strictly follows WAIARIA standarts for all
                  components strictly follows.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Strengths;
