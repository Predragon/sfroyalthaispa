/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e7',
          100: '#f9ecc4',
          200: '#f3dc9a',
          300: '#e5c66a',
          400: '#d9b64d',
          500: '#cbab44',
          600: '#b8973a',
          700: '#9a7d2f',
          800: '#7d6526',
          900: '#65511f',
        },
        spa: {
          dark: '#4a1f1f',
          darker: '#371414',
          darkest: '#2a0f0f',
          accent: '#cbab44',
          light: '#f5f0eb',
          muted: '#911d1d',
          soft: '#e49b9b',
        }
      },
      fontFamily: {
        serif: ['Source Serif Pro', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '4px',
        'image': '16px',
        'button': '8px',
      },
    },
  },
  plugins: [],
}
