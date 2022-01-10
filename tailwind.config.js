// const plugin = require("tailwindcss/plugin");
// import plugin from "./src/components/font/Poppins/"

module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    keyframes: {
      balloons: {
        "0%,50%,100%": { transform: "rotate(45deg)" },
        "25%": { transform: "rotate(45deg) translate(5px,-10px)" },
        "75%": { transform: "rotate(45deg) translate(5px,10px)" },
      },
    },
    animation: {
      balloons1: " balloons 5s linear infinite",
      balloons2: " balloons 8s linear infinite",
    },
    fontFamily: {
      poppins_bold: ["poppins_bold", "sans-serif"],
      poppins_regular: ["poppins_regular", "sans-serif"],
      // regularsans: ["poppins_regular", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      tabWF: { max: "767px" },
      mobWF: { max: "575px" },
      deskWF: { min: "992px" },
    },
    boxShadow: {
      decorationblock: "0 0 0 60px hsl(0deg 0% 100% / 10%)",
    },
    backgroundImage: {
      loginIntroduce: "linear-gradient(90deg,#3f77d1 25%,#508def)",
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "black",
      grey: {
        500: "#666",
      },
      blue: {
        440: "#759dd9",
        490: "#5f95eb",
        510: "#508def",
        530: "#3f77d1",
        580: "#2a68cd",
        600: "#216fed",
        660: "#0e55c9",
      },
      transparentLight: "rgb(255 255 255 / 20%)",
    },
    extends: {},
  },
  plugins: [
    // plugin(function ({ addBase }) {
    //   addBase({
    //     "@font-face": {
    //       fontFamily: "poppins_regular",
    //       src: 'url("../font/Poppins/Poppins-Regular.ttf")',
    //     },
    //   });
    // }),
    // plugin(function ({ addBase }) {
    //   addBase({
    //     "@font-face": {
    //       fontFamily: "poppins_bold",
    //       src: 'url("../font/Poppins/Poppins-Bold.ttf") format(ttf)',
    //     },
    //   });
    // }),
  ],
};
