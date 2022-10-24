/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6b75e0",
        
"secondary": "#ba0091",
        
"accent": "#0c0760",
        
"neutral": "#251F38",
        
"base-100": "#EFF0F6",
        
"info": "#58A1D5",
        
"success": "#7CDED0",
        
"warning": "#EFC44D",
        
"error": "#ED5084",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
