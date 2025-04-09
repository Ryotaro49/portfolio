"use client";

import { Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import AnimatedButton from "./ui/animated-button";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container maxW="container.xl">
      <HStack align="center" gap={6} maxW="container.md">
        {/* テキスト部分 */}
        <VStack align="flex-start" gap={2}>
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            初めまして!
            <Text as="span" color="brand.600" px={2}>
              Ryotaro Makita
            </Text>
            です
          </Heading>
          <Heading as="h2" size="lg">
            Web アプリケーション開発者
          </Heading>
          <Text fontSize="lg" color="brand.800">
            レスポンシブな Web
            アプリケーションを構築したり、ホームページの制作などを行っています。
          </Text>
          <HStack gap={4}>
            <AnimatedButton onClick={() => handleScroll("contact")}>
              お問い合わせ
            </AnimatedButton>
            <AnimatedButton
              bgColor={"brand.500"}
              color="white"
              onClick={() => handleScroll("projects")}
            >
              プロジェクトを見る
            </AnimatedButton>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
