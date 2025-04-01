"use client";

import { Button, ButtonProps } from "@chakra-ui/react";

type AnimatedButtonProps = ButtonProps;

export default function AnimatedButton(props: AnimatedButtonProps) {
  return (
    <Button
      bgColor="brand.500"
      color="white"
      transition="all 0.3s ease"
      _hover={{
        bgColor: "brand.600",
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
      _active={{
        transform: "scale(0.98)",
      }}
      {...props}
    />
  );
}
