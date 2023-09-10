/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            payton: ["Payton One", "system-ui", "sans-serif"],
        },
        fontSize: {
            xsm: "0.857rem",
            sm: "1rem",
            base: "1.143rem",
            xl: "1.286rem",
            "2xl": "1.429rem",
            "3xl": "1.571rem",
            "4xl": "1.786rem",
            "5xl": "2.286rem",
            "6xl": "2.857rem",
        },
        extend: {
            colors: {
                transparent: "transparent",
                textWhite: "#FBFBFB",
                textBlack: "#333333",
                black62: "#818181",
                storm: "#2C3D4F",
                lightStorm: "#34495D",
                storm62: "#7C8792",
                orange: "#EE7738",
                orange72: "#F39D70",
                wetGrass: "#B0DB72",
                hellFire: "#EF2F2A",
                success: "#7A4579",
                navy: "#EAF5E3",
                customGray: "#9E9E9E",
                customGrayLight: "#D9D9D9",
                card: "#6FD2F7",
                cash: "#99DE17",
                all: "#DB6F84",
                online: "#EDD655",
                active: "#DCE944",
                active62: "#EAF28F",
                paid: "#AAB2C1",
                sweetGrass: "#339031",
                placeholder: "#89898A",
            },
        },
    },
    plugins: [],
})
