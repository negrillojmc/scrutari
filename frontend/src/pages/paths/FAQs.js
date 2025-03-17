import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQs = () => {
  const items1: CollapseProps["items"] = [
    {
      key: "1",
      label: "What is a BERF research project?",
      children: <p className='font-normal'>A Basic Education Research Fund (BERF) project is a government program that supports research in Philippine education. It funds a wide range of research projects, from small-scale classroom studies to large-scale policy analyses. BERF has significantly contributed to the growth of education research in the Philippines, leading to improved teaching practices, informed policy decisions, and enhanced overall educational outcomes.</p>,
    },
    {
      key: "2",
      label: "What is a non-BERF research project?",
      children: <p className='font-normal'>A non-BERF research refers to school-based research that is conducted without specific funding from the Basic Education Research Fund. While it may not have the same level of financial support, it still offers valuable opportunities for teachers and educators to delve deeper into their practice, innovate, and improve student learning.</p>,
    },
    {
      key: "3",
      label: "Can research studies be conducted in groups or individually?",
      children: <p className='font-normal'>Yes, research studies can be conducted both individually and in groups. While group research offers valuable collaborative opportunities, individual research often provides a more focused and in-depth exploration of a specific topic, leading to greater recognition and potential career advancement.</p>,
    },
    {
      key: "4",
      label: "How are funding allocations determined for research projects?",
      children: <p className='font-normal'>Funding allocations for research projects vary based on their scope and scale. For instance, nationwide studies may receive up to Php 500,000, while regional studies might be allocated up to Php 150,000. Smaller, local or school-based research typically receives around Php 30,000.</p>,
    },
    {
      key: "5",
      label: "Hide me",
      children: <p>hide me</p>,
    },
  ];

  const items2: CollapseProps["items"] = [
    {
      key: "1",
      label: "When is the next Research Congress?",
      children: <p className='font-normal'>The 10th Manila Teachers Research Congress will be held on January 15-17, 2025 at the Manila City Hall. This event will feature a wide range of research presentations, workshops, and panel discussions, focusing on various disciplines and interdisciplinary collaborations.</p>,
    },
    {
      key: "2",
      label: "Who can participate in a Research Congress?",
      children: <p className='font-normal'>To be eligible, you must be a regular or permanent DepEd employee with a minimum salary grade of 11 and a clean administrative record. You should also not have received a BERF grant in the current year. For group proposals, keep your team size to a maximum of three. These guidelines ensure fair opportunities for all qualified DepEd personnel to contribute to valuable research.</p>,
    },
    {
      key: "3",
      label: "Why conduct independent research?",
      children: <p className='font-normal'>Independent research allows you to explore your interests, develop critical thinking skills, and gain valuable experience. It can also boost your career prospects by showcasing your expertise and contributing to academic advancements.</p>,
    },
    {
      key: "4",
      label: "What are some popular research topics?",
      children: <p className='font-normal'>Education research offers a wide range of topics, from the impact of technology on learning to inclusive education practices. You could explore online learning, AI in education, supporting students with disabilities, teacher training, student motivation, curriculum development, or educational policy. These areas offer numerous opportunities for research and innovation.</p>,
    },
    {
      key: "5",
      label: "Hide me",
      children: <p>hide me</p>,
    },
  ];

  <Collapse items={items1} />;
  <Collapse items={items2} />;
  return (
    <div>
      <section className="px-10 py-16 sm:p-20 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-2 gap-y-10 rounded-3xl bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
        <div className="col-span-1 md:col-span-2 inline-grid grid-cols-2 md:gap-x-20 gap-y-4">
          <h1 className="font-bold text-3xl col-span-2 md:col-span-1">
            Your burning questions, answered.
          </h1>
          <p className="text-white text-sm font-light col-span-2 md:col-span-1 self-end">Whether you're too shy to ask a colleague or simply want to save time, this guide will help you learn the basics of school-based research.</p>
        </div>
        <div className="col-span-2 inline-grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold">
          <Collapse
            accordion
            bordered={false}
            className="col-span-1 flex flex-col gap-4"
          >
            {items1.map((item) => (
              <Panel
                key={item.key}
                header={item.label}
                className="bg-white text-black rounded-3xl p-2 last:hidden"
              >
                {item.children}
              </Panel>
            ))}
          </Collapse>

          <Collapse
            accordion
            bordered={false}
            className="col-span-1 flex flex-col gap-4"
          >
            {items2.map((item) => (
              <Panel
                key={item.key}
                header={item.label}
                className=" bg-white text-black rounded-3xl p-2 last:hidden"
              >
                {item.children}
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
