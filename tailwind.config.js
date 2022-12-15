const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            visibility: ["group-hover"],
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#00D87F",
                secondary: "#00A162",
                accent: "#001F26",
                accent2: "#F3F4F5",
                gray: "#ACC6C6",
            },
            screens: {
                laptopLg: "1160px",
                laptopXl: "1360px",
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
