import React, { useState } from 'react';
import { ArrowBack, ArrowNextSvg, Star } from '@assets/svgs';
import Avatar1 from '../assets/images/TravelAvatar1.png';
import Avatar2 from '../assets/images/userAvatar.png';
import Avatar3 from '../assets/images/Avatar2.jpeg';
import Image1 from '../assets/images/TravelImage1.png';
import Image2 from '../assets/images/ValuesImage1.png';
import Image3 from '../assets/images/TravelImage1.png';
import { AvatarWrapper } from './AvatarWrapper';

const TravelCarousal = () => {
  const carouselData = [
    {
      image: Image1,
      avatar: Avatar1,
      name: 'Antone Heller',
      rating: '4.8',
    },
    {
      image: Image2,
      avatar: Avatar2,
      name: 'Brianna Ray',
      rating: '4.9',
    },
    {
      image: Image3,
      avatar: Avatar3,
      name: 'Chris Brown',
      rating: '4.7',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const scrollPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className='flex flex-col gap-16 px-8 lg:px-[80px] xl:px-[160px] py-16 justify-center lg:items-center'>
      <div className='flex flex-col gap-3 md:justify-center md:text-center md:px-[113px]  xl:px-[240px]'>
        <h2 className='text-[40px] md:text-[48px]'>
          Travel to make memories all around the world
        </h2>
        <p className='sub__title  text-2xl'>
          Find trips that fit a flexible lifestyle
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-16 lg:gap-[128px] xl:gap-[274px] lg:max-w-[864px] xl:max-w-[1120px]'>
        <div className='flex flex-col gap-10 xl:max-w-[352px]'>
          <div className='flex flex-col gap-4'>
            <span className='badge bg-skyBlue'>01</span>
            <h3 className='mt-2'>Find trips that fit a flexible lifestyle</h3>
            <p>
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='badge bg-bluePeriwinkle'>02</span>
            <h3 className='mt-2'>Travel with more confidence</h3>
            <p>
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='badge bg-emeraldGreen'>03</span>
            <h3 className='mt-2'>See what’s really included</h3>
            <p>
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
          <div className=''>
            {' '}
            <button className='font-bold text-base text-center'>
              Start your search
            </button>
          </div>
        </div>
        <div className='relative '>
          <img
            src={currentItem.image}
            className='rounded-[32px] w-full h-[610px]  md:h-[700px] md:min-w-[320px] lg:min-w-[454px] lg:min-h-[700px] xl:max-w-[454px] xl:min-h-[700px]  z-0 '
            alt='Travel Destination'
          />

          <div className='absolute top-6 right-6 flex flex-row gap-2'>
            <div
              onClick={scrollPrev}
              className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
            >
              <ArrowBack className='text-textBase' />
            </div>
            <div
              onClick={scrollNext}
              className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
            >
              <ArrowNextSvg className='text-textBase' />
            </div>
          </div>

          <div className='md:hidden absolute bottom-6 right-6 left-6 flex bg-hero-gradiant shadow-primaryShadow rounded-[80px] px-8 py-4 gap-4'>
            <AvatarWrapper image={currentItem.avatar} size={12} />
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-medium text-base text-textPrimary'>
                {currentItem.name}
              </p>
              <div className='flex gap-1 items-center'>
                <Star />
                <h5 className='font-poppins font-semibold text-xs text-textPrimary'>
                  {currentItem.rating}
                </h5>
              </div>
            </div>
          </div>

          <div className='hidden absolute top-[270px] -left-[42px] xl:top-[273px] xl:-left-[82px] w-[256px]  md:flex bg-hero-gradiant shadow-mdCardShadow rounded-[80px] px-8 py-4 gap-4'>
            <AvatarWrapper image={Avatar1} size={12} />
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-medium text-base text-textPrimary'>
                Anton Heller
              </p>
              <div className='flex gap-1 items-center'>
                <Star />
                <h5 className='font-poppins font-semibold text-xs text-textPrimary'>
                  4.8
                </h5>
              </div>
            </div>
          </div>
          <div className='hidden absolute top-[412px] -right-[10px] lg:-right-[42px] xl:top-[338px] xl:-right-[79px] w-[256px]  md:flex bg-hero-gradiant shadow-mdCardShadow rounded-[80px] px-8 py-4 gap-4'>
            <AvatarWrapper image={Avatar2} size={12} />
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-medium text-base text-textPrimary'>
                Aizaz Sadaqat
              </p>
              <div className='flex gap-1 items-center'>
                <Star />
                <h5 className='font-poppins font-semibold text-xs text-textPrimary'>
                  5.0
                </h5>
              </div>
            </div>
          </div>
          <div className='hidden absolute top-[520px] lg:top-[573px] left-[30px] lg:left-[99px] xl:top-[499px] xl:-left-[146px] w-[256px]  md:flex bg-hero-gradiant shadow-mdCardShadow rounded-[80px] px-8 py-4 gap-4'>
            <AvatarWrapper image={Avatar3} size={12} />
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-medium text-base text-textPrimary'>
                John Dow
              </p>
              <div className='flex gap-1 items-center'>
                <Star />
                <h5 className='font-poppins font-semibold text-xs text-textPrimary'>
                  4.5
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TravelCarousal };
