import React from 'react'
import ReactPlayer from 'react-player'

const WhatYouNeedToKnow = () => {
  return (
    <div className=''>
      <section className="mt-16 p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24">
        <h1 className="text-3xl font-bold text-center">
          Scrutari: What You Need To Know
        </h1>
        <div className="mt-10">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uTMX13vEZbU" 
            width='100%'
            height={450}
          />
        </div>
      </section>
    </div>
  );
}

export default WhatYouNeedToKnow
