module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ['black'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
