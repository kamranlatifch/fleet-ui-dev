import React from 'react';

const AdventureCard = ({ icon: Icon, title, label }) => {
  return (
    <div className='flex flex-row gap-4 justify-center items-center px-[14px] py-4  min-w-[292px] lg:min-w-[352px]'>
      <Icon />
      <div className='flex flex-col items-start justify-center gap-2 w-[136px]'>
        <p className='text-textPrimary'>{title}</p>
        <span className='font-poppins font-bold text-xs pt-2 pb-[6px] px-3 bg-bgGray rounded-[32px]'>
          {label}
        </span>
      </div>
    </div>
  );
};

export { AdventureCard };
