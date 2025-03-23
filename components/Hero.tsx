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
            こんにちは、
            <Text as="span" color="blue.500">
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
          <HStack gap={4}>
            <Button asChild colorScheme="blue">
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button asChild colorScheme="blue" variant={"outline"}>
              <a href="#projects">プロジェクトを見る</a>
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
