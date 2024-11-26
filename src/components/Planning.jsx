import React from 'react';
import { ArrowNextSvg } from '@assets/svgs';
import ImageSM from '../assets/images/TravelImageSm.png';
import ImageLG from '../assets/images/TravelImageLG.png';
import ImageXL from '../assets/images/TravelImageXL.png';

const Planning = () => {
  return (
    <div className='flex flex-col  py-8 gap-12 md:flex-row md:gap-0 justify-center items-center lg:pl-[5rem] xl:px-[10rem] xl:gap-8'>
      <div className='flex flex-col px-8 gap-4 lg:px-0 lg:max-w-[28rem]'>
        <p className='font-poppins font-bold text-xs text-textSecondary uppercase'>
          supercharge your planning powers
        </p>
        <h2 className='max-w-[19.4375rem] text-5xl lg:max-w-[28rem]'>
          Travel to make memories all around the world
        </h2>

        <p className='mt-4 font-poppins text-base font-normal'>
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>

        <div className='flex relative max-w-[19.4375rem]'>
          <input
            type='text'
            placeholder='Enter your phone number'
            className='border-[0.125rem] border-borderGray  rounded-[5.625rem] bg-none px-4 py-[0.875rem] w-full'
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
