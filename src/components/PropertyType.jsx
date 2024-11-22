import React, { useRef } from 'react';
import Image1 from '../assets/images/PType1.png';
import Image2 from '../assets/images/PType2.png';
import Image3 from '../assets/images/PType3.png';
import Image4 from '../assets/images/PType4.png';
import { PropertyTypeCard } from './PropertyTypeCard';
import { ArrowBack, ArrowNextSvg } from '@assets/svgs';

const PropertyType = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: 'Nature house',
      label: '650,596',
      off: '20',
    },
    {
      id: 2,
      image: Image2,
      title: 'Solo Landing Kit',
      label: '650,596',
      off: '20',
    },
    {
      id: 3,
      image: Image3,
      title: 'Pick up the earliest sunrise',
      label: '650,596',
      off: '20',
    },
    {
      id: 4,
      image: Image4,
      title: 'Pick up the earliest sunrise',
      label: '650,596',
      off: '20',
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
    <div className='flex flex-col pl-8 lg:pl-20  xl:pl-[160px] py-8 gap-10'>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:max-w-[864px] xl:max-w-[1120px]'>
        <div className='flex flex-col gap-3'>
          <h2>Browse by property type</h2>
          <p>Let’s go on an adventure</p>
        </div>
        <div className='hidden lg:flex flex-row gap-2 '>
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
        className='flex gap-4 lg:gap-8 overflow-x-auto  scroll-smooth  scrollbar-hide'
      >
        {data.map((item) => (
          <div key={item.id}>
            <PropertyTypeCard
              image={item.image}
              title={item.title}
              label={item.label}
              off={item.off}
            />
          </div>
        ))}
      </div>

      <div className='lg:hidden flex flex-row gap-2 '>
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

export { PropertyType };
