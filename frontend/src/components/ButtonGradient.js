import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ButtonGradient = ({text}) => {
  return (
    <div>
      <button className="py-2 px-6 bg-gradient-to-r from-[#1CB5E0] to-[#000046] rounded-3xl w-full flex gap-2 items-center justify-center font-semibold">
        <p className="text-white text-sm">{text}</p>
        <MdArrowOutward className="text-white size-4" />
      </button>
    </div>
  );
};

export default ButtonGradient;
