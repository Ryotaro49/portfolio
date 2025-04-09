"use client";

import { Box, Container, Flex, HStack, Link, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

export default function Header() {
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      zIndex={40}
      borderBottom="1px"
      borderColor={borderColor}
      bg={useColorModeValue("white", "brand.800")}
      backdropFilter="blur(10px)"
      boxShadow="xs"
      w={"100%"}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" fontWeight="bold" fontSize="lg">
            Ryotaro Makita
          </Link>
          <HStack gap={6}>
            <Link fontSize="sm" onClick={() => handleScroll("about")}>
              自己紹介
            </Link>
            <Link fontSize="sm" onClick={() => handleScroll("projects")}>
              プロジェクト
            </Link>
            <Link fontSize="sm" onClick={() => handleScroll("skills")}>
              スキル
            </Link>
            <Link fontSize="sm" onClick={() => handleScroll("contact")}>
              お問い合わせ
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
