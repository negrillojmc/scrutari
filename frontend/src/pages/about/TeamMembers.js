import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const TeamMembers = () => {
  return (
    <div className="">
      <section className="p-20 sm:px-20 md:px-28 lg:px-56 grid grid-cols-6 sm:grid-cols-12 gap-0 sm:gap-4 bg-[#C9E6F0] h-auto">
        <div className="col-span-12 sm:col-span-6 h-auto">
          <h1 className="text-sm font-light">The IRES Research Team</h1>
          <h1 className="text-4xl sm:text-3xl font-bold">
            Meet Our Professional Team
          </h1>
        </div>
        <div className="col-span-12 sm:col-span-6">
          <p className="text-sm text-light">
            Our team is passionate about empowering educators to become
            researchers, shaping the future of education through evidence-based
            practices. Together, we're dedicated to guiding you on your journey
            to impactful research writing.
          </p>
          <button className="mt-8 py-2 px-6 bg-[#000046] rounded-3xl">
            <h1 className="text-white text-sm font-medium">View More</h1>
          </button>
        </div>

        <div className="col-span-12 inline-grid grid-cols-12 gap-4 h-auto mt-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 relative h-full">
            <div className="h-96 w-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="portrait-of-confident-businesswoman-standing-with-arms-crossed-in-office-and-smiling-to-camera"
                className="object-cover h-full w-full rounded-3xl"
              />
            </div>
            <div className="absolute top-0 left-0 inline-grid grid-rows-10 w-full h-full items-center">
              <div className="row-start-8 bg-black/70 rounded-3xl m-4 p-4 flex flex-col gap-4 justify-around">
                <div>
                  <h1 className="text-white font-medium text-xl">Deobell Macababbad</h1>
                  <h1 className="text-white font-light text-sm">
                    Master Teacher-in-Charge
                  </h1>
                </div>
                <div className="flex items-end">
                  <FaFacebook className="text-white size-6" />
                  <FaFacebookMessenger className="text-white size-6 ml-4" />
                  <BiLogoGmail className="text-white size-6 ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 relative h-full">
            <div className="h-96 w-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1661580310002-0b0254ed25e7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-portrait-of-beautiful-smiling-businesswoman-in-modern-city-people-lifestyle-concept"
                className="object-cover h-full w-full rounded-3xl"
              />
            </div>
            <div className="absolute top-0 left-0 inline-grid grid-rows-10 w-full h-full items-center">
              <div className="row-start-8 bg-black/70 rounded-3xl m-4 p-4 flex flex-col gap-4 justify-around">
                <div>
                  <h1 className="text-white font-medium text-xl">Ravina Villegas</h1>
                  <h1 className="text-white font-light text-sm">
                    Research Coordinator
                  </h1>
                </div>
                <div className="flex items-end">
                  <FaFacebook size={25} className="text-white" />
                  <FaFacebookMessenger size={25} className="text-white ml-4" />
                  <BiLogoGmail size={25} className="text-white ml-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 relative h-full">
            <div className="h-96 w-full">
              <img
                src="https://images.unsplash.com/photo-1720501828093-c792c10e3f0b?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a-man-standing-in-front-of-a-window-smiling"
                className="object-cover h-full w-full rounded-3xl"
              />
            </div>
            <div className="absolute top-0 left-0 inline-grid grid-rows-10 w-full h-full items-center">
              <div className="row-start-8 bg-black/70 rounded-3xl m-4 p-4 flex flex-col gap-4 justify-around">
                <div>
                  <h1 className="text-white font-medium text-xl">Mike Negrillo</h1>
                  <h1 className="text-white font-light text-sm">
                    Web Developer
                  </h1>
                </div>
                <div className="flex items-end">
                  <FaFacebook size={25} className="text-white" />
                  <FaFacebookMessenger size={25} className="text-white ml-4" />
                  <BiLogoGmail size={25} className="text-white ml-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
