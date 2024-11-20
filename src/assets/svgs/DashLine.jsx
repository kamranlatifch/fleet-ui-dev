import React from 'react';

const DashLine = ({ className, width = '680', height = '136' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M678.5 3.83887C666.554 24.0088 577.856 136.14 487.12 134.889C402.866 133.728 367.844 -37.7167 212.865 59.1723C76.696 144.302 44.0619 51.5844 1.30567 0.992719'
        stroke='#E6E8EC'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-dasharray='4 12'
      />
    </svg>
  );
};

export { DashLine };
