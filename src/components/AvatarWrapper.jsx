import React from 'react';

const AvatarWrapper = ({ image, size = 8 }) => {
  return (
    <div
      className={`rounded-full  bg-cover bg-center`}
      style={{
        backgroundImage: `url(${image})`,
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    ></div>
  );
};

export { AvatarWrapper };
