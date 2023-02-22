module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
        "3xlDesk":
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        grey: {
          mobBack: "#E6E9F2",
          mobCard: "#EFF0F5",
          sec: "#878D9D",
          dark: "#3A4562",
          back: "#a1b1db51",
          pag: "#55699E",
          pagN: "#38415d9a",
          pagBoard: "#f9fafd",
          text: "#38415dd1",
        },
      },
      fontFamily: {
        proxi: ["Proxima Nova", "sans-serif"],
        robot: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
