import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js.ts,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderWidth: {
        "1.5": "1.5px",
      },
      colors: {
        primary: "#1E2428", // Title color
        secondary: "#454545", // Body color
        baseColor: "#E31E27", // Primary
        baseDark: "#cc1b23",
        accent: "#FFBD00",
        error: "#FF3333",
        pinkPrimary: "#FF6183",

        success: {
          "50": "#D4FFE9",
          "500": "#2ABC73",
        },

        gray: {
          "50": "#F5F5F5",
          "150": "#E2E2E2",
          "300": "#C5C5C5",
          "400": "#B1B1B1",
          "500": "#9E9E9E",
          custom: "#F9F9F9",
        },

        neutral: {
          "200": "#ADB3B7",
        },

        red: {
          "50": "#FCE9E9", // Primary Light
          "500": "#E31E27", // Primary
        },

        warning: {
          "50": "#FFF5E9",
          "500": "#FFBD00",
        },

        // ...
      },

      boxShadow: {
        button: "0px 15px 50px 0px rgba(175, 176, 185, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
