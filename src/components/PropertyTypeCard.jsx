import React from 'react';
import { HouseSvg } from '@assets/svgs';

const PropertyTypeCard = ({ image, title, label, off }) => {
  return (
    <div className='flex flex-col  gap-[1.3125rem] w-[17.375rem] lg:max-w-[14.75rem] xl:max-w-[21rem] rounded-lg'>
      <div className='relative'>
        <img
          src={image}
          alt={title}
          className='w-[19.4375rem] object-cover rounded-3xl '
        />
        <span className='absolute top-4 left-4 px-3 pt-2 pb-[0.375rem] text-textBase bg-blackBg rounded-3xl font-poppins text-xs font-bold'>
          {off}% OFF
        </span>
      </div>
      <div className='flex flex-col gap-2'>
        <h5 className='font-poppins font-medium text-base '>{title}</h5>
        <div className='flex gap-[0.375rem]'>
          <HouseSvg />
          <p className=''>{label}</p>
        </div>
      </div>
    </div>
  );
};

export { PropertyTypeCard };
