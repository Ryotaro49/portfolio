import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#f2f6f8" },
          100: { value: "#dde6ed" },
          200: { value: "#b4c9d8" },
          300: { value: "#8dacc4" },
          400: { value: "#648ead" },
          500: { value: "#2c3e50" }, // メイン：ネイビーブルー
          600: { value: "#233240" },
          700: { value: "#1a2630" },
          800: { value: "#111a20" },
          900: { value: "#080d10" },
          gold: { value: "#cfa96e" }, // アクセント用ゴールド
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
