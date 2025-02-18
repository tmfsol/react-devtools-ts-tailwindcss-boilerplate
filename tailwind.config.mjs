import fluid, { extract } from 'fluid-tailwind';
import debugScreens from 'tailwindcss-debug-screens';

const tailwindConfig = {
	content: {
		files: ['./src/**/*.{js,ts,jsx,tsx}'],
		extract
	},
	darkMode: 'class',

	corePlugins: {
		preflight: false
	},
	important: '#root',

	theme: {
		fontFamily: {
			sans: ['"Be Vietnam Pro"', 'sans-serif']
		},

		colors: {
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000',
			white: '#fff',

			primary: {
				DEFAULT: 'rgba(var(--color-primary-default))',
				50: 'rgba(var(--color-primary-50))',
				100: 'rgba(var(--color-primary-100))',
				200: 'rgba(var(--color-primary-200))',
				300: 'rgba(var(--color-primary-300))',
				400: 'rgba(var(--color-primary-400))',
				500: 'rgba(var(--color-primary-500))',
				600: 'rgba(var(--color-primary-600))',
				700: 'rgba(var(--color-primary-700))',
				800: 'rgba(var(--color-primary-800))',
				900: 'rgba(var(--color-primary-900))',
				950: 'rgba(var(--color-primary-950))'
			},

			// Accent Colors
			error: {
				DEFAULT: 'rgba(var(--color-error-default))',
				50: 'rgba(var(--color-error-50))',
				100: 'rgba(var(--color-error-100))',
				200: 'rgba(var(--color-error-200))',
				300: 'rgba(var(--color-error-300))',
				400: 'rgba(var(--color-error-400))',
				500: 'rgba(var(--color-error-500))',
				600: 'rgba(var(--color-error-600))',
				700: 'rgba(var(--color-error-700))',
				800: 'rgba(var(--color-error-800))',
				900: 'rgba(var(--color-error-900))',
				950: 'rgba(var(--color-error-950))'
			},

			success: {
				DEFAULT: 'rgba(var(--color-success-default))',
				50: 'rgba(var(--color-success-50))',
				100: 'rgba(var(--color-success-100))',
				200: 'rgba(var(--color-success-200))',
				300: 'rgba(var(--color-success-300))',
				400: 'rgba(var(--color-success-400))',
				500: 'rgba(var(--color-success-500))',
				600: 'rgba(var(--color-success-600))',
				700: 'rgba(var(--color-success-700))',
				800: 'rgba(var(--color-success-800))',
				900: 'rgba(var(--color-success-900))',
				950: 'rgba(var(--color-success-950))'
			},

			warning: {
				DEFAULT: 'rgba(var(--color-warning-default))',
				50: 'rgba(var(--color-warning-50))',
				100: 'rgba(var(--color-warning-100))',
				200: 'rgba(var(--color-warning-200))',
				300: 'rgba(var(--color-warning-300))',
				400: 'rgba(var(--color-warning-400))',
				500: 'rgba(var(--color-warning-500))',
				600: 'rgba(var(--color-warning-600))',
				700: 'rgba(var(--color-warning-700))',
				800: 'rgba(var(--color-warning-800))',
				900: 'rgba(var(--color-warning-900))',
				950: 'rgba(var(--color-warning-950))'
			},

			info: {
				DEFAULT: 'rgba(var(--color-info-default))',
				50: 'rgba(var(--color-info-50))',
				100: 'rgba(var(--color-info-100))',
				200: 'rgba(var(--color-info-200))',
				300: 'rgba(var(--color-info-300))',
				400: 'rgba(var(--color-info-400))',
				500: 'rgba(var(--color-info-500))',
				600: 'rgba(var(--color-info-600))',
				700: 'rgba(var(--color-info-700))',
				800: 'rgba(var(--color-info-800))',
				900: 'rgba(var(--color-info-900))',
				950: 'rgba(var(--color-info-950))'
			},

			// https://v3.tailwindcss.com/docs/customizing-colors - slate, gray, zinc, stone tôi chưa đủ kiến thức về design nên hiện tại tôi cho giống neutral
			// gray color(tôi xem nó như neutral) base #737373 - only reference like color-text, color-disabled, color-border,...
			gray: {
				DEFAULT: 'rgba(var(--color-gray-default))',
				50: 'rgba(var(--color-gray-50))',
				100: 'rgba(var(--color-gray-100))',
				200: 'rgba(var(--color-gray-200))',
				300: 'rgba(var(--color-gray-300))',
				400: 'rgba(var(--color-gray-400))',
				500: 'rgba(var(--color-gray-500))',
				600: 'rgba(var(--color-gray-600))',
				700: 'rgba(var(--color-gray-700))',
				800: 'rgba(var(--color-gray-800))',
				900: 'rgba(var(--color-gray-900))',
				950: 'rgba(var(--color-gray-950))'
			},

			text: {
				DEFAULT: 'rgba(var(--color-text-default))',
				400: 'rgba(var(--color-text-400))',
				500: 'rgba(var(--color-text-500))',
				700: 'rgba(var(--color-text-700))',
				900: 'rgba(var(--color-text-900))'
			},

			disabled: {
				DEFAULT: 'rgba(var(--color-disabled-default))',
				100: 'rgba(var(--color-disabled-100))',
				200: 'rgba(var(--color-disabled-200))',
				300: 'rgba(var(--color-disabled-300))'
			},

			border: {
				DEFAULT: 'rgba(var(--color-border-default))',
				200: 'rgba(var(--color-border-200))',
				500: 'rgba(var(--color-border-500))',
				600: 'rgba(var(--color-border-600))'
			},

			bg: {
				DEFAULT: 'rgba(var(--color-bg-default))',
				50: 'rgba(var(--color-bg-50))',
				100: 'rgba(var(--color-bg-100))'
			}
		},

		fontSize: {
			// https://fluid.tw/#limitations, 1rem = 16px, convert px to rem follow concept of fluid-tailwind
			// import { fontSize } from 'fluid-tailwind';
			xs: ['0.75rem', '1rem'], // font-size: 12px, line-height: 16px
			sm: ['0.875rem', '1.25rem'], // font-size: 14px, line-height: 20px
			base: ['1rem', '1.5rem'], // font-size: 16px, line-height: 24px
			lg: ['1.125rem', '1.75rem'], // font-size: 18px, line-height: 28px
			xl: ['1.25rem', '1.75rem'], // font-size: 20px, line-height: 28px
			'2xl': ['1.5rem', '2rem'], // font-size: 24px, line-height: 32px
			'3xl': ['1.875rem', '2.25rem'], // font-size: 30px, line-height: 36px
			'4xl': ['2.25rem', '2.5rem'], // font-size: 36px, line-height: 40px
			'5xl': ['3rem', '3rem'], // font-size: 48px, line-height: 48px
			'6xl': ['3.75rem', '3.75rem'], // font-size: 60px, line-height: 60px
			'7xl': ['4.5rem', '4.5rem'], // font-size: 72px, line-height: 72px
			'8xl': ['6rem', '6rem'], // font-size: 96px, line-height: 96px
			'9xl': ['8rem', '8rem'] // font-size: 128px, line-height: 128px
		},

		screens: {
			// https://fluid.tw/#limitations, 1rem = 16px, convert px to rem follow concept of fluid-tailwind
			// import {  screens } from 'fluid-tailwind';
			sm: '40rem', // 640px
			md: '48rem', // 768px
			lg: '64rem', // 1024px
			xl: '80rem', // 1280px
			'2xl': '96rem', // 1536px
			'3xl': '120rem' // 1920px
		}
	},
	plugins: [fluid, debugScreens]
};

export default tailwindConfig;
