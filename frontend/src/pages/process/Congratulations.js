import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { RiLightbulbFlashLine } from "react-icons/ri";

const Congratulations = () => {
  return (
    <div className="">
      <section className="p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-3xl font-bold text-center mb-10">Congratulations on starting your research!</h1>
        <div className='col-span-3 inline-grid grid-cols-1 md:grid-cols-3 gap-9'>
          <div className="col-span-1 flex flex-col rounded-xl bg-white p-8 shadow-md">
            <IoBriefcaseOutline size={40} className="mb-2" />
            <h2 className="text-lg font-semibold">Career Advancement</h2>
            <p className="text-sm">
              Research is often a key factor in promotions and tenure decisions.
            </p>
          </div>

          <div className="col-span-1 flex flex-col rounded-xl bg-white p-8 shadow-md">
            <PiHandshakeFill size={40} className="mb-2" />
            <h2 className="text-lg font-semibold">Leadership Opportunities</h2>
            <p className="text-sm">
              Research-active faculty are sought after for leadership roles.
            </p>
          </div>

          <div className="col-span-1 flex flex-col rounded-xl bg-white p-8 shadow-md">
            <RiLightbulbFlashLine size={40} className="mb-2" />
            <h2 className="text-lg font-semibold">Institutional Impact</h2>
            <p className="text-sm">
              Research can elevate your institution's profile and secure
              external funding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Congratulations;
