"use client";

import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" py={6}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text
            fontSize="sm"
            color="gray.500"
            textAlign={{ base: "center", md: "left" }}
          >
            © {new Date().getFullYear()} Ryotaro Makita. All rights reserved.
          </Text>
          <HStack gap={4}>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link href="mailto:your.email@example.com">
              <FaEnvelope />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
