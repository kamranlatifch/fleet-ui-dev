import React from 'react';

const PlayButton = ({ className }) => {
  return (
    <svg
      width='96'
      height='96'
      viewBox='0 0 96 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g filter='url(#filter0_d_2262_7063)'>
        <rect x='8' width='80' height='80' rx='40' fill='#FCFCFD' />
        <path
          d='M39.7 32.3856C39.7 30.0351 42.2805 28.5976 44.2791 29.8348L56.5795 37.4494C58.4741 38.6222 58.4741 41.3781 56.5795 42.551L44.2791 50.1655C42.2805 51.4027 39.7 49.9652 39.7 47.6147V32.3856Z'
          fill='#777E91'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_2262_7063'
          x='0'
          y='0'
          width='96'
          height='96'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='8'
            operator='erode'
            in='SourceAlpha'
            result='effect1_dropShadow_2262_7063'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='8' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.1 0'
          />
          <feBlend
            mode='multiply'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_2262_7063'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2262_7063'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};

export { PlayButton };
