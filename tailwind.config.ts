import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import fluid, {extract, screens, fontSize} from 'fluid-tailwind'

const generateShades = (color: string, name: string) => {
	const shades = {};
	for (let i = 1; i <= 9; i++) {
		shades[`${name}-${i * 100}`] = `${color}${i}0`;
	}
	return shades;
};
const textSizes = {
	'4xs': '.375rem', // 6px
	'3xs': '.5rem', // 8px
	'2xs': '.625rem', // 10px
	xs: '.75rem', // 12px
	sm: '.875rem', // 14px
	base: '1rem', // 16px
	lg: '1.125rem', // 18px
	xl: '1.25rem', // 20px
	'2xl': '1.5rem', // 24px
	'3xl': '1.875rem', // 30px
	'3.5xl': '2rem', // 30px
	'4xl': '2.25rem', // 36px
	'4.5xl': '2.5rem', // 40px
	'5xl': '3rem', // 48px
	'5.5xl': '3.5rem', // 56px
	'5.75xl': '3.75rem', // 60px
	'6xl': '4rem', // 64px
	'6.5xl': '4.5rem', // 72px
	'7xl': '5rem', // 80px
	'7.5xl': '5.5rem', // 88px
	'8xl': '6rem', // 96px
	'8.5xl': '6.5rem', // 104px
	'9xl': '7rem', // 112px
	'9.5xl': '7.5rem', // 120px
	'10xl': '8rem', // 128px
	display1: '3.75rem', // 60
	display2: '3.125rem', // 50
	display3: '2.5rem', // 40
	display4: '2.125rem' // 34
};

const generateSizes = () => {
	const sizes = {};
	for (let i = 0.25; i <= 10; i += 0.25) {
		sizes[`${i}rem`] = `${i}rem`;
	}
	return sizes;
};

const config: Config = {
	darkMode: ['class'],
    content: {
        files: ['./src/**/*.{html,js,svelte,ts}'],
        extract
    },
	safelist: ['dark'],
	theme: {
		screens,
        fontSize,
		container: {
			center: true,
			padding: '2rem',
			screens: {
				// TODO: FIGURE OUT RIGHT SIZES
				sm: '568px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// ...generateShades('#922411', 'red'),
				// ...generateShades('#a36229', 'golden'),
				// ...generateShades('#101010', 'black10'),
				text: '#d3cfc3', // Light beige for text
				background: '#030303', // Deep black background
				primary: '#912411', // Vibrant red
				secondary: '#a46329', // Warm brownish-orange
				accent: '#c6a25a' // Golden tone
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				mono: [...fontFamily.mono],
				pavelt: ['Pavelt', 'sans-serif'],
				neuemachina: ['neuemachina', 'sans-serif'],
				martianmono: ['neuemachina', 'mono']
			},
			borderRadius: generateSizes(),
			fontSize: textSizes,
			padding: generateSizes(),
			margin: generateSizes(),
			spacing: generateSizes(),
			borderWidth: generateSizes(),
			leading: {
				none: 1,
				tight: 1.25,
				snug: 1.375,
				normal: 1.5,
				relaxed: 1.625,
				loose: 2
			},
			tracking: {
				condensed: '-.15em',
				tightest: '-.1em',
				tighter: '-.05em',
				tight: '-.025em',
				normal: '0',
				wide: '.025em',
				wider: '.05em',
				widest: '.1em',
				extended: '.15em'
			}
		}
	},
	plugins: [
        fluid,
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
		// ...
	]
};

export default config;
