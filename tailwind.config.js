/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          100: "#FFFFFE",
          900: "#1FC55E",
          200: "#86EEAB",
        },
      },
      screens: {
        'xs': "475px",
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
      
        'md': '768px',
        // => @media (min-width: 768px) { ... }
      
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};

