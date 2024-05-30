import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'shake-hand':
                    'shakeHand 0.5s 1.5s cubic-bezier(.36,.07,.19,.97);',
            },
            keyframes: {
                shakeHand: {
                    '12.5%': { transform: 'rotate(10deg)' },
                    '37.5%': { transform: 'rotate(-10deg)' },
                    '62.5%': { transform: 'rotate(10deg)' },
                    '87.5%': { transform: 'rotate(-10deg)' },
                },
            },
        },
        screens: {
            '2xl': { max: '1535px' },
            // => @media (max-width: 1535px) { ... }

            xl: { max: '1279px' },
            // => @media (max-width: 1279px) { ... }

            lg: { max: '1023px' },
            // => @media (max-width: 1023px) { ... }

            md: { max: '807px' },
            // => @media (max-width: 767px) { ... }

            sm: { max: '639px' },
            // => @media (max-width: 639px) { ... }
        },
    },
    darkMode: 'class',
    plugins: [nextui({ addCommonColors: true })],
};
export default config;
