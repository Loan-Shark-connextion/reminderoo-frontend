import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'general-sans': ['var(--font-general-sans)']
      },
      fontSize: {
        'heading-1': '2.625rem', // 42px
        'heading-2': '2.375rem', // 36px
        'heading-3': '2.0rem', // 32px
        'heading-4': '1.75rem', // 28px
        'heading-5': '1.5rem', // 24px
        'heading-6': '1.375rem', // 24px
        'body-lg': '1.125rem', // 18px
        'body-md': '1rem', // 16px
        'body-sm': '0.875rem', // 14px
        'body-xs': '0.75rem' // 12px
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          0: '#FFFFFF',
          20: '#E9E9E9',
          30: '#D2D2D2',
          35: '#BCBCBC',
          40: '#A5A5A5',
          45: '#5B5B5B',
          50: '#727272',
          55: '#565656',
          70: '#2B2B2B',
          80: '#1D1D1D',
          90: '#090909'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          '0': '#ECEBFF',
          '20': '#A9A3FF',
          '40': '#4336F3',
          '45': '#3128B5'
        },
        destructive: {
          DEFAULT: '#FFE4E3',
          foreground: '#EB2525',
          hover: '#FEF4F4'
        },
        warning: {
          DEFAULT: '#FFFCE3',
          foreground: '#C4910D'
        },
        success: {
          DEFAULT: '#E3FFED',
          foreground: '#169946'
        },
        muted: {
          DEFAULT: '#F3F3F2',
          foreground: '#7F7C7C'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
