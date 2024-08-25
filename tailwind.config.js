import { fontFamily } from "tailwindcss/defaultTheme";

import {
  white, gray, black, blue,
  green, amber, red
} from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "40rem",
      md: "48rem",
      lg: "64rem",
      xl: "80rem"
    },
    fontFamily: {
      sans: ["var(--font-poppins)", ...fontFamily.sans],
      serif: ["var(--font-montserrat)", ...fontFamily.serif],
      mono: ["var(--font-firaCode)", ...fontFamily.mono]
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: white,
      gray: gray,
      black: black,
      foreground: {
        light: "#000000",
        dark: "#FFFFFF",
      },
      surface: {
        light: "#FFFFFF",
        dark: "#182029",
      },
      background: {
        light: "#F9FAFB",
        dark: "#0e151a",
      },
      primary: {
        DEFAULT: blue[600],
        100: blue[100],
        200: blue[200],
        300: blue[300],
        400: blue[400],
        500: blue[500],
        600: blue[600],
        700: blue[700],
        800: blue[800],
        900: blue[900],
        950: blue[950]
      },
      secondary: {
        DEFAULT: gray[900],
        100: gray[100],
        200: gray[200],
        300: gray[300],
        400: gray[400],
        500: gray[500],
        600: gray[600],
        700: gray[700],
        800: gray[800],
        900: gray[900],
        950: gray[950]
      },
      info: {
        DEFAULT: blue[400],
        100: blue[100],
        200: blue[200],
        300: blue[300],
        400: blue[400],
        500: blue[500],
        600: blue[600],
        700: blue[700],
        800: blue[800],
        900: blue[900],
        950: blue[950]
      },
      success: {
        DEFAULT: green[400],
        100: green[100],
        200: green[200],
        300: green[300],
        400: green[400],
        500: green[500],
        600: green[600],
        700: green[700],
        800: green[800],
        900: green[900],
        950: green[950]
      },
      warning: {
        DEFAULT: amber[400],
        100: amber[100],
        200: amber[200],
        300: amber[300],
        400: amber[400],
        500: amber[500],
        600: amber[600],
        700: amber[700],
        800: amber[800],
        900: amber[900],
        950: amber[950]

      },
      error: {
        DEFAULT: red[600],
        100: red[100],
        200: red[200],
        300: red[300],
        400: red[400],
        500: red[500],
        600: red[600],
        700: red[700],
        800: red[800],
        900: red[900],
        950: red[950]
      },
      google: {
        light: "#3c7ff1"
      },
      facebook: {
        light: "#0165e1"
      },
      whatsapp: {
        light: "#25D366"
      },
      twitter: {
        light: "#000000"
      },
      instagram: {
        light: "#125688"
      },
      pinterest: {
        light: "#cc2127"
      },
      dribbble: {
        light: "#ea4c89"
      },
      behance: {
        light: "#1769ff"
      },
      fiverr: {
        light: "#1dbf73"
      },
    },
    extend: {
      minWidth: {
        screen: ["100dvw"],
      },
      minHeight: {
        screen: ["100dvh"],
      },
      keyframes: {
        "gradient": {
          to: { backgroundPosition: "200% center" }
        },
        "bouncy": {
          "0%": {
            transform: "translateX(0%)",
          },
          "25%": {
            transform: "translateX(-20%)",
          },
          "50%": {
            transform: "translateX(0%)",
          },
          "75%": {
            transform: "translateX(-20%)",
          },
          "100%": {
            transform: "translateX(0%)",
          }
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
      },
      animation: {
        "gradient": "gradient 2s linear infinite",
        "bouncy": "bouncy 0.3s linear",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
