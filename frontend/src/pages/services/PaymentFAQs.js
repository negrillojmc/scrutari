import React from 'react'
import { Collapse } from "antd";

const { Panel } = Collapse;

const items = [
  {
    key: '1',
    label: 'What payment methods do you accept?',
    children: <p className='font-normal'>We typically accept credit cards (Visa, Mastercard, American Express), debit cards, and GCash.</p>,
  },
  {
    key: '2',
    label: 'Is my payment information secure?',
    children: <p className='font-normal'>Yes, we use industry-standard security measures (like SSL encryption) to protect your payment information.</p>,
  },
  {
    key: '3',
    label: 'When will be processed?',
    children: <p className='mb-2 font-normal'>Payments are usually processed immediately upon order confirmation.</p>,
  },
  {
    key: "4",
    label: "Will I receive a receipt for my payment?",
    children: <p className='font-normal'>Yes, you will receive a digital receipt or invoice via email.</p>,
  },
  {
    key: "5",
    label: "What happens if my payment fails?",
    children: <p className='font-normal'>You may be able to retry the payment. If the issue persists, contact our customer support for assistance.</p>,
  },
  {
    key: "6",
    label: "Hide me",
    children: <p className='font-normal'>Hide me</p>,
  },
];

const PaymentFAQs = () => {
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div>
      <section className="py-16 sm:py-20 px-10 sm:px-14 md:px-28 lg:px-40 xl:px-60 bg-white">
        <h1 className="font-medium text-4xl text-center">FAQs</h1>
        <h2 className="text-center text-gray-600 px-6 md:px-20 lg:px-28 font-medium text-sm my-4">
          Giving you the control, observability, and flexibility{" "}
          <span className="block">
            you need to build your research, your way.
          </span>
        </h2>
        <div className="font-semibold">
          <Collapse
            onChange={onChange}
            className="mt-8 mx-0 sm:mx-6 md:mx-16 lg:mx-32 xl:mx-48 flex flex-col gap-4 bg-white"
            accordion
            bordered={false}
          >
            {items.map((item) => (
              <Panel
              key={item.key}
              header={item.label}
              className="bg-white text-black rounded-3xl last:hidden"
            >
              {item.children}
            </Panel>
            ))}
          </Collapse>
        </div>
      </section>
    </div>
  );
}

export default PaymentFAQs
