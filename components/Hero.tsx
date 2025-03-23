"use client";

import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack align="flex-start" gap={6}>
        <VStack align="flex-start" gap={2} maxW="container.md">
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            こんにちは、
            <Text as="span" color="teal.500">
              Ryotaro Makita
            </Text>
            です
          </Heading>
          <Heading as="h2" size="lg">
            Web アプリケーション開発者
          </Heading>
          <Text fontSize="lg" color="gray.500">
            最新の技術を使用してレスポンシブな、Webアプリケーションを構築しています。
          </Text>
        </VStack>
        <HStack gap={4}>
          <Button asChild colorScheme="teal">
            <a href="#contact">お問い合わせ</a>
          </Button>
          <Button asChild colorScheme="teal">
            <a href="#projects">プロジェクトを見る</a>
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
}
