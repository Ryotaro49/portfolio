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
            color="brand.800"
            textAlign={{ base: "center", md: "left" }}
          >
            © {new Date().getFullYear()} Ryotaro Makita. All rights reserved.
          </Text>
          <HStack gap={4}>
            <Link
              href="https://github.com/Ryotaro49"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/凌太郎-巻田-80a781325"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link href="mailto:m.ryotaro049@gmail.com">
              <FaEnvelope />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
