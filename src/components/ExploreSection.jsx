import React, { useRef } from 'react';
import Image1 from '../assets/images/Explore1.png';
import Image2 from '../assets/images/Explore2.png';
import Image3 from '../assets/images/Explore3.png';
import Image4 from '../assets/images/Explore4.png';
import Image5 from '../assets/images/Explore5.png';
import Image6 from '../assets/images/Explore6.png';
import Image7 from '../assets/images/Explore7.png';
import Image8 from '../assets/images/Explore8.png';
import { ExploreCard } from './ExploreCard';
import { ArrowBack, ArrowNextSvg } from '@assets/svgs';

const ExploreSection = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: 'Thompsonbury',
      label: '15 minutes drive',
      tag: '1480',
    },
    {
      id: 2,
      image: Image2,
      title: 'Hudsontown',
      label: '2 hours drive',
      tag: '1480',
    },
    {
      id: 3,
      image: Image3,
      title: 'Lake Marcelle',
      label: '15 minutes drive',
      tag: '1480',
    },
    {
      id: 4,
      image: Image4,
      title: 'New Keagan',
      label: '15 minutes drive',
      tag: '1480',
    },
    {
      id: 5,
      image: Image5,
      title: 'MacGyverton',
      label: '2 hours drive',
      tag: '1480',
    },
    {
      id: 6,
      image: Image6,
      title: 'North Justen',
      label: '2 hours drive',
      tag: '1480',
    },
    {
      id: 7,
      image: Image7,
      title: 'Port Elyseberg',
      label: '15 minutes drive',
      tag: '1480',
    },
    {
      id: 8,
      image: Image8,
      title: 'Danielmouth',
      label: '2 hours drive',
      tag: '1480',
    },
    {
      id: 9,
      image: Image1,
      title: 'Russelville',
      label: '15 minutes drive',
      tag: '1480',
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
    <div className='flex flex-col lg:p-10 xl:p-20 lg:justify-center lg:items-center'>
      <div className='flex flex-col bg-tertiary py-16 pl-8 gap-10 lg:p-10 xl:px-20 xl:py-[112px] lg:rounded-3xl lg:max-w-[944px] xl:max-w-[1280px]'>
        <div className='flex flex-col gap-3 text-center'>
          <h2>Explore nearby</h2>
          <p>10,789 beautiful places to go</p>
        </div>

        <div
          ref={scrollContainerRef}
          className='flex flex-row lg:flex-wrap lg:justify-center gap-4 lg:gap-8 overflow-x-auto  scroll-smooth  scrollbar-hide '
        >
          {data.map((item, index) => (
            <div key={item.id}>
              <ExploreCard
                image={item.image}
                title={item.title}
                label={item.label}
                tag={item.tag}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className='flex flex-row gap-2 justify-center lg:hidden '>
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
    </div>
  );
};

export { ExploreSection };
