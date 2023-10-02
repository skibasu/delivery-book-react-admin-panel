/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        fontFamily: {
            payton: ["Payton One", "system-ui", "sans-serif"],
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1366px",
            // => @media (min-width: 1024px) { ... }

            xl: "1440px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1920px",
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        borderRadius: {
            none: "0",
            sm: "4px",
            md: "6px",
            lg: "8px",
            full: "100%",
            large: "12px",
        },
        fontSize: {
            mikro: "8px",
            "3sm": "10px",
            "2sm": "12px",
            sm: "14px",
            base: "16px",
            lg: "18px",
            xl: "20px",
            h1: "40px",
            h2: "32px",
            h3: "25px",
            h4: "22px",
            h5: "20px",
            h6: "18px",
        },

        extend: {
            height: {
                inputSpacer: "16px",
                element: "38px",
                elementSm: "28px",
            },
            minHeight: {
                inputSpacer: "16px",
                element: "38px",
                elementSm: "28px",
            },
            spacing: {
                "0y": "3px",
                "1x": "4px",
                "1y": "5px",
                "2x": "6px",
                "2y": "7px",
                "3x": "8px",
                "4x": "10px",
                "5x": "12px",
                "6y": "15px",
                "6x": "16px",
                "7x": "20px",
                "7.1x": "24px",
                "8x": "28px",
                "9x": "48px",
                inputSpacer: "16px",
                errorSpacer: "32px",
            },
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
                successed: "#7A4579",
                successedH: "#632062",
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
                selectedInput: "#F8FAE1",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
