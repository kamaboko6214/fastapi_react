/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        // 'カラー名': 'カラーコード'
        'button-blue': '#32B5FF',
      },
    },
  },
  plugins: [],
}

