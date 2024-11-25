import React from 'react';

const BestHostCard = ({ image, title, label }) => {
  return (
    <div className='flex flex-col  gap-[21px]  w-[264px] lg:max-w-[267px] xl:max-w-[256px] rounded-[24px] border'>
      <img
        src={image}
        alt={title}
        className='w-[311px] object-cover rounded-3xl '
      />

      <div className='flex flex-col text-center  gap-1 pb-8'>
        <h5 className='font-poppins font-medium text-base'>{title}</h5>
        <p>{label}</p>
      </div>
    </div>
  );
};

export { BestHostCard };
