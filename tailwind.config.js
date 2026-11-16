/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F3EC',
        sand: '#EDE6DA',
        ink: '#1F1D24',
        smoke: '#5A5662',
        lavender: '#CDBEFF',
        volt: '#2E4CFF',
        coral: '#FF6F59',
        lime: '#D9F46A',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1320px', prose: '62ch' },
      letterSpacing: { squeeze: '-0.045em' },
    },
  },
  plugins: [],
};
