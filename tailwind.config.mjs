/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./src/**/*.{astro,js,jsx,ts,tsx}'
		// Incluye cualquier otra extensión de archivo que uses
	],
	theme: {
		extend: {
			fontFamily: {
				'work-sans': 'var(--font-work-sans)'
			},
			container: {
				center: true,
				screens: {
					'2xl': '1920px'
				}
			},
			colors: {
				'light-blue': '#0380ff',
				'semi-dark-blue': '#0865A9',
				'light-mustard': '#c4c400',
				'lime-green': '#99c521'
			}
		}
	},
	plugins: []
}
