import React from "react";
import { FaCircle } from "react-icons/fa";
import ButtonGradient from "../../components/ButtonGradient";

const ResearchCategories = () => {
  const basicResearch = [
    "Theory development and testing",
    "Rigorous, controlled experiments",
    "Broad and generalizable findings",
    "Long term time frame",
  ];

  const actionResearch = [
    "Immediate application and improvement",
    "Flexible, iterative process",
    "Local and context-specific findings",
    "Short term time frame",
  ];
  return (
    <div>
      <section className="p-10 sm:px-20 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-2 m-10 sm:mx-20 md:mx-0 lg:mx-10 xl:mx-32 gap-4">
        <div className="border rounded-3xl col-span-1 p-6 flex flex-col justify-center">
          <div className="mb-4 flex flex-col gap-1">
            <h2 className="text-sm">A theory-driven inquiry</h2>
            <h1 className="font-bold text-3xl">Basic Research</h1>
            <p className="text-sm italic font-medium">
              For policies and programs
            </p>
          </div>
          <div className="border"></div>
          <ul className="flex flex-col gap-1 mt-4 font-medium text-sm">
            {basicResearch &&
              basicResearch.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-1">
                    <FaCircle size={10} className="text-[#000046]" />
                    <p className="ml-1">{item}</p>
                  </div>
                </li>
              ))}
          </ul>
          <div className="mt-6">
            <ButtonGradient text="Get Started" className=""/>
          </div>

        </div>
        <div className="border rounded-3xl col-span-1 p-6 shadow-sm flex flex-col justify-center">
          <div className="mb-4 flex flex-col gap-1">
            <h2 className="text-sm">A practice-based development</h2>
            <h1 className="font-bold text-3xl">Action Research</h1>
            <p className="text-sm italic font-medium">
              For pedagogy and management
            </p>
          </div>
          <div className="border"></div>
          <ul className="flex flex-col gap-1 mt-4 font-medium text-sm">
            {actionResearch &&
              actionResearch.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center gap-1">
                    <FaCircle size={10} className="text-[#000046]" />
                    <p className="ml-1">{item}</p>
                  </div>
                </li>
              ))}
          </ul>
          <div className="mt-6">
            <ButtonGradient text="Get Started" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchCategories;
