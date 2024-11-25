import React from 'react';
import { Logo, ArrowNextSvg } from '@assets/svgs';
const Footer = () => {
  return (
    <div className='flex flex-col gap-12 pt-16 lg:px-20 xl-px[10rem] pb-6 border-t'>
      <div className='flex flex-col gap-12 px-8 lg:flex-row lg:justify-between'>
        <div className='flex flex-row gap-2'>
          <Logo />
          <h3>fleet</h3>
        </div>
        <div className='grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-8 lg:auto-cols-[6.25rem] xl:auto-cols-[9.375rem]'>
          <a>About</a>
          <a>Projects</a>
          <a>What We Do</a>
          <p>Press</p>
          <a>Jobs</a>
          <a>Download</a>
        </div>

        <div className='flex flex-col gap-4 min-w-[15.9375rem]'>
          <h6 className='uppercase font-poppins text-xs font-bold'>
            Join our community 🔥
          </h6>
          <div className='flex relative max-w-[19.4375rem]'>
            <input
              type='email'
              placeholder='Enter your email'
              className='border-[0.125rem] border-borderGray  rounded-[5.625rem] bg-none px-4 py-[0.875rem] w-full'
            />
            <div className='flex w-8 h-8 justify-center items-center rounded-full bg-secondary absolute right-3 top-3'>
              <ArrowNextSvg className='text-textBase' />
            </div>
          </div>
        </div>

        <div className='font-poppins text-xs px-8 font-normal py-6 border-t lg:hidden'>
          Copyright © 2021 UI8 LLC. All rights reserved
        </div>
      </div>
      <div className='font-poppins text-xs px-8 font-normal pt-6 border-t hidden lg:flex'>
        Copyright © 2021 UI8 LLC. All rights reserved
      </div>
    </div>
  );
};

export { Footer };
