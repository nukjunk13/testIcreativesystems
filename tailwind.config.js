/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mb: "360px",
      // => @media (min-width: 360px) { ... }
      xs: "475px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: "#000000",
      line: "#E5E5E5",
      white: "#ffffff",
      gray: "#605C5C",
      "gray-mid": "#9e9e9e",
      "gray-light": "#E0E0E0",
      disabled: "#C3BEBB",
      default: "#134B8A",
      primary: "#0F1E56",
      secondary: "#C4D3E9",
    },
    fontSize: {
      0: "0rem",
      xs: "0.75rem", // 12px
      sm: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "30px": "1.875rem", // 30px
      "3xl": "2rem", // 32px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      "7xl": "5rem", // 80px
    },
    fontFamily: {
      sans: ["Noto Sans Thai UI", "Noto Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      line: "#E5E5E5",
      black: "#000000",
      white: "#ffffff",
      gray: "#605C5C",
      "gray-mid": "#9e9e9e",
      "gray-light": "#E0E0E0",
      disabled: "#C3BEBB",
      default: "#134B8A",
      primary: "#0F1E56",
      secondary: "#C4D3E9",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      line: "#E5E5E5",
      black: "#000000",
      white: "#ffffff",
      gray: "#605C5C",
      "gray-mid": "#9e9e9e",
      "gray-light": "#E0E0E0",
      disabled: "#C3BEBB",
      default: "#134B8A",
      primary: "#0F1E56",
      secondary: "#C4D3E9",
    }),
    borderWidth: {
      def: "1.5px",
      8: "8px",
      4: "4px",
      base: "1px",
      xs: "0.5px",
      0: "0",
    },

    textColor: (theme) => ({
      ...theme("colors"),
      "white-50": "rgba(255,255,255,0.5)",
    }),
    extend: {
      spacing: {
        wide: "52.333%",
        "136px": "8.5rem",
        "600px": "37.5rem", // 600px –  Deprecated, will be removed
        "555px": "34.688rem", // 555.55px –  Deprecated, will be removed
        "300px": "18.75rem", // 300px –  Deprecated, will be removed
        m15p659: "15.659rem", // 250.55px –  Deprecated, will be removed
        "196px": "12.25rem", // 196px –  Deprecated, will be removed
        m8p875: "8.875rem", // 142px –  Deprecated, will be removed
        "125px": "7.813rem", // 125px –  Deprecated, will be removed
        xxl: "7.5rem", // 120px –  Deprecated, will be removed
        "86.66px": "86.66px", // 86px  –  Deprecated, will be removed
        xl: "5rem", // 80px  –  Deprecated, will be removed
        m4p625: "4.625rem", // 74px  –  Deprecated, will be removed
        m18: "4.5rem", // 72px  –  Deprecated, will be removed
        m17: "4.25rem", // 68px  –  Deprecated, will be removed
        m16: "4rem", // 64px  –  Deprecated, will be removedrun
        m15: "3.75rem", // 60px  –  Deprecated, will be removed
        m14: "3.5rem", // 56px  –  Deprecated, will be removed
        m13: "3.25rem", // 52px  –  Deprecated, will be removed
        m12: "3rem", // 48px  –  Deprecated, will be removed
        lg: "2.5rem", // 40px  –  Deprecated, will be removed
        m2p25: "2.25rem", // 36px  –  Deprecated, will be removed
        m8: "2rem", // 32px  –  Deprecated, will be removed
        m7: "1.75rem", // 28px  –  Deprecated, will be removed
        md: "1.5rem", // 24px  –  Deprecated, will be removed
        m5: "1.25rem", // 20px  –  Deprecated, will be removed
        m1p188: "1.188rem", // 19px  –  Deprecated, will be removed
        m1p125: "1.125rem", // 18px  –  Deprecated, will be removed
        base: "1rem", // 16px  –  Deprecated, will be removed
        sm: "0.75rem", // 12px  –  Deprecated, will be removed
        m2p5: "0.625rem", // 10px  –  Deprecated, will be removed
        xs: "0.5rem", // 8px   –  Deprecated, will be removed
        smd2: "0.375rem", // 6px  –   Deprecated, will be removed
        xxs: "0.25rem", // 4px   –  Deprecated, will be removed
        xxsd2: "0.125rem", // 2px   –  Deprecated, will be removed
        borderWidth: ["hover", "focus"],
      },
      borderRadius: {
        ss: "35px",
        10: "0.625rem",
        3: "0.188rem",
        "2xl": "2rem",
        xl: "1rem",
        xs: "0.5rem",
        md: "1.5rem",
        base: "0.25rem",
        4: "1rem",
        "50px": "3.125rem",
      },
      boxShadow: {
        sm: "0px 2px 2px rgba(0, 0, 0, 0.15)",
        "shadow-light": "0px 10px 10px rgba(0, 0, 0, 0.25)",
        card: "0px 3px 3px rgba(0, 0, 0, 0.25)",
        "card-dashboard": "4px 6px 24px rgba(21, 15, 58, 0.05)",
      },
      backgroundOpacity: {
        2: "0.02",
        10: "0.1",
        20: "0.2",
        95: "0.95",
      },
      width: {
        90: "90px",
        120: "120px",
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      height: {
        17: "65px",
        1456: "1456px",
        "6/7": "85.7142857%",
        120: "120px",
        300: "300px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
});
