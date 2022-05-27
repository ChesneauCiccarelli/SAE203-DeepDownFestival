module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'responsive': 'grid-cols-[repeat(auto-fit,300px)]',
      },
      "colors": {
        "sombre": "#1d1d1b",
        "blanc": "#ffffff",
        "accent": "#ff0000"
      },
      "fontFamily": {
        "cairo": "Cairo",
        "210": "supersize-bk",
        "210-d": "supersize-bk-d",
        "210-box": "supersize-bk-box",
      },
    },

  },
  plugins: [],
}
