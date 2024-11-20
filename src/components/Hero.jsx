import React, { useState } from 'react';
import { SearchSvg } from '@assets/svgs';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('Stays');

  const tabs = [
    { name: 'Stays', title: 'Location', placeholder: 'Where are you going?' },
    { name: 'Flights', title: 'From', placeholder: 'Enter departure city' },
    { name: 'Cars', title: 'Pick-Up', placeholder: 'Enter pick-up location' },
    {
      name: 'Things to do',
      title: 'Activity',
      placeholder: 'What are you looking for?',
    },
  ];

  return (
    <div className='flex flex-col pt-6 px-4 justify-center items-center rounded-3xl'>
      <div className='relative w-full flex flex-col'>
        <div className='flex flex-col z-10 gap-4 pt-10 pb-[50px] justify-center items-center rounded-t-3xl bg-custom-gradient'>
          <h1 className='text-center'>Air, sleep, dream</h1>
          <p className='font-poppins text-base font-medium text-center text-textPrimary'>
            Find and book a great experience.
          </p>
          <button className='mt-2'>Start your search</button>
        </div>
        <div className='absolute w-full z-0 top-[300px] flex justify-center rounded-b-3xl items-center bg-signup-bg bg-no-repeat bg-cover p-1'>
          <div className='mt-[380px] w-full p-5 rounded-[20px] flex flex-col gap-6 justify-center bg-gradient-to-r from-[#FCFCFD] via-[rgba(252,252,253,0.83)] to-[rgba(252,252,253,0.83)] shadow-lg backdrop-blur-lg'>
            <div className='flex flex-row justify-center gap-8 border-b-2 min-h-[47px]'>
              {tabs.map((tab) => (
                <p
                  key={tab.name}
                  className={`button2__wrapper cursor-pointer text-nowrap ${
                    activeTab === tab.name
                      ? 'text-textPrimary border-b-2 border-borderBlack'
                      : 'text-textSecondary'
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </p>
              ))}
            </div>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
                <h3>{tabs.find((tab) => tab.name === activeTab)?.title}</h3>
                <input
                  type='text'
                  className='sub__title bg-inherit min-w-[176px]'
                  placeholder={
                    tabs.find((tab) => tab.name === activeTab)?.placeholder
                  }
                />
              </div>
              <div className='flex w-16 h-16 justify-center items-center rounded-full bg-secondary'>
                <SearchSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
