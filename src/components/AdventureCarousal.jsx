// import React from 'react';
// import { AdventureCard } from './AdventureCard';
// import {
//   AdventureResortSvg,
//   AdventureCampingSvg,
//   AdventureSeaSvg,
//   ArrowBack,
//   ArrowNextSvg,
// } from '@assets/svgs';

// const AdventureCarousal = () => {
//   const data = [
//     {
//       id: 1,
//       icon: AdventureResortSvg,
//       title: 'Luxury resort at the sea',
//       label: '9,326 places',
//     },
//     {
//       id: 2,
//       icon: AdventureCampingSvg,
//       title: 'Camping amidst the wild',
//       label: '9,326 places',
//     },
//     {
//       id: 3,
//       icon: AdventureSeaSvg,
//       title: 'Luxury resort at the sea',
//       label: '9,326 places',
//     },
//   ];
//   return (
//     <div className='mt-[37.5rem] flex flex-col gap-8 px-2'>
//       <div className='flex flex-col justify-center items-center text-center gap-3'>
//         <h2>Let’s go on an adventure</h2>
//         <p className='sub__title'>Find and book a great experience.</p>
//       </div>

//       <div className='flex flex-row overflow-auto '>
//         {data?.map((item, index) => (
//           <AdventureCard
//             key={item.id}
//             icon={item.icon}
//             title={item.title}
//             label={item.label}
//           />
//         ))}
//       </div>

//       <div className='flex flex-row gap-2 justify-center'>
//         <div className='hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'>
//           <ArrowBack />
//         </div>
//         <div className='hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'>
//           <ArrowNextSvg />
//         </div>
//       </div>
//     </div>
//   );
// };

// export { AdventureCarousal };

import React, { useRef } from 'react';
import { AdventureCard } from './AdventureCard';
import {
  AdventureResortSvg,
  AdventureCampingSvg,
  AdventureSeaSvg,
  ArrowBack,
  ArrowNextSvg,
} from '@assets/svgs';

const AdventureCarousal = () => {
  const data = [
    {
      id: 1,
      icon: AdventureResortSvg,
      title: 'Luxury resort at the sea',
      label: '9,326 places',
    },
    {
      id: 2,
      icon: AdventureCampingSvg,
      title: 'Camping amidst the wild',
      label: '9,326 places',
    },
    {
      id: 3,
      icon: AdventureSeaSvg,
      title: 'Luxury resort at the sea',
      label: '9,326 places',
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='mt-[37.5rem] flex flex-col gap-8 px-4 py-8'>
      <div className='flex flex-col justify-center items-center text-center gap-3'>
        <h2>Let’s go on an adventure</h2>
        <p className='sub__title'>Find and book a great experience.</p>
      </div>

      <div
        ref={scrollContainerRef}
        className='flex flex-row overflow-auto scroll-smooth xl:justify-center scrollbar-hide gap-4 lg:gap-8 lg:px-[80px]'
      >
        {data?.map((item) => (
          <AdventureCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            label={item.label}
          />
        ))}
      </div>

      <div className='flex flex-row gap-2 justify-center'>
        <div
          onClick={scrollPrev}
          className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
        >
          <ArrowBack />
        </div>
        <div
          onClick={scrollNext}
          className='cursor-pointer hover:border hover:border-borderGray w-10 h-10 flex items-center justify-center rounded-full transition duration-200'
        >
          <ArrowNextSvg />
        </div>
      </div>
    </div>
  );
};

export { AdventureCarousal };
