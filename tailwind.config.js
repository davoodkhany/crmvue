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
                Neutral: {
                    150: '#EEEEEE',
                    350: '#E4E5E5'
                },
                Yellow: {
                    500: '#EAB543'
                },
                Cyan: {
                    150: '#BAE5E5'
                },
            }


        },


    },
    plugins: [
        require('flowbite/plugin'),

    ],
}