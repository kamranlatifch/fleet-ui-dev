import React from 'react';
import Image1 from '../assets/images/GSImage1.png';
import Image2 from '../assets/images/GSImg2.png';
import Image3 from '../assets/images/GSImg3.png';
import Image4 from '../assets/images/GSImg4.png';
import Image5 from '../assets/images/GSImg5.png';
import Image6 from '../assets/images/GSImg6.png';
import GoSomewhereCard from './GoSomewhereCard';
import { DropDown } from '@assets/svgs';
import { Star } from '@assets/svgs';

const GoSomewhere = () => {
  const cardsData = [
    {
      image: Image1,
      title: 'The grand resort',
      label: 'Yasminfurt',
      oldPrice: '$356',
      newPrice: '$267',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image2,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image3,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image4,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image5,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image6,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image5,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
    {
      image: Image3,
      title: 'The grand resort',
      label: 'North Edenshire',
      oldPrice: '$699',
      newPrice: '$288',
      startDate: 'Tue, Jul 20',
      endDate: 'Fri, Jul 23',
      rating: '4.8',
    },
  ];
  return (
    <div className='flex flex-col py-16 lg:px-10  gap-12 md:justify-center md:items-center '>
      <div className='flex flex-col lg:bg-tertiary p-10 rounded-[24px] gap-12 lg:max-w-[944px]  xl:max-w-[1280px]'>
        <div className='flex flex-col gap-3 md:justify-center md:text-center lg:justify-start lg:items-start'>
          <h2 className='text-[40px] md:text-[48px]'>Go somewhere</h2>
          <p className='sub__title  text-2xl'>Let’s go on an adventure</p>
        </div>

        <div className='flex flex-col  md:flex-row md:justify-around md:w-full items-center  gap-4 lg:hidden'>
          <div className='flex justify-between items-center  bg-primary px-2 py-2 rounded-full md:gap-8 w-full'>
            <p className='text-textPrimary font-medium'>Featured</p>
            <DropDown className='border rounded-full w-8 h-8' />
          </div>
          <div className='flex justify-between items-center  bg-primary px-2 py-2 rounded-full md:gap-8 w-full '>
            <p className='text-textPrimary font-medium'>Recently Added</p>
            <DropDown className='border rounded-full w-8 h-8' />
          </div>
        </div>

        <div className='hidden lg:flex flex-row  justify-between'>
          <div className='flex flex-row gap-4'>
            <div className='flex gap-2 rounded-full border text-textBase bg-textPrimary justify-center items-center px-3 py-[6px]'>
              <Star />
              <span className='font-dmSans font-bold text-sm'>Featured</span>
            </div>
            <div className='flex gap-2 rounded-full border justify-center items-center px-3 py-[6px]'>
              <Star />
              <span className='font-dmSans font-bold text-sm text-textSecondary'>
                {' '}
                Family-friendly
              </span>
            </div>
            <div className='flex gap-2 rounded-full border justify-center items-center px-3 py-[6px]'>
              <Star />
              <span className='font-dmSans font-bold text-sm text-textSecondary'>
                On sale
              </span>
            </div>
            <div className='flex gap-2 rounded-full border justify-center items-center px-3 py-[6px]'>
              <Star />
              <span className='font-dmSans font-bold text-sm text-textSecondary'>
                Sub nav
              </span>
            </div>
          </div>

          <div className='flex justify-between items-center  bg-primary px-2 py-2 rounded-full  min-w-[256px]'>
            <p className='text-textPrimary font-medium'>Featured</p>
            <DropDown className='border rounded-full w-8 h-8' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 '>
          {cardsData?.map((item, index) => (
            <GoSomewhereCard
              image={item.image}
              title={item.title}
              label={item.label}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              startDate={item.startDate}
              endDate={item.endDate}
              rating={item.rating}
              index={index}
            />
          ))}
        </div>
        <div className='flex justify-center items-center '>
          <button className='bg-primary border text-textPrimary'>
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export { GoSomewhere };
