/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-l": "#ffbe71",
				"primary-r": "#ff626e",
			},
		},
	},
	plugins: [],
};
