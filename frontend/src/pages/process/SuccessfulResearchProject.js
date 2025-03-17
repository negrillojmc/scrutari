import React from "react";

const SuccessfulResearchProject = () => {
  return (
    <div className="bg-white">
      <section className="mt-16 py-36 px-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-3 text-3xl font-bold text-center">
            <h1>Writing a Successful Research Project</h1>
        </div>
        <div className="col-span-3 inline-grid grid-cols-2 md:grid-cols-3 gap-9">
            <div className="col-span-1">
                <img src="https://tinyurl.com/mucbbf66" alt="propose" className="rounded-md p-2" />
                <h1 className="text-center font-semibold text-xl">Propose</h1>
                <p className="text-center text-md">Secure funding and approval for your compelling research proposal.</p>
            </div>
            <div className="col-span-1">
                <img src="https://tinyurl.com/apcbhbf3" alt="execute" className="rounded-md p-2" />
                <h1 className="text-center font-semibold text-xl">Execute</h1>
                <p className="text-center text-md">Conduct rigorous research, collect quality data, and achieve reliable results.</p>
            </div>
            <div className="col-span-1">
                <img src="https://tinyurl.com/yt9be3ma" alt="defend" className="rounded-md p-2" />
                <h1 className="text-center font-semibold text-xl">Defend</h1>
                <p className="text-center text-md">Clearly articulate and defend your research findings convincingly.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessfulResearchProject;
