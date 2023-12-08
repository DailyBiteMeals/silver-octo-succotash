/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainOrange: "#F15A2D",
      DailybiteRed: "#F23822",
      DailybiteDarkChocolaty: "#542010",
      DailybitePink: "#F22252",
      DailybiteYellow: "#F2A322",
      DailybiteLightChocolaty: "#A63F1F",
      DailybiteGreen: "#86ED59",
      DailybiteDarkCreamy: "#BF6541",
      DailybiteSkyBlue: "#0A9CF2",
      DailybiteDarkBlue: "#020F49",
      white: "#ffffff",
      DailyBiteWhitish: "#EDEDED",
      DailyBiteGray: "#CECECE",
      Black: "#282828",
    },
    extend: {
      fontFamily: {
        ExtraCondensedSemiBold: ["ExtraCondensedSemiBold", "sans-serif"],
        ExtraCondensedBlack: ["ExtraCondensedBlack", "sans-serif"],
        ExtraCondensedBold: ["ExtraCondensedBold", "sans-serif"],
        ExtraCondensedMedium: ["ExtraCondensedMedium", "sans-serif"],
        ExtraCondensedMediumItalic: [
          "ExtraCondensedMediumItalic",
          "sans-serif",
        ],
        ExtraCondensedBlackItalic: ["ExtraCondensedBlackItalic", "sans-serif"],
        InterMedium: ["InterMedium", "sans-serif"],
        InterRegular: ["InterRegular", "sans-serif"],
        InterSemiBold: ["InterSemiBold", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "12xl": "6rem",
        "13xl": "6.5rem",
        "14xl": "7rem",
        "15xl": "7.5rem",
        "16xl": "8rem",
        "20xl": "10rem",
        "21xl": "10.5rem",
        "22xl": "11rem",
        "24xl": "12rem",
        "28xl": "14rem",
        "32xl": "16rem",
        "36xl": "18rem",
        "40xl": "20rem",
        "44xl": "22rem",
        "48xl": "24rem",
        "52xl": "26rem",
        "56xl": "28rem",
      },
      lineHeight: {
        loose: "7rem",
        tight: "3rem",
        normal: "4rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
        22: "5.5rem",
        23: "5.75rem",
        24: "6rem",
        25: "6.25rem",
        26: "6.5rem",
        27: "6.75rem",
        10: "2.5rem",
        9: "2.25rem",
        8: "2rem",
        7: "1.75rem",
        6: "1.5rem",
        5: "1.25rem",
        4: "1rem",
        3: "0.75rem",
        2: "0.5rem",
        1: "0.25rem",
      },
      columns: {
        "4xs": "14rem",
        "3xs": "18rem",
        "2xs": "22rem",
        xs: "26rem",
        sm: "32rem",
        md: "42rem",
        lg: "52rem",
      },
      height: {
        60: "15rem",
        70: "17.5rem",
        80: "20rem",
        90: "22.5rem",
        100: "25rem",
        110: "27.5rem",
        120: "30rem",
        128: "32rem",
        130: "32.5rem",
      },
    },
  },
  plugins: [],
};
