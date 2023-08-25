/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "base-dark-purp": "#4C3A51",
        "base-light-purp": "#774360",
        "base-pink": "#B25068",
        "base-yellow": "#E7AB79",
        "base-dark-navy": "#16213E",
        "base-light-navy": "#0F3460",
        "base-purple": "#533483",
        "base-magenta": "#E94560",
      },
    },
  },
  plugins: [],
};
