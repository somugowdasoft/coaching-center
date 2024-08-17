/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundcolor:{
        "customgradient":'linear-gradient(to bottom, #D9ECFF 0%, #D9ECFF 100%)',
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)', // Adjust shadow size and opacity as needed
      },
    },
  },
  plugins: [],
}

