"use client";

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" py={6}>
      <Container maxW="container.xl">
        <Text fontSize="sm" color="brand.800" textAlign="center">
          © {new Date().getFullYear()} Ryotaro Makita. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
