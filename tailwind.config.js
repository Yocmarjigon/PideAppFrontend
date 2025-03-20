/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend:{
      colors:{
        orange_primary:"#FF4E2E",
        yellow_primary: "#FFD700"

      }
    }

  },
  plugins: [PrimeUI],
};
