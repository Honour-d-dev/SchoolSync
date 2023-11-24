import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1220px',
      '2xl': '1440px',
      '3xl': '1700px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Inconsolata: ['Inconsolata', 'monospace'],
        Tomorrow: ['Tomorrow', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary_text: '#050200',
        secondary_text: '#352D2A',
        primary: {
          100: '#AAC2E3',
          200: '#5584C7',
          300: '#0047AB',
          400: '#002F72',
        },
        secondary: {
          100: '#F8F7F6',
          200: '#F0F0ED',
          300: '#E9E8E4',
          400: '#9B9B98',
        },
        accent: {
          100: '#F0F0ED',
          200: '#FAF0BE',
          300: '#F6E27E',
          400: '#F1D33D',
        },
        purple: '#8C7CFF',
        pink: '#ED5FBD',
        violet: '#F16565',
        orange: '#FF964B',
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      backgroundImage: {
        footer: "url('/images/FooterBanner.jpeg')",
        review: "url('/images/ReviewFrame.jpg')",
        signUp: "url('/images/signUpWallpaper.png')",
      },
    },
  },
}
export default config
