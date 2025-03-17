import React from "react";
import ServiceCard from "../../components/ServiceCard";

const cardData = [{
  imageUrl: 'https://tinyurl.com/7adhamu2',
  serviceTag: 'Manuscript',
  title: 'Manuscript Mastery',
  description: 'Transform your research into a polished, publication-worthy manuscript.',
  bgColor: 'bg-[#F0F8FF]',
},
{
  imageUrl: 'https://tinyurl.com/dcd56ufr',
  serviceTag: 'Statistics',
  title: 'Best Research Narratives',
  description: 'Uncover hidden patterns and profound insights within your data.',
  bgColor: 'bg-[#E1EBEE]',
},
{
  imageUrl: 'https://tinyurl.com/5h2rmcr6',
  serviceTag: 'Publishing',
  title: 'Publishing Pathway',
  description: 'Navigate the complexities of the academic publishing landscape with confidence.',
  bgColor: 'bg-[#B0C4DE]',
}]

const StreamlineYourResearch = () => {
  return (
    <div>
      <section className="mb-16 p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24">
        <div>
          <h1 className="font-medium text-4xl text-center">
            Your Research Ideas
          </h1>
          <h1 className="font-medium text-4xl text-center text-[#000046]">
            Expand Here
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              serviceTag={card.serviceTag}
              description={card.description}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StreamlineYourResearch;
