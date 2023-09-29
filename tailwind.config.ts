import { type Config } from 'tailwindcss';
import { COLORS } from './src/constants';

const spacing = (base: number, limit: number, unit: string = 'px') => {
  const output = {};
  let n = 1;
  let value: number;

  do {
    value = base * n;
    output[value] = `${value}${unit}`;
    n++;
  } while (value <= limit);

  return output;
};

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: {
      inherit: 'inherit',
      '0': '0',
      '1': '1px',
      '4': '4px',
      ...spacing(8, 512),
    },
    screens: {
      phone: '480px',
      tablet: '768px',
      desktop: '1024px',
    },
    colors: {
      transparent: 'transparent',
      ...COLORS,
    },
    extend: {},
  },
  plugins: [],
};

export default config;
