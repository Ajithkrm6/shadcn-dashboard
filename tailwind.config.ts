import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        joyBackground: "var(--background)",
        joyForeground: "var(--foreground)",
        joyPrimary: "var(--joy-primary)",
        jSecondary: "var(--joy-secondary)",
        success: "var(--joy-success)",
        joyDanger: "var(--joy-danger)",
        joyWarning: "var(--joy-warning)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        body: ["var(--joy-font-family-body)", "sans-serif"],
        display: ["var(--joy-font-family-display)", "serif"],
      },
      fontSize: {
        xs: "var(--joy-font-size-xs)",
        sm: "var(--joy-font-size-sm)",
        md: "var(--joy-font-size-md)",
        lg: "var(--joy-font-size-lg)",
        xl: "var(--joy-font-size-xl)",
      },
      spacing: {
        1: "var(--joy-spacing-1)",
        2: "var(--joy-spacing-2)",
        3: "var(--joy-spacing-3)",
        4: "var(--joy-spacing-4)",
        5: "var(--joy-spacing-5)",
        6: "var(--joy-spacing-6)",
        7: "var(--joy-spacing-7)",
        8: "var(--joy-spacing-8)",
        9: "var(--joy-spacing-9)",
      },
      borderRadius: {
        sm: "var(--joy-radius-sm)",
        md: "var(--joy-radius-md)",
        lg: "var(--joy-radius-lg)",
        xl: "var(--joy-radius-xl)",
      },
      boxShadow: {
        sm: "var(--joy-shadow-sm)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
