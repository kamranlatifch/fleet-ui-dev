import React from 'react';

const StunninWorkCard = ({ image, title, label }) => {
  return (
    <div className='flex flex-col items-center gap-4 w-[311px] lg:w-[266px] xl:w-[352px] rounded-lg'>
      <img
        src={image}
        alt={title}
        className='w-[311px] object-cover rounded-lg'
      />

      <h5 className='font-poppins font-medium text-base '>{title}</h5>

      <p className='text-center'>{label}</p>
    </div>
  );
};

export { StunninWorkCard };
