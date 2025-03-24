"use client";

import {
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW="container.xl">
      <HStack align="center" gap={6} maxW="container.md">
        {/* テキスト部分 */}
        <VStack align="flex-start" gap={2}>
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            初めまして!
            <Text as="span" color="blue.500" px={2}>
              Ryotaro Makita
            </Text>
            です
          </Heading>
          <Heading as="h2" size="lg">
            Web アプリケーション開発者
          </Heading>
          <Text fontSize="lg" color="gray.500">
            最新の技術を使用してレスポンシブな、Web
            アプリケーションを構築しています。
          </Text>
          <HStack gap={4}>
            <Button asChild bgColor={"blue.500"}>
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button asChild color={"blue.500"} variant={"outline"}>
              <a href="#projects">プロジェクトを見る</a>
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
