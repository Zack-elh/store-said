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
                // Theme tokens
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                // Imperial Theme
                obsidian: '#0A0A0B',
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#E5C158',
                    dark: '#C9A961',
                },
                'sahara-gold': '#C5A059',
                linen: '#E5D9C5',
                smoke: '#1A1A1A',
                stone: '#D0CFD3',

                // Moroccan earth tones
                'moroccan': {
                    terracotta: '#E07A5F',
                    sand: '#F4E8C1',
                    burgundy: '#81283C',
                    olive: '#8B7355',
                    cream: '#F8F4E8',
                },
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
                'gradient-shift': 'gradientShift 8s ease infinite',
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
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-luxury': 'linear-gradient(135deg, #0A0A0B 0%, #1A1A1A 100%)',
                'luxury-animated': 'linear-gradient(270deg, #FFFFFF, #F5F5F7, #E5E5E5, #F5F5F7, #FFFFFF)',
            },
        },
    },
    plugins: [],
};

export default config;
