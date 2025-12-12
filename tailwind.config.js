export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        charcoal: "#121212",
        crimson: "#FF3333",
        "crimson-dark": "#cc2929",
        "crimson-light": "#ff6666",
        platinum: "#E0E0E0",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-bg": "rgba(18, 18, 18, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 10px rgba(255, 51, 51, 0.5), 0 0 20px rgba(255, 51, 51, 0.3)',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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