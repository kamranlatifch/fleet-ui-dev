import React from 'react';

const ArrowBack = ({ className }) => {
  return (
    <svg
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M10.4091 7.26521C10.0032 6.8906 9.37058 6.9159 8.99597 7.32172L5.7652 10.8217C5.4116 11.2047 5.4116 11.7952 5.76519 12.1782L8.99597 15.6783C9.37057 16.0841 10.0032 16.1094 10.409 15.7348C10.8149 15.3602 10.8402 14.7276 10.4656 14.3217L8.78397 12.5L18.5 12.5C19.0523 12.5 19.5 12.0523 19.5 11.5C19.5 10.9477 19.0523 10.5 18.5 10.5L8.784 10.5L10.4656 8.67829C10.8402 8.27247 10.8149 7.63981 10.4091 7.26521Z'
        // fill='#777E91'
      />
    </svg>
  );
};

export { ArrowBack };
