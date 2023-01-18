/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			black: "#000",
			card_black: "#181818",
			med_black: "#121212",
			light_black: "#333",
			white: "#fff",
			light_grey: "#a7a7a7",
			shadow_grey: "#FBFAFA",
			select_grey: "#282828",
			decorative_green: "#1ed760",
		},
		extend: {
			gridTemplateColumns: {
				main: "290px minmax(0, 1fr)",
				musicCard: "repeat(5,minmax(200px,1fr))",
			},
			gridTemplateRows: {
				main: "64px minmax(0, 1fr)",
			},
			fontFamily: {
				opensans: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
