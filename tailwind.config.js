/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '4.375rem',
    },

    screens: {
      xs: '325px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      poppins: ['Poppins'],
      dmSans: ['DM Sans'],
    },
    extend: {
      colors: {
        primary: '#FCFCFD',
        secondary: '#3B71FE',
        tertiary: '#F4F5F6',
        emeraldGreen: '#58C27D',
        bluePeriwinkle: '#92A5EF',
        yellowStar: '#FFD166',
        skyBlue: '#8BC5E5',
        ashGray: '#23262F',
        blackBg: '#23262F',

        textPrimary: '#23262F',
        textPrimaryDark: '#353945',
        textSecondary: '#777E90',
        textBase: '#FCFCFD',

        textBase: '#FFFFFF',
      },
      borderColor: {
        borderGray: '#E6E8EC',
        borderBlack: '#23262F',
      },
      boxShadow: {
        [`soft`]: '-4px 4px 13px 0px rgba(0, 0, 0, 0.05)',
        cardShadow: '1px 12px 24px 0px rgba(0, 0, 0, 0.11)',
        primaryShadow:
          ' 0px 106.667px 106.667px -71.111px rgba(76, 86, 115, 0.08);',
      },

      backgroundImage: {
        'signup-bg': "url('/src/assets/images/signupBg.png')",
        'custom-gradient':
          'linear-gradient(to right, rgba(0, 0, 0, 0.1) 10%, #6D8F97 60%, #6D8F97 100%)',
        'thunder-gradient':
          'radial-gradient(67.61% 50% at 50% 50%, rgba(109, 143, 151, 0.85) 0%, rgba(42, 69, 75, 0.85) 100%);',
        'card-gradient': 'linear-gradient(180deg, #557982 0%, #8BABB3 100%)',
      },
    },
  },
  plugins: [],
};
