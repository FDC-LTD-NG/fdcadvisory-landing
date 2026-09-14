import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1D3A", light: "#1E3A6F", soft: "#F0F4FA", ink: "#0A1628", raised: "#0E1E36" },
        gold: { DEFAULT: "#C8A951", light: "#E0C97A", soft: "#FBF7EC" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: { content: "1280px" },
    },
  },
  plugins: [],
};

export default config;
