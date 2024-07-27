/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Advent Pro', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/heroBg.webp')",
        'first-cat': "url('/src/assets/1_bg.png')",
        'second-cat': "url('/src/assets/2_bg.png')",
        'third-cat': "url('/src/assets/3_bg.png')",
        'fourth-cat': "url('/src/assets/4_bg.png')",
        'fifth-cat': "url('/src/assets/5_bg.png')",
        'sixth-cat': "url('/src/assets/6_bg.png')",
        'seventh-cat': "url('/src/assets/7_bg.png')",
        'eighth-cat': "url('/src/assets/8_bg.png')",
        'ninth-cat': "url('/src/assets/9_bg.png')",
      },
    },
  },
  plugins: [],
};
