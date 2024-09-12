/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      screen: "100dvh", // изменяем высоту экрана
      colors: {
        logoColor: "#101010",
        accentColor: "#ffa542",
        accentColor2: " #ffce7f",
        textTitle: "#838383",
        bgColor: " #eaeaea",
        titleColor: "#1c1c27",
        textFooterColor: "#000",
        textGray: "#aaa",
        trashColor: "#DF6464",
        heartColor: "#FA0F0F",
      },
      boxShadow: {
        shopCardShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
        checkOutShadow: "0 0 20px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
