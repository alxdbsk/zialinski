/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			red: '#531024',
			white: '#FFF',
			black: '#000',
			'light-grey-2': '#EAEBEE',
			'light-grey-1': '#F4F5F6',
			'dark-grey-1': '#131313',
			'dark-grey-2': '#2C2C2C',
			'dark-grey-3': '#494949',
			'dark-grey-4': '#4D4D4D',
			'dark-blue': '#112044'
		},
		extend: {
			scale: {
				200: '2'
			},
			spacing: {
				15: '3.75rem',
				30: '7.5rem',
				'100px': '100px'
			},
			borderRadius: {
				40: '40px',
				20: '20px'
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				'title-1-medium': ['36px', { lineHeight: '110%', fontWeight: 500 }],
				'title-1-regular': ['36px', { lineHeight: '140%', fontWeight: 400 }],
				'title-2-medium': ['32px', { lineHeight: '140%', fontWeight: 500 }],
				'title-3-light': ['27px', { lineHeight: '140%', fontWeight: 300 }],
				'subtitle-1-regular': ['24px', { lineHeight: '140%', fontWeight: 400 }],
				'description-1-regular': ['20px', { lineHeight: '150%', fontWeight: 400 }],
				'description-2-regular': ['12px', { lineHeight: '150%', fontWeight: 400 }],
				'label-1-medium': ['16px', { lineHeight: '140%', fontWeight: 500 }],
				'label-2-medium': ['12px', { lineHeight: '16px', fontWeight: 500 }]
			}
		}
	},
	plugins: []
}
