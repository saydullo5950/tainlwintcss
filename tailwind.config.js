/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      gap: {
        19: "76px"
      },
      width: {
        103: "413px",
        160: "640px",
        39: "156px"
      },
      space: {
        19: '76px'
      },
      height: {
        58.75: "235px",
        160: "640px",
      },
      padding: {
        13: "52px",
        19: "76px",
        30: "120px"
      },
      maxWidth: {
        168: "672px"
      }
    },
  },
  plugins: [],
}

