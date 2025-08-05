import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import GreenIcon from '../assets/hero_icon.png';

const Hero = () => {
    return (
        <div className='bg-[#F8FAFC]'>
        <div className='container pt-[50px] mx-auto h-[85vh] md:h-[100vh]'>
            <div className='w-[420px] lg:w-[860px] mx-auto flex items-center flex-col text-center gap-[20px]'>
                <h1 className='section-title text-[62px]'><span>Dasturlashni</span> biz bilan qulay muhitda o‘rganing</h1>
                <p className='text-[#8A90A5] text-[20px]'>Khan Academy - bu siz izlagan akademiya bo’lib, unda siz juda qisqa muddatda istalgan dasturlash sohasida Junior darajasiga chiqa olasiz! </p>
                <div className='flex flex-col lg:flex-row items-center gap-[10px] my-[20px] w-full lg:w-auto'>
                    <button className='flex items-center justify-center gap-[10px] w-full lg:w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px]'>Boshlash <FaArrowRightLong /></button>
                    <button className='flex items-center justify-center gap-[10px] w-full lg:w-auto rounded-[8px] cursor-pointer bg-[#EFF2F7] py-[15px] px-[35px] text-[16px]'><FaGithub /> GitHub</button>
                </div>
                <div className='flex items-center shadow-md bg-[#F4FFF4] w-[260px] lg:w-[290px] h-[90px] px-[15px] lg:px-[30px] rounded-[8px]'>
                    <img src={GreenIcon} alt="green_icon" className='w-[34px]' />
                    <div className='text-left ml-4'>
                        <p className='font-semibold text-[#323A55] text-[10px]'>GitNation React Award</p>
                        <h4 className='text-[#74DA7F] text-[16px] font-semibold'>Most Impactful Project to the Community</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;