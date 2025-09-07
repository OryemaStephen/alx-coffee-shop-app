/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SoraRegular"],
        sora: ["SoraRegular"],
        "sora-medium": ["SoraMedium"],
        "sora-bold": ["SoraBold"],
      },
      colors: {
        brand: {
          brown: "#C67C4E",
          lightGray: "#A2A2A2",
        },
      },
    },
  },
  plugins: [],
};
