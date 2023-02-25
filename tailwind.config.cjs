/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1536px',
        },
        extend: {
            keyframes: {
                errorShrink: {
                    '0%': { transform: 'translateX(-50%) scaleX(1)' },
                    '100%': { transform: 'translateX(-50%) scaleX(0)' },
                },
                errorSlide: {
                    '0%': { transform: 'translateX(-50%) translateY(500%)' },
                    '100%': { transform: 'translateX(-50%) translateY(0)' },
                },
            },
            animation: {
                errorShrink: 'errorShrink 5s 1s linear 1 forwards',
                errorSlide: 'errorSlide 1s ease-in-out 1 forwards, errorSlide 1s 6s ease-in-out 1 reverse forwards',
            },
        },
    },
    plugins: [],
};
