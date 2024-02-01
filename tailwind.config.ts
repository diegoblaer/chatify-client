import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-gray": "#f2f2f2",
        "light-gray-variant": "#a1a1a1",
        "light-blue": "#0dafe0",
        cyan: "#54c0ec",
        "ice-blue": "#a5dbff",
        "red-error": "#d93c3c",
        "light-purple": "#3f3f56",
        "dark-purple": "#2f2f44",
      },
    },
  },
  plugins: [],
};
export default config;
