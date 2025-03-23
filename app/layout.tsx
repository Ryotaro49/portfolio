"use client";

import type React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../lib/theme";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider value={system}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
