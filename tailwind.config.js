/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6134d3",
        
"secondary": "#d848db",
        
"accent": "#1eea47",
        
"neutral": "#1B1F28",
        
"base-100": "#F7F7F8",
        
"info": "#A0DEF8",
        
"success": "#69E2D4",
        
"warning": "#D6740A",
        
"error": "#E96449",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

