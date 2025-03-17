import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";
import { RiGovernmentLine } from "react-icons/ri";
import { FaTransgenderAlt } from "react-icons/fa";
import { MdOutlineThunderstorm } from "react-icons/md";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const ResearchAreas = () => {
  // const keyReseachAreas = [
  //   'Teaching and Learning',
  //   'Child Protection',
  //   'Human Resource Development',
  //   'Governance'
  // ]

  // const crossCuttingThemes = [
  //   'Gender and Development',
  //   'Disaster Risk Reduction',
  //   'Disaster Risk Management',
  //   'Inclusive Education'
  // ]
  return (
    <div>
      <section className="sm:px-20 lg:px-40 xl:px-60 grid grid-cols-1 mx-10 sm:mx-0 md:mx-10 lg:mx-0 mb-8">
        <div className='col-span-1 md:col-span-2 lg:col-span-4 inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 text-center'>
          <h1 className="col-span-1 md:col-span-2 lg:col-span-4 font-bold text-left">
            Key Research Areas
          </h1>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaChalkboardTeacher className="size-10" />
            <h1>Teaching and Learning</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaHandsHoldingChild className="size-10" />
            <h1>Child Protection</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaPeopleCarry className="size-10" />
            <h1>Human Resource Development</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <RiGovernmentLine className="size-10" />
            <h1>Governance</h1>
          </div>
        </div>

        <div className='col-span-1 md:col-span-2 lg:col-span-4 inline-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 text-center'>
          <h1 className="col-span-1 md:col-span-2 lg:col-span-4 font-bold text-left">
            Cross Cutting Themes
          </h1>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaTransgenderAlt className="size-10" />
            <h1>Gender and Development</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <MdOutlineThunderstorm className="size-10" />
            <h1>Disaster Risk Reduction</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaHelmetSafety className="size-10" />
            <h1>Disaster Risk Management</h1>
          </div>
          <div className="col-span-1 border rounded-xl p-5 flex flex-col justify-center items-center gap-2 text-sm font-medium">
            <FaRegHeart className="size-10" />
            <h1>Inclusive Education</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchAreas
