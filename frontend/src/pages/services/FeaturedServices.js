import React from "react";

const FeaturedServices = () => {
  return (
    <div>
      <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 h-1/3 relative">
          <div className="col-span-1 bg-gradient-to-b from-transparent to-black h-96 w-full">
            <img
              src="https://tinyurl.com/y52xn7f9"
              alt="The Faculty Archive"
              className="h-full w-full object-cover mix-blend-overlay"
            />
            <div className="p-10 h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-end text-white absolute top-0">
              <h1 className="text-3xl">The Faculty Archive</h1>
              <h2 className="font-light">
                A collection of our research materials.
              </h2>
              <button className="mt-2 text-left">Learn more</button>
            </div>
          </div>

          <div className="col-span-1 bg-gradient-to-b from-transparent to-black h-96 w-full">
            <img
              src="https://tinyurl.com/534dhnpv"
              alt="Daily Library Access"
              className="h-full w-full object-cover mix-blend-overlay"
            />
            <div className="p-10 h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-end text-white absolute top-96 sm:top-0">
              <h1 className="text-3xl">Daily Library Access</h1>
              <h2 className="font-light">
                Unlimited access to knowledge. Now.
              </h2>
              <button className="mt-2 text-left">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedServices;
