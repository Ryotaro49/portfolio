"use client";

import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaBriefcase } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Box py={20}>
      <Container maxW="container.xl">
        {/* サイト開発実績セクション */}
        <VStack align="flex-start" gap={8} mb={16}>
          <HStack gap={2}>
            <Box as={FaBriefcase} color="brand.500" />
            <Heading as="h2" size="xl">
              開発実績
            </Heading>
          </HStack>
          <Text fontSize="lg" color="brand.800">
            Webサイトやアプリの開発実績をご紹介します。
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            <ProjectCard
              title="e ラーニングアプリ"
              description="LINE連携可能なオンラインで学習できる Web アプリ。"
              skills={["Next.js", "TypeScript", "Tailwind CSS", "LINE API"]}
              image="/neko.jpg"
              url=""
            />
            <ProjectCard
              title="英単語アプリ"
              description="単語を簡単に登録しテストできる Web アプリ。"
              skills={["Next.js", "TypeScript", "TiDB", "Material UI"]}
              image="/makitan.png"
              url="https://www.makitan.jp"
            />
            <ProjectCard
              title="ポートフォリオサイト"
              description="スキルとプロジェクトを紹介するポートフォリオサイト。"
              skills={["Next.js", "TypeScript", "Chakra UI"]}
              image="/portfolio.png"
              url="https://ryotaro-makita.vercel.app/"
            />
          </SimpleGrid>
        </VStack>

        {/* その他のサービスセクション */}
        <VStack align="flex-start" gap={8}>
          <HStack gap={2}>
            <Box as={FaBriefcase} color="brand.500" />
            <Heading as="h2" size="xl">
              その他のサービス
            </Heading>
          </HStack>
          <Text fontSize="lg" color="brand.800">
            Web開発以外にも、AIや動画編集などのノウハウを活かして活動しています。
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            <ProjectCard
              title="ココナラでの講座販売"
              description="AIを使った副業の方法などを教えています。"
              skills={["CapCut", "ChatGPT", "各種AIツール", "Canva"]}
              image="/coconara.png"
              url="https://coconala.com/users/5220259"
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
