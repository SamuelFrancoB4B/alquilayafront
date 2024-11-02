import React from 'react';
import { TbArrowBadgeRightFilled, TbArrowBadgeRight } from "react-icons/tb";

const ButtonCyan = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center border-2 border-[#aa31cf] bg-[#2CFFDE] text-black px-8 py-3 rounded-lg font-bold hover:scale-110 transition transform duration-200">
            <TbArrowBadgeRightFilled className='w-10 h-10 p-0 -ml-1' />
            <TbArrowBadgeRight className='w-10 h-10 p-0 -ml-5' />
        </button>
    );
};

export default ButtonCyan;