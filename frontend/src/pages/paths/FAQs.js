import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQs = () => {


const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What is a BERF research project?',
    children: <p>Answer</p>,
    className: "bg-white text-black rounded-3xl p-2"
  },
  {
    key: '2',
    label: 'What is a non-BERF research project?',
    children: <p>Answer</p>,
    className: "bg-white text-black rounded-3xl p-2"
  },
  {
    key: '3',
    label: 'Can research studies be conducted in groups or individually?',
    children: <p>Answer</p>,
    className: "bg-white text-black rounded-3xl p-2"
  },
  {
    key: '4',
    label: 'How are funding allocations determined for research projects?',
    children: <p>Answer</p>,
    className: "bg-white text-black rounded-3xl p-2"
  }
];

<Collapse items={items} />;
  return (
    <div>
      <section className="p-10 sm:p-20 md:py-32 md:px-60 grid grid-cols-2 gap-8 rounded-3xl bg-gradient-to-r from-[#1CB5E0] to-[#000046]">
        <h1 className="font-bold text-3xl col-span-2 mb-6">Your burning questions, answered.</h1>
        <Collapse accordion bordered={false} className="col-span-1 flex flex-col gap-4">
        {items.map((item) => (
          <Panel key={item.key} header={item.label} className="bg-white text-black rounded-3xl p-2 last:rounded-3xl">
            {item.children}
          </Panel>
        ))}
        </Collapse>

        <Collapse accordion bordered={false} className="col-span-1 flex flex-col gap-4">
        {items.map((item) => (
          <Panel key={item.key} header={item.label} className={item.className}>
            {item.children}
          </Panel>
        ))}
        </Collapse>
      </section>
    </div>
  );
};

export default FAQs;
