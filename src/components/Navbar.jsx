import React, { useState } from 'react';
import { Logo, BellSvg, HamburgerSvg, DropDown, GlobeSvg } from '@assets/svgs';
import { AvatarWrapper } from './AvatarWrapper';
import UserAvatar from '../assets/images/userAvatar.png';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className='flex flex-row justify-between items-center px-8 pt-10'>
      <div className='flex flex-row justify-between items-center  gap-10'>
        <div className='flex flex-row gap-2'>
          <Logo />
          <h3>fleet</h3>
        </div>
        <div className='hidden lg:block  w-[1px] h-12 bg-slate-500 '> </div>

        <div className='hidden lg:flex justify-center gap-2 items-center font-dmSans text-textSecondary text-sm font-bold'>
          Travelers
          <DropDown />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center gap-5'>
        <div className='hidden xl:block '>
          <h5 className='font-dmSans text-textSecondary text-sm font-bold'>
            Support
          </h5>
        </div>
        <div className='hidden xl:flex gap-3 justify-center items-center'>
          <GlobeSvg />
          <h5 className='font-dmSans text-textSecondary text-sm font-bold'>
            Language
          </h5>
        </div>
        <div className='hidden lg:block px-4 py-3 border-[2px] rounded-[90px]'>
          <h5 className='font-dmSans text-textPrimary text-sm font-bold'>
            List your Property
          </h5>
        </div>
        <div className='relative'>
          <BellSvg />
          <div className='absolute bg-emeraldGreen w-3 h-3  rounded-[8px] -top-2 -right-1'></div>
        </div>
        <AvatarWrapper image={UserAvatar} size={8} />
        <div
          className='relative cursor-pointer lg:hidden'
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <HamburgerSvg />

          <div
            className={`absolute bg-bluePeriwinkle z-20 rounded-lg p-4 right-[50%] ${
              showNav ? '' : 'hidden'
            } `}
          >
            <ul>
              <li>List Your Property</li>
              <li>Travelaers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
