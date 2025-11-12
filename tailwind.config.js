/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3586FF",
        dark: "#0B0C10",
        light: "#E4E4E7",
        muted: "#A1A1AA",
        surface: "#15161A",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(53,134,255,0.25)",
      },
    },
  },
  plugins: [],
};
