import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63',
        secondary: '#9C27B0',
        accent: '#FF69B4',
      },
    },
  },
  plugins: [],
}
export default config
