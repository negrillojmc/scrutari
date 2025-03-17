import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PeopleYoullWorkWith = () => {
  const ref = useRef();
  const [activeSlide, setActiveSlide] = useState(0); 

  const handleSlideChange = () => {
    setActiveSlide(0);
  };

  useEffect(() => {
    if (ref.current) { 
      handleSlideChange(ref.current.currentSlide); 
    }
  }, []); 

  return (
    <div>
      <section className="mt-16 p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24 grid grid-cols-1">
        <h1 className="col-span-1 text-3xl font-bold text-center">
          People You'll Work With
        </h1>

        <div className="col-span-1 inline-grid grid-cols-4 mt-10 gap-4">
          <div className="col-span-1 flex flex-col gap-3">
            <div className="flex gap-3">
              <button onClick={() => { ref.current.prev(); handleSlideChange(ref.current.currentSlide);  } }><FaArrowLeft className="size-5" /></button>
              <button onClick={() => { ref.current.next(); handleSlideChange(ref.current.currentSlide);  } }><FaArrowRight className="size-5" /></button>
            </div>
            <button onClick={() => { ref.current.goTo(0); setActiveSlide(0); } } className={`text-left ${activeSlide === 0 ? 'font-bold' : ''}`} >Marcus Green</button>
            <button onClick={() => { ref.current.goTo(1); setActiveSlide(1); } } className={`text-left ${activeSlide === 1 ? 'font-bold' : ''}`}>Jane Blue</button>
            <button onClick={() => { ref.current.goTo(2); setActiveSlide(2); } } className={`text-left ${activeSlide === 2 ? 'font-bold' : ''}`}>Arryk Orange</button>
          </div>

          <div className="col-span-3">
            <Carousel
              dots={false}
              draggable={true}
              arrowSize={50}
              ref={ref}
            >
              <div className="">
                <div className="flex flex-col md:grid md:grid-cols-2 px-4">
                  <img src="https://tinyurl.com/y2bkr7kc" alt="Marcus Green" className="md:col-span-1 rounded-l-2xl h-80 object-cover" />
                  <div className="md:col-span-1 justify-start content-center p-4">
                    <h1 className="text-xl font-bold">Marcus Green</h1>
                    <h2 className="text-lg">Academic Writing Specialist</h2>
                    <p className="mt-3">Marcus will provide expert editing services, focusing on improving the grammar, punctuation, and overall clarity and flow of their research papers.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:grid md:grid-cols-2 px-4">
                <img src="https://tinyurl.com/yeb4384c" alt="Jane Blue" className="md:col-span-1 rounded-l-2xl h-80 object-cover" />
                <div className="md:col-span-1 justify-start content-center p-4">
                    <h1 className="text-xl font-bold">Jane Blue</h1>
                    <h2 className="text-lg">Statistical Consultant</h2>
                    <p className="mt-3">Jane will provide guidance on selecting appropriate statistical tests and methodologies for research projects.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:grid md:grid-cols-2 px-4">
                <img src="https://tinyurl.com/4t24trsw" alt="Arryk Orange" className="md:col-span-1 rounded-l-2xl h-80 object-cover" />
                <div className="md:col-span-1 justify-start content-center p-4">
                    <h1 className="text-xl font-bold">Arryk Orange</h1>
                    <h2 className="text-lg">Publication Liaison</h2>
                    <p className="mt-3">Arryk will guide members through the submission process, including formatting guidelines, abstract writing, and cover letter preparation.</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeopleYoullWorkWith;
