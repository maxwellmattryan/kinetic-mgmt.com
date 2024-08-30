/* eslint-disable @typescript-eslint/no-require-imports */
const DEFAULT_THEME = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{svelte,ts,js,html}'],
	theme: {
		extend: {
			/**
			 * Info about customizing the default font:
			 * https://tailwindcss.com/docs/font-family#customizing-the-default-font
			 */
			fontFamily: {
				sans: ['Montserrat', ...DEFAULT_THEME.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
