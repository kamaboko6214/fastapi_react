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
  theme: {
    extend: {
      animation: {
        "tracking-in-expand": "tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both",
        "tracking-out-contract": "tracking-out-contract 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both"
      },
      keyframes: {
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0"
          },
          "40%": {
            opacity: ".6"
          },
          to: {
            opacity: "1"
          }
        },
        "tracking-out-contract": {
          "0%,50%": {
            opacity: "1"
          },
          to: {
            "letter-spacing": "-.5em",
            opacity: "0"
          }
        }
      },
    }
  },
}

