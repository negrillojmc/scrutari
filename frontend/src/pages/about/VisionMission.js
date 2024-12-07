import React from "react";

const VisionMission = () => {
  return (
    <div>
      <section className="p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 inline-grid grid-rows-3 rounded-xl gap-4">
          <div className="p-8 bg-[#C9E6F0] rounded-2xl">
            <div className="flex mb-3 mr-auto">
              <h1 className="font-bold px-4 py-2 text-md bg-white text-[#000046] rounded-xl text-center">Our Vision</h1>
            </div>
            <p className="text-sm">Inspiring educators to become agents of change by unlocking the power of research.</p>
          </div>
          <div className="p-8 bg-[#C9E6F0] rounded-2xl">
            <div className="flex mb-3 mr-auto">
              <h1 className="font-bold px-4 py-2 text-md bg-white text-[#000046] rounded-xl text-center">Our Mission</h1>
            </div>
            <p className="text-sm">To provide teachers with the tools, resources, and support needed to conduct rigorous and meaningful action research.</p>
          </div>
          <div className="p-8 bg-[#000046] rounded-2xl">
            <div className="flex mb-3 mr-auto">
              <h1 className="font-bold px-4 py-2 text-md bg-white text-[#000046] rounded-xl text-center">Our History</h1>
            </div>
            <p className="text-sm text-white">Launched in 2024, Scrutari is a pioneering platform dedicated to empowering teachers to become researchers, fostering a community of practice and innovation.</p>
          </div>
        </div>
        <div className="col-span-1 relative">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="object-cover brightness-50 rounded-xl h-full"
          />
          <div className="p-8 text-white absolute top-0 left-0 inline-grid grid-rows-2 h-full">
            <div className="row-span-1 text-right">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Our Plan Makes You Feel More Comfortable in Research Writing
              </h1>
              <p className="mt-4 ml-8 font-light text-sm">
                Our resources simplify the research writing process, making it easier
                and more enjoyable for you.
              </p>
            </div>
            <div className="row-span-1 text-right content-end">
              <button className="py-2 px-6 bg-[#000046] rounded-3xl">
                <p className="text-white text-sm font-medium">Contact Us</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
