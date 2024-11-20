import React, { useRef } from 'react';
import { StunninWorkCard } from './StunninWorkCard';
import Image1 from '../assets/images/SWImage1.png';
import Image2 from '../assets/images/SWImage2.png';
import Image3 from '../assets/images/SWImage3.png';
import { ArrowBack, ArrowNextSvg } from '@assets/svgs';

const StunningWork = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: 'Solo Landing Kit',
      label: 'Production, UI Design',
    },
    {
      id: 2,
      image: Image2,
      title: 'Solo Landing Kit',
      label: 'Production, UI Design',
    },
    {
      id: 3,
      image: Image3,
      title: 'Pick up the earliest sunrise',
      label: 'Production, UI Design',
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
    <div className='flex flex-col pl-8 lg:px-10 pt-10 gap-10'>
      <div className='flex flex-col justify-center items-center text-center gap-5'>
        <h2>Stunning Work</h2>
        <p className='sub__title'>Keep calm & travel on</p>
      </div>
      <div
        ref={scrollContainerRef}
        className='flex gap-4 lg:gap-8 overflow-x-auto scroll-smooth justify-center scrollbar-hide'
      >
        {data.map((item) => (
          <div key={item.id}>
            <StunninWorkCard
              image={item.image}
              title={item.title}
              label={item.label}
            />
          </div>
        ))}
      </div>
      <div className='lg:hidden flex flex-row gap-2 justify-center'>
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

export { StunningWork };
