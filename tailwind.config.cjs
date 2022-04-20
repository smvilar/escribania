const dev = process.env.NODE_ENV === 'development';
const basePath = dev ? '' : '/escribania';

module.exports = {
  content: ['./src/**/*.{html,js,svelte,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat'
      },
      backgroundImage: {
        'stone-texture': `url('${basePath}/img/stone-wall.jpg')`
      }
    }
  },
  plugins: []
};
