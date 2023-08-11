/** @type {import('tailwindcss').Config} */

const spacing = (base, limit, unit = 'px') => {
  const output = {};
  let n = 1;
  let value;

  do {
    value = base * n;
    output[value] = `${value}${unit}`;
    n++;
  } while (value <= limit);

  return output;
};

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      inherit: 'inherit',
      0: 0,
      1: 1,
      4: 4,
      ...spacing(8, 512),
    },
    screens: {
      phone: '480px',
      tablet: '768px',
      desktop: '1024px',
    },
    extend: {},
  },
  plugins: [],
};
