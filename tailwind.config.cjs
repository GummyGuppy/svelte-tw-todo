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
			}
    },
  },
  plugins: [require("tailwindcss-animate")],
}
