export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1200px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        custom: "58.09px",
      },
    },
  },
  plugins: [],
};
