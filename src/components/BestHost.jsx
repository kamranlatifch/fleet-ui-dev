import React, { useRef } from 'react';
import { DropDown, ArrowBack, ArrowNextSvg } from '@assets/svgs';
import Image1 from '../assets/images/BHImg1.png';
import Image2 from '../assets/images/BHImg2.png';
import Image3 from '../assets/images/BHImg3.png';
import Image4 from '../assets/images/BHImg4.png';
import { BestHostCard } from './BestHostCard';
const BestHost = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: 'Antone Heller',
      label: 'Gaylordside',
      off: '20',
    },
    {
      id: 2,
      image: Image2,
      title: 'Antone Heller',
      label: 'Gaylordside',
    },
    {
      id: 3,
      image: Image3,
      title: 'Antone Heller',
      label: 'Gaylordside',
    },
    {
      id: 4,
      image: Image4,
      title: 'Antone Heller',
      label: 'Gaylordside',
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='flex flex-col py-16 lg:px-20 lg:items-center xl:px-[10rem]  gap-10 lg:gap-12 '>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 px-8 lg:px-0 lg:w-full lg:max-w-[54rem] xl:max-w-[70rem]'>
        <h2 className='text-[2rem] md:text-[3rem] gap-6 lg:flex'>
          Best hosts of the{' '}
          <span className='text-secondary flex items-center'>
            month{' '}
            <DropDown className='hidden lg:block w-8 h-8 text-secondary' />
          </span>{' '}
        </h2>
        <div className='flex justify-between items-center  bg-primary px-2 py-2 rounded-xl  border lg:hidden'>
          <p className='text-textPrimary font-medium'>Month</p>
          <DropDown className='border rounded-full w-8 h-8 ' />
        </div>
        <div className='hidden lg:flex flex-row gap-2 pl-8 '>
          <div
            onClick={scrollPrev}
            className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
          >
            <ArrowBack className='text-textSecondary' />
          </div>
          <div
            onClick={scrollNext}
            className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
          >
            <ArrowNextSvg className='text-textSecondary' />
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className='flex gap-4 lg:gap-8  overflow-x-auto pl-8 scroll-smooth  scrollbar-hide lg:pl-0 lg:max-w-[54rem] xl:max-w-[70rem]'
      >
        {data.map((item) => (
          <div key={item.id}>
            <BestHostCard
              image={item.image}
              title={item.title}
              label={item.label}
            />
          </div>
        ))}
      </div>

      <div className='lg:hidden flex flex-row gap-2 pl-8'>
        <div
          onClick={scrollPrev}
          className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
        >
          <ArrowBack className='text-textSecondary' />
        </div>
        <div
          onClick={scrollNext}
          className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
        >
          <ArrowNextSvg className='text-textSecondary' />
        </div>
      </div>
    </div>
  );
};

export { BestHost };
