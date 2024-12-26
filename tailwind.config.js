/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        head: '2.88rem',
      },
      backgroundImage: {
        'texture-1': "url('/texture/texture-1.png')",
        'texture-2': "url('/texture/texture-2.png')",
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50%) translateY(20px)',
          },
          '100%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
      },
      fontFamily: {
        sans: 'Switzer, system-ui, sans-serif',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}