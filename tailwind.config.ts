import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6600",
          navy: "#001D37",
          cream: "#F4EADE",
          brown: "#A1511E",
          ink: "#2B2B2B",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-arimo)", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(160deg, #F0E6DA 0%, #F3E0C9 35%, #F6C99E 70%, #F6BB85 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
