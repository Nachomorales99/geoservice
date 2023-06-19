/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			beige: '#ccb49c',
			beige_oscuro: '#9c745c',
			marron_oscuro: '#6c2c04',
			marron_claro: '#84441c',
			crema: '#e4b494',
			gray: ' #737373',
			white: '#ffffff',
			black: '#000000',
			slate_900: '#0f172a',
			slate_950: '#020617',
			slate_700: '#334155',
			slate_600: '#475569',
		},
	},
	plugins: [],
};
