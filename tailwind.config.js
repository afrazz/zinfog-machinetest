/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#1F6CAB", // primary color
        dark: "#0a4b80", // darker shade for hover
        light: "#E4FBFB",
      },
      secondary: "#00D3EB",
      dark: "#505050",
      gray: {
        DEFAULT: "#9E9A9A",
        light: "#C4C4C4",
      },
      white: "#fff",
      danger: {
        DEFAULT: "#F46C09",
        dark: "#FA0000",
      },

      tags: {
        sucess: "#89FFAA",
        partial: "#E7F880",
        dropped: "#F2A38A",
      },

      // ...
    },
  },
  plugins: [],
};
