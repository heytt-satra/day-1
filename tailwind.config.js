export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(203, 0, 1, 0.15) 0%, rgba(201, 0, 1, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 2, 0) 50%, rgba(220, 70, 2, 0.15) 100%)',
      },
      clipPath: {
        'custom-2': 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-horizontal-scroll': {
          'overflow-x': 'hidden',
          'max-width': '100vw',
        },
        '.connecting-line': {
          'display': 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);

      // Media query for sm+ screens to show the connecting line
      addUtilities(
        {
          '@media (min-width: 640px)': {
            '.connecting-line': {
              'display': 'block',
            },
          },
        },
        ['responsive']
      );
    },
  ],
};