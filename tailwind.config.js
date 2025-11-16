/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-dark': '#050816',
        'space-blue': '#1e3a8a',
        'space-purple': '#7c3aed',
        'accent-cyan': '#06b6d4',
        'accent-gold': '#fbbf24',
        'accent-orange': '#f97316',
        'accent-teal': '#14b8a6',
        'accent-magenta': '#ec4899',
        'accent-violet': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};