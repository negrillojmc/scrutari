import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../../components/Button";

const AboutScrutari = () => {
  const listItems1 = [
    "Foster innovation",
    "Promote collaboration",
    "Share knowledge",
  ];

  const listItems2 = [
    "Address school challenges",
    "Strengthen local networks",
    "Spark curiosity",
  ];

  return (
    <div>
      <section className="p-10 sm:px-20 md:px-28 lg:px-32 grid grid-cols-4 max-[1024px]:grid-cols-2 xl:mx-24 gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661717262855-f6652d070913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Southeast Asian office workers"
              className="object-cover h-full rounded-xl"
            />
          </div>
          <div className="col-span-1 grid grid-row-4 gap-4">
            <div className="row-span-3">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="laptop"
                className="object-cover h-full rounded-xl"
              />
            </div>
            <div className="row-span-1 rounded-xl bg-[#021526] p-2 text-white flex flex-col justify-center items-center">
              <h1 className="font-bold text-4xl">2+</h1>
              <h1 className="mt-2">Years of Experience</h1>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-[#C9E6F0] text-[#112A46] p-8 rounded-xl">
          <h1 className="font-bold text-[#000046]">About Scrutari</h1>
          <h2 className="mt-4 font-bold text-3xl">
            Innovative Strategies for the IRES Research Community
          </h2>
          <p className="mt-4">
            Scrutari aims to foster innovation and collaboration among
            researchers within the school. By providing a platform for knowledge
            sharing, Scrutari seeks to advance scientific discovery and address
            local challenges.
          </p>
          <div className="mt-6 flex justify-around text-sm">
            <ul className="flex flex-col gap-2">
              {listItems1 &&
                listItems1.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center my-2 gap-2">
                      <FaCheckCircle size={15} className="text-[#021526]" />
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {listItems2 &&
                listItems2.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center my-2 gap-2">
                      <FaCheckCircle size={15} className="text-[#021526]" />
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <Button text="Learn more" />
        </div>
      </section>
    </div>
  );
};

export default AboutScrutari;
