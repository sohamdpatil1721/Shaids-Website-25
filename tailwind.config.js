/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      GunterzRegular: ["Gunterz-Regular", ...fontFamily.sans],
      NordBold: ["Nord-Bold", ...fontFamily.sans],
      NordRegular: ["Nord-Regular", ...fontFamily.sans],
      NordMedium: ["Nord-Medium", ...fontFamily.sans],
      Outfit: ["Outfit", ...fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        bgGradient: "linear-gradient(71.8deg, #11163E 3.68%, #000000 117.9%)",
        buttonGradient:
          "linear-gradient(180deg, #8133F1 0%, #5C37B6 34.5%, rgba(68, 32, 134, 0.85) 71.5%, #341068 89.5%)",
      },
    },
    animation: {
      "star-movement-bottom": "star-movement-bottom linear infinite alternate",
      "star-movement-top": "star-movement-top linear infinite alternate",
    },
    keyframes: {
      "star-movement-bottom": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
      },
      "star-movement-top": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(100%, 0%)", opacity: "0" },
      },
    },
  },

  // plugins: [require("@tailwindcss/line-clamp")],
};
