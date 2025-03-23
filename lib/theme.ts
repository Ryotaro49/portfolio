import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#E6FFFA" },
          100: { value: "#B2F5EA" },
          200: { value: "#81E6D9" },
          300: { value: "#4FD1C5" },
          400: { value: "#38B2AC" },
          500: { value: "#319795" },
          600: { value: "#2C7A7B" },
          700: { value: "#285E61" },
          800: { value: "#234E52" },
          900: { value: "#1D4044" },
        },
      },
      fonts: {
        heading: { value: "var(--font-inter), sans-serif" },
        body: { value: "var(--font-inter), sans-serif" },
      },
    },
    recipes: {
      Button: {
        base: {
          fontWeight: "medium",
        },
      },
      Heading: {
        base: {
          fontWeight: "bold",
        },
      },
    },
  },
});
