import { addIconSelectors } from '@iconify/tailwind';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/index.html', './src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        style: ['Style Script', 'cursive', 'sans'],
        montserrat: ['Montserrat', 'serif', 'sans'],
      },
      keyframes: {
        'filter-animation': {
          '0%, 100%': {
            filter: 'hue-rotate(0deg)',
          },
          '50%': {
            filter: 'hue-rotate(45deg)',
          },
        },
        'filter-scale': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.4)',
          },
          '100%': {
            transform: 'scale(.8)',
          },
        },
      },
      animation: {
        'bg-layers': 'filter-animation 4s infinite',
        'bg-scale': 'filter-scale 8s infinite',
      },
    },
  },
  plugins: [addIconSelectors(['carbon', 'svg-spinners'])],
} satisfies Config;
