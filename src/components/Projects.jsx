import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Project1 from '../assets/project1.png';
import Project2 from '../assets/project2.png';
import Project3 from '../assets/project3.png';

const Projects = () => {
  return (
    <div className="container py-[40px]">
      <div className="flex items-center justify-center flex-col">
        <p className="text-[#1D71D0]">PREMIUM COMPONENTS</p>
        <h2 className="section-title text-[54px] mb-[15px]">
          Bizning <span>loyihalar</span>
        </h2>
        <p className="text-[#8A90A5] text-[20px] w-[320px] lg:w-[483px] mx-auto mb-[40px] text-center">
          Beautiful and responsive React components to build your application or
          marketing pages quicker.
        </p>
        <button className="flex items-center justify-center gap-[10px] w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px]">
          Batafsil <FaArrowRightLong />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-end justify-center w-full">
        <img src={Project1} alt="project1" className="w-[390px] h-[320px]" />
        <img src={Project2} alt="project1" className="w-[520px] mx-[-50px] relative left-[-50px] lg:left-auto" />
        <img src={Project3} alt="project1" className="w-[390px] h-[320px]" />
      </div>
    </div>
  );
};

export default Projects;
