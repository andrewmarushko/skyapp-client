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
      },
      borderRadius: {
        DEFAULT: 'var(--geist-radius)',
        marketing: 'var(--geist-marketing-radius)',
      },
      fontSize: {
        64: 'var(--font-size-64)',
      },
      lineHeight: {
        74: 'var(--line-height-74)',
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
        'box-shadow': 'box-shadow',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-function-default-ease)'
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
