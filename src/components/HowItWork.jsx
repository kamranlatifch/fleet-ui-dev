import React from 'react';
import Image1 from '../assets/images/IconBox1.png';
import Image2 from '../assets/images/IconBox2.png';
import Image3 from '../assets/images/IconBox3.png';
import { HowItWorkCard } from './HowItWorkCard';
import { HowItWorkHR, DashLine } from '@assets/svgs';
const HowItWork = () => {
  const cardsData = [
    {
      image: Image1,
      title: 'Book & relax',
      text: 'We realize ideas from simple to complex, everything becomes easy to use.',
    },
    {
      image: Image2,
      title: 'Smart checklist',
      text: 'We realize ideas from simple to complex, everything becomes easy to use.',
    },
    {
      image: Image3,
      title: 'Save more',
      text: 'We realize ideas from simple to complex, everything becomes easy to use.',
    },
  ];
  return (
    <div className='flex flex-col px-8 py-8 lg:px-[5rem] xl:px-[13rem]  justify-self-center justify-center gap-8 '>
      <div className='flex flex-col gap-1 justify-center items-center '>
        <h2 className='text-[2.5rem] md:text-[3rem] '>How it work</h2>
        <p className='sub__title  text-2xl'>Keep calm & travel on</p>
      </div>
      <div className='relative flex flex-col md:flex-row lg:gap-12 justify-center items-center px-7 md:w-[45.625rem] lg:w-[54rem] xl:w-[64rem]'>
        {cardsData?.map((item, index) => (
          <>
            <HowItWorkCard
              image={item.image}
              title={item.title}
              text={item.text}
            />
            {index !== 2 && <HowItWorkHR className='md:hidden' />}
          </>
        ))}
        <DashLine className='hidden md:flex absolute top-[3.875rem] left-[5.75rem] -z-10 md:w-[34.375rem] lg:w-[42.3125rem]  xl:w-[52.25rem] xl:h-[8.3125rem]' />
      </div>
    </div>
  );
};

export { HowItWork };
