/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {

    letterSpacing: {
      widest: '4px'
    },

    extend: {
      animationDuration: {
				"2s": "2s",
			},
      backgroundImage: {
        'ocean': "url('https://img.icons8.com/emoji/48/000000/dodo.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
