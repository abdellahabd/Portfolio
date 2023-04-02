/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": `url('/src/assets/herobg.png')`,
      },
    },
  },
  plugins: [],
};

// background-color: #000000;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='45.9' stroke-opacity='0.12' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg transform='scale(0.883)' style='transform-origin:center'%3E%3Cg transform='rotate(19.8 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23000011' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23000022' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23000033' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23000044' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23000055' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23000066' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23000077' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23000088' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23000099' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%230000aa' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%230000bb' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%230000cc' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%230000dd' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%230000ee' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%2300F' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;
