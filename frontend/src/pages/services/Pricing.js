import React from 'react';
import ButtonGradient from '../../components/ButtonGradient';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    title: 'Basic',
    description:
      'Enjoy free access to foundational tools and a supportive community.',
    price: 129,
    features: [
      'Basic manuscript editing',
      'Basic data analysis',
      'Club announcements',
      'General meeting attendance',
      'Access to faculty archive',
    ],
  },
  {
    title: 'Scholar',
    description:
      'Elevate your research with priority access to expert guidance.',
    price: 229,
    features: [
      'Includes all Basic benefits',
      'Priority editing and analysis',
      'Exclusive workshops',
      'Mentorship opportunities',
    ],
  },
  {
    title: 'Leader',
    description:
      'Lead the way with exclusive access to premium resources.',
    price: 329,
    features: [
      'Includes all Scholar benefits',
      'Leadership development',
      'Special recognition',
      'Access to premium databases',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="mt-16 p-10 sm:px-20 md:px-28 lg:px-32 xl:mx-24">
      <h1 className="font-medium text-4xl text-center mb-16">
        Everything You Need to Manage{' '}
        <span className="block text-[#000046]">and Publish Your Research</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="border rounded-lg p-6"
          >
            <h1 className="text-3xl font-medium mb-2">{plan.title}</h1>
            <p className="text-sm text-gray-800 lg:h-12">{plan.description}</p>

            <div className="my-4">
              <h1 className="font-medium text-3xl">₱ {plan.price}</h1>
              <h2 className="text-xs font-medium uppercase text-gray-800">
                Per Active User / Month
              </h2>
            </div>

            <div className="my-6">
              <ButtonGradient text="Get Started" />
            </div>

            <div className="text-sm flex flex-col gap-2 text-gray-800">
              <h3 className="font-medium">Features</h3>
              <ul className="flex flex-col gap-1">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <div className="flex items-center gap-2 px-2">
                      <FaCheck size={10} />
                      <h1>{feature}</h1>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Pricing;