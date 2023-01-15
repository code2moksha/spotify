/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			black: "#000",
			med_black: "#121212",
			light_black: "#333",
			white: "#fff",
			light_grey: "#a7a7a7",
		},
		extend: {
			gridTemplateColumns: {
				main: "290px minmax(0, 1fr)",
			},
			gridTemplateRows: {
				main: "64px minmax(0, 1fr)",
			},
		},
	},
	plugins: [],
};
