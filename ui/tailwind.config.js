/* eslint-disable @typescript-eslint/no-require-imports */
const DEFAULT_THEME = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,ts,js,html}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...DEFAULT_THEME.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
