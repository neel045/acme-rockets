/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.1)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.4s ease-in-out forwards",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./build/**/*.{html,js}"],
//   theme: {
//     extend: {
//       screens: {
//         widescreen: { raw: "(min-aspect-ratio: 3/2)" },
//         tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
//       },
//       keyframes: {
//         "open-menu": {
//           "0%": { transform: "scaleY(0)" },
//           "80%": { transform: "scaleY(1.1)" },
//           "100%": { transform: "scaleY(1)" },
//         },
//       },
//       animation: {
//         "open-menu": "open-menu 0.4s ease-in-out forwards",
//       },
//       fontFamily: {
//         fira: ["Fira Sans", "sans-serif"],
//       },
//     },
//   },
//   plugins: [require("prettier-plugin-tailwindcss")],
// };
