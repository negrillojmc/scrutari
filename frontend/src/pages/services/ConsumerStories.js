import React, { useState } from "react";
import { Carousel } from "antd";

const ConsumerStories = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <section className="py-16 sm:py-20 px-10 sm:px-14 md:px-28 lg:px-40 xl:px-60 bg-[#191919]">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-14 sm:gap-8 md:gap-12">
          <div className="col-span-1 sm:col-span-5 hidden sm:block">
            <Carousel
              draggable={true}
              arrowSize={50}
              autoplay={true}
              autoplaySpeed={5000}
              afterChange={(current) => setActiveSlide(current)}
              className="rounded-2xl overflow-hidden"
            >
              <div className="h-[400px]">
                <img
                  src="https://tinyurl.com/y5t7esdd"
                  alt="Erik Santos"
                  className="h-full w-full object-top object-cover"
                />
              </div>

              <div className="h-[400px]">
                <img
                  src="https://tinyurl.com/59astaxp"
                  alt="Claridad Sebastian"
                  className="h-full w-full object-top object-cover"
                />
              </div>

              <div className="h-[400px]">
                <img
                  src="https://tinyurl.com/zt3rz6du"
                  alt="Gina Silk"
                  className="h-full w-full object-top object-cover"
                />
              </div>
            </Carousel>
          </div>
          <div className="col-span-1 sm:col-span-7 text-white my-auto">
            {/* <div className="flex flex-col gap-4 h-full justify-center items-start"> */}
            <div className="mb-4">
              <h1 className="font-normal text-2xl sm:text-3xl xl:text-4xl">
                Designed Based on
                <span className="block text-[#B0C4DE]">
                  Our Researchers' Needs
                </span>
              </h1>
            </div>
            <div>
              {activeSlide === 0 && (
                <div className="flex flex-col gap-4 h-fit">
                  <p className="font-light text-md lg:text-lg xl:text-xl">
                    Noong wala pa itong website, parang umaakyat ako ng Mount
                    Everest sa paggawa ng research papers! Pero ngayon, with the
                    templates, examples, and easy-to-follow guides, sobrang dali
                    na. Dahil diyan, mas benefited na yung mga students ko sa
                    improved teaching practices ko.
                  </p>
                  <h2 className="text-gray-300">- Erik Santos, Grade 4 teacher</h2>
                </div>
              )}
            </div>

            {activeSlide === 1 && (
              <div className="flex flex-col gap-4 h-fit">
                <p className="font-light text-md lg:text-lg xl:text-xl">
                  Visual learner ako, kaya sobrang helpful ng infographics at
                  videos sa website. Talagang pinadali nila yung research
                  process. Lalo na yung section tungkol sa paghahanap at pag-evaluate ng research
                  sources, ang laki ng naitulong para mapabuti yung kalidad ng
                  research ko.
                </p>
                <h2 className="text-gray-300">- Claridad Sebastian, Grade 6 teacher</h2>
              </div>
            )}

            {activeSlide === 2 && (
              <div className="flex flex-col gap-4 h-fit">
                <p className="font-light text-md lg:text-lg xl:text-xl">
                  As a high school teacher, I always struggled to find
                  well-organized research resources. This platform changed that!
                  Everything is structured so well, and the community support is
                  amazing. My students now engage more in research, and their
                  papers have improved tremendously.
                </p>
                <h2 className="text-gray-300">- Stephanie Pink, Grade 1 teacher</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerStories;
