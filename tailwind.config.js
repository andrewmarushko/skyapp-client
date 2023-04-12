import { fontFamily, colors } from 'tailwindcss/defaultTheme';
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

        sk: {
          //accents
          accent: {
            1: 'var(--accents-1)',
            2: 'var(--accents-2)',
            3: 'var(--accents-3)',
            4: 'var(--accents-4)',
            5: 'var(--accents-5)',
            6: 'var(--accents-6)',
            7: 'var(--accents-7)',
            8: 'var(--accents-8)',
          },
          //bg-colors
          bg: {
            light: 'var(--geist-background-light)',
            dark: 'var(--geist-background-dark)'
          },
          //link
          link: 'var(--geist-link-color)',
          //custom colors from geist pallette
          secondary: {
            lighter: 'var(--geist-secondary-lighter)',
            light: 'var(--geist-secondary-light)',
            DEFAULT: 'var(--geist-secondary)',
            dark: 'var(--geist-secondary-dark)'
          },
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
        }
      },
      borderRadius: {
        default: 'var(--geist-radius)',
        marketing: 'var(--geist-marketing-radius)',
      },
      fontSize: {
        64: 'var(--fs-64)',
      },
      lineHeight: {
        74: 'var(--lh-74)',
      },
      letterSpacing: {
        tightTitle: 'var(--letter-spacing-title)',
        tightSubtitle: 'var(--letter-spacing-subtitle)'
      },
      boxShadow: {
        'geist-shadow-sm': 'var(--shadow-small)',
        'geist-shadow-md': 'var(--shadow-medium)',
        'border-shadow-white': 'var(--shadow-medium-border)'
      },
      transitionProperty: {
        boxShadow: 'box-shadow',
      },
      transitionTimingFunction: {
        ease: 'ease'
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
