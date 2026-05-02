import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'blue-950': '#1e3a5f',
      },
    },
  },
  plugins: [],
}

export default config
