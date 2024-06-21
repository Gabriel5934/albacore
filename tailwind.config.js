/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#158C61'
			},
			width: {
				'1/4': '25%'
			}
		}
	},

	plugins: [require('daisyui')]
};
