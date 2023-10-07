import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      colors: {
        primary: {
          DEFAULT: "#6200EE",
          dark: "#6401EC",
          foregroundL: "#FFFFFF",
          foregroundD: "#000000",
        },
        primaryVariant: {
          DEFAULT: "#3700B3",
          dark: "#3700B3",
          foregroundL: "#FFFFFF",
          foregroundD: "#000000",
        },
        accent: {
          DEFAULT: "#E8EDF1",
          dark: "#3C4043",
          hover: "#2C2C2C",
          foregroundD: "#FFFFFF",
          foregroundL: "#000000",
        },
        secondary: {
          DEFAULT: "#03DAC6",
          dark: "#03DAC6",
          foregroundL: "#000000",
          foregroundD: "#000000",
        },

        secondaryVariant: {
          DEFAULT: "#018786",
          foregroundL: "#000000",
          foregroundD: "#000000",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#121212",
          darkHover: "#1B1B1B",
          foregroundL: "#000000",
          foregroundD: "#FFFFFF",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#121212",
          foregroundL: "#000000",
          foregroundD: "#FFFFFF",
        },
        error: {
          DEFAULT: "#B00020",
          dark: "#CF6679",
          foregroundL: "#FFFFFF",
          foregroundD: "#000000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "400px": "400px",
        "640px": "640px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
