import React, { useState } from 'react';
import { SearchSvg, LocationSvg, CalendarSvg, GuestSvg } from '@assets/svgs';

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

  const lgTabs = [
    {
      name: 'Stays',

      inputs: [
        {
          title: 'Location',
          placeholder: 'Where are you going?',
          Svg: <LocationSvg />,
        },
        {
          title: 'Date',
          placeholder: 'Add date',
          Svg: <CalendarSvg />,
        },
        {
          title: 'Travelers',
          placeholder: 'Add guests',
          Svg: <GuestSvg />,
        },
      ],
    },
    {
      name: 'Flights',

      inputs: [
        {
          title: 'Flight No',
          placeholder: 'Where are you going?',
          Svg: <LocationSvg />,
        },
        {
          title: 'No of Persons',
          placeholder: 'Add persons',
          Svg: <GuestSvg />,
        },
        {
          title: 'Date',
          placeholder: 'Add date',
          Svg: <CalendarSvg />,
        },
      ],
    },
    {
      name: 'Cars',

      inputs: [
        {
          title: 'Location',
          placeholder: 'Where are you going?',
          Svg: <LocationSvg />,
        },
        {
          title: 'Guests',
          placeholder: 'Add persons',
          Svg: <GuestSvg />,
        },
        {
          title: 'Date',
          placeholder: 'Add date',
          Svg: <CalendarSvg />,
        },
      ],
    },
    {
      name: 'Things to do',

      inputs: [
        {
          title: 'Location',
          placeholder: 'Where are you going?',
          Svg: <LocationSvg />,
        },
        {
          title: 'Guests',
          placeholder: 'Add persons',
          Svg: <GuestSvg />,
        },
        {
          title: 'Date',
          placeholder: 'Add date',
          Svg: <CalendarSvg />,
        },
      ],
    },
  ];

  return (
    <div className='flex flex-col pt-6 px-4 lg:px-10 xl:px-20 justify-center items-center rounded-3xl '>
      <div className='relative w-full flex flex-col lg:bg-signup-lg-bg lg:min-h-[38.125rem] lg:bg-no-repeat lg:bg-cover lg:rounded-3xl '>
        <div className='flex flex-col z-10 gap-4 pt-10 pb-[3.125rem] justify-center items-center rounded-t-3xl bg-custom-gradient lg:bg-none lg:absolute lg:top-[6.25rem] lg:left-20 lg:items-start lg:max-w-[27.9375rem]'>
          <h1 className='text-center lg:text-start lg:leading-none'>
            Air, sleep, dream
          </h1>
          <p className='font-poppins text-base font-medium text-center text-textPrimary'>
            Find and book a great experience.
          </p>
          <button className='mt-2'>Start your search</button>
        </div>
        <div className='lg:hidden absolute w-full z-0 top-[18.75rem] flex justify-center rounded-b-3xl items-center bg-signup-bg bg-no-repeat bg-cover p-1'>
          <div className='mt-[23.75rem] w-full p-5 rounded-[1.25rem] flex flex-col gap-6 justify-center bg-gradient-to-r from-[#FCFCFD] via-[rgba(252,252,253,0.83)] to-[rgba(252,252,253,0.83)] shadow-lg backdrop-blur-lg'>
            <div className='flex flex-row justify-center gap-8 border-b-2 min-h-[2.9375rem]'>
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
                  className='sub__title bg-inherit min-w-[11rem]'
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

        <div className='hidden lg:flex absolute w-full z-0 top-[27.125rem] px-10 xl:px-20 justify-center rounded-b-3xl items-center p-1'>
          <div className='w-full p-10 rounded-[1.25rem] flex flex-col gap-6 justify-center bg-hero-gradiant shadow-lg  min-h-[15.9375rem]'>
            <div className='flex flex-row gap-8 border-b-2 min-h-[2.9375rem]'>
              {lgTabs.map((tab) => (
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
              <div className='flex flex-row gap-6'>
                <div className='flex flex-col'>
                  <h3>{lgTabs.find((tab) => tab.name === activeTab)?.title}</h3>
                  <div className='flex gap-4'>
                    {lgTabs
                      .find((tab) => tab.name === activeTab)
                      ?.inputs.map((input, index) => (
                        <div key={index} className='flex flex-row  gap-2'>
                          <div className='flex '>{input.Svg}</div>
                          <div className='flex flex-col'>
                            <h3>{input.title}</h3>
                            <input
                              type='text'
                              className='sub__title bg-inherit min-w-[11rem]'
                              placeholder={input.placeholder}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
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
