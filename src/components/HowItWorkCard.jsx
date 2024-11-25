import React from 'react';

const HowItWorkCard = ({ image, title, text }) => {
  return (
    <div className='flex flex-col items-center gap-4 rounded-lg p-4'>
      <img
        src={image}
        alt={title}
        className='w-[16rem] h-[14.375rem] object-cover rounded-lg'
      />

      <h3>{title}</h3>

      <p className='text-center'>{text}</p>
    </div>
  );
};

export { HowItWorkCard };
