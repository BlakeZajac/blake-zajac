/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontFace: {
        "font-heading": {
          "font-family": "ClashDisplay",
          src: "url('/fonts/ClashDisplay-Variable.ttf')",
        },

        "font-body": {
          "font-family": "Satoshi",
          src: "url('/fonts/Satoshi-Variable.ttf')",
        },
      },

      fontFamily: {
        heading: ["ClashDisplay", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },

      fontSize: {
        xs: [
          "1.125rem",
          {
            fontFamily: "Satoshi",
            lineHeight: "1.2em",
            fontWeight: "500",
            letterSpacing: "-0.01em",
          },
        ],

        sm: [
          "1.25rem",
          {
            fontFamily: "Satoshi",
            lineHeight: "1.2em",
            fontWeight: "500",
            letterSpacing: "-0.01em",
          },
        ],

        lg: [
          "3.75rem",
          {
            fontFamily: "ClashDisplay",
            lineHeight: "1em",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],

        xl: [
          "5.625rem",
          {
            fontFamily: "ClashDisplay",
            lineHeight: "1em",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
      },

      colors: {
        "bg-light": "#F1F1F0",
        "bg-dark": "#0F0F0F",

        black: {
          DEFAULT: "#000000",
          50: "#FCFCFC",
          100: "#EEEEEE",
          200: "#D2D2D2",
          300: "#B6B6B6",
          400: "#9A9A9A",
          500: "#7E7E7E",
          600: "#626262",
          700: "#464646",
          800: "#2A2A2A",
          900: "#0E0E0E",
          950: "#000000",
        },

        spotify: {
          DEFAULT: "#1ED760",
          50: "#E0FBE9",
          100: "#D5F9E2",
          200: "#BEF6D2",
          300: "#A8F3C3",
          400: "#92F0B3",
          500: "#7BEDA4",
          600: "#65E994",
          700: "#4EE685",
          800: "#38E375",
          900: "#22E066",
          950: "#1ED760",
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
