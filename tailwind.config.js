/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                tones: {
                    50: '#d8d5fb',
                    100: '#e8e7fd',
                    200: '#d8d5fb',
                    300: '#b7b1f7',
                    400: '#a69ff5',
                    500: '#958ef4',
                    600: '#857cf2',
                    700: '#746af0',
                    800: '#6358ee',
                    900: '#5346ec',
                }
            }


        },


    },
    plugins: [
        require('flowbite/plugin'),

    ],
}