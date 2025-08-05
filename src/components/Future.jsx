import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import FutureImg1 from '../assets/future1.png';
import FutureImg2 from '../assets/future2.png';
import FutureImg3 from '../assets/future3.png';

const Future = () => {
    return (
        <div>
            <h2>Kelajagingizni Khan Academy bilan quring</h2>
            <p>A collection of websites and projects built with Webbrain UI</p>
            <button className='flex items-center justify-center gap-[10px] w-full lg:w-auto rounded-[8px] cursor-pointer bg-[#1D71D0] text-white py-[15px] px-[35px] text-[16px]'>Ko'piroq ko'rish <FaArrowRightLong /></button>
            <div>
                <img src={FutureImg1} alt="future1" />
                <img src={FutureImg2} alt="future2" />
                <img src={FutureImg3} alt="future3" />
            </div>
        </div>
    );
};

export default Future;