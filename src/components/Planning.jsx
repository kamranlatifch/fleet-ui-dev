import React from 'react';
import { ArrowNextSvg } from '@assets/svgs';
import ImageSM from '../assets/images/TravelImageSm.png';
import ImageLG from '../assets/images/TravelImageLG.png';
import ImageXL from '../assets/images/TravelImageXL.png';

const Planning = () => {
  return (
    <div className='flex flex-col  py-8 gap-12 md:flex-row md:gap-0 justify-center items-center lg:pl-[80px] xl:px-[160px] xl:gap-8'>
      <div className='flex flex-col px-8 gap-4 lg:px-0 lg:max-w-[448px]'>
        <p className='font-poppins font-bold text-xs text-textSecondary uppercase'>
          supercharge your planning powers
        </p>
        <h2 className='max-w-[311px] text-5xl lg:max-w-[448px]'>
          Travel to make memories all around the world
        </h2>

        <p className='mt-4 font-poppins text-base font-normal'>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>

        <div className='flex relative max-w-[311px]'>
          <input
            type='text'
            placeholder='Enter your phone number'
            className='border-[2px] border-borderGray  rounded-[90px] bg-none px-4 py-[14px] w-full'
          />
          <div className='flex w-8 h-8 justify-center items-center rounded-full bg-secondary absolute right-3 top-3'>
            <ArrowNextSvg className='text-textBase' />
          </div>
        </div>
      </div>
      <div className=''>
        <img src={ImageSM} alt='image' className='w-full lg:hidden' />
        <img
          src={ImageLG}
          alt='image'
          className='w-full hidden lg:block xl:hidden'
        />
        <img src={ImageXL} alt='image' className='w-full hidden xl:block' />
      </div>
    </div>
  );
};

export { Planning };
