import React from "react";
import Sound from '../assets/sound.png';
import { FaArrowRightLong } from "react-icons/fa6";
import SoundMobile from '../assets/mobile_sound.png';

const About = () => {
  return (
    <div className="bg-[#F8FAFC] relative">
      <div className="container py-[40px] pb-[200px] lg:pb-[250px]">
        <div className="flex items-center justify-center flex-col">
          <h2 className="section-title text-[54px] mb-[15px]">
            Biz <span>kuchlilarni</span> tayyorlaymiz! 
          </h2>
          <p className="text-[#8A90A5] text-[20px] w-[320px] lg:w-[483px] mx-auto mb-[40px] text-center">
            Beautiful and responsive React components to build your application
            or marketing pages quicker.
          </p>
          <button className="flex items-center justify-center gap-[10px] w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px]">
            Biz haqqimizda <FaArrowRightLong />
          </button>
        </div>
      </div>
        <img src={Sound} alt="sound" className="hidden lg:block absolute bottom-0" />
        <img src={SoundMobile} alt="sound" className="block lg:hidden absolute bottom-0" />
    </div>
  );
};

export default About;
