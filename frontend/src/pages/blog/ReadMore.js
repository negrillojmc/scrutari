import React from "react";

const ReadMore = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:col-span-4 gap-8">
      <div className="font-bold flex flex-col gap-2">
        <img
          src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="How to Grab Attention and Set the Stage"
          className="rounded-t-md h-44 object-cover"
        />
        <div className="bg-black text-white rounded-full px-2 py-1 mt-2 mr-auto">
          <h3 className="text-xs font-semibold">introduction</h3>
        </div>
        <h1 className="">How to Grab Attention and Set the Stage</h1>
      </div>
      <div className="font-bold flex flex-col gap-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Building a Strong Literature Review"
          className="rounded-t-md h-44 object-cover"
        />
        <div className="bg-black text-white rounded-full px-2 py-1 mt-2 mr-auto">
          <h3 className="text-xs font-semibold">literature</h3>
        </div>
        <h1>Building a Strong Literature Review</h1>
      </div>
      <div className="font-bold flex flex-col gap-2">
        <img
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Making Sense of Your Findings"
          className="rounded-t-md h-44 object-cover"
        />
        <div className="bg-black text-white rounded-full px-2 py-1 mt-2 mr-auto">
          <h3 className="text-xs font-semibold">methodology</h3>
        </div>
        <h1>Making Sense of Your Findings</h1>
      </div>
      <div className="font-bold flex flex-col gap-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1661661227643-f7c3172f908d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Overcoming Writer's Block"
          className="rounded-t-md h-44 object-cover"
        />
        <div className="bg-black text-white rounded-full px-2 py-1 mt-2 mr-auto">
          <h3 className="text-xs font-semibold">analysis</h3>
        </div>
        <h1>Overcoming Writer's Block</h1>
      </div>
    </div>
  );
};

export default ReadMore;
