import plugin from 'tailwindcss/plugin';
const { blackA, mauve, violet, indigo, purple } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],

  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      screens: {
        //Please keep in mind, that this breakpoint has 1150px value on vercel.com site
        lg: '950px',
      },
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,

        //accents
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          100: 'var(--accents-1)',
          200: 'var(--accents-2)',
          300: 'var(--accents-3)',
          400: 'var(--accents-4)',
          500: 'var(--accents-5)',
          600: 'var(--accents-6)',
          700: 'var(--accents-7)',
          800: 'var(--accents-8)',
          900: 'rgb(var(--accents-9) / <alpha-value>)',
        },
        //bg-colors
        sk: {
          light: 'rgb(var(--background-light) / <alpha-value>)',
          dark: 'rgb(var(--background-dark) / <alpha-value>)',
        },
        //custom colors
        error: {
          lighter: 'var(--error-lighter)',
          light: 'var(--error-light)',
          DEFAULT: 'var(--error)',
          dark: 'var(--error-dark)',
        },
        success: {
          lighter: 'var(--success-lighter)',
          light: 'var(--success-light)',
          DEFAULT: 'var(--success)',
          dark: 'var(--success-dark)',
        },
        warning: {
          lighter: 'var(--warning-lighter)',
          light: 'var(--warning-light)',
          DEFAULT: 'var(--warning)',
          dark: 'var(--warning-dark)',
        },
        violet: {
          lighter: 'var(--violet-lighter)',
          light: 'var(--violet-light)',
          DEFAULT: 'var(--violet)',
          dark: 'var(--violet-dark)',
        },
        hightlight: {
          purple: 'var(--highlight-purple)',
          magenta: 'var(--highlight-magenta)',
          pink: 'var(--highlight-pink)',
          yellow: 'var(--highlight-yellow)',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius-default)',
        xs: 'var(--border-radius-xs)',
      },
      lineHeight: {
        0: 'var(--line-height-0)',
        14: 'var(--line-height-14)',
        18: 'var(--line-height-18)',
      },
      letterSpacing: {
        'tight-title':'var(--letter-spacing-title)',
        'tight-subtitle': 'var(--letter-spacing-subtitle)'
      },
      boxShadow: {
        sm: 'var(--shadow-small)',
        'focus': 'var(--shadow-focus)',
        '3xl': 'var(--shadow-3xl)',
        'scroll': 'var(--shadow-scroll)',
        'scroll-dark': 'var(--shadow-scroll-dark)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-ease)'
      },
      transitionProperty: {
        'background-color-and-box-shadow': 'var(--transition-property-background-color-and-box-shadow)',
        'background-color': 'var(--transition-property-background-color)',
        'colors-shadow-transform': 'var(--transition-property-colors-shadow-transform)',
        'max-height': 'var(--transition-property-max-height)',
        'width-height': 'var(--transition-width-height)',
        'width-transform': 'var(--transition-width-transform)',
        color: 'var(--transition-property-color)',
        'bg-and-color': 'var(--transition-property-color-and-background)',
      },
      transformOrigin: {
        'top-center': 'var(--transform-origin-top-center)',
      },
      backdropSaturate: {
        180: 'var(--backdrop-saturate-180)',
      },
      animation: {
        'loading-blink': 'loading-blink 1.4s infinite both',
        'navigation-menu-scale-in': 'navigation-menu-scale-in 0.2s ease',
        'navigation-menu-scale-out': 'navigation-menu-scale-out 0.2s ease',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease",
        "fade-out": "fade-out 0.2s ease",
      },
      keyframes: {
        'loading-blink': {
          '0%': { opacity: 0.2 },
          '20%': { transform: 1 },
          '100%': { transform: 0.2 },
        },
        'navigation-menu-scale-in': {
          '0%': { opacity: 0, transform: 'rotateX(-30deg) scale(.9)' },
          '100%': { opacity: 1, transform: 'rotateX(0deg) scale(1)'},
        },
        'navigation-menu-scale-out': {
          '0%': { opacity: 1, transform: 'rotateX(0deg) scale(1)'},
          '100%': { opacity: 0, transform: 'rotateX(-30deg) scale(.9)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        "fade-in": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        "fade-out": {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        }
      }
    },
    plugins: [
      require('tailwindcss-animate'),
      plugin(({ matchUtilities }) => {
        matchUtilities({
          perspective: (value) => ({
            perspective: value,
          }),
        });
      }),
    ],
  },
}
