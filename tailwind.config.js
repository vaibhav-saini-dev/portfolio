/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        // I like this one
        // dark: "#9381ff",
        // light: "#f8f7ff",
        // primary: "#b8b8ff",
        // primaryDark: "#ffd8be",

        // I like this one
        // dark: "#861657",
        // light: "#ddfff7",
        // primary: "#93e1d8",
        // primaryDark: "#ffa69e",

        // Light & Dark Blue Themed
        // dark: "#0f172a",
        // light: "#f8fafc",
        // primary: "#7c9cff",
        // primaryDark: "#c4b5fd"

        // Light & Dark Pink Themed
        // dark: "#1a1a1a",
        // light: "#fff1f2",
        // primary: "#fb7185",
        // primaryDark: "#f43f5e"

        // Light & Dark Blue Themed
        // dark: "#0b0f19",
        // light: "#f1f5f9",
        // primary: "#38bdf8",
        // primaryDark: "#818cf8"

        // I really like this one
        dark: "#1e293b",
        light: "#e2e8f0",
        primary: "#818cf8",
        primaryDark: "#c4b5fd",
        // backgroundDark: "#1e293",
        // backgroundLight: "#e2e8f0",
        // surfaceDark: "#273449",
        // surfaceLight: "#cbd5e1",
        // textPrimaryDark: "#e2e8f0",
        // textPrimaryLight: "#1e293b",
        // textSecondaryLight: "#94a3b8",
        // textSecondaryDark: "#475569",
        // accent: "#818cf8",
        // accentSoft: "#c7d2fe",
        // borderDark: "#334155",
        // borderLight: "#94a3b8",

        // I really like this one
        // Light & Dark Purple Themed
        // dark: "#13111c",
        // light: "#e9e7ff",
        // primary: "#8b5cf6",
        // primaryDark: "#a78bfa"

        // I really like this one
        // Light & Dark Pink Themed
        // dark: "#2a1a1f",
        // light: "#fde8e8",
        // primary: "#fb7185",
        // primaryDark: "#fda4af"

        // I really like this one
        // Light & Dark Blue Themed
        // dark: "#0f1e25",
        // light: "#dbeafe",
        // primary: "#38bdf8",
        // primaryDark: "#67e8f9"
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 4px,#1b1b1b 40px)",
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
      keyframes: {
        blink: {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        blink: "blink 0.8s infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },

  },
  plugins: [],
}