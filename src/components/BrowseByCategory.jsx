import React, { useRef } from 'react';
import { ExploreCard } from './ExploreCard';
import { ArrowBack, ArrowNextSvg, CategorySvg } from '@assets/svgs';
import CategoryCard from './CategoryCard';

const BrowseByCategory = () => {
  const data = [
    {
      id: 1,
      image: CategorySvg,
      title: 'City house',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 2,
      image: CategorySvg,
      title: 'Hudsontown',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 3,
      image: CategorySvg,
      title: 'Lake Marcelle',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 4,
      image: CategorySvg,
      title: 'New Keagan',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 5,
      image: CategorySvg,
      title: 'MacGyverton',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 6,
      image: CategorySvg,
      title: 'North Justen',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 7,
      image: CategorySvg,
      title: 'Port Elyseberg',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 8,
      image: CategorySvg,
      title: 'Danielmouth',
      label: 'Small description',
      tag: '256.356',
    },
    {
      id: 9,
      image: CategorySvg,
      title: 'Russelville',
      label: 'Small description',
      tag: '256.356',
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
    <div className='flex flex-col  py-16 pl-8 gap-10 lg:gap-12 lg:pl-20 xl:pl-[160px]'>
      <div className='flex flex-col gap-3 text-center'>
        <h2>Browse by category</h2>
        <p className='lg:text-2xl'>Let’s go on an adventure</p>
      </div>

      <div
        ref={scrollContainerRef}
        className='flex flex-row  gap-4 lg:gap-8 overflow-x-auto  scroll-smooth  scrollbar-hide '
      >
        {data.map((item, index) => (
          <div key={item.id}>
            <CategoryCard
              Icon={item.image}
              title={item.title}
              label={item.label}
              tag={item.tag}
              index={index}
            />
          </div>
        ))}
      </div>

      <div className='flex flex-row gap-2 justify-center '>
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

export { BrowseByCategory };
