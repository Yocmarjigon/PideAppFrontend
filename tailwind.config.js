/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-main': '#FF4E2E'
      },
      backgroundImage:{
        'top-image': "url('assets/images/imgTop.svg')"
      },
      fontSize:{
         'secundari-font':['13px',{
          fontWeight: '400'
         }],
         'primary-font':['20px',{
          fontWeight: '400'
         }],
         'medium-font':['16px',{
          fontWeight: '400'
         }],
         'main-font':['32px',{
          fontWeight: '400'
         }]
      },
      borderRadius:{
        'small': '3px',
      },
      boxShadow: {
        'bg-main-shadow': '2px 2px 5px #BFBFBF, -2px -2px 5px #BFBFBF '
      }
    },
  },
  plugins: [],
}

