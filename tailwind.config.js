/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Exo2: '"Exo 2"',
      },
      colors: {
        orange: "#f18721",
        green: "#00453e",
      },
    },
  },
  plugins: [],
};
