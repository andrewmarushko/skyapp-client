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
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...purple,
        ...indigo,

        //accents
        accent: {
          DEFAULT: 'var(--accent)',
          100: 'var(--accents-1)',
          200: 'var(--accents-2)',
          300: 'var(--accents-3)',
          400: 'var(--accents-4)',
          500: 'var(--accents-5)',
          600: 'var(--accents-6)',
          700: 'var(--accents-7)',
          800: 'var(--accents-8)',
          900: 'var(--accents-9)',
        },
        //bg-colors
        sk: {
          light: 'var(--geist-background-light)',
          dark: 'var(--geist-background-dark)'
        },
        //link
        link: 'var(--geist-link-color)',
        //secondary colors
        secondary: {
          lighter: 'var(--geist-secondary-lighter)',
          light: 'var(--geist-secondary-light)',
          DEFAULT: 'var(--geist-secondary)',
          dark: 'var(--geist-secondary-dark)'
        },
        //custom colors from geist pallette
        error: {
          lighter: 'var(--geist-error-lighter)',
          light: 'var(--geist-error-light)',
          DEFAULT: 'var(--geist-error)',
          dark: 'var(--geist-error-dark)',
        },
        success: {
          lighter: 'var(--geist-success-lighter)',
          light: 'var(--geist-success-light)',
          DEFAULT: 'var(--geist-success)',
          dark: 'var(--geist-success-dark)',
        },
        warning: {
          lighter: 'var(--geist-warning-lighter)',
          light: 'var(--geist-warning-light)',
          DEFAULT: 'var(--geist-warning)',
          dark: 'var(--geist-warning-dark)',
        },
        violet: {
          lighter: 'var(--geist-violet-lighter)',
          light: 'var(--geist-violet-light)',
          DEFAULT: 'var(--geist-violet)',
          dark: 'var(--geist-violet-dark)',
        },
        cyan: {
          lighter: 'var(--geist-cyan-lighter)',
          light: 'var(--geist-cyan-light)',
          DEFAULT: 'var(--geist-cyan)',
          dark: 'var(--geist-cyan-dark)',
        },
        hightlight: {
          purple: 'var(--geist-highlight-purple)',
          magenta: 'var(--geist-highlight-magenta)',
          pink: 'var(--geist-highlight-pink)',
          yellow: 'var(--geist-highlight-yellow)',
        },
        //experimental gray
        'experimental-gray': {
          DEFAULT: 'var(--geist-experimental-color-gray-1)',
          100: 'var(--geist-experimental-color-gray-2)',
          200: 'var(--geist-experimental-color-gray-3)',
          300: 'var(--geist-experimental-color-gray-4)',
          400: 'var(--geist-experimental-color-gray-5)',
          500: 'var(--geist-experimental-color-gray-6)',
          600: 'var(--geist-experimental-color-gray-7)',
          700: 'var(--geist-experimental-color-gray-8)',
          800: 'var(--geist-experimental-color-gray-9)',
          900: 'var(--geist-experimental-color-gray-10)',
        },
        //experimental gray a for dark theme
        'experimental-gray-a-dark': {
          DEFAULT: 'var(--geist-experimental-color-gray-a1-dark)',
          100: 'var(--geist-experimental-color-gray-a2-dark)',
          200: 'var(--geist-experimental-color-gray-a3-dark)',
          300: 'var(--geist-experimental-color-gray-a4-dark)',
          400: 'var(--geist-experimental-color-gray-a5-dark)',
          500: 'var(--geist-experimental-color-gray-a6-dark)',
          600: 'var(--geist-experimental-color-gray-a7-dark)',
          700: 'var(--geist-experimental-color-gray-a8-dark)',
          800: 'var(--geist-experimental-color-gray-a9-dark)',
          900: 'var(--geist-experimental-color-gray-a10-dark)',
        },
        //experimental gray a for light theme
        'experimental-gray-a': {
          DEFAULT: 'var(--geist-experimental-color-gray-a1)',
          100: 'var(--geist-experimental-color-gray-a2)',
          200: 'var(--geist-experimental-color-gray-a3)',
          300: 'var(--geist-experimental-color-gray-a4)',
          400: 'var(--geist-experimental-color-gray-a5)',
          500: 'var(--geist-experimental-color-gray-a6)',
          600: 'var(--geist-experimental-color-gray-a7)',
          700: 'var(--geist-experimental-color-gray-a8)',
          800: 'var(--geist-experimental-color-gray-a9)',
          900: 'var(--geist-experimental-color-gray-a10)',
        },
        //button custom colors
        button: {
          default: {
            fg: 'var(--button-custom-fg)',
            bg: 'var(--button-custom-bg)',
            border: 'var(--button-custom-border)',
            'fg-active': 'var(--button-custom-fg-active)',
            'bg-active': 'var(--button-custom-bg-active)',
            'border-active': 'var(--button-custom-border-active)',
            'fg-hover': 'var(--button-custom-fg-hover)',
            'bg-hover': 'var(--button-custom-bg-hover)',
            'border-hover': 'var(--button-custom-border-hover)',
          }
        },
        'geist-foreground': 'var(--geist-foreground)'
      },
      spacing: {
        'geist-gap-half': 'var(--geist-gap-half)'
      },
      borderRadius: {
        DEFAULT: 'var(--geist-radius)',
        marketing: 'var(--geist-marketing-radius)',
        link: 'var(--geist-link-radius)',
      },
      fontSize: {
        64: 'var(--font-size-64)',
        'geist-action-large-font': 'var(--geist-action-large-font)',
        'geist-action-small-font': 'var(--geist-action-small-font)',
        'geist-action-font': 'var(--geist-action-font)'
      },
      lineHeight: {
        14: 'var(--line-height-14)',
        74: 'var(--line-height-74)',
        'geist-action-large-line-height': 'var(--geist-action-large-line-height)',
        'geist-action-small-line-height': 'var(--geist-action-small-line-height)',
        'geist-action-line-height': 'var(--geist-action-line-height)'
      },
      height: {
        'geist-action-large-height': 'var(--geist-action-large-height)',
        'geist-action-small-height': 'var(--geist-action-small-height)',
        'geist-action-height': 'var(--geist-action-height)'
      },
      letterSpacing: {
        tight: {
          title: 'var(--letter-spacing-title)',
          subtitle: 'var(--letter-spacing-subtitle)'
        }
      },
      boxShadow: {
        'geist-shadow-sm': 'var(--shadow-small)',
        'geist-shadow-md': 'var(--shadow-medium)',
        'geist-shadow-sm-dark': 'var(--shadow-small-dark)',
        'geist-shadow-md-dark': 'var(--shadow-medium-dark)',
        'geist-border-shadow-white': 'var(--shadow-medium)',
        'geist-border-shadow-white-dark': 'var(--shadow-medium-border)',
      },
      transitionProperty: {
        color: 'var(--transition-property-color)',
        'bg-and-color': 'var(--transition-property-color-and-background)'
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-function-default-ease)'
      },
      minWidth: {
        164: "164px"
      },
      maxWidth: {
        164: "164px"
      },
      animation: {
        'loading-blink': 'loading-blink 1.4s infinite both'
      },
      keyframes: {
        'loading-blink': {
          '0%': { opacity: 0.2 },
          '20%': { transform: 1 },
          '100%': { transform: 0.2 },
        }
      }
    },
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
};
