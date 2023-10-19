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
      animation: {
        shake: "shake 0.5s ease-in-out",
        "vibrate-slow":
          "vibrate-slow 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) 1",
      },
      keyframes: {
        changeBackgroundColor: {
          "0%, 100%": {
            opacity: "1",
          },
          "16.67%": {
            opacity: "0.9",
          },
          "33.33%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "0.6",
          },
          "66.67%": {
            opacity: "0.5",
          },
          "83.33%": {
            opacity: "0.4",
          },
        },
        shake: {
          "0%": {
            transform: "translateX(0)",
          },
          "20%": {
            transform: "translateX(-2px)",
          },
          "40%": {
            transform: "translateX(2px)",
          },
          "60%": {
            transform: "translateX(-2px)",
          },
          "80%": {
            transform: "translateX(2px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "vibrate-slow": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-5px)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(5px)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "550px": "550px",
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
