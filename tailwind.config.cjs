/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-100": "#020A13",
        "black-70": "#23292F",
        "dark-gray": "#8892B0",
        "light-gray": "#C6D1F1",
        "gray-100": "#767991",
        "gray-50": "#E6F1FF",
        "social-gray": "#B4BFDE",
        "purple-secondary": "#804680",
        "purple-primary": "#FF8BFF",
        primary: "#7DFDFE",
        secondary: "#017e7f",
      },
      fontFamily: {
        spacemono: ["Space Mono", "san-serif"],
        manrope: ["Manrope", "san-serif"],
      },
    },
    minWidth: {
      max: "100%",
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  plugins: [],
};
