/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
      },
    },
  },
  plugins: [],
};
