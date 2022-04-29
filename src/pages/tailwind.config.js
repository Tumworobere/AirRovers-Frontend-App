/* eslint-disable */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html', './*.js', './**/*.js', './**/*.html', './**/**/*.html', './**/**/*.js'],
  },
  content: ['./src/**/*.{html,js}'],
  darkMode: false,
  theme: {},
  variants: {
    extend: {},
  },
};
