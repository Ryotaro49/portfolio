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
    <Box id="projects" py={20}>
      <Container maxW="container.xl">
        <VStack align="flex-start" gap={8}>
          <HStack gap={2}>
            <Box as={FaBriefcase} color="blue.500" />
            <Heading as="h2" size="xl">
              プロジェクト
            </Heading>
          </HStack>
          <Text fontSize="lg" color="gray.500">
            最近のプロジェクトをご覧ください：
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} w="full">
            <ProjectCard
              title="e ラーニングアプリ"
              description="LINE連携可能なオンラインで学習できる Web アプリ。"
              skills={["Next.js", "TypeScript", "Tailwind CSS", "LINE API"]}
              image="/neko.jpg?height=200&width=300"
              url=""
            />
            <ProjectCard
              title="英単語アプリ"
              description="単語を簡単に登録しテストできる Web アプリ。"
              skills={["Next.js", "TypeScript", "TiDB", "Material UI"]}
              image="/neko.jpg?height=200&width=300"
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
      </Container>
    </Box>
  );
}
