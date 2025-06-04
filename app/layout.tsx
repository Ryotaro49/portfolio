"use client";

import type React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../lib/theme";
import { ColorModeProvider } from "@/components/ui/color-mode";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider value={system}>
          <ColorModeProvider attribute="class" disableTransitionOnChange>
            {children}
          </ColorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
