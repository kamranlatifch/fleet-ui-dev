import React from 'react';

const BestHostCard = ({ image, title, label }) => {
  return (
    <div className='flex flex-col  gap-[1.3125rem]  w-[16.5rem] lg:max-w-[16.6875rem] xl:max-w-[16rem] rounded-[1.5rem] border'>
      <img
        src={image}
        alt={title}
        className='w-[19.4375rem] object-cover rounded-3xl '
      />

      <div className='flex flex-col text-center  gap-1 pb-8'>
        <h5 className='font-poppins font-medium text-base'>{title}</h5>
        <p>{label}</p>
      </div>
    </div>
  );
};

export { BestHostCard };
