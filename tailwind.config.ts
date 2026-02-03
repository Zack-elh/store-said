import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // New primary colors
                'autumn': '#fae4cf',
                'firmament': '#0a0f23',

                // Gradient colors
                'gradient': {
                    'start': '#fae4cf',
                    'end': '#0a0f23',
                },

                // Dark luxury backgrounds (keeping for transition or secondary use)
                'luxury-black': '#0A0A0A',
                'black-smoke': '#1A1A1A',
                'royal-blue': '#4169E1',
                'luxury-dark': '#1A1A1A',
                'luxury-charcoal': '#2A2A2A',

                // Gold accents
                'gold': {
                    DEFAULT: '#D4AF37',
                    light: '#E5C158',
                    dark: '#C9A961',
                },

                // Moroccan earth tones
                'moroccan': {
                    terracotta: '#E07A5F',
                    sand: '#F4E8C1',
                    burgundy: '#81283C',
                    olive: '#8B7355',
                    cream: '#F8F4E8',
                },

                // New Gray Palette
                'french-gray': '#D0CFD3',
                'davys-gray': '#555555',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-cormorant)', 'var(--font-playfair)', 'serif'],
                display: ['var(--font-cormorant)', 'serif'],
            },
            fontSize: {
                'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'door-open': 'doorOpen 2s cubic-bezier(0.65, 0, 0.35, 1)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                doorOpen: {
                    '0%': { transform: 'scaleX(1)' },
                    '100%': { transform: 'scaleX(0)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-luxury': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
