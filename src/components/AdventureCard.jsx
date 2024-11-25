import React from 'react';

const AdventureCard = ({ icon: Icon, title, label }) => {
  return (
    <div className='flex flex-row gap-4 justify-center items-center px-[0.875rem] py-4  min-w-[18.25rem] lg:min-w-[22rem]'>
      <Icon />
      <div className='flex flex-col items-start justify-center gap-2 w-[8.5rem]'>
        <p className='text-textPrimary'>{title}</p>
        <span className='font-poppins font-bold text-xs pt-2 pb-[0.375rem] px-3 bg-bgGray rounded-[2rem]'>
          {label}
        </span>
      </div>
    </div>
  );
};

export { AdventureCard };
