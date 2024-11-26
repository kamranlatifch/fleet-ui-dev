import React, { useState } from 'react';
import SmallImage from '../assets/images/TKImg1.png';
import LargeImage from '../assets/images/TKImg2.png';

import { PlayButton } from '@assets/svgs';

const TravelKit = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoUrl =
    'https://videos.pond5.com/waves-beach-random-people-walk-footage-014812876_main_xxl.mp4'; // Your specific video URL

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className='flex justify-center items-center pb-16'>
      <div className='flex flex-col gap-8 lg:gap-20 px-10 xl:px-20 lg:max-w-[59rem] xl:max-w-[80rem]'>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-8 md:items-start  lg:items-end'>
          <div className='flex flex-col lg:max-w-[15.5rem]'>
            <p className='uppercase text-xs font-bold'>fleet travel ui kit</p>
            <h2>Book a ticket and just leave</h2>
          </div>
          <button onClick={() => setIsVideoPlaying(false)}>Book now</button>
        </div>
        <div className='flex relative'>
          {isVideoPlaying ? (
            <video
              className='rounded-2xl w-full min-h-[30rem] lg:min-w-[52.75rem] xl:min-w-[70rem]'
              controls
              autoPlay
              src={videoUrl}
            ></video>
          ) : (
            <>
              <img
                src={SmallImage}
                alt='Travel Kit'
                className='rounded-2xl w-full max-h-[36.25rem] lg:hidden'
              />
              <img
                src={LargeImage}
                alt='Travel Kit'
                className='rounded-2xl w-full hidden lg:block'
              />
              <div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                onClick={handlePlayVideo}
              >
                <PlayButton />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { TravelKit };
