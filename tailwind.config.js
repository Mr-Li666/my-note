/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx,ts}',
    './src/*.tsx',
    './index.html',
    './src/App.tsx',
  ],
  theme: {
    colors: {
      'bili-title': '#61666D',
      'bili-primary': '#00aeec',
      'bili-success': '#2ac864',
      'bili-warning': '#ff7f24',
      'bili-error': '#f85a54',
      'bili-primary-bg': '#EFFBFF',
      'bili-text-4': '#C9CCD0',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
