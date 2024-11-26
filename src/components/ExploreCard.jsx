import React from 'react';

const ExploreCard = ({ image, title, label, tag, index }) => {
  return (
    <div
      className={` flex flex-col relative bg-primary w-[13.75rem] lg:max-w-[11.25rem] px-2 py-12 gap-4 pb-16 lg:pb-6 rounded-2xl ${
        index < 7 ? 'flex flex-col' : 'hidden xl:flex flex-col'
      }`}
    >
      <div className='flex justify-center'>
        <img src={image} alt={title} className=' object-cover' />
      </div>
      <div className='flex flex-col text-center rounded-b-[1rem] gap-1'>
        <h5 className='font-poppins font-medium text-base'>{title}</h5>
        <p>{label}</p>
      </div>
      <div className='flex px-3 py-2 bg-tertiary absolute top-2 left-2 rounded-[2rem] gap-2 font-poppins font-bold text-xs text-textSecondary'>
        {tag}
      </div>
    </div>
  );
};

export { ExploreCard };
