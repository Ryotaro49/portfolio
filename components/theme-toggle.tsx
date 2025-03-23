"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      size="md"
      variant="ghost"
      aria-label={
        colorMode === "light"
          ? "ダークモードに切り替え"
          : "ライトモードに切り替え"
      }
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
}
