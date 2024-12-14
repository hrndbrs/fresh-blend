import { addIconSelectors } from '@iconify/tailwind';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/index.html', './src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [addIconSelectors(['carbon', 'svg-spinners'])],
} satisfies Config;
