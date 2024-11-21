import React from 'react';
import { Star } from '@assets/svgs';
const GoSomewhereCard = ({
  image,
  title,
  label,
  oldPrice,
  newPrice,
  startDate,
  endDate,
  rating,
  index,
}) => {
  return (
    <div
      className={` flex flex-col  w-[311px] lg:w-[266px] ${
        index < 6 ? 'flex flex-col' : 'hidden xl:flex flex-col'
      }`}
    >
      <img src={image} alt={title} className='w-[311px] object-cover' />
      <div className='flex flex-col p-5 bg-primary rounded-b-[16px]'>
        <div className='flex flex-row border-b-2 justify-between'>
          <div className='flex flex-col'>
            <h5 className='font-poppins font-medium text-base '>{title}</h5>

            <p className='font-poppins font-normal text-xs text-textPrimaryDark'>
              {label}
            </p>
          </div>
          <div className='flex flex-col border-[2px] mb-4  p-2 rounded border-emeraldGreen w-12 h-12'>
            <span className='m-0 font-poppins font-bold text-xs text-textSecondary line-through'>
              {oldPrice}
            </span>
            <span className='m-0 font-poppins font-bold text-xs text-emeraldGreen'>
              {newPrice}
            </span>
          </div>
        </div>

        <div className='flex justify-between pt-4'>
          <p>
            {startDate} - {endDate}
          </p>

          <div className='flex justify-center items-center gap-1'>
            <Star /> <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoSomewhereCard;
