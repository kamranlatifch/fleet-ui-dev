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
    <div className='flex flex-col px-8 py-8 lg:px-[80px] xl:px-[208px]  justify-self-center justify-center gap-8 '>
      <div className='flex flex-col gap-1 justify-center items-center '>
        <h2 className='text-[40px] md:text-[48px] '>How it work</h2>
        <p className='sub__title  text-2xl'>Keep calm & travel on</p>
      </div>
      <div className='relative flex flex-col md:flex-row lg:gap-12 justify-center items-center px-7 md:w-[730px] lg:w-[864px] xl:w-[1024px]'>
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
        <DashLine className='hidden md:flex absolute top-[62px] left-[92px] -z-10 md:w-[550px] lg:w-[677px]  xl:w-[836px] xl:h-[133px]' />
      </div>
    </div>
  );
};

export { HowItWork };
