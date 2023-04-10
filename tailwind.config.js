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

        'accent-1': 'var(--accents-1)',
        'accent-2': 'var(--accents-2)',
        'accent-3': 'var(--accents-3)',
        'accent-4': 'var(--accents-4)',
        'accent-5': 'var(--accents-5)',
        'accent-6': 'var(--accents-6)',
        'accent-7': 'var(--accents-7)',
        'accent-8': 'var(--accents-8)',
        foreground: 'var(--geist-foreground)',
        background: 'var(--geist-background)',
        'secondary-lighter': 'var(--geist-secondary-lighter)',
        'secondary-light': 'var(--geist-secondary-light)',
        secondary: 'var(--geist-secondary)',
        'secondary-dark': 'var(--geist-secondary-dark)',
        'error-lighter': 'var(--geist-error-lighter)',
        'error-light': 'var(--geist-error-light)',
        error: 'var(--geist-error)',
        'error-dark': 'var(--geist-error-dark)',
        'success-lighter': 'var(--geist-success-lighter)',
        'success-light': 'var(--geist-success-light)',
        success: 'var(--geist-success)',
        'success-dark': 'var(--geist-success-dark)',
        'warning-lighter': 'var(--geist-warning-lighter)',
        'warning-light': 'var(--geist-warning-light)',
        warning: 'var(--geist-warning)',
        'warning-dark': 'var(--geist-warning-dark)',
        'violet-lighter': 'var(--geist-violet-lighter)',
        'violet-light': 'var(--geist-violet-light)',
        violet: 'var(--geist-violet)',
        'violet-dark': 'var(--geist-violet-dark)',
        'cyan-lighter': 'var(--geist-cyan-lighter)',
        'cyan-light': 'var(--geist-cyan-light)',
        cyan: 'var(--geist-cyan)',
        'cyan-dark': 'var(--geist-cyan-dark)',
        'highlight-purple': 'var(--geist-highlight-purple)',
        'highlight-magenta': 'var(--geist-highlight-magenta)',
        'highlight-pink': 'var(--geist-highlight-pink)',
        'highlight-yellow': 'var(--geist-highlight-yellow)',
          link: 'var(--geist-link-color)',
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
