/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#f5f4f1',
          dark: '#303030',
          red: '#ff5277',
          purple: '#7f5af0',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    }
  },
  plugins: [require('tailwindcss-dark-mode')(),],
  darkMode: 'class',
}