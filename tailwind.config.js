module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '768px',
        xl: '1280px',
        '2xl': '640px'
      }
    },
    extend: {
      gridTemplateColumns: {
        feed: '1fr 18rem'
      },
      gridTemplateRows: {
        feedRow: 'min-content 1fr'
      }
    }
  },
  plugins: []
};
