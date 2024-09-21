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
        "tech-stack-bg": "url('https://i.ibb.co.com/9bBMgsX/Background.png')",
        'choose-us-bg': "url('https://i.ibb.co.com/Bq50dx0/chooseusbg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
