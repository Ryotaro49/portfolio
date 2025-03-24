"use client";

import { Box, Container, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useColorModeValue } from "../components/ui/color-mode";

export default function Header() {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={40}
      borderBottom="1px"
      borderColor={borderColor}
      bg={useColorModeValue("white", "gray.800")}
      backdropFilter="blur(10px)"
      boxShadow="xs"
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <NextLink href="/" passHref>
            <Link fontWeight="bold" fontSize="lg">
              Ryotaro Makita
            </Link>
          </NextLink>
          <HStack gap={6}>
            <NextLink href="#about" passHref>
              <Link fontSize="sm">自己紹介</Link>
            </NextLink>
            <NextLink href="#skills" passHref>
              <Link fontSize="sm">スキル</Link>
            </NextLink>
            <NextLink href="#projects" passHref>
              <Link fontSize="sm">プロジェクト</Link>
            </NextLink>
            <NextLink href="#contact" passHref>
              <Link fontSize="sm">お問い合わせ</Link>
            </NextLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
