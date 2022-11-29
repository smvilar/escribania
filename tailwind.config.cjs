const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/escribania';

module.exports = {
  content: ['./src/**/*.{html,js,svelte,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat',
        serif: 'Libre Baskerville'
      },
      backgroundImage: {
        banner: `url('${basePath}/img/banner.jpg')`
      }
    }
  },
  plugins: []
};
