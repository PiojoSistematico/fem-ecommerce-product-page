/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#ff7d1a",
        "primary-2": "#ffede0",
        "neutral-1": "#1d2025",
        "neutral-2": "#68707d",
        "neutral-3": "#b6bcc8",
        "neutral-4": "#f7f8fd",
        "neutral-5": "#ffffff",
        "neutral-6": "#000000",
      },
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
