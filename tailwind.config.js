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
          DEFAULT: 'var(--accent)',
          100: 'var(--accents-1)',
          200: 'var(--accents-2)',
          300: 'var(--accents-3)',
          400: 'var(--accents-4)',
          500: 'var(--accents-5)',
          600: 'var(--accents-6)',
          // TODO: check using accent-700 and accent-800 in the project as I have set up the values from vercel palette for accent 800
          700: 'var(--accents-7)',
          800: 'var(--accents-8)',
          900: 'var(--accents-9)',
        },
        //bg-colors
        sk: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
          // TODO: remove this class in the component
          // 'menu-dark': 'var(--geist-menu-bg-dark)'
        },
        //custom colors from geist pallette
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
        // TODO: replace experimental gray classes with accent colors
        //experimental gray
        // 'experimental-gray': {
        //   DEFAULT: 'var(--geist-experimental-color-gray-1)',
        //   100: 'var(--geist-experimental-color-gray-2)',
        //   200: 'var(--geist-experimental-color-gray-3)',
        //   300: 'var(--geist-experimental-color-gray-4)',
        //   400: 'var(--geist-experimental-color-gray-5)',
        //   500: 'var(--geist-experimental-color-gray-6)',
        //   600: 'var(--geist-experimental-color-gray-7)',
        //   700: 'var(--geist-experimental-color-gray-8)',
        //   800: 'var(--geist-experimental-color-gray-9)',
        //   900: 'var(--geist-experimental-color-gray-10)',
        // },
        // TODO: replace button default classes with accent colors
        //button custom colors
        // button: {
        //   default: {
        //     fg: 'var(--button-custom-fg)',
        //     bg: 'var(--button-custom-bg)',
        //     border: 'var(--button-custom-border)',
        //     'fg-active': 'var(--button-custom-fg-active)',
        //     'bg-active': 'var(--button-custom-bg-active)',
        //     'border-active': 'var(--button-custom-border-active)',
        //     'fg-hover': 'var(--button-custom-fg-hover)',
        //     'bg-hover': 'var(--button-custom-bg-hover)',
        //     'border-hover': 'var(--button-custom-border-hover)',
        //   }
        // },
        // TODO: remove this class from the components
        // 'geist-foreground': 'var(--geist-foreground)'
      },
      // TODO: remove these spaces from the components and change them to the usual sizes
      spacing: {
        // 'geist-gap-half': 'var(--geist-gap-half)',
        // 'geist-gap': 'var(--geist-gap)',
        // 'geist-gap-quarter': 'var(--geist-gap-quarter)',
        // '1.5': 'var(--geist-space-3x)',
        // '2.5': 'var(--geist-space-5x)',
        // '0.5': 'var(--geist-space)',
        // 125: 'var(--geist-space-250x)',
      },
      borderRadius: {
        DEFAULT: 'var(--geist-radius)',
        // TODO: modify the classes names in the components
        '6.25rem': 'var(--border-radius-25x)',
        xs: 'var(--border-radius-xs)',
        // 100: 'var(--border-radius-100)',
        // 50: 'var(--border-radius-50)',
      },
      fontSize: {
        '4rem': 'var(--font-size-4rem)',
        // TODO: use tailwind classnames for this purpose
        // 'geist-action-large': 'var(--geist-action-large-font)',
        // 'geist-action-small': 'var(--geist-action-small-font)',
        // 'geist-action': 'var(--geist-action-font)',
        // 'geist-form': 'var(--geist-form-font)',
      },
      lineHeight: {
        0: 'var(--line-height-0)',
        // TODO: change 14px and 74px in components
        // 3.5: 'var(--line-height-3x-half)',
        18.5: 'var(--line-height-18x-half)',
        // '14px': 'var(--line-height-3x-half)',
        // '74px': 'var(--line-height-18x-half)',
        14: 'var(--line-height-14)',
        // TODO: use tailwind classnames for this purpose
        // 'geist-action-large': 'var(--geist-action-large-line-height)',
        // 'geist-action-small': 'var(--geist-action-small-line-height)',
        // 'geist-action': 'var(--geist-action-line-height)',
        // 'geist-form': 'var(--geist-form-line-height)',
      },
      height: {
        // TODO: remove these classes from the components
        // 'geist-action-large': 'var(--geist-action-large-height)',
        // 'geist-action-small': 'var(--geist-action-small-height)',
        // 'geist-action': 'var(--geist-action-height)',
        // 'geist-form': 'var(--geist-form-height)',
        // TODO: change 1px to px in the components
        // '1px': 'var(--header-1px)',
        // TODO: use tailwind classnames for this purpose
        // 'geist-gap-x2': 'var(--geist-gap-x2)',
      },
      minHeight: {
        'header-height': 'var(--header-height)',
      },
      maxHeight: {
        '60vh': 'var(--height-60vh)',
        // TODO: use tailwind classnames for this purpose
        // 'geist-action-height': 'var(--geist-action-height)',
        // 'geist-form-height': 'var(--geist-form-height)',
        // TODO: change 1px to px in the components
        // '1px': 'var(--header-1px)',
      },
      letterSpacing: {
        'tight-title':'var(--letter-spacing-title)',
        'tight-subtitle': 'var(--letter-spacing-subtitle)'
      },
      gridTemplateColumns: {
        // TODO change 1-3 to 1-2 in the component
        // '1-3': 'var(--grid-template-columns-1-2)' 
        '1-2': 'var(--grid-template-columns-1-2)'
      },
      boxShadow: {
        // TODO: remove geist word from components
        'custom-sm': 'var(--shadow-small)',
        'custom-md': 'var(--shadow-medium)',
        'custom-sm-dark': 'var(--shadow-small-dark)',
        // TODO: use custom-md instead geist-border-white
        // 'geist-border-white': 'var(--shadow-medium)',
        'focus': 'var(--shadow-focus)',
        '3xl': 'var(--shadow-3xl)',
        // TODO: the names are changed here as well
        'header': 'var(--shadow-header)',
        'header-dark': 'var(--shadow-header-dark)',
        // TODO: replace sm-gray with tailwind styles in the components
        // 'sm-gray': 'var(--shadow-sm-gray)',
      },
      transitionTimingFunction: {
        DEFAULT: 'var(--transition-timing-function-default-ease)'
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
      // TODO change minWidth and maxWidth 164 to custom-10.25rem in the component
      minWidth: {
        'custom-10.25rem': "var(--min-width-custom-41x)"
      },
      maxWidth: {
        'custom-10.25rem': "var(--max-width-custom-41x)",
        '100vw': "var(--max-width-100vw)"
      },
      inset: {
        // TODO: change 1px to px in the components
        // '1px': 'var(--inset-1px)',
        'header-height': 'var(--inset-header-height)'
      },
      zIndex: {
        1: 'var(--z-index-1)',
        2000: 'var(--z-index-2000)'
      },
      backdropSaturate: {
        180: 'var(--backdrop-saturate-180)',
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
