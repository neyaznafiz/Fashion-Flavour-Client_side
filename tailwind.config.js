module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

// , './node_modules/tw-elements/dist/js/**/*.js'