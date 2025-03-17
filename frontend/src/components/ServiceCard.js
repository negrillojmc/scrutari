import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  imageUrl,
  serviceTag, 
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`col-span-1 p-6 ${bgColor} rounded-2xl flex flex-col gap-2`}
    >
      <div className="flex justify-center bg-white p-4 rounded-2xl mb-2">
        <img
          src={imageUrl}
          alt={serviceTag}
          className="h-56 w-56 object-cover"
        />
      </div>
      <div className="flex mr-auto">
        <h1 className="font-bold px-4 py-2 text-xs bg-gray-100 text-[#000046] rounded-xl text-center">
          {serviceTag}
        </h1>
      </div>
      <h1 className="text-lg font-medium">{title}</h1>
      <h2 className="text-xs">{description}</h2>
      <Link to="#">
        <button className="flex mr-auto text-xs font-medium underline">
          Learn more
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
