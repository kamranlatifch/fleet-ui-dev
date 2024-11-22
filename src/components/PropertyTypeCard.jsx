import React from 'react';
import { HouseSvg } from '@assets/svgs';

const PropertyTypeCard = ({ image, title, label, off }) => {
  return (
    <div className='flex flex-col  gap-[21px] w-[278px] lg:max-w-[236px] xl:max-w-[336px] rounded-lg'>
      <div className='relative'>
        <img
          src={image}
          alt={title}
          className='w-[311px] object-cover rounded-3xl '
        />
        <span className='absolute top-4 left-4 px-3 pt-2 pb-[6px] text-textBase bg-blackBg rounded-3xl font-poppins text-xs font-bold'>
          {off}% OFF
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className='font-poppins font-medium text-base '>{title}</h5>
        <div className='flex gap-[6px]'>
          <HouseSvg />
          <p className=''>{label}</p>
        </div>
      </div>
    </div>
  );
};

export { PropertyTypeCard };
