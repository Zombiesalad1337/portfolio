import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

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
	'display1': '3.75rem', // 60
	'display2': '3.125rem', // 50
	'display3': '2.5rem', // 40
	'display4': '2.125rem', // 34
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
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
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
				...generateShades('#AF1315', 'red'),
				...generateShades('#000000', 'black'),
				...generateShades('#101010', 'black10'),
				black: '#000000',
				'black-light': '#333333',
				'black-dark': '#000000',
				red: '#AF1315',
				'red-light': '#B73739',
				'red-dark': '#960E0F',
				white: '#FFFFFF',
				'white-light': '#F0F0F0',
				'white-dark': '#CCCCCC',
				black10: '#101010',
				'black10-light': '#1A1A1A',
				'black10-dark': '#080808'
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
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
		// ...
	]
};

export default config;
