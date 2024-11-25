import React from 'react';

const CategoryCard = ({ Icon, title, label, tag }) => {
  return (
    <div
      className={` flex flex-col relative border w-[16rem]  px-8 pb-8 pt-[8.25rem] gap-4   rounded-2xl `}
    >
      <div className='flex flex-col justify-start gap-6'>
        <Icon />

        <div className='flex flex-col rounded-b-[1rem] gap-1'>
          <h5 className='font-poppins font-medium text-base'>{title}</h5>
          <p>{label}</p>
        </div>
      </div>
      <div className='flex px-3 py-2 bg-bgGray absolute top-8 left-8 rounded-[2rem] gap-2 font-poppins font-bold text-xs text-textPrimary'>
        {tag}
      </div>
    </div>
  );
};

export default CategoryCard;
