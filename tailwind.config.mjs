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
				'dm-sans': 'var(--font-dm-sans)'
			},
			container: {
				center: true,
				screens: {
					'2xl': '1920px'
				}
			},
			colors: {
				'light-blue': '#0380FF',
				'blue-sky': '#4CA0FF',
				sand: '#F78D74',
				'charcoal-gray': '#414E58',
				'dark-gray': '#414141',
				'light-sky-blue': '#E8EFFF',
				'light-gray': '#696969'
			},
			boxShadow: {
				'card-primary':
					'0px 196.112px 54.814px 0px rgba(179, 179, 179, 0.00), 0px 125.463px 49.941px 0px rgba(179, 179, 179, 0.01), 0px 70.649px 42.633px 0px rgba(179, 179, 179, 0.05), 0px 31.67px 31.67px 0px rgba(179, 179, 179, 0.09), 0px 7.918px 17.053px 0px rgba(179, 179, 179, 0.10);'
			}
		}
	},
	plugins: []
}
