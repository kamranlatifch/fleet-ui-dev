import React from 'react';

const HouseSvg = ({ className }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.9944 2.78076L7.99998 2.77787L8.00581 2.78088L10.9748 4.56226L12 5.17994V12.5333C12 12.9287 11.9989 13.145 11.9862 13.3005L11.9847 13.3181L11.9671 13.3196C11.8117 13.3323 11.5954 13.3333 11.2 13.3333H4.79998C4.40461 13.3333 4.18827 13.3323 4.03282 13.3196L4.01525 13.3181L4.01372 13.3005C4.00102 13.145 3.99998 12.9287 3.99998 12.5333V5.17996L5.02142 4.56454L7.9944 2.78076ZM4.33444 3.42181L0.990335 5.42828C0.674615 5.61771 0.572238 6.02722 0.76167 6.34294C0.951103 6.65866 1.36061 6.76103 1.67633 6.5716L2.66665 5.97741V12.5333C2.66665 13.2801 2.66665 13.6534 2.81197 13.9386C2.9398 14.1895 3.14378 14.3935 3.39466 14.5213C3.67987 14.6667 4.05324 14.6667 4.79998 14.6667H11.2C11.9467 14.6667 12.3201 14.6667 12.6053 14.5213C12.8562 14.3935 13.0602 14.1895 13.188 13.9386C13.3333 13.6534 13.3333 13.2801 13.3333 12.5333V5.97739L14.3237 6.5716C14.6394 6.76103 15.0489 6.65866 15.2383 6.34294C15.4278 6.02722 15.3254 5.61771 15.0097 5.42828L11.6617 3.41951L9.10092 1.87665C8.91474 1.76448 8.77187 1.6784 8.65078 1.61367C8.62252 1.59786 8.59383 1.58316 8.56477 1.56956C8.464 1.52039 8.37666 1.48766 8.28692 1.46789C8.09789 1.42623 7.90207 1.42623 7.71304 1.46789C7.62307 1.48771 7.5355 1.52056 7.43441 1.56995C7.40587 1.58332 7.37769 1.59776 7.34994 1.61327C7.22869 1.67804 7.08561 1.76425 6.89905 1.87665L4.33444 3.42181Z'
        fill='#777E91'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.66667 13.3333V10.6666C8.66667 10.2984 8.36819 9.99996 8 9.99996C7.63181 9.99996 7.33333 10.2984 7.33333 10.6666V13.3333H8.66667ZM8 8.66663C6.89543 8.66663 6 9.56206 6 10.6666V14.6666H10V10.6666C10 9.56206 9.10457 8.66663 8 8.66663Z'
        fill='#777E91'
      />
    </svg>
  );
};

export { HouseSvg };