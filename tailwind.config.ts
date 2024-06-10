import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				'red': '#af1315',
				'black': '#000000',
				'white': '#ffffff',
				'black-10': '#101010',
				'black-100': '#FFFFFF'
			},
			borderRadius: {
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			//todo: convert to rem
			//add for padding margin too
            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem'
            }
		}
	},
    plugins: [
        require('@tailwindcss/typography'),
    // ...
  ],
};

export default config;
