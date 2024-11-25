import React from 'react';

const StunninWorkCard = ({ image, title, label }) => {
  return (
    <div className='flex flex-col items-center gap-4 w-[19.4375rem] lg:w-[16.625rem] xl:w-[22rem] rounded-lg'>
      <img
        src={image}
        alt={title}
        className='w-[19.4375rem] object-cover rounded-lg'
      />

      <h5 className='font-poppins font-medium text-base '>{title}</h5>

      <p className='text-center'>{label}</p>
    </div>
  );
};

export { StunninWorkCard };
