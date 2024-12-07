import React from "react";

const Button = ({text}) => {
  return (
    <button className="mt-6 py-2 px-6 bg-[#000046] rounded-3xl">
      <p className="text-white text-sm font-medium">{text}</p>
    </button>
  );
};

export default Button;
